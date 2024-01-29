"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import loveCard from '../../../public/decoration.png';
import { useRouter } from 'next/navigation'; 

function LoveLanguage() {
  const [authenticated, setAuthenticated] = useState(false);
  const router:any = useRouter();

  useEffect(()=>{
    localStorage.getItem("UserToken")
  },[])
  
  const handleLogin = () => {
    router.push('/user/fsdafds/login')
  };

  return (
    <div className='bg-black  text-white'>
      {!authenticated ? (
        <>
          <h1>Love Language</h1>
          <div className="blurred-image-container">
            <Image
              src={loveCard}
              alt="Blurred Love Language Card"
              width={300}
              height={400}
              className="blur-lg"
            />
          </div>
          <button onClick={handleLogin}>Log In</button>
        </>
      ) : (
        <p>Your Love Language</p>
      )}
    </div>
  );
}

export default LoveLanguage;
