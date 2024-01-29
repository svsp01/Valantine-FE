
"use client"
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import './ValentineComponent.css'
import heart from "../../../public/decoration.png"
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

function ValentineComponent() {
    useEffect(() => {
        const scriptContent = `
          atOptions = {
            'key': 'bfa31b5a14c8f373833f01d5f4b2f98d',
            'format': 'iframe',
            'height': 250,
            'width': 300,
            'params': {}
          };
          document.write('<scr' + 'ipt type="text/javascript" src="//www.topcreativeformat.com/bfa31b5a14c8f373833f01d5f4b2f98d/invoke.js"></scr' + 'ipt>');
        `;
    
        const scriptElement = document.createElement('script');
        scriptElement.type = 'text/javascript';
        scriptElement.innerHTML = scriptContent;
    
        document.body.appendChild(scriptElement);
    
        return () => {
          document.body.removeChild(scriptElement);
        };
      }, []);

    return (
        <div className={`flex flex-col bg-black items-center justify-center min-h-screen bg-dark  text-center p-8 font-sacramento relative `}>
            <div>
                <Image className='absolute top-0 left-0 opacity-25  w-24' src={heart} alt="heart" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 text-pink-800 relative z-10">
                <span className="bg-gradient-to-r text-transparent bg-clip-text from-pink-500 to-red-500">Celebrate Love</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl mb-8 text-pink-700">Discover a world of joy and connection with our Valentine&apos;s Day experience.</p>
            <Link href="/user">
                <button className="px-6 py-3 text-lg md:text-xl lg:text-2xl font-bold bg-pink-600 text-white rounded cursor-pointer shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300">
                    Get Started
                </button>
            </Link>
            <div>
                <Image className='absolute top-0 right-0 opacity-25  w-24' src={heart} alt="heart" />

            </div>
        </div>
    );
}

export default ValentineComponent;
