import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import axios from '../api/projects'
import Image from "next/image";
import Fade from 'react-reveal/Fade';

function Projects() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const req = await axios.get('/sheilgandhi/repos');
            setProjects(req.data)
        }
        fetchData();
    }, []);

    console.log(projects)

    const posters = [
        {
            name: "airbnb-clone",
            img: "https://play-lh.googleusercontent.com/1zfN_BL13q20v0wvBzMWiZ_sL_t4KcCJBeAMRpOZeT3p34quM-4-pO-VcLj8PJNXPA0",
            rating: 4.2
        },
        {
            name: "amazon-clone",
            img: "https://play-lh.googleusercontent.com/QPKtPRTJyhrYoPqYmjP81aCeYAQrH7ocIC25Tw8spEoKsX7eY0cqXMJp4QfkIq2bSg=s360-rw",
            rating: 4.2
        },
        {
            name: "facebook-clone",
            img: "https://play-lh.googleusercontent.com/ccWDU4A7fX1R24v-vvT480ySh26AYp97g1VrIB_FIdjRcuQB2JP2WdY7h_wVVAeSpg=s360-rw",
            rating: 4.2
        },
        {
            name: "netflix-clone",
            img: "https://play-lh.googleusercontent.com/TBRwjS_qfJCSj1m7zZB93FnpJM5fSpMA_wUlFDLxWAb45T9RmwBvQd5cWR5viJJOhkI=s360-rw",
            rating: 4.2
        },
        {
            name: "Sheil Gandhi",
            img: "/logo.png",
            rating: 4.2
        },
        {
            name: "signal-clone",
            img: "https://play-lh.googleusercontent.com/jCln_XT8Ruzp7loH1S6yM-ZzzpLP1kZ3CCdXVEo0tP2w5HNtWQds6lo6aLxLIjiW_X8=s360-rw",
            rating: 4.2
        },
        {
            name: "tesla-clone",
            img: "https://play-lh.googleusercontent.com/b79jRmQK2sZABaN0xI2wIAFrEcBxs0CuDzNTmF088DGrJXbemaMNRvrhqH0St28J7CU=s360-rw",
            rating: 4.2
        },
        {
            name: "TicTacToe",
            img: "https://play-lh.googleusercontent.com/R_07seH7cQH3DU21hGQHZ1-gCn9R04jGTqPPgo8p9qih4PD9fHtVouPkXTyy3rZqTnE=s360-rw",
            rating: 4.2
        },
        {
            name: "tinder-clone",
            img: "https://play-lh.googleusercontent.com/fDpoqIbZ884ylRnMK8Lx9Fu4DsLQk5yt4f9WkxeOAPpGnzc9BTi_YKkMsLvoMdx7Uzg=s360-rw",
            rating: 4.2
        },
        {
            name: "TodoList",
            img: "https://play-lh.googleusercontent.com/wRotdGcsc2JwefLMShlLf0KtbLGbF1u3sDm95mxM-QHLx4HBW93pqVHmJblxRll8Qw=s360-rw",
            rating: 4.2
        },
        {
            name: "uefa2020-clone",
            img: "https://play-lh.googleusercontent.com/KzD0-hNjUKjVfZZFW7e-umsD8wAyD3RL0IfMdYStb06P9aK9jJjqPy6Zu33lWhI6dA=s360-rw",
            rating: 4.5
        },
        {
            name: "whatsapp-2.0-clone",
            img: "https://play-lh.googleusercontent.com/bYtqbOcTYOlgc6gqZ2rwb8lptHuwlNE75zYJu6Bn076-hTmvd96HH-6v7S0YUAAJXoJN=s360-rw",
            rating: 1.9
        },
        {
            name: "whatsapp-clone",
            img: "https://play-lh.googleusercontent.com/bYtqbOcTYOlgc6gqZ2rwb8lptHuwlNE75zYJu6Bn076-hTmvd96HH-6v7S0YUAAJXoJN=s360-rw",
            rating: 4.2
        },
        {
            name: "WordPairGenerator",
            img: "https://play-lh.googleusercontent.com/fVN-fKJMK04rlHcEimAVabwBiIA3eQyPkI6yalF-pz4jTlD24JSuClASFZN1QO9xeTU=s360-rw",
            rating: 4.2
        }
    ]

    return (
        <div className="h-screen w-screen max-w-full max-h-screen bg-gray-200 flex flex-col" id="projects">
            {/* Header */}
            <Fade bottom>
                <div className="flex flex-col md:flex-row items-start justify-between p-10">
                    <h1 className="font-black text-6xl pl-10 pb-2 text-red-500">Personal Projects</h1>
                    <div className="overflow-clip font-normal text-lg">
                        <p>If you would like to see the source codes for these projects, please check my GitHub</p>
                        <a className="text-red-500 cursor-pointer flex items-end" href="https://github.com/sheilgandhi/" target="_blank">
                            Explore More<span className="text-3xl pl-4">&#8594;</span>
                        </a>
                    </div>
                </div>
            </Fade>
            {/* All the projects */}
            <div className="flex flex-row flex-wrap items-center justify-center overflow-x-scroll scrollbar-hide">
                {
                    projects.length ? (
                        projects
                            .filter(cond => cond.private === false)
                            .map((project, index) => (
                                <Fade right key={index}>
                                    <ProjectCard key={index} img={posters[index]?.img} name={project.name} desc={project.description} url={project.html_url} rating={posters[index]?.rating} />
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

export default Projects
