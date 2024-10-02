import { Box, Stack, Heading, Text, Radio, RadioGroup, Button } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchQuiz } from '../redux/action';
import { useSearchParams } from 'react-router-dom';

const Quiz = () => {
    const data = useSelector((state) => state.quiz.data);
    const loading = useSelector((state) => state.quiz.loading);
    const dispatch = useDispatch();
    const [selectedAnswer, setSelectedAnswer] = useState({});
    const [totalScore, setTotalScore] = useState(null); // State to track the total score
    const [pageParams, setPageParams] = useSearchParams();
    const [page, setPage] = useState(1);
    const [score, setScore] = useState(0); // Use state to track score incrementally

    useEffect(() => {
        let updatePage = pageParams.get('page') || page;
        if (updatePage !== page) {
            setPageParams({ page: page });
        }
        let URL = `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-quiz?page=${updatePage}&limit=1`;
        dispatch(fetchQuiz(URL));
    }, [page, dispatch, setPageParams, pageParams]);

    // Handle the selection of answers (store as string to match RadioGroup)
    function handleSelectedAnswer(id, value) {
        setSelectedAnswer((prev) => ({
            ...prev,
            [id]: value, // Store value as a string
        }));
    }

    console.log('Selected Answers:', selectedAnswer); // Ensure this contains answers for all questions

    function handleSubmit() {
        let score = 0;

        // Calculate total score based on selected answers
        data.forEach((el) => {
            const selected = parseInt(selectedAnswer[el.id]);  // Convert selected answer back to number
            const correct = el.correctOptionIndex;  // Get correct index

            console.log(`Question ID: ${el.id}, Selected: "${selected}", Correct: "${correct}"`);

            if (selected === correct) {
                score += 1;
            }
        });

        setTotalScore(score);  // Set final score
    }

    // Render total score after submission
    if (totalScore != null) {
        return <Heading textAlign='center'>Your total Score is: {totalScore}</Heading>;
    }

    function handleNext() {
        if (page < 10) {
            setPage((prev) => prev + 1);
        }
    }

    function handlePrevious() {
        if (page > 1) {
            setPage((prev) => prev - 1);
        }
    }

    function handleSkip() {
        if (page < 10) {
            setPage((prev) => prev + 1);
        }
    }

    if (loading) {
        return <Heading textAlign='center'>Loading...</Heading>;
    }

    return (
        <div>
            <Heading textAlign='center'>Here are your Questions...</Heading>
            {data?.map((el, i) => (
                <Box key={i}>
                    <Text>
                        <span>Q:{el.id}</span>:- {el.question}
                    </Text>
                    <RadioGroup
                        value={selectedAnswer[el.id] || ""}  // Ensure a string is passed, fallback to empty string
                        onChange={(value) => handleSelectedAnswer(el.id, value)}  // Value is always a string
                    >
                        <Stack spacing={6} direction='column'>
                            {el.options.map((option, index) => (
                                <Radio marginLeft={10} key={index} value={index.toString()}>  {/* Ensure value is a string */}
                                    {option}
                                </Radio>
                            ))}
                        </Stack>
                    </RadioGroup>
                </Box>
            ))}

            <Button onClick={handlePrevious} disabled={page === 1}>
                Previous page
            </Button>
            <Button onClick={handleNext} disabled={page === 10}>
                Next Page
            </Button>
            <Button onClick={handleSkip} disabled={page === 10}>
                Skip
            </Button>
            <Button onClick={handleSubmit}>Submit</Button>
        </div>
    );
};

export default Quiz;


