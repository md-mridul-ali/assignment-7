import React from 'react';

const States = ({cookingTotal}) => {
    return (
        <div className='w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 mb-[20px]'>
            <div className='h-[250px] bg-gradient-to-br from-[#632EE3] to-[#9F62F2] rounded-xl flex flex-col items-center justify-center text-white text-bold text-[24px] '>
                <p>In-Progress</p>
                <p>{cookingTotal}</p>
            </div>
            <div className='h-[250px] bg-gradient-to-r from-[#54CF68] to-[#00827A] rounded-xl flex flex-col items-center justify-center text-white text-bold text-[24px]'>
                <p>Resolved</p>
                <p>{0}</p>
            </div>

        </div>
    );
};

export default States;