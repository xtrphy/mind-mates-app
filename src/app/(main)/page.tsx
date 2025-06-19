'use client';

import Card from "@/components/custom-components/Card";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
    return (
        <div className="mt-15 p-10 flex flex-col items-center">
            <div className="flex">
                <div className="flex flex-col gap-8 justify-center">
                    <h1 className="text-6xl font-extrabold leading-16 w-xl">Healthy Minds, Happy Lives <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-700">Mental Health</span> App</h1>
                    <p className="mt-2 w-xl leading-7 text-[#999AA1] text-xl font-medium">Welcome to MindMates, your haven for mental wellness! Explore resources, find support, and connect with a community dedicated to well-being.</p>
                    <Link href='/login' className="w-fit py-2.5 px-11 font-medium text-lg rounded-3xl bg-gradient-to-r from-cyan-400 to-cyan-700 hover:from-cyan-500 hover:to-cyan-800 text-white shadow-md shadow-cyan-500/40 hover:bg-blue-500 transition-colors duration-200">Get Started</Link>
                </div>
                <Image
                    src='/peace-of-mind.png'
                    alt="Peace of mind"
                    width={600}
                    height={400}
                />
            </div>
            <div className="mt-85">
                <h1 className="text-6xl font-extrabold w-7xl text-center leading-22">Why our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-700">Mental Health</span> App is the Best Choice</h1>
                <div>
                    <Card title={'Chat with Expert'} subtitle={'You can connect directly,'} text={'quickly and easily, and there is no need to doubt the quality of the consultation and treatment offered.'} />
                </div>
            </div>
        </div>
    );
};

export default Home;