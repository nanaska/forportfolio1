import Image2 from "../public/illustration-stay-productive.png"
import Image from "next/image"

export default function Third(){
    return(<div className="min-h-screen bg-base-200  px-12 flex flex-col justify-center items-center">
        <div className="flex flex-col md:flex-row">
            <div className="flex flex-col justify-center md:w-1/2 items-center">
                <Image src={Image2} height={450} width={550}/>
            </div>
            <div className="flex flex-col justify-center md:w-1/2 ">
                <h2 className="mr-auto text-2xl font-bold">Stay productive, wherever you are</h2>
                <h4 className="pt-2">Never let location be issue when accesing your files. Fylo has covered for all of your life storage needs.</h4>
                <br/>
                <h4>Securely share files and folders with freinds, family and colleagues for live collaboration. No email attachment required</h4>
            </div>
        </div>


    </div>)
}