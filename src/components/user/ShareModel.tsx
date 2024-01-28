"use client"
import { ShieldCloseIcon } from 'lucide-react';
import React, { useState } from 'react';
import { HiOutlinePaperAirplane, HiOutlineChatAlt, HiOutlineLink } from 'react-icons/hi';
import shareImage from "../../../public/eze.png"

const ShareModal = ({ isOpen, onClose, id }: any) => {
  const [isCopied, setCopied] = useState(false);

  const contentValue = {
    TelePair: "Hey, I'm calling you for a love game! 💖",
    TeleFriend: "Hey, try this cool love game! 💑",
    WhatsappPair: "Let's play a love game together! 💕",
    WhatsappFriend: "Check out this cool love game! 😊",
    CommonPair: "Special message for pairs",
    CommonFriend: "Special message for friends"
  };
  const shareUrlPair = `https://vanta-lovegame.netlify.app/user/${id}`;
  const shareUrl = `https://vanta-lovegame.netlify.app/`;
  const shareOnTelegram = () => {
    const url = `https://t.me/share/url?url=${encodeURIComponent(
      id ? shareUrlPair : shareUrl
    )}&text=${encodeURIComponent(id ? contentValue.TelePair : contentValue.TeleFriend)}`;
    window.open(url, '_blank');
  };

  const shareOnWhatsApp = () => {
    const imageUrl = shareImage.src;
    const sharedUrl = id ? shareUrlPair : shareUrl
    const whatsappContent = id ? contentValue.WhatsappPair : contentValue.WhatsappFriend
    const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(`${sharedUrl} ${whatsappContent}`)}&media=${encodeURIComponent(imageUrl)}`;
    window.open(url, '_blank');
  };

  const copyLink = async () => {
    const sharedUrl = id ? shareUrlPair : shareUrl;

    try {
      await navigator.clipboard.writeText(sharedUrl);
      console.log('URL copied to clipboard');
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error('Unable to copy URL to clipboard using Clipboard API', error);
      fallbackCopyToClipboard(sharedUrl);
    }
  };

  const fallbackCopyToClipboard = (text: any) => {
    const tempInput = document.createElement('input');
    tempInput.value = text;

    document.body.appendChild(tempInput);
    tempInput.select();
    tempInput.setSelectionRange(0, 99999);

    document.execCommand('copy');

    document.body.removeChild(tempInput);

    console.log('URL copied to clipboard');
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };


  return (
    <div className={`fixed ${isOpen ? 'block' : 'hidden'} top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center transition-opacity ease-in-out duration-300`}>
      <div className="bg-gray-800 p-6 rounded-lg max-w-md w-full text-white">
        <div className="mb-4 relative text-lg">{id ? contentValue.CommonPair : contentValue.CommonFriend}
          <span className="absolute top-2 right-2 text-white cursor-pointer" onClick={onClose}><ShieldCloseIcon /></span>
        </div>
        <button
          onClick={shareOnTelegram}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md flex items-center justify-center mb-2"
        >
          <HiOutlinePaperAirplane className="mr-2 rotate-90" />
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
