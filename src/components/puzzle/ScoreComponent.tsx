"use client"
import React, { useState, useEffect } from 'react';
import { Card } from './Card';
import heart from "../../../public/house.png"

function ScoreComponent({ score }: any) {
    const suggestions = [
        { title: 'Your Home', description: 'Lorem ipsum dolor sit amet.' },
        { title: 'Suggestion 2', description: 'Consectetur adipiscing elit.' },
        { title: 'Suggestion 3', description: 'Sed do eiusmod tempor incididunt.' },
    ];

    const [animatedScore, setAnimatedScore] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setAnimatedScore((prevScore) => (prevScore < score ? prevScore + 5 : score));
        }, 100);

        return () => clearInterval(interval);
    }, [score]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-black text-white">
            <div className="w-full max-w-screen-md p-8 ">
                <div className="flex flex-col md:flex-row items-center justify-center mb-6">
                    <div className="mr-4 pb-6 md:px-2 md:py-0">
                        <h2 className="text-5xl font-bold text-pink-800">Your Love Score</h2>
                        <p className="text-sm text-gray-600">How deep is your love?</p>
                    </div>
                    <div className="relative w-[250px] h-[250px] md:w-48 md:h-48 lg:w-64 lg:h-64 shadow-2xl shadow-pink-700 rounded-full overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-4xl md:text-5xl bg-white bg-opacity-70 rounded-lg p-2 z-10 text-pink-600 font-bold">
                                {animatedScore}%
                            </span>
                        </div>
                        <div
                            className="absolute inset-0"
                            style={{
                                background: `conic-gradient(from ${90 + animatedScore}deg, #343541 0%, #F72D93 ${animatedScore}%, transparent ${animatedScore + 10}%, transparent 100%)`,
                                transition: 'background 1s linear'
                            }}
                        ></div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
                    {suggestions.map((suggestion, index) => (
                        <div className="flex justify-center items-center ">
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
