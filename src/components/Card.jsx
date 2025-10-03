import React from 'react';
import { Calendar } from 'lucide-react';
const Card = ( {order, handleOrder} ) => {
    // console.log(order);

    return (

        // <div className='col-span-9 grid grid-cols-1 md:grid-cols-2 gap-5 h-[150px] bg-amber-200'>
            <div onClick={() => handleOrder(order)} className='bg-white shadow-2xl  rounded-xl p-4'>
                <div className='flex justify-between'>
                    <p>{order.title}</p>
                    <button className='flex flex-row bg-green-300 px-4 py-1 rounded-4xl'><div className='h-[15px] w-[15px] bg-green-500 rounded-4xl mt-[6px] mr-[8px]'></div>{order.status}</button>
                </div>
                <p className='mb-3'>{order.description}</p>
                <span className='mr-[13px]'> <span>#</span>{order.id}</span>
                <span className='mr-[75px] text-red-600'>{order.priority}</span>
                <span className='mr-[45px]'>{order.customer}</span>
                <span className='inline '><Calendar className='inline' />{order.createdAt}</span>
            </div>
        // </div>
    );
};

export default Card;