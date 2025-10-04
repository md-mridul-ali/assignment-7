import React from 'react';

const States = ({ cookingTotal, readyTotal }) => {
    return (
        <div className='w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 mb-[20px]'>
            <div className='h-[250px]  rounded-xl flex flex-col items-center justify-center 
            text-white text-bold text-[24px] overflow-hidden' style={{
                    background: "linear-gradient(to bottom right, #632EE3, #9F62F2), url('/public/vector1.png')"
                }}>
                {/* <img
                    src="vector1.png"
                    alt="vector background"
                    class="absolute top-0 left-0 opacity-80"
                /> */}
                <p>In-Progress</p>
                <p>{cookingTotal}</p>
            </div>
            

            <div className='h-[250px] rounded-xl flex flex-col items-center justify-center 
            text-white text-bold text-[24px]' style={{
                    background: "linear-gradient(to bottom right, #54CF68, #00827A), url('/public/vector1.png')"
                }}>
                <p>Resolved</p>
                <p>{readyTotal}</p>
            </div>

        </div>
    );
};

export default States;