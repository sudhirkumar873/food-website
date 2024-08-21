import React from 'react';
import LogoImage from '../../assests/images/LogoImage.png';
import { FaFacebookSquare, FaTwitter } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

export const Footer = () => {
    return (
        <div className='flex flex-col sm:flex-row h-auto sm:h-[150px] justify-evenly items-center p-4 sm:p-0'>
            {/* Logo on the left side */}
            <div className="flex w-full sm:w-1/5 justify-center sm:justify-start mt-2 items-center">
                <img src={LogoImage} alt="Logo" className="h-auto max-h-[80px] w-auto max-w-[150px] sm:max-w-[206px]" />
            </div>
            {/* Social Media Icons */}
            <div className='flex w-full sm:w-2/5 justify-center sm:justify-evenly mt-4 sm:mt-2 items-center gap-6'>
                <FaTwitter size={36} className='text-orange-500' />
                <FaFacebookSquare size={36} className='text-orange-500' />
                <FaSquareInstagram size={36} className='text-orange-500' />
            </div>
            {/* Copyright Text */}
            <div className="flex w-full sm:w-1/5 justify-center sm:justify-end mt-4 sm:mt-2 items-center text-center sm:text-left">
                © 2020 Bella Onojie.com
            </div>
        </div>
    );
};
