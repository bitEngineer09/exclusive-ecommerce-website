import React, { useContext, useEffect, useState } from 'react';
import { productDataContext } from '../../store/ProductContext';
import { GoHeartFill } from "react-icons/go";
import { useNavigate } from 'react-router-dom';

const RecommendedProducts = ({ category, ID }) => {

    const [products, setProducts] = useState([]);
    const navigate = useNavigate();
    const { getAllProductsData } = useContext(productDataContext);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await getAllProductsData();
                setProducts(response.products);
            } catch (error) {
                console.log(error);
            }
        }
        fetchProducts();
    }, [])

    // console.log(products)

    return (
        <>
            <h2
                className='
                    text-[1.5rem] text-white
                    mt-[4rem] sm:mt-[6rem] md:mt-[7rem] 2xl:mt-[7rem]
                    mb-[2rem] sm:mb-[3rem] md:mb-[4rem] 2xl:mb-[4rem]
                    text-center 
                    bg-zinc-800 py-[0.6rem]
                '>Recommended For You
            </h2>
            <div className='
                w-full 
                px-[0.7rem] sm:px-[1.5rem] lg:px-[1rem] xl:px-[7rem] 2xl:px-[5rem] 
                pb-0 
                flex 2xl:grid grid-cols-6 items-center 2xl:justify-items-center gap-[1rem] 2xl:gap-0
                overflow-auto lg:overflow-hidden
            '>
                {
                    products.filter(item => item.category === category && item._id !== ID ).slice(0, 6).map((product) => {
                        return (
                            <div
                                key={product._id}
                                onClick={() => navigate(`/collections/${product._id}`)}
                                className="
                                    flex-shrink-0
                                    w-[51vw] sm:w-[43vw] md:w-[31vw] lg:w-[23vw] xl:w-[20vw] 2xl:w-[13vw]
                                    h-[79vw] sm:h-[69vw] md:h-[50vw] lg:h-[37vw] xl:h-[33vw] 2xl:h-[22vw]
                                    p-[0.5rem]
                                    rounded-[0.4rem]
                                    bg-stone-900 cursor-pointer
                                ">
                                <img
                                    src={product.image1}
                                    alt=""
                                    className='
                                    w-full
                                    object-cover rounded-[0.4rem]
                                    h-[43vw] sm:h-[42vw] md:h-[29vw] lg:h-[24vw] xl:h-[23vw] 2xl:h-[14vw]
                                '/>

                                <div className="flex flex-col justify-between details mt-[0.7rem]">
                                    <p
                                        className='
                                        productNameCollection
                                        text-zinc-400 text-[clamp(0.75rem,2.5vw,0.9rem)]
                                        mb-[0.6rem] 2xl:mb-[1rem]
                                        '>{product.name.slice(0, 50) + "..."}</p>


                                    <div className='flex items-center justify-between mt-[1rem]'>
                                        <p
                                            className='
                                            productPriceCollection
                                            text-white text-[clamp(0.9rem,2vw,1.4rem)]
                                            '>₹ {product.price.toLocaleString()}</p>
                                        <div
                                            className='
                                            flex items-center justify-between
                                            text-nowrap
                                            w-[6rem] sm:w-[7.2rem]
                                            h-[1.6rem] sm:h-[1.7rem] 2xl:h-[2rem]
                                            px-[0.4rem] 2xl:px-[0.8rem]
                                            text-[clamp(0.6rem,2.5vw,0.8rem)]
                                            text-white
                                            bg-rose-800
                                            rounded-full
                                        '>
                                            <p>Top Selling</p>
                                            <GoHeartFill
                                                className='
                                                size-[0.9rem]
                                                text-zinc-200
                                                cursor-pointer
                                            '/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default RecommendedProducts