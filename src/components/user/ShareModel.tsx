"use client"
import React, { useState } from 'react';
import { HiOutlinePaperAirplane, HiOutlineChatAlt, HiOutlineLink } from 'react-icons/hi';

const ShareModal = ({ isOpen, onClose, content, shareUrl }: any) => {
  const [isCopied, setCopied] = useState(false);

  const shareOnTelegram = () => {
    const url = `https://t.me/share/url?url=${encodeURIComponent(shareUrl)}`;
    window.open(url, '_blank');
  };

  const shareOnWhatsApp = () => {
    const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(`${shareUrl}`)}`;
    window.open(url, '_blank');
  };  

  const copyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000); // Reset the copied status after 2 seconds
  };

  return (
    <div className={`fixed ${isOpen ? 'block' : 'hidden'} top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center transition-opacity ease-in-out duration-300`}>
      <div className="bg-gray-800 p-6 rounded-lg max-w-md w-full text-white">
        <span className="absolute top-2 right-2 text-gray-500 cursor-pointer" onClick={onClose}>&times;</span>
        <div className="mb-4 text-lg">{content}</div>
        <button
          onClick={shareOnTelegram}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md flex items-center justify-center mb-2"
        >
          <HiOutlinePaperAirplane className="mr-2" />
          Share on Telegram
        </button>
        <button
          onClick={shareOnWhatsApp}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md flex items-center justify-center mb-2"
        >
          <HiOutlineChatAlt className="mr-2" />
          Share on WhatsApp
        </button>
        <button
          onClick={copyLink}
          className={`bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md flex items-center justify-center ${isCopied ? 'bg-green-500' : ''}`}
        >
          <HiOutlineLink className={`mr-2 ${isCopied ? 'animate-bounce' : ''}`} />
          {isCopied ? 'Copied' : 'Copy Link'}
        </button>
      </div>
    </div>
  );
};

export default ShareModal;
