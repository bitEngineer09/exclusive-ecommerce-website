import React from 'react';
import { BsFillBagHeartFill } from "react-icons/bs";
import { MdOutlineSecurity } from "react-icons/md";
import { MdShoppingCart } from "react-icons/md";
import { IoIosStar } from "react-icons/io";
import { MdCurrencyRupee } from "react-icons/md";

const ReviewBanner = () => {
    return (
        <div
            className='
                max-h-[32rem]
                text-zinc-400
                text-center
                flex flex-col 
                gap-[2rem]
                bg-zinc-900
                py-[2rem]
                rounded-[1rem]
            '>
            <p className='text-[1.5rem] py-[1rem] text-pink-700 bg-zinc-950'>
                Go ahead — leave a review and let your voice be heard!
            </p>
            <p className='px-[2rem] text-[1rem] leading-[1.5rem] tracking-wide'>
                At <span className='text-rose-700'>exclusive</span>, we deeply value and respect your feedback. Your reviews are not just words — they help us grow, improve, and serve you better every day. Whether it’s a kind compliment or constructive criticism, each review helps future customers make informed decisions and allows us to provide the best possible experience. Your voice matters, and we’re truly grateful for every customer who takes the time to share their thoughts. Thank you for helping us build a better shopping experience for everyone.
            </p>
            <div className='flex text-[3.5rem] text-pink-600 justify-between px-[2rem]'>
                <BsFillBagHeartFill  />
                <MdOutlineSecurity  />
                <MdShoppingCart  />
                <IoIosStar  />
                <MdCurrencyRupee  />
            </div>
        </div>
    )
}

export default ReviewBanner