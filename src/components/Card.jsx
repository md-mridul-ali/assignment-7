import React from 'react';
import { Calendar } from 'lucide-react';
const Card = ({ order, handleOrder }) => {
    // console.log(order);

    return (

        <div onClick={() => handleOrder(order)} className='bg-white shadow-2xl  rounded-xl p-4'>
            <div className='flex justify-between'>
                <p className='text=[18px] font-medium'>{order.title}</p>
                <button className='flex flex-row bg-green-300 px-4 py-1 rounded-4xl'><div className='h-[15px] w-[15px] bg-green-500 rounded-4xl mt-[6px] mr-[8px]'></div>{order.status}</button>
            </div>
            <p className='mb-3 text-[16px] text-[#627382]'>{order.description}</p>
            <div className='flex flex-row justify-between'>
                <p><span className='mr-[] text-[#627382] text-[14px] font-medium'> <span>#</span>{order.id}</span></p>
                <p><span className='mr-[] text-red-600 text-[14px] font-medium'>{order.priority}</span></p>
                <p><span className='mr-[]'>{order.customer}</span></p>
                <p><span className='inline '><Calendar className='inline' />{order.createdAt}</span></p>
            </div>
        </div>
        
    );
};

export default Card;