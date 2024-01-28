"use client"
import React, { useEffect, useReducer, useState } from 'react';
import love from "../../../public/person.png";
import lovedec from "../../../public/eze.png";
import { Button } from "@/components/ui/button";
import { EnvelopIcon, FriendIcon } from "../common/Icons";
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import {  useParams } from 'react-router-dom';
import LoveLanguage from './LoveLanguage';

function InviteComponent() {
    const [showModal, setShowModal] = useState(true);
    const router: any =useRouter()
    const { id } = useParams<{ id: string }>();
    console.log('ID from path:', id);


    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setShowModal(false);
        }, 3000);
        return () => clearTimeout(timeoutId);
    }, []); 

    return (
        <div className='bg-gradient-to-br from-black to-black min-h-screen text-pink-800 flex flex-col items-center justify-center'>
            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center">
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <h2 className="text-3xl font-bold mb-4">Modal Title</h2>
                        <p className="text-lg">Modal content goes here.</p>
                        <LoveLanguage/>
                        <button
                            onClick={() => setShowModal(false)}
                            className="bg-pink-500 text-white py-2 px-4 rounded-lg mt-4"
                        >
                            Close Modal
                        </button>
                    </div>
                </div>
            )}
            <div className='text-center mb-8'>
                <h2 className='text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-pink-700'>
                    Your Love Language has been Captured!
                </h2>
                <p className='mt-2 text-pink-200 text-lg md:text-xl font-semibold'>
                    Now, let&apos;s play and share the love!
                </p>
            </div>
            <div className='flex flex-col md:w-full px-2 w-full items-center mb-8'>
                <div className='flex'>
                    <Image width={114} src={love} alt="person with love" />
                    <Image width={114} src={lovedec} alt="person with love" />
                </div>
                <div className='text-xl pb-4 md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-pink-700'>
                    To Know the pair score
                </div>
                <div className='px-4 md:px-4'>
                    <button
                        className='bg-gradient-to-br w-full flex from-pink-800 to-black text-wrap shadow-pink-500 shadow-md hover:bg-pink-600 text-white text-lg md:text-xl py-2 md:py-4 px-4 rounded-lg mb-4 font-bold'>
                        <div className='flex justify-between items-center w-full px-2'>
                            <div className='w-full text-wrap'>
                                Send to Your Loved One for Pair Score
                            </div>
                            <div className='pl-4'>
                                <EnvelopIcon />
                            </div>
                        </div>
                    </button>
                </div>
                <div className='text-xl pb-4 md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-pink-700'>
                    Share to your friend
                </div>
                <div className='px-4 md:px-0'>
                    <button
                        className='bg-gradient-to-br from-black to-pink-800 text-wrap shadow-pink-500 shadow-md hover:bg-pink-600 text-white text-lg md:text-xl py-2 md:py-4 rounded-lg px-4 mb-4 font-bold'>
                        <div className='flex justify-between items-center w-full px-2'>
                            <div className='w-full text-wrap'>
                                Invite Friends to Find Their Perfect Match
                            </div>
                            <div className='pl-4'>
                                <FriendIcon />
                            </div>
                        </div>
                    </button>
                </div>
                <div className='text-md pb-4 md:text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-pink-700'>
                Login to priview your Love Language
                </div>
                <div className='px-4 md:px-0'>
                    <button
                    onClick={()=>{
                        router.push(`/${id}/login`)
                    }}
                        className='bg-gradient-to-br from-black to-pink-800 text-wrap shadow-pink-500 shadow-md hover:bg-pink-600 text-white text-lg md:text-xl py-2 md:py-4 rounded-lg px-4 mb-4 font-bold'>
                        <div className='flex justify-between items-center w-full px-2'>
                            <div className='w-full text-wrap'>
                                Login
                            </div>
                        </div>
                    </button>
                </div>
            </div>
            <p className='text-sm text-center px-4 text-red-300'>
                Psst... sharing love is the best way to create beautiful moments together!{' '}
                <span role='img' aria-label='Heart Emoji'>
                    ❤️
                </span>
            </p>
        </div>

    );
}

export default InviteComponent;
