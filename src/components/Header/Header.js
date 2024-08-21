import React, { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import LogoImage from '../../assests/images/LogoImage.png';

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="h-[100px] w-full flex flex-col sm:flex-row p-2  shadow-md">
            {/* Logo on the left side */}
            <div className="flex w-full sm:w-2/5 justify-between sm:justify-start pl-12 mt-2 items-center">
                <img src={LogoImage} alt="Logo" className="h-auto max-h-[80px] w-auto max-w-[150px] sm:max-w-[206px]" />
                
                {/* Hamburger Icon */}
                <GiHamburgerMenu
                    className="sm:hidden text-black focus:outline-none text-xl cursor-pointer"
                    onClick={toggleMenu}
                />
            </div>

            {/* Navigation links from center to right */}
            <nav
                className={`flex-col sm:flex-row sm:flex sm:w-3/5 h-auto sm:h-48px justify-center sm:justify-evenly pt-3 sm:pt-5 font-semibold ${
                    isOpen ? 'flex' : 'hidden sm:flex'
                }`}
            >
                <a href="#home" className="hover:text-orange-400 p-3">Home</a>
                <a href="#product" className="hover:text-orange-400 p-3">Product</a>
                <a href="#faq" className="hover:text-orange-400 p-3">FAQ</a>
                <a href="#contact" className="hover:text-orange-400 p-3">Contact</a>
            </nav>
        </header>
    );
};
