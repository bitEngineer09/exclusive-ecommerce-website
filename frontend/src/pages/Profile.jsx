import React, { useContext, useEffect, useState } from 'react';
import PrimaryNavbar from '../components/nav/PrimaryNavbar';
import { authDataContext } from '../store/AuthContext';
import ProfileInputForm from '../components/Profile/ProfileInputForm';
import { MdModeEditOutline } from "react-icons/md";
import FooterSecondary from '../components/Footer/FooterSecondary';
import { orderDataContext } from '../store/OrderContext';

const Profile = () => {

    // CONTEXT DATA
    const { loggedinUserData } = useContext(authDataContext);
    const { getOrder } = useContext(orderDataContext);

    // USE STATES
    const [orderData, setOrderData] = useState([]);
    const [finalData, setFinalData] = useState([]);
    const [totalItems, setTotalItems] = useState(0);
    const [totalOrders, setTotalOrders] = useState(0);
    const [totalSpent, setTotalSpent] = useState(0);

    const memberDate = new Date(loggedinUserData.createdAt).toDateString();
    // console.log(memberDate)

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

    // GETTING FINAL DATA
    useEffect(() => {
        const processOrderData = () => {
            if (orderData && orderData.length > 0) {
                const allItems = orderData.flatMap(order => {
                    return order.items.map(item => ({
                        quantity: item.quantity,
                        price: item.price,
                        productDetails: item.productId,
                        orderId: order._id,
                        date: order.date,
                    }));
                });

                setFinalData(allItems);
            }
        };

        try {
            processOrderData();
        } catch (error) {
            console.log("Error processing order data:", error);
        }
    }, [orderData]);
    // console.log("FINAL DATA:", finalData);

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

    // console.log(orderData);



    return (
        <div className='w-full min-h-screen bg-(--bg-color)'>

            {/* NAVBAR */}
            <PrimaryNavbar />

            {/* PATH */}
            <p
                className='
                  text-white
                   w-full
                   px-[1rem] xl:px-[6rem] 2xl:px-[10rem]
                   my-[2rem]'>
                Home /
                <span className='text-(--color-primary)'> Profile</span>
            </p>

            {/* MAIN CONTAINER */}
            <div className='px-[10rem] flex gap-[2rem] w-full text-white'>

                {/* LEFT SIDE PROFILE */}
                <div className='flex flex-col gap-[1rem]'>
                    <div
                        className='
                            bg-zinc-800
                            w-[20rem] h-[17rem]
                            flex flex-col items-center justify-center 
                            gap-[1rem]
                            p-[2rem] rounded-[1rem]
                        '>
                        {/* PROFILE CHAR AVATAR */}
                        <div
                            className='
                                flex items-center justify-center 
                                bg-rose-700
                                size-[5rem] rounded-full
                                text-[3rem] font-medium
                            '>{loggedinUserData.name?.charAt(0)?.toUpperCase()}
                        </div>
                        <p className='text-[1.5rem]'>{loggedinUserData.name}</p>
                        <p className='text-[0.9rem] tracking-wide'>{loggedinUserData.email?.slice(0, 30) + "..."}</p>
                    </div>
                    <div className='w-full bg-pink-600 p-[0.8rem_1rem] text-center rounded-[0.5rem]'>Current Orders: {totalOrders}</div>
                    <div className='w-full bg-blue-600 p-[0.8rem_1rem] text-center rounded-[0.5rem]'>Total Ordered Items: {totalItems}</div>
                    <div className='w-full bg-green-600 p-[0.8rem_1rem] text-center rounded-[0.5rem]'>Total Order value: {totalSpent}</div>
                </div>

                {/* RIGHT SIDE PROFILE */}
                <div className='w-full flex flex-col'>
                    <div className='rounded-[1rem] bg-zinc-800'>
                        <div
                            className='
                            bg-zinc-900
                            border-b-[2px] border-zinc-700
                            rounded-t-[1rem]
                            pt-[1rem] pb-[2rem] px-[2rem]
                        '>
                            <p className='text-[2.5rem] font-medium'>Personal <span className='text-rose-700'>Information</span></p>
                            <p>Manage your account details and preferences</p>
                        </div>

                        {/* PROFILE INPUT FORM */}
                        <ProfileInputForm loggedinUserData={loggedinUserData} />
                    </div>

                    <div className='flex items-center justify-between mt-[2rem] '>
                        {/* MEMBER SINCE */}
                        <p className='p-[0.8rem_10rem] bg-rose-800 rounded-[0.5rem]'>
                            Member since: <span>{memberDate}</span>
                        </p>

                        {/* EDIT PROFILE BUTTON */}
                        {/* <button>
                            <p
                                className='
                                flex items-center
                                gap-[0.5rem]
                                bg-blue-600
                                p-[0.7rem_2rem]
                                rounded-[0.5rem]
                                cursor-pointer
                            '><MdModeEditOutline /> Edit Profile</p>
                        </button> */}
                    </div>
                </div>
            </div>
            <div className='absolute bottom-0 w-full'>
                <FooterSecondary />
            </div>
        </div>
    )
}

export default Profile