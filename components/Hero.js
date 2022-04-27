import Intro from "../public/illustration-intro.png"
import Image from "next/image";

export default function Hero() {

    return (<div className="min-h-screen ">

        <div className="container flex flex-col justify-center items-center">

            <div className="flex flex-col justify-center items-center "><Image src={Intro} height={300} width={400}/>
            </div>
            <div className="flex flex-col justify-center items-center md:px-20">
                <h2 className="text-center text-3xl md:text-4xl font-bold py-4">All your files in one secure location, accessible
                    anywhere.</h2>
                <h3 className="text-center text-[20px] py-3">Fylo stores all your most important files in one secure location.
                    Access them wherever you need, share and collaborate with freinds family,and co-workers.</h3>
                <button className="btn bg-accent text-accent-content rounded-[70px] px-7">Get started</button>
            </div>
        </div>


    </div>)
}