// import { Calendar } from 'lucide-react';
import React, { use } from 'react';
import Card from './Card';
import States from './States';

const Dynamic = ({ ordersPromise }) => {

    const orders = use(ordersPromise);
    // console.log(orders);

    return (
        <div>
            <States></States>
            <div className='w-11/12 mx-auto md:grid grid-cols-12 gap-5 mb-[40px]'>

                <div className='col-span-9  h-[] '>
                    <h2 className='text-[20px] font-semibold mb-[16px]'>Customer Tickets</h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                        {
                            orders.map((item)=> (
                                <Card key={item.id} order={item}></Card>
                            ))
                        }
                    </div>
                </div>

                <div className='col-span-3 grid grid-cols-1 h-[] '>

                    <div>
                        <h2 className='mb-[16px] mt-[30px]'>Task Status</h2>
                        {/* <h6>Select a ticket to add to Task Status</h6> */}
                        <div className='bg-white p-4 shadow-2xl rounded-xl mb-[20px]'>
                            <p className='mb-[12px]'>Payment Failed - Card Declined</p>
                            <button className='bg-[#02A53B] w-full px-4 py-2 rounded-xs'>Complete</button>
                        </div>
                    </div>
                    {/* resolved */}
                    <div>
                        <h2 className='mb-[16px] mt-[30px]'>Resolved Task</h2>
                        {/* <h6>Select a ticket to add to Task Status</h6> */}
                        <div className='bg-[#E0E7FF] p-4 shadow-2xl rounded-xs mb-[20px]'>
                            <p className=''>Payment Failed - Card Declined</p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Dynamic;