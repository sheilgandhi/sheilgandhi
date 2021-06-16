import React, { useState, useEffect } from 'react'
import axios from '../api/posts'

function Medium() {
    const [data, setData] = useState([])

    useEffect(() => {
        async function fetchData() {
            const req = await axios.get('/api.json?rss_url=https%3A%2F%2Fsheilgandhi.medium.com%2Ffeed');
            // console.log(req)
            setData(req.data.items);
        }
        fetchData();
    }, [])

    return (
        <div className="flex max-w-full h-screen">
            <h1 className="font-black text-6xl pl-10 pb-2 text-red-500">Medium</h1>
            <p>Check out my posts!</p>
        </div>
    )
}

export default Medium
