"use client"
import React, { useState } from 'react';

const personalityTestQuestions = [
    { type: 'multipleChoice', question: 'What is your preferred method of communication?', options: ['Phone', 'Email', 'In-person'] },
    { type: 'textField', question: 'Describe your ideal vacation in one sentence.' },
    { type: 'boolean', question: 'Do you enjoy working in a team?' },
    { type: 'multipleChoice', question: 'How do you handle stress?', options: ['Take a break', 'Work through it', 'Seek support'] },
    { type: 'textField', question: 'What is your biggest accomplishment so far?' },
    { type: 'boolean', question: 'Are you a morning person?' },
    { type: 'multipleChoice', question: 'What is your favorite type of music?', options: ['Rock', 'Pop', 'Hip-hop'] },
    { type: 'textField', question: 'If you could have dinner with any historical figure, who would it be and why?' },
    { type: 'boolean', question: 'Do you consider yourself a creative person?' },
    { type: 'multipleChoice', question: 'Which movie genre do you prefer?', options: ['Action', 'Drama', 'Comedy'] },
];




function PuzzleComponent({ onGameComplete }: any) {
    const [currentPuzzleIndex, setCurrentPuzzleIndex] = useState(0);
    const [userAnswer, setUserAnswer] = useState('');
    const [userAnswers, setUserAnswers] = useState<{ [key: string]: string }>({});
    const [progress, setProgress] = useState(0);

    const handleAnswerSubmit = () => {
        const newProgress = ((currentPuzzleIndex + 1) / personalityTestQuestions.length) * 100;
        setProgress(newProgress);

        setUserAnswers((prevAnswers) => ({
            ...prevAnswers,
            [personalityTestQuestions[currentPuzzleIndex]?.question]: userAnswer,
        }));

        setCurrentPuzzleIndex((prevIndex) => prevIndex + 1);

        if (currentPuzzleIndex === personalityTestQuestions.length - 1) {
            
            console.log('User Answers:', userAnswers);
        }else{
            setUserAnswer("")
        }
    };

    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-800 to-purple-500 text-white text-center p-8 font-sacramento">
                <div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">
                        Puzzle {currentPuzzleIndex + 1}
                    </h1>
                    <p className="text-lg mb-8">{personalityTestQuestions[currentPuzzleIndex]?.question}</p>

                    {personalityTestQuestions[currentPuzzleIndex]?.type === 'multipleChoice' && (
                        <div className="flex flex-col">
                            {personalityTestQuestions[currentPuzzleIndex]?.options?.map((option, index) => (
                                <label key={index} className="mb-2">
                                    <input
                                        type="radio"
                                        name="multipleChoice"
                                        value={option}
                                        onChange={(e) => setUserAnswer(e.target.value)}
                                    />
                                    {option}
                                </label>
                            ))}
                        </div>
                    )}

                    {personalityTestQuestions[currentPuzzleIndex]?.type === 'textField' && (
                        <input
                            type="text"
                            value={userAnswer}
                            onChange={(e) => setUserAnswer(e.target.value)}
                            placeholder="Your answer"
                            className="w-full p-3 bg-purple-600 text-white rounded placeholder-gray-300 focus:outline-none focus:shadow-outline mt-4"
                        />
                    )}

                    {personalityTestQuestions[currentPuzzleIndex]?.type === 'boolean' && (
                        <div className="flex items-center justify-center mt-4">
                            <label className="mr-4">
                                <input
                                    type="radio"
                                    name="boolean"
                                    value="true"
                                    onChange={() => setUserAnswer('true')}
                                />
                                True
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="boolean"
                                    value="false"
                                    onChange={() => setUserAnswer('false')}
                                />
                                False
                            </label>
                        </div>
                    )}

                    <button
                        onClick={handleAnswerSubmit}
                        className="mt-4 px-6 py-3 text-lg md:text-xl lg:text-2xl font-bold bg-purple-600 text-white rounded cursor-pointer shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300"
                    >
                        Submit Answer
                    </button>
                    <div className="mt-8 w-full">
                        <div className="bg-gray-300 h-4 rounded-full">
                            <div
                                className="bg-purple-600 h-full rounded-full transition-all duration-500"
                                style={{ width: `${progress}%` }}
                            />
                        </div>
                        <p className="text-purple-300 text-lg mt-2">{Math.round(progress)}% Completed</p>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default PuzzleComponent;
