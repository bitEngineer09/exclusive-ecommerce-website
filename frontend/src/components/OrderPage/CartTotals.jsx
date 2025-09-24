import React from 'react';
import { MdCurrencyRupee } from "react-icons/md";
import PaymentMode from './PaymentMode';
import { GiClothes } from "react-icons/gi";


const CartTotals = ({ method, setMethod, onSubmitHandler,  totalPrice, totalQuantity }) => {
    return (
        <div className='w-full h-full'>
            <h2 className='text-[3rem] font-medium'>CART <span className='text-pink-700'>TOTALS</span></h2>
            <div className='bg-slate-950 p-[2rem] rounded-[1rem] mt-[1rem]'>
                <div className='space-y-[1.5rem] rounded-[1rem]'>
                    <div className='flex justify-between items-center bg-zinc-800 h-[3.5rem] text-[1rem] rounded-[0.7rem] px-[1rem] '>
                        <p className='tracking-wide flex items-center gap-[0.7rem]'>Total Items <GiClothes className='text-[1.4rem]' /></p>
                        <span className='flex items-center'>{totalQuantity} items</span>
                    </div>

                    <div className='flex justify-between items-center bg-zinc-800 h-[3.5rem] text-[1rem] rounded-[0.7rem] px-[1rem] '>
                        <p className='tracking-wide'>Subtotal</p>
                        <span className='flex items-center'><MdCurrencyRupee />{totalPrice.toLocaleString()}</span>
                    </div>

                    <div className='flex justify-between items-center bg-zinc-800 h-[3.5rem] text-[1rem] rounded-[0.7rem] px-[1rem] '>
                        <p className='tracking-wide'>Shipping Fee</p>
                        <span className='flex items-center'><MdCurrencyRupee />{(totalPrice * 0.02).toFixed(2)}</span>
                    </div>

                    <div className='flex justify-between items-center bg-rose-800 h-[3.5rem] text-[1rem] rounded-[0.7rem] px-[1rem] '>
                        <p className='tracking-wide font-medium flex items-center'>Total ( <MdCurrencyRupee /> )</p>
                        <span className='flex items-center'><MdCurrencyRupee />{(totalPrice + (totalPrice * 0.02)).toLocaleString()}</span>
                    </div>
                </div>

                <PaymentMode method={method} setMethod={setMethod} />
                <button
                    onClick={onSubmitHandler}
                    className='
                        w-full
                        mt-[2rem]
                        text-[1.2rem]
                        bg-green-700
                        p-[0.8rem_1.8rem]
                        rounded-[0.7rem]
                        cursor-pointer
                    '>
                    <p>Place Order</p>
                </button>
            </div>

        </div>
    )
}

export default CartTotals