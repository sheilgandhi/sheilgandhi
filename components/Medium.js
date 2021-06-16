import Image from 'next/image';
import React, { useState, useEffect } from 'react'
import axios from '../api/posts'
import ProjectCard from './ProjectCard';

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
            <h1 className="font-black text-6xl pl-10 pb-2 text-red-500">Medium</h1>
            <p>Check out my posts!</p>
            <div className="">
            {
                data.length ? (
                    data.map((post, index) => (
                            <ProjectCard key={index} img={post?.thumbnail} name={post.title} desc={hasHTML(post.description)} url={post.link} />     
                        ))
                    ) : (
                        <div>
                            <Image src="/ball.svg" width={50} height={50} />
                        </div>
                )
            }
            </div>
        </div>
    )
}

export default Medium
