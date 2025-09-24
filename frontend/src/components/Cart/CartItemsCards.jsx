import React, { useContext, useEffect, useState } from 'react';
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { MdDeleteOutline } from "react-icons/md";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { cartDataContext } from '../../store/CartContext';


const CartItemsCards = ({ item, handleUpdateQuantity }) => {

    const [counter, setCounter] = useState(item.quantity);
    const { addItemsToCart, deleteItemsFromCart, removeItem } = useContext(cartDataContext);

    const handleIncrement = async () => {
        await addItemsToCart(item.productId._id);
        setCounter((prev) => {
            const newQuantity = prev + 1;
            handleUpdateQuantity(item.productId._id, newQuantity); // esse real time pe updated values reflect hongi
            return newQuantity; // es value se counter update hoga
        })

    };

    const handleDecrement = async () => {
        if (counter > 1) {
            await deleteItemsFromCart(item.productId._id, 1);
            setCounter((prev) => {
                const newQuantity = prev - 1;
                handleUpdateQuantity(item.productId._id, newQuantity);
                return newQuantity;
            })
        }
    };


    // agar koi change parent ki vajah se ata hai to, vo bhi reflect ho jaaega
    useEffect(() => {
        setCounter(item.quantity);
    }, [item.quantity]);

    const navigate = useNavigate();

    return (
        <div
            className='
                relative
                w-full
                p-[0.3rem] md:p-[0.9rem] 2xl:py-[1.5rem] 2xl:px-0
                grid 
                grid-cols-1 sm:grid-cols-[26%_47%_15%] md:grid-cols-[20%_60%_15%] 2xl:grid-cols-[20%_60%_16%]
                items-start justify-between
                gap-[1rem]
                border-b-[2px] border-zinc-700
            '>
            <div className='justify-self-center'>
                <img
                    onClick={() => navigate(`/collections/${item.productId._id}`)}
                    src={item.productId.image1}
                    alt=""
                    className='
                        h-[19rem] sm:h-[10rem] md:h-[10rem] xl:h-[15vw] 2xl:h-[12vw]
                        w-[25rem] sm:w-[10rem] md:w-[8rem] xl:w-[11vw] 2xl:min-w-full
                        rounded-[0.4rem]
                        object-cover cursor-pointer
                    '/>
            </div>
            <div className="details w-full h-full ">
                <p
                    onClick={() => navigate(`/collections/${item.productId._id}`)}
                    className='hidden md:block hover:text-rose-500 duration-150 cursor-pointer text-[0.8rem] 2xl:text-[1rem]'>{item.productId.name}
                </p>
                <p
                    onClick={() => navigate(`/collections/${item.productId._id}`)}
                    className='block md:hidden hover:text-rose-500 duration-150 cursor-pointer text-[0.8rem] 2xl:text-[1rem]'>
                        {item.productId.name.slice(0,25) + "..."}
                </p>
                <p className='text-emerald-500 text-[0.8rem] 2xl:text-[1rem]'>In Stock</p>
                {/* {
                    item.productId.price >= 500
                    ? <p className='text-[0.4rem] 2xl:text-[1rem] my-[0.5rem]'>Eligible for FREE Shipping</p>
                    : <p>Add items worth Rs.500 to access free delivery</p> 
                } */}
                <p className='text-[0.8rem] 2xl:text-[1rem] my-[0.5rem]'>Eligible for FREE Shipping</p>
                
                <p className='text-[0.8rem] 2xl:text-[1rem] flex items-center gap-[0.3rem] tracking-wide'>
                    <RiVerifiedBadgeFill className='text-(--color-primary)' />exclusively fulfilled
                </p>
                {
                    item.sizes.length > 0
                    ? <div className='mt-[0.5rem] text-[0.8rem] 2xl:text-[1rem]'>Size: <span>{item.sizes?.join(", ")}</span></div>
                    : <p className='mt-[0.5rem] text-[0.8rem] 2xl:text-[1rem]'>No size is selected</p>
                }


                {/* COUNTER */}
                <div className='flex items-center justify-between gap-[1rem] mt-[0.9rem]'>
                    <div
                        className="
                            grid grid-cols-[27.5%_45%_27.5%] 2xl:grid-cols-[27.5%_45%_27.5%]
                            w-[4.3rem] sm:w-[4rem] md:w-[4.5rem] lg:w-[7vw] xl:w-[5.5vw] 2xl:w-[5vw]
                            h-[1.2rem] sm:h-[1rem] md:h-[0.9rem] lg:h-[1.9vw] xl:h-[0.4rem] 2xl:h-[1.3rem]
                            items-center justify-center
                        ">
                        <div
                            onClick={handleDecrement}
                            className='
                                h-full
                                flex justify-center items-center
                                bg-pink-700
                                rounded-l-full
                                cursor-pointer
                                '><FaMinus /></div>
                        <div
                            className='
                                h-full
                                font-semibold
                                flex justify-center items-center
                                bg-zinc-100 text-rose-600
                                text-[0.6rem] md:text-[0.8rem] xl:text-[0.8rem] 2xl:text-[1rem]
                                select-none
                              '>{counter}</div>
                        <div
                            onClick={handleIncrement}
                            className='
                                h-full
                                flex justify-center items-center 
                                bg-pink-700 rounded-r-full
                                cursor-pointer
                            '><FaPlus />
                        </div>
                    </div>
                </div>
            </div>

            {/* EACH PRODUCT TOTAL PRICE */}
            <div className="h-[100%] w-full ">
                <p
                    className='
                        flex items-center
                        text-[1.3rem] 2xl:text-[1.5rem] tracking-wider
                    '>
                    <MdOutlineCurrencyRupee />
                    {(item.productId.price) * (counter).toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </p>
                <MdDeleteOutline
                    onClick={async () => {
                        await removeItem(item.productId._id);
                    }}
                    className='
                        size-[1.8rem]
                        text-zinc-500 hover:text-red-800 
                        hover:scale-115 duration-200 
                        absolute bottom-[2rem] right-[4.5rem] 
                        cursor-pointer 
                        '
                />
            </div>
        </div>
    )
}

export default CartItemsCards