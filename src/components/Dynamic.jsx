// import { Calendar } from 'lucide-react';
import React, { use, useState } from 'react';
import Card from './Card';
import States from './States';
import TaskCard from './TaskCard';
import ReadyCard from './ReadyCard';

const Dynamic = ({ ordersPromise }) => {

    const orders = use(ordersPromise);
    // console.log(orders);

    const [cookingItems, setCookingItems] = useState([]);
    const [readyItems, setReadyItems] = useState([]);
    


    const handleOrder=(order)=>{
        // console.log(order);
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
    // console.log(cookingItems);

const handleCooking = (order) =>{
    // console.log(order);
    //1.resolver er vitore ticket ke dhukaw
    const newReadyItems = [...readyItems, order];
    setReadyItems(newReadyItems);
    //2.task status theke ticket ke remove korbe
    const remaining = cookingItems.filter((item) => item.id !== order.id);
    setCookingItems(remaining);
}

    return (
        <div>
            <States cookingTotal={cookingItems.length} order={orders.length} readyTotal={readyItems.length}></States>
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
                                <TaskCard handleCooking={handleCooking} key={order.id} order={order}></TaskCard>
                            ))
                        }
                    </div>
                    {/* resolved */}
                    <div>
                        <h2 className='mb-[16px] mt-[30px]'>Resolved Task</h2>
                        {/* <h6>Select a ticket to add to Task Status</h6> */}
                        {
                            readyItems.map((order) =>(
                                <ReadyCard key={order.id} order={order}></ReadyCard>
                            ))
                        }
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Dynamic;