"use client"
import React from 'react'
import LoveLanguage from '../user/LoveLanguage'
import { useParams } from 'next/navigation'
import * as userService from "../../services/users/UserServices";

function LoveLanguagePreview() {
  const {id} = useParams()
  const generateCard = () =>{
    userService.GenerateCardByID(id)
  }
  return (
    <div className='min-h-screen bg-black'>
      <LoveLanguage/>
      Generate card
      <button className='py-2 px-4 bg-gradient-to-br from-pink-700 to-black rounded-lg shadow-pink-800 shadow-md text-white' onClick={()=>generateCard()}>
        Generate
      </button>
    </div>
  )
}

export default LoveLanguagePreview