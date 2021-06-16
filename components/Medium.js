import Image from 'next/image';
import React, { useState, useEffect } from 'react'
import axios from '../api/posts'
import MediumCard from './MediumCard';

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

    function hasHTML(str) {
        if ((str===null) || (str===''))
            return false;
        else
            str = str.toString();
            str = str.replace( /(<([^>]+)>)/ig, '');
            return str;    
    }

    return (
        <div className="flex flex-col max-w-full h-screen">
            <div className="bg-gray-200 h-4/6 p-8">
            <h1 className="font-black text-6xl pl-10 pb-2 text-red-500">Medium</h1>
            <p className="overflow-clip font-normal text-lg p-8 w-96">Check out my posts!</p>
            <div className="flex flex-row flex-wrap items-center justify-center overflow-x-scroll scrollbar-hide">
            {
                data.length ? (
                    data.map((post, index) => (
                            <MediumCard key={index} img={post?.thumbnail} name={post.title} desc={hasHTML(post.description)} url={post.link} />     
                        ))
                    ) : (
                        <div>
                            <Image src="/ball.svg" width={50} height={50} />
                        </div>
                )
            }
            </div>
            </div>
        </div>
    )
}

export default Medium
