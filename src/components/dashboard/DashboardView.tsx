"use client"
import React, { useState } from 'react';
import avatar from "../../../public/person.png"
import Image from 'next/image';
import { EnvelopIcon, FriendIcon } from '../common/Icons';
import { useParams, useRouter } from 'next/navigation';
import ShareModal from '../user/ShareModel';
function DashboardView() {
    const router: any = useRouter()
    const { id } = useParams();
    const loggedInUser = {
        name: "John Doe",
        email: "john.doe@example.com",
        password: "**********"
    };

    const pairsList = [
        { pairName: "Jane Smith", pairScore: 85 },
        { pairName: "David Johnson", pairScore: 72 },
        { pairName: "Emily Williams", pairScore: 94 },
    ];
    const [isModalOpen, setModalOpen] = useState(false);
    const [activeId, setActiveId]: any = useState("")

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };
    const handlePairButton = () => {
        setActiveId(id)
    }
    const handleFriendButton = () => {
        setActiveId("")
    }
    function hanldeViewClick(pair: any) {
       console.log("pair", pair)
       router.push("/score")
    }

    return (
        <div className="bg-black min-h-screen text-white pt-6 flex">
            <div className="bg-black w-full shadow-pink-800 border-pink-500 border-t-4  mx-2 sm:mx-10 rounded-lg p-8 shadow-2xl bg-opacity-80">
                <div className="flex flex-wrap items-center mb-6">
                    <div className="rounded-full overflow-hidden w-16 h-16 mr-4">
                        <Image src={avatar} alt="User Avatar" className="w-full h-full object-cover" />
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold">{loggedInUser.name}</h2>
                        <p className="text-gray-300 text-sm">Email: {loggedInUser.email}</p>
                    </div>
                </div>
                <p className="text-gray-300 text-sm">Password: {loggedInUser.password}</p>
               <div className='grid grid-cols-1 sm:grid-cols-2 sm:gap-5'>
               <div className='px-1 py-4 md:px-0'>
                    <button
                        onClick={() => {
                            openModal()
                            handlePairButton()
                        }}
                        className='bg-gradient-to-br w-full  from-pink-800 to-black text-wrap shadow-pink-500 shadow-md hover:bg-pink-600 text-white text-sm md:text-lg py-2 md:py-4 px-4 rounded-lg mb-4 font-bold'>
                        <div className='flex justify-between items-center w-full px-2'>
                            <div className='w-full text-wrap text-start'>
                                Send to Your Loved One for Pair Score
                            </div>
                            <div className='pl-4 text-sm'>
                                <EnvelopIcon />
                            </div>
                        </div>
                    </button>
                </div>
                <div className='px-1 py-4 md:px-0 '>
                    <button
                        onClick={() => {
                            openModal()
                            handleFriendButton()
                        }} className='bg-gradient-to-br w-full from-black to-pink-800 text-wrap shadow-pink-500 shadow-md hover:bg-pink-600 text-white text-sm md:text-lg py-2 md:py-4 rounded-lg px-4 mb-4 font-bold'>
                        <div className='flex justify-between items-center w-full px-2'>
                            <div className='w-full text-wrap text-start'>
                                Invite Friends to Find Their Perfect Match
                            </div>
                            <div className='pl-4'>
                                <FriendIcon />
                            </div>
                        </div>
                    </button>
                </div>
               </div>
                <div className="mt-8">
                    <h2 className="text-2xl font-bold mb-4">Your Pairs</h2>
                    {pairsList.map((pair, index) => (
                        <div key={index} className="border-b border-pink-300 py-3 flex justify-between items-center">
                            <div>
                                <p className="text-lg font-semibold">{pair.pairName}</p>
                                <p className="text-gray-300 text-sm">Pair Score: {pair.pairScore}</p>
                            </div>
                            <button className="bg-gradient-to-r shadow-pink-500 shadow-md from-black to-pink-600 text-white text-sm md:text-lg px-4 py-2 rounded" onClick={()=>{
                                hanldeViewClick(pair)
                                }}>View More</button>
                        </div>
                    ))}
                </div>
            </div>
            <ShareModal
                isOpen={isModalOpen}
                onClose={closeModal}
                id={activeId}
            />
        </div>
    );
}

export default DashboardView;
