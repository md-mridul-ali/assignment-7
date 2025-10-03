// import { Calendar } from 'lucide-react';
import React, { use, useState } from 'react';
import Card from './Card';
import States from './States';
import TaskCard from './TaskCard';

const Dynamic = ({ ordersPromise }) => {

    const orders = use(ordersPromise);
    // console.log(orders);

    const [cookingItems, setCookingItems] = useState([]);


    const handleOrder=(order)=>{
        console.log(order);
        //agge check koro task status a ache kina
        const isExist=cookingItems.find((item)=> item.id == order.id);

        if(isExist){
            alert("Already Added!!");
            return;
        }
        //task status er vitore click kora ticket dhukabo
        const newCookingItems = [...cookingItems, order];
        setCookingItems(newCookingItems);
    };
    console.log(cookingItems);

    return (
        <div>
            <States cookingTotal={cookingItems.length} order={orders.length}></States>
            <div className='w-11/12 mx-auto md:grid grid-cols-12 gap-5 mb-[40px]'>

                <div className='col-span-9  h-[] '>
                    <h2 className='text-[20px] font-semibold mb-[16px]'>Customer Tickets</h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                        {
                            orders.map((order)=> (
                                <Card handleOrder={handleOrder} key={order.id} order={order}></Card>
                            ))
                        }
                    </div>
                </div>

                <div className='col-span-3 grid grid-cols-1 h-[] '>

                    <div>
                        <h2 className='mb-[16px] mt-[30px]'>Task Status</h2>
                        {/* <h6>Select a ticket to add to Task Status</h6> */}
                        {
                            cookingItems.map((order) =>(
                                <TaskCard key={order.id} order={order}></TaskCard>
                            ))
                        }
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