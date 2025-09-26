import React, { useContext, useEffect, useState } from 'react';
import { MdCurrencyRupee } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { orderDataContext } from '../../store/OrderContext';

const OrderItems = ({ orderData }) => {

    // USE STATES
    const [totalItems, setTotalItems] = useState(0);
    const [totalOrders, setTotalOrders] = useState(0);
    const [totalSpent, setTotalSpent] = useState(0);

    // CONTEXT DATA
    const { finalData } = useContext(orderDataContext);

    // USE NAVIGATE
    const navigate = useNavigate();

    useEffect(() => {

        // TOTAL ORDERS
        const allOrders = () => {
            if (orderData && orderData?.length > 0) {
                setTotalOrders(orderData.length);
            }
        };
        allOrders();

        // TOTAL ITEMS
        const sumOfItem = finalData.reduce((acc, item) => {
            return acc + item.quantity
        }, 0);
        setTotalItems(sumOfItem);


        // TOTAL SPENT
        const sumOfSpent = finalData.reduce((acc, item) => {
            return acc + (item.price * item.quantity)
        }, 0);
        setTotalSpent(sumOfSpent);

    }, [finalData]);



    return (
        <div className='w-full px-[15rem] mb-[3rem]'>
            <div className='flex justify-between w-full mt-[2rem]'>
                <div
                    className='
                    bg-pink-600
                    w-[20vw]
                    h-[10vw]
                    rounded-[1rem]
                    flex flex-col items-center justify-center
                    
                '>
                    <p className='text-white font-semibold text-[3rem]'>{totalOrders}</p>
                    <p className='text-[1.1rem] font-medium text-white tracking-wide'>Total Orders</p>
                </div>

                <div
                    className='
                    bg-green-600
                    w-[20vw]
                    h-[10vw]
                    rounded-[1rem]
                    flex flex-col items-center justify-center
                    
                '>
                    <p className='text-white font-semibold text-[3rem]'>{totalItems}</p>
                    <p className='text-[1.1rem] font-medium text-white tracking-wide'>Total Items</p>
                </div>

                <div
                    className='
                    bg-blue-600
                    w-[20vw]
                    h-[10vw]
                    rounded-[1rem]
                    flex flex-col items-center justify-center
                    
                '>
                    <p className='text-white font-semibold text-[3rem] flex items-center'><MdCurrencyRupee />{totalSpent}</p>
                    <p className='text-[1.1rem] font-medium text-white tracking-wide'>Total Spent</p>
                </div>
            </div>

            {
                finalData?.map((itemDetails, index) => {
                    const newDate = new Date(itemDetails.date).toLocaleDateString("en-IN", {
                        year: "numeric",
                        month: "short",
                        day: "numeric"
                    });
                    return (
                        <div key={index} className='mt-[3rem] text-white'>
                            <div className='flex w-full justify-between'>
                                <span className='bg-zinc-900 p-[0.2rem_1rem] rounded-[0.3rem] '>#ORDER ID: {itemDetails?.orderId}</span>
                                <p >Placed on: <span className='text-rose-500'>{newDate}</span></p>
                            </div>
                            <div className='w-full bg-zinc-900 p-[1rem] rounded-[0.5rem mt-[0.5rem]'>
                                <div className='flex justify-between items-center'>
                                    <div className='flex gap-[2rem]'>
                                        <img
                                            src={itemDetails.productDetails.image1}
                                            alt=""
                                            className='w-[8rem] rounded-[0.5rem]'
                                        />
                                        <div className='w-[30rem] flex flex-col gap-[0.5rem]'>
                                            <p
                                                onClick={() => navigate(`/collections/${itemDetails.productDetails._id}`)}
                                                className='text-[1.1rem] hover:text-rose-400 cursor-pointer'>{itemDetails.productDetails.name.slice(0, 25) + "..."}</p>
                                            <p className='text-[0.9rem] text-zinc-400'>{itemDetails.productDetails.description.slice(0, 100) + "..."}</p>
                                            <p>Qty: {itemDetails.quantity}</p>
                                            <p className='flex items-center'>Price: <span className='flex items-center font-medium text-emerald-500'><MdCurrencyRupee />{(itemDetails.price).toLocaleString()}</span></p>
                                            <p className='flex items-center underline underline-offset-3'>Total Price: <span className='flex items-center text-rose-500 font-medium'><MdCurrencyRupee />{(itemDetails.price * itemDetails.quantity).toLocaleString()}</span></p>
                                        </div>
                                    </div>
                                    <div className='flex items-center gap-[1rem]'>
                                        <p
                                            className='
                                                p-[0.5rem_1.8rem]
                                                text-[0.9rem]
                                                rounded-full 
                                                bg-orange-600
                                            '>{itemDetails.status}</p>
                                        <button
                                            className='
                                                bg-indigo-600 
                                                p-[0.5rem_1.8rem]
                                                text-[0.9rem]
                                                rounded-full
                                            '>
                                            Reorder
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default OrderItems