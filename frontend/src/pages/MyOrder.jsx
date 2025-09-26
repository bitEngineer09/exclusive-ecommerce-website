import React, { useContext } from 'react';
import PrimaryNavbar from '../components/nav/PrimaryNavbar';
import { orderDataContext } from '../store/OrderContext';
import OrderItems from '../components/OrderPage/OrderItems';
import FooterSecondary from '../components/Footer/FooterSecondary'

const MyOrder = () => {

    // CONTEXT DATA
    const { orderData } = useContext(orderDataContext);



    return (
        <div className='w-full min-h-screen bg-(--bg-color)'>
            <PrimaryNavbar />
            <p
                className='
                  text-white
                   w-full
                   px-[1rem] xl:px-[6rem] 2xl:px-[10rem]
                   my-[1rem]'>
                Home /
                <span className='text-(--color-primary)'> Orders</span>
            </p>
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
            <FooterSecondary />
        </div>
    )
}

export default MyOrder