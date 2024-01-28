"use client"
import React, { useState, useEffect } from 'react';
import { Card } from './Card';
import heart from "../../../public/house.png";
import { PairScore } from "./dummy"
import { useRouter } from 'next/navigation';
import { ArrowBigLeft } from 'lucide-react';
function ScoreComponent() {
    const user: any = PairScore
    const suggestions = [
        { title: 'Your Sanctuary', description: `Craft unforgettable moments in your ${user.home.bhkPreference} home nestled in a serene suburban area. Share the space with your preferred pet, a loyal dog.` },
        { title: 'Childhood Magic', description: `Envision a family of ${user.familyAndChildren.desiredChildrenCount} with telepathic abilities thriving in the heartwarming environment of a Montessori school.` },
        { title: 'Romantic Bliss', description: `Indulge in the charm of love with an ideal first date – a cozy dinner at a local restaurant. Dive into weekly activities such as movie nights, outdoor hiking, and cooking together. Foster entrepreneurial growth together in the world of ${user.datingAndLeisure.careerGrowthTogether}.` },
        { title: 'Dream Home', description: `Build a life of bliss in your preferred ${user.home.bhkPreference} home located in a tranquil suburban area. Let the comforting presence of your beloved dog fill each room with joy.` },
        { title: 'Parenting Journey', description: `Embark on the magical journey of parenthood with a family of ${user.familyAndChildren.desiredChildrenCount}, each possessing unique telepathic powers. Cultivate a love for learning in the Montessori school environment.` },
        { title: 'Adventurous Love', description: `Infuse excitement into your love story with an ideal first date – ${user.datingAndLeisure.idealFirstDate}. Explore thrilling weekly activities like movie nights, outdoor hiking, and cooking together. Unleash entrepreneurial potential for joint growth in ${user.datingAndLeisure.careerGrowthTogether}.` },
    ];

    const [animatedScore, setAnimatedScore] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setAnimatedScore((prevScore) => (prevScore < user.pairScore ? prevScore + 5 : user.pairScore));
        }, 100);

        return () => clearInterval(interval);
    }, [user.pairScore]);
    const router = useRouter()
    const handleBackClick = () => {
        router.back()
    }
    const pair = {
        user: "Jonethen",
        pair: "Mia"
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-black  text-white">
            <div className="w-full max-w-screen-md p-8">
                <button
                    onClick={() => {
                        handleBackClick()
                    }}
                    className='bg-gradient-to-br mt-10 flex from-black to-pink-800 text-wrap shadow-pink-500 shadow-md hover:bg-pink-600 text-white text-lg md:text-xl md:py-2 rounded-lg px-4 mb-10 '>
                    <ArrowBigLeft /> Back To Dashboard
                </button>
                <div className="flex pb-16   border-white border-b-2 md:flex-row items-center justify-center mb-24">
                    <div className=" md:px-2 md:py-0">
                        <h4 className="text-3xl font-bold bg-gradient-to-r from-yellow-500 mb-4 to-pink-600 text-transparent bg-clip-text">{pair.user} & {pair.pair}</h4>
                        <h2 className="text-3xl md:text-5xl font-bold text-pink-500">Your Love Score</h2>
                        <p className="text-sm text-gray-400">How deep is your love?</p>
                    </div>
                    <div className="relative w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 shadow-2xl shadow-pink-700 rounded-full overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-4xl md:text-5xl bg-opacity-70 rounded-lg p-2 z-10 text-white font-bold">
                                {animatedScore}%
                            </span>
                        </div>
                        <div
                            className="absolute inset-0 rounded-full overflow-hidden"
                            style={{
                                background: `conic-gradient(from ${90 + animatedScore}deg, #440A28 0%, black ${animatedScore}%, transparent ${animatedScore + 10}%, transparent 100%)`,
                                transition: 'background 1s linear'
                            }}
                        ></div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {suggestions.map((suggestion, index) => (
                        <div key={index} className="">
                            <Card
                                title={suggestion.title}
                                description={suggestion.description}
                                imageUrl={heart}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ScoreComponent;
