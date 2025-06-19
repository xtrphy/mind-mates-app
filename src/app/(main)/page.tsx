'use client';

import Card from "@/components/custom-components/Card";
import MainReview from "@/components/custom-components/MainReview";
import Review from "@/components/custom-components/Review";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
    return (
        <>
            <section className="flex items-center justify-center min-h-[100dvh]">
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
            </section>
            <section className="flex flex-col items-center justify-center min-h-[100dvh] gap-10">
                <h2 className="text-5xl font-extrabold w-3xl text-center leading-17">Why our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-700">Mental Health</span> App is the Best Choice</h2>
                <div className="flex justify-center gap-12">

                    <Card
                        icon={'/medicine.png'}
                        title={'Write your thoughts'}
                        subtitle={'for the day and'}
                        text={'come back to them to analyze your thinking, mood and needs.'}
                    />
                    <Card
                        icon={'/doctor1.svg'}
                        title={'Create Your Habits'}
                        subtitle={'You can easily and quickly'}
                        text={'add your habits that you want to start doing, and we will remind you about them.'}
                    />
                    <Card
                        icon={'/hospital.png'}
                        title={'Daily motivations'}
                        subtitle={'Get daily motivational quotes'}
                        text={'to keep your spirits up. Every day a new quote to motivate you for the whole day'}
                    />

                </div>
            </section>
            <section className="flex flex-col min-h-[100dvh] justify-center items-center gap-10">
                <h2 className="text-5xl font-extrabold w-2xl text-center leading-17">Community <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-700">Anonymous Posts</span>
                </h2>
                <div className="flex flex-col gap-15">
                    <MainReview
                        image={'/review1.png'}
                        name={'Mystery Mind'}
                        text={'Hi, i had been suffering from depression since past few months then i came across this website, and...'}
                    />
                    <Review
                        image={'/review2.png'}
                        name={'Micky Mouse'}
                        text={'Really thankful to the MindMates! They helped me overcome my situation of anxiety, which kept me...'}
                    />
                    <Review
                        image={'/review3.png'}
                        name={'Shadow Light'}
                        text={'Few months back, I was just like a typical depressed person, but now, I’m a whole new person, with much more confidence in me, all thanks to...'}
                    />
                </div>
            </section>
            <section className="flex items-center justify-center gap-20 min-h-[100dvh]">
                <Image
                    src='/MindMateSearch.png'
                    alt="Make Your Life Better"
                    width={500}
                    height={300}
                />
                <div className="flex flex-col justify-center gap-10">
                    <h2 className="text-6xl font-extrabold leading-20">
                        Make Your Life <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-700"><br />Better</span>
                    </h2>
                    <Link href='/login' className="w-fit py-2.5 px-11 font-medium text-lg rounded-3xl bg-gradient-to-r from-cyan-400 to-cyan-700 hover:from-cyan-500 hover:to-cyan-800 text-white shadow-md shadow-cyan-500/40 hover:bg-blue-500 transition-colors duration-200">Get Started</Link>
                </div>
            </section>
        </>
    );
};

export default Home;