import React from 'react';

export const SecondComponent = () => {
    return (
        <div className="w-full flex items-center justify-center flex-col">
            <div className="text-4xl font-semibold mb-8 mt-4">
                How the app works
            </div>

            {/* First Section */}
            <div className='flex flex-col lg:flex-row items-center gap-8 mb-'>
                <div className='lg:w-[550px] lg:h-[625px] w-full h-[400px] rounded-[120px] overflow-hidden'>
                    <img
                        src={require('../../assests/images/LoginMobileImage.png')}
                        className='w-full h-full object-cover rounded-lg'
                    />
                </div>
                <div className='w-3/5 flex flex-col justify-center items-start p-2 gap-8'>
                    <span className='font-semibold text-xl text-orange-500'>Create an account</span>
                    <span className='text-2xl font-semibold text-start'>
                        Create/login to an existing<br /> account to get started
                    </span>
                    <span className='text-start text-xl'>
                        An account is created with your email<br /> and a desired password
                    </span>
                </div>
            </div>

            {/* Second Section */}
            <div className='flex flex-col lg:flex-row items-center gap-8 mb-8'>
                <div className='w-3/5 flex flex-col justify-center items-start p-2 gap-8'>
                    <span className='font-semibold text-xl text-orange-500'>Explore varieties</span>
                    <span className='text-2xl font-semibold text-start'>
                        Shop for your favorites<br /> meal as e dey hot.
                    </span>
                    <span className='text-start text-xl'>
                        Shop for your favorite meals or drinks<br /> and enjoy while doing it.
                    </span>
                </div>
                <div className='lg:w-[550px] lg:h-[625px] w-full h-[400px] rounded-[120px] overflow-hidden'>
                    <img
                        src={require('../../assests/images/VaritiesMobileImage.png')}
                        className='w-full h-full object-cover'
                    />
                </div>
            </div>

            {/* Third Section */}
            <div className='flex flex-col lg:flex-row items-center gap-8'>
                <div className='lg:w-[550px] lg:h-[625px] w-full h-[400px] rounded-[120px] overflow-hidden'>
                    <img
                        src={require('../../assests/images/PaymentMobileImage.png')}
                        className='w-full h-full object-cover'
                    />
                </div>
                <div className='w-3/5 flex flex-col justify-center items-start p-2 gap-8'>
                    <span className='font-semibold text-xl text-orange-500'>Checkout</span>
                    <span className='text-2xl font-semibold text-start'>
                        When you done check out<br /> and get it delivered.
                    </span>
                    <span className='text-start text-xl'>
                        When you done check out and get it<br /> delivered with ease.
                    </span>
                </div>
            </div>
        </div>
    );
};
