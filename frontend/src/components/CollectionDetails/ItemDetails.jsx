import React, { useEffect, useState } from 'react';
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { GoHeartFill } from "react-icons/go";
import { FaHeart } from "react-icons/fa6";
import RatingStars from '../RatingStars';
import { useNavigate } from 'react-router-dom';

const ItemDetails = ({
    item,
    features,
    counter,
    handleDecrement,
    handleIncrement,
    addItemsToCart,
    selectedSize, setSelectedSize,
    handleAddWishList, handleWishListData,
    averageRating
}) => {

    const [wishListProductIds, setWishlistProductIds] = useState([]);

    console.log(selectedSize);
    
    useEffect(() => {
        const fetchAllWishListData = async () => {
            try {
                const response = await handleWishListData();
                setWishlistProductIds(response?.wishListData?.map((item) => {
                    return item.productId._id
                }))
                // console.log(response?.wishListData);
            } catch (error) {
                console.log(error);
            }
        }
        fetchAllWishListData();
    }, [])


    const navigate = useNavigate();

    return (
        <div
            className='
                w-full
                px-[0.7rem] sm:px-[1.5rem] md:px-0
                text-(--text-secondary) space-y-[1.4rem]
            '>

            {/* ITEM NAME */}
            <h1
                className='
                    sm:text-[1rem] md:text-[1.1rem] lg:text-[1.5rem]
                    xl:text-[1.6rem]
                '>{item.name}</h1>

            {/* REVIEWS */}
            <div className='flex items-center gap-[0.5rem]'>
                <RatingStars rating={Math.round(averageRating)} />
                <div className="reviews md:text-[0.8rem] 2xl:text-[1rem]">
                    ({item?.reviews?.length || 0} reviews) | <span className='text-emerald-400'>In Stock</span>
                </div>

            </div>

            {/* PRICE */}
            <div
                className="
                    price flex items-center
                    text-[1.5rem] md:text-[1.8rem] lg:text-[1.7rem]
                    xl:text-[1.8rem] 2xl:text-[2rem]
                ">
                <MdOutlineCurrencyRupee />{item.price}
                <GoHeartFill
                    onClick={() => handleAddWishList(item._id)}
                    className={`
                        ${wishListProductIds.includes(item._id) ? "text-rose-700" : "text-white"}
                        text-[1.5rem] xl:text-[1.7rem] 2xl:text-[2rem] cursor-pointer ml-[2rem]
                    `} />
            </div>

            {/* DESCRIPTION */}
            <div
                className="
                    itemDescription
                    text-[0.8rem] md:text-[0.9rem] lg:text-[1rem]
                    xl:text-[1.1rem] 2xl:text-[1rem]
                ">
                {item.description}
            </div>
            <div className='w-full border border-rose-800 mt-[1rem] 2xl:mt-[2rem]'></div>


            {/* SIZE */}
            <div
                className="
                    size
                    flex items-center
                    mt-[1rem] xl:mt-[2rem]
                    text-[0.9rem] md:text-[1rem] xl:text-[1rem]
                ">
                Available Sizes:
                {
                    item?.sizes?.map((size, index) => {
                        return (
                            <div
                                onClick={() => {
                                    if (selectedSize.includes(size)) {
                                        setSelectedSize(selectedSize.filter((prev) => prev !== size)
                                        );
                                    } else {
                                        setSelectedSize([...selectedSize, size])
                                    }
                                }}
                                key={index}
                                className={`
                                    ml-[1rem]
                                    flex items-center justify-center
                                    w-[2.1rem] md:w-[2.7rem] lg:w-[2.3rem] xl:w-[2.5rem] 2xl:w-[2.7rem]
                                    h-[2.1rem] md:h-[2.7rem] lg:h-[2.3rem] xl:h-[2.5rem] 2xl:h-[2.7rem]
                                    rounded-full cursor-pointer
                                    hover:bg-rose-900 duration-200 hover:scale-105
                                    text-[0.8rem] md:text-[0.8rem] xl:text-[0.9rem]
                                    ${selectedSize.includes(size) ? "bg-rose-900" : "bg-zinc-700"}
                                    `}>
                                {size}
                            </div>
                        )
                    })
                }
            </div>

            {/* FEATURES SECTION */}
            <div
                className="
                    features
                    w-full
                    hidden xl:flex justify-between
                    gap-[1rem] 2xl:gap-[1rem]
                    mt-[1rem] xl:mt-[2rem] 
                    border-[2px] border-zinc-700 rounded-[1rem]
                    p-[1rem_0.9rem] 2xl:p-[1.5rem_0.8rem]
                    ">
                {
                    features.map((feature, index) => {
                        return (
                            <div
                                key={index}
                                className='flex flex-col items-center justify-center'
                            >
                                {feature.icon}
                                <p className='tracking-wide text-[0.7rem] xl:text-[0.9rem]'>{feature.content}</p>
                            </div>
                        )
                    })
                }
            </div>

            <div
                className='
                    flex items-center justify-between 
                    gap-[2rem]
                    h-[3.5vw] lg:h-[2.5vw] 2xl:h-[3vw]
                    mt-[2rem] md:mt-[1rem] xl:mt-[2rem]
                    '>
                {/* COUNTER */}
                <div className='flex items-center justify-center gap-[1rem]'>
                    <div
                        className="
                            counter
                            grid grid-cols-[27.5%_45%_27.5%] 2xl:grid-cols-[27.5%_45%_27.5%]
                            w-[23vw] sm:w-[18vw] md:w-[14vw] lg:w-[12vw] xl:w-[10vw] 2xl:w-[7.5vw]
                            h-[6.5vw] sm:h-[5vw] md:h-[3.5vw] lg:h-[3vw] xl:h-[2rem] 2xl:h-[1.9vw]
                            items-center justify-center
                            ">
                        <div
                            onClick={handleDecrement}
                            className='
                                h-full
                                flex justify-center items-center
                                bg-pink-700
                                rounded-l-[0.4rem]
                                cursor-pointer
                                '><FaMinus /></div>
                        <div
                            className='
                                h-full
                                font-semibold
                                flex justify-center items-center
                                bg-zinc-100 
                                text-rose-600 text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] 2xl:text-[1.2rem]
                                select-none
                            '>{counter}</div>
                        <div
                            onClick={handleIncrement}
                            className='
                                h-full
                                flex justify-center items-center 
                                bg-pink-700 rounded-r-[0.4rem]
                                cursor-pointer
                            '><FaPlus /></div>
                    </div>
                </div>

                <button
                    className='
                        flex items-center justify-center gap-[0.5rem]
                        w-[25vw] sm:w-[18vw] md:w-[13vw] lg:w-[9rem] xl:w-[10vw] 2xl:w-[9vw]
                        h-[8vw] sm:h-[6vw] md:h-[4vw] lg:h-[2.5rem] xl:h-[3vw] 2xl:h-[2.5vw]
                        bg-zinc-600 hover:bg-indigo-600
                        duration-200 
                        text-white 2xl:font-semibold
                        rounded-[0.5rem] cursor-pointer
                        text-[0.7rem] md:text-[0.9rem] lg:text-[1rem] 
                        '>
                    Buy Now <FaHeart />
                </button>
            </div>

            <div className='mt-[2rem] sm:mt-[2.5rem] xl:mt-[3rem] flex items-center gap-[0.5rem]'>
                <button
                    onClick={() => {
                        console.log(selectedSize);
                        addItemsToCart(item._id, counter, selectedSize, item.price);
                        navigate('/cart');
                    }}
                    className="
                        addToCart
                        w-[28vw] sm:w-[22vw] md:w-[14.5vw] lg:w-[13vw] 2xl:w-[9vw]
                        h-[8vw] sm:h-[6vw] md:h-[4.5vw] lg:h-[3.7vw] xl:h-[3vw] 2xl:h-[2.5vw]
                        flex items-center justify-center gap-[0.5rem]
                        text-[0.7rem] md:text-[0.9rem] xl:text-[1rem]
                        bg-zinc-600 hover:bg-emerald-600 rounded-[0.5rem]
                        cursor-pointer duration-200 
                    ">
                    Add to Cart <PiShoppingCartSimpleBold className='text-[0.8rem] lg:text-[1.1rem]' />
                </button>

            </div>
        </div>
    )
}

export default ItemDetails