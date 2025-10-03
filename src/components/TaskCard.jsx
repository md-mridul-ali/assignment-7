import React from 'react';

const TaskCard = ({order, handleCooking}) => {
    // console.log(order)
    return (
        <div>
            <div className='bg-white p-4 shadow-2xl rounded-xl mb-[20px]'>
                            <p className='mb-[12px]'>
                                {
                                    order.title
                                }
                            </p>
                            <button onClick={() => handleCooking(order)} className='bg-[#02A53B] w-full px-4 py-2 rounded-xs'>Complete</button>
                        </div>
        </div>
    );
};

export default TaskCard;