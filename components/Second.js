import Image from "next/image";
import Access from "../public/icon-access-anywhere.svg"
import Security from "../public/icon-security.svg"
import Collaboration from "../public/icon-collaboration.svg"
import AnyFile from "../public/icon-any-file.svg"
export default function Second() {
    return (<div className="min-h-screen container gap-y-11 md:gap-y-0 grid grid-cols-1 md:grid-cols-2 place-items-center justify-center items-center ">

        <div className="flex max-w-[450px] flex-col justify-center items-center text-center p-4">
            <Image src={Access} height={100} width={100}/>
            <h2 className="text-2xl font-bold">Access your files, anywhere</h2>
            <h3 className="px-6 pt-2">The ability to use a smartphone, tablet, or computer to access your account means your files follow
                you everywhere</h3>
        </div>
        <div className="flex max-w-[450px] flex-col justify-center items-center text-center pb-7 p-4">
            <Image src={Security} height={110} width={100}/>
            <h2 className="text-2xl font-bold">Security you can trust</h2>
            <h3 className="px-6 pt-2">2-factor authentication and user-controller encryption are just a couple of the security features we
                allow to helo secure your files</h3>
        </div>


        <div className="flex max-w-[450px] flex-col justify-center items-center text-center pb-7 p-4">
            <Image src={Collaboration} height={100} width={120}/>
            <h2 className="text-2xl font-bold">Real-time collaboration</h2>
            <h3>Securely share files and folders with freinds, family and cllegues for live collaboration. No email
                attachments required</h3>
        </div>
        <div className="flex max-w-[450px] flex-col justify-center items-center text-center pb-7 p-4">
            <Image src={AnyFile} height={100} width={120}/>
            <h2 className="text-2xl font-bold">Store and type of life </h2>
            <h3>Whether you're sharing holidays photos of work documents Fylo has you covered allowing for all file types to be securely stored and shared</h3>

        </div>


    </div>)
}