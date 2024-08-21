import React from 'react';
import { useNavigate } from 'react-router-dom';

export const FirstComponent = () => {
    const navigate = useNavigate();

    const handleNavigateToLogin = () => {
        navigate('/login');
    };

    return (
        <div className="relative">
            {/* Hero Section */}
            <div className="relative w-full h-[619px] flex items-center justify-center bg-gray-800 md:bg-cover md:bg-center lg:bg-[url('https://s3-alpha-sig.figma.com/img/c3c9/7679/51c51a7e2807a7d0fadb9f1c2a8b1ef6?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HXpq0-0N5-SB2e3S~Xzuzx31~JZNbOTyDWhy-aNICutAOvCkM8phhWMRJ3WIXHsP9YKReos30sJQ7bqUPz5UnRtMw4TlqZGEpTPzYgu4kVX9biMtqaQDe~dRDldpJTkxFMzKUb26SDaW~kD~On27JACXlmqlzCeu4BYG8N6NyVkyJRvjXoOV0xjxMJqXvnIo6JVDyz6jqDJlRiNDEF9LoRDyUIGq5sRR-Ju5f0hnxratyY-laLoBYxjHhNGVVHOTdCCHV5u~tADUee9EhwWE0a26iM-d70mfXkyfnKwwaRYPe5PDSXhpkLLWDDaEEyv1M5bS27DI76gWMC8LSd9crw__')]">
                {/* Overlay for background opacity */}
                <div className="absolute inset-0 bg-black opacity-50 md:bg-black sm:bg-white md:opacity-50"></div>

                {/* Text Content */}
                <div className="relative text-center text-white p-1 rounded-lg z-10">
                    <div className="text-xl font-semibold p-2">Food App</div>
                    <div className="text-3xl lg:text-6xl font-semibold p-2">
                        Why stay hungry when<br />
                        you can order from Bella Onojie
                    </div>
                    <div className="text-lg lg:text-xl p-6">
                        Download the Bella Onojie’s food app now on
                    </div>
                    <div className="flex flex-col lg:flex-row justify-center gap-6 pt-6">
                        <button 
                            onClick={handleNavigateToLogin} 
                            className="bg-orange-500 text-white px-8 py-4 rounded-3xl font-bold hover:bg-orange-600 cursor-pointer"
                        >
                            Playstore
                        </button>
                        <button 
                            onClick={handleNavigateToLogin} 
                            className="border border-white text-white pl-6 sm:pl-8 pr-6 sm:pr-8 p-3 sm:p-4 rounded-lg sm:rounded-xl font-bold hover:bg-blue-600 transition duration-300 cursor-pointer"
                        >
                            App Store
                        </button>
                    </div>
                </div>
            </div>

            {/* Images container */}
            <div className="relative inset-x-0 bottom-2 flex justify-center">
                <span className="flex-grow flex justify-center lg:mt-[-200px] mt-[-100px] z-20">
                    <img 
                        src={require('../../assests/images/CombineMobileImage.png')} 
                        className="h-[400px] lg:h-[640px] w-[300px] lg:w-[548px]" 
                        alt="App Download Image"
                    />
                </span>
            </div>

            {/* Gray line with shadow */}
            <div className="flex justify-center mt-8 mb-4">
                <hr className="w-[300px] sm-none md-none lg:w-[1200px] border-t-4 border-gray-300 shadow-md" />
            </div>
        </div>
    );
};
