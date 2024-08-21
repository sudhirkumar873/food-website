import React from 'react';
import { useNavigate } from 'react-router-dom';

export const ThirdComponent = () => {
    const navigate = useNavigate();

    const handleNavigateToLogin = () => {
        navigate('/login');
    };

    return (
        <div>
            <div 
                className="relative w-full h-[509px] flex items-center justify-center bg-center sm:bg-cover bg-gray-800 sm:bg-transparent"
                style={{ backgroundImage: 'url(https://s3-alpha-sig.figma.com/img/2da7/dc5b/62e47d4ba6308cc4a1c5c2d5a9ad2351?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=S49ZCr60kJ0c1~2kpVwt7bre1c438S-0lMlLNIXs3keXP-9rSC9Y9H-S4vV7DRLsrFbFW~XVDbvRiTqg-XlF2ZjurLdroMFT-tJWS8n5dsrJN-oghgu56ucl8dAQ1Ky-o0p7SLBnJp0nu7K6uuNJXABXLj09pH0egf5o-DNZZlZNEnyVgaV4HbSHbeWQp0CpRPOiymNdhtNUwFi9IY1q5vXUUyRNIOJz~II1Cn3ymt3k6MWL62WLWwuDmKPUWVKEYVK5GXpx4S-PTR1K6UGixYy0XTgJtmYhxVdKbiF30WYltWv~2~nVNVZ4pKQqYle9AngVn9hutxjRJ1dSW7Nweg__)' }}
            >
                {/* Overlay for background opacity */}
                <div className="absolute inset-0 bg-black opacity-50"></div>

                <div className="relative text-center text-white p-1 rounded-lg z-10">
                    <div className="text-4xl sm:text-5xl font-semibold p-2">
                        Download the app now.
                    </div>
                    <div className="text-lg sm:text-xl p-4 sm:p-6">
                        Available on your favorite store. Start your premium experience now
                    </div>
                    <div className="flex justify-center gap-4 sm:gap-6 pt-4 sm:pt-6">
                        <button 
                            onClick={handleNavigateToLogin} 
                            className="bg-orange-500 text-white pl-6 sm:pl-8 pr-6 sm:pr-8 p-3 sm:p-4 rounded-lg sm:rounded-xl font-bold hover:bg-orange-600 transition duration-300"
                        >
                            Playstore
                        </button>
                        <button 
                            onClick={handleNavigateToLogin} 
                            className="border border-white text-white pl-6 sm:pl-8 pr-6 sm:pr-8 p-3 sm:p-4 rounded-lg sm:rounded-xl font-bold hover:bg-blue-600 transition duration-300"
                        >
                            App Store
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
