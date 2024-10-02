import { Box, Stack, Heading, Input, Text, Radio, RadioGroup, Button } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchQuiz } from '../redux/action';
import { useSearchParams } from 'react-router-dom';

const Quiz = () => {
    const data = useSelector((state) => state.quiz.data)
    const loading = useSelector((state) => state.quiz.loading)
    const dispatch = useDispatch()
    const [selectedAnswer, setSelectedAnswer] = useState({})
    const [totalScore, setTotalScore] = useState(null)
    const [pageParams, setPageParams] = useSearchParams()
    const [page, setPage] = useState(1)
    // console.log(data)

    let updatePage = pageParams.get('page')|| page

  

    useEffect(() => {
        setPageParams({ page: page })
          let URL = `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-quiz?page=${updatePage}&limit=1`
        dispatch(fetchQuiz(URL))
    }, [page, dispatch, setPageParams])

    function handleSelectedAnswer(id, value) {
        setSelectedAnswer((prev) => ({
            ...prev, [id]: value
        }))
    }

    function handleSubmit() {
        let score = 0;
        data.forEach((el, i) => {
            const selected = selectedAnswer[el.id]
            const correct = el.options[el.correctOptionIndex]
            if (selected == correct) {
                score += 1;
            }
        })
        setTotalScore(score)
    }

    if (totalScore != null) {
        return <Heading textAlign='center'>Your total Score is : {totalScore}</Heading>
    }
    function handleNext() {
        if (page < 10) {
            setPage((prev)=>prev+1)
        }
    }
    function handlePrevious() {
        if (page > 1) {
            setPage((prev)=>prev-1)
        }
    }

    function handleSkip(){
        if(page<10){
            setPage(page+1)
        }
    }

    if(loading){
        return <Heading textAlign='center'>Loading...</Heading>
    }
    // console.log(selectedAnswer)
    return (
        <div>
            <Heading textAlign='center'>Here is your Questions...</Heading>
            {
                data?.map((el, i) => (
                    <Box key={i}>
                        <Text><span>Q:{el.id}</span>:- {el.question}</Text>
                        <RadioGroup
                            value={selectedAnswer[el.id]}
                            onChange={(value) => handleSelectedAnswer(el.id, value)}
                        >
                            <Stack spacing={6} direction='column'>
                                {
                                    el.options.map((option, index) => (
                                        <Radio marginLeft={10} key={index} value={option}>{option}</Radio>
                                    ))
                                }
                            </Stack>
                        </RadioGroup>

                    </Box>
                ))
            }

            <Button onClick={handlePrevious} disabled={page == 1}>Previous page</Button>
            <Button onClick={handleNext} disabled={page == 10}>Next Page</Button>
            <Button onClick={handleSkip} disabled={page==10}>Skip</Button>
            <Button onClick={handleSubmit}>Submit</Button>

        </div>
    );
}

export default Quiz;
