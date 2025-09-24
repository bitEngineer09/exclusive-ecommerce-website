import React, { useContext, useEffect, useState } from 'react';
import PrimaryNavbar from '../components/nav/PrimaryNavbar';
import { orderDataContext } from '../store/OrderContext';
import { authDataContext } from '../store/AuthContext';
import OrderItems from '../components/OrderPage/OrderItems';

const MyOrder = () => {

    // USE STATES
    const [orderData, setOrderData] = useState([]);

    // CONTEXT DATA
    const { loggedinUserData } = useContext(authDataContext);
    const { getOrder } = useContext(orderDataContext);


    const userId = loggedinUserData.id;

    useEffect(() => {
        const fetchOrders = async (userId) => {
            try {
                const response = await getOrder(userId);
                console.log(response?.message);
                setOrderData(response?.message);
                return response;
            } catch (error) {
                console.log(error);
                return {
                    success: false,
                    message: error,
                }
            }
        }
        fetchOrders(userId);
    }, [userId]);

    // console.log(orderData);

    return (
        <div className='w-full min-h-screen bg-(--bg-color)'>
            <PrimaryNavbar />
            <div className='bg-zinc-800 py-[1.5rem]'>
                <h1
                    className="
                      flex items-center justify-center gap-[0.5rem] lg:gap-[1rem]
                      text-[2rem] md:text-[2.7rem] 2xl:text-[3rem] font-medium
                      mb-[1rem]
                     text-white
                      leading-none
                    ">
                    My <span className='text-rose-700'>Orders</span>
                </h1>
                <p className='text-white text-[1.1rem] text-center tracking-wide leading-none'>Track and manage all your purchases in one place</p>
            </div>
            <OrderItems orderData={orderData} />
        </div>
    )
}

export default MyOrder