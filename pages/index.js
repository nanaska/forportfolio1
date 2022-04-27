import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Hero from "../components/Hero"
import Second from "../components/Second";
import {useState} from "react";
import Third from "../components/third";

export default function Home() {
    const [Theme, SetTheme] = useState("night")

    function Theme1(text) {
        SetTheme(text)
    }


    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main data-theme={`${Theme}`} className="">
                <div className="bg-base-300">
                    <nav className="flex flex-row items-center select-none justify-center px-8 h-24 justify-between">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold">Fylo</h2>

                        </div>
                        <ul className="flex space-x-4">

                            <div className="dropdown dropdown-end  text-center">
                                <label tabIndex="0" className="btn  rounded-btn">Theme </label>
                                <ul tabIndex="0"
                                    className="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-4">
                                    <li onClick={(e)=>{Theme1(e.target.innerText)}}><a>light</a></li>
                                    <li onClick={(e)=>{Theme1(e.target.innerText)}}><a>dark</a></li>
                                    <li onClick={(e)=>{Theme1(e.target.innerText)}}><a>cupcake</a></li>
                                    <li onClick={(e)=>{Theme1(e.target.innerText)}}><a>bumblebee</a></li>
                                    <li onClick={(e)=>{Theme1(e.target.innerText)}}><a>emerald</a></li>
                                    <li onClick={(e)=>{Theme1(e.target.innerText)}}><a>corporate</a></li>
                                    <li onClick={(e)=>{Theme1(e.target.innerText)}}><a>synthwave</a></li>
                                    <li onClick={(e)=>{Theme1(e.target.innerText)}}><a>retro</a></li>
                                    <li onClick={(e)=>{Theme1(e.target.innerText)}}><a>cyberpunk</a></li>
                                    <li onClick={(e)=>{Theme1(e.target.innerText)}}><a>valentine</a></li>
                                    <li onClick={(e)=>{Theme1(e.target.innerText)}}><a>halloween</a></li>
                                    <li onClick={(e)=>{Theme1(e.target.innerText)}}><a>garden</a></li>
                                    <li onClick={(e)=>{Theme1(e.target.innerText)}}><a>forest</a></li>
                                    <li onClick={(e)=>{Theme1(e.target.innerText)}}><a>aqua</a></li>
                                    <li onClick={(e)=>{Theme1(e.target.innerText)}}><a>lofi</a></li>
                                    <li onClick={(e)=>{Theme1(e.target.innerText)}}><a>pastel</a></li>
                                    <li onClick={(e)=>{Theme1(e.target.innerText)}}><a>fantasy</a></li>
                                    <li onClick={(e)=>{Theme1(e.target.innerText)}}><a>wireframe</a></li>
                                    <li onClick={(e)=>{Theme1(e.target.innerText)}}><a>black</a></li>
                                    <li onClick={(e)=>{Theme1(e.target.innerText)}}><a>luxury</a></li>
                                    <li onClick={(e)=>{Theme1(e.target.innerText)}}><a>dracula</a></li>
                                    <li onClick={(e)=>{Theme1(e.target.innerText)}}><a>cmyk</a></li>
                                    <li onClick={(e)=>{Theme1(e.target.innerText)}}><a>autumn</a></li>
                                    <li onClick={(e)=>{Theme1(e.target.innerText)}}><a>business</a></li>
                                    <li onClick={(e)=>{Theme1(e.target.innerText)}}><a>acid</a></li>
                                    <li onClick={(e)=>{Theme1(e.target.innerText)}}><a>lemonade</a></li>
                                    <li onClick={(e)=>{Theme1(e.target.innerText)}}><a>night</a></li>
                                    <li onClick={(e)=>{Theme1(e.target.innerText)}}><a>coffee</a></li>
                                    <li onClick={(e)=>{Theme1(e.target.innerText)}}><a>winter</a></li>
                                </ul>
                            </div>

                            <li className="md:text-[18px] hidden md:flex flex flex-col items-center justify-center  hover:text-primary duration-200">Features</li>
                            <li className="md:text-[18px] hidden md:flex flex flex-col items-center justify-center hover:text-primary duration-200">Team</li>
                            <li className="md:text-[18px] hidden md:flex flex flex-col items-center justify-center hover:text-primary duration-200">Sigh
                                in
                            </li>

                        </ul>
                    </nav>
                    <Hero/>
                </div>
                <Second/>
                <Third/>
            </main>
        </div>
    )
}
