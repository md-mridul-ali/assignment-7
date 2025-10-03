import React from 'react';

const ReadyCard = ({ order }) => {
    return (

        <div className='bg-[#E0E7FF] p-4 shadow-2xl rounded-xs mb-[20px]'>
            {/* <p className=''>Payment Failed - Card Declined</p> */}
            <p>
                {
                    order.title
                }
            </p>

        </div>

    );
};

export default ReadyCard;