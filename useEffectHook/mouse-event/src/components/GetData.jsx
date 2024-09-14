import React, { useState, useEffect } from 'react'
import axios from 'axios'


export const GetData = () => {

    const [data, setData] = useState([])
    let url = "https://jsonplaceholder.typicode.com/posts"
    const fetchData = () => {
        axios.get(url)
            .then((res) => {
                setData(res.data)
            })
    }
   

    useEffect(()=>{
        fetchData()
        console.log("rendering")
    },[])

    return (
        <div>
            {
                data.map((el, index) => (
                    <div key={index} style={{border: "1px solid red", margin: "10px"}}>
                        <p>Title: {el.title}</p>
                        <p>Body: {el.body}</p>
                    </div>
                ))
            }
        </div>
    )
}


