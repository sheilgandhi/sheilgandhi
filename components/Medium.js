import Image from 'next/image';
import React, { useState, useEffect } from 'react'
import axios from '../api/posts'
import MediumCard from './MediumCard';
import Fade from 'react-reveal/Fade';

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
        <div className="h-screen w-screen[-100px] max-h-screen bg-gray-200 flex flex-col" id="medium">
            {/* Header */}
            <Fade bottom>
            <div className="flex flex-col md:flex-row items-start justify-between p-10">
                <h1 className="font-black text-6xl pl-10 pb-2 text-red-500">Medium</h1>
                <div className="overflow-clip font-normal text-lg w-96">
                    <p>I am also writing on Medium. Although I am still in the early days of my writing career, I would love to share my knowledge with others. I would love to delve more into opinionated topics in the future and discuss builds and other components I work on. This blog is a way to share my experience and potentially help others on their own journey.</p>
                    <a className="text-red-500 cursor-pointer flex items-end" href="https://sheilgandhi.medium.com/" target="_blank">
                        Discover More<span className="text-3xl pl-4">&#8594;</span>
                    </a>
                </div>
            </div>
            </Fade>
            {/* Posts */}
            <div className="flex flex-row flex-wrap items-center justify-center overflow-y-scroll scrollbar-hide">
            {
                data.length ? (
                    data.map((post, index) => (
                        <Fade right>
                            <MediumCard key={index} img={post?.thumbnail} name={post.title} desc={hasHTML(post.description)} url={post.link} />     
                        </Fade>
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
