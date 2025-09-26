import React, { useContext, useEffect, useState } from 'react';
import { productDataContext } from '../../store/ProductContext';
import { GoHeartFill } from "react-icons/go";

const LatestCollections = ({navigate}) => {

    // USE STATES
    const [products, setProducts] = useState([]);

    const { getAllProductsData } = useContext(productDataContext);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const result = await getAllProductsData();
                setProducts(result?.products);
                // console.log(result.products);
            } catch (error) {
                console.log(error);
            }
        }
        fetchProducts();
    }, []);


    return (
        <>
            <p
                className='
                    mt-[2rem] lg:mt-[5rem]
                    text-[1.5rem] md:text-[2.7rem] 2xl:text-[3rem]
                    font-medium text-center text-white 
                '>Latest <span className='text-rose-700'>Collections</span> </p>
            <p
                className='
                    hidden md:block md:text-[1.5rem]
                    font-medium text-center 
                    text-white mt-[1rem]
                '>Step into Style - New Collection Dropping This Season !</p>
            <div className='w-full  px-[0.7rem] md:px-[1rem] 2xl:p-0 overflow-auto'>

                <div
                    className="
                        collectionDiv
                        w-[100rem] sm:w-[130rem] md:w-full
                        flex md:grid md:grid-cols-3 lg:grid-cols-4 
                        items-center justify-items-center
                        overflow-auto sm:overflow-hidden
                        gap-x-[0.5rem] sm:gap-x-[1rem]
                        gap-y-[1.3rem]
                        mt-[1rem] md:mt-[3rem]
                    ">
                    {
                        // const startIndex = 14
                        products.slice(13).map((product, index) => {
                            return (
                                <div 
                                    onClick={() => navigate(`/collections/${product._id}`)}
                                    key={index}
                                    className='
                                        collectionCard
                                        w-[55vw] sm:w-[57vw] md:w-[31vw] lg:w-[23vw] lg:max-w-[20rem]
                                        h-[72vw] sm:h-[62vw] md:h-[44vw] lg:h-[35vw] xl:h-[33vw] 2xl:h-[25vw] lg:max-h-[26rem]
                                        p-[0.5rem]
                                        rounded-[0.4rem]
                                        bg-stone-900 cursor-pointer
                                    '>
                                    <img
                                        src={product.image1}
                                        alt=""
                                        className='
                                            w-full max-w-[30rem]
                                            object-cover rounded-[0.4rem]
                                            h-[42vw] sm:h-[42vw] md:h-[29vw] lg:h-[24vw] xl:h-[23vw] lg:max-h-[18rem]
                                        '/>
                                    <div className="flex flex-col justify-between details mt-[0.7rem]">
                                        <p
                                            className='
                                                productNameCollection
                                                text-zinc-400 text-[clamp(0.65rem,2.5vw,0.85rem)]
                                                mb-[0.6rem] 2xl:mb-[1rem]
                                            '>{product.name.slice(0, 50) + "..."}</p>


                                        <div className='flex items-center justify-between'>
                                            <p
                                                className='
                                            productPriceCollection
                                            text-white text-[clamp(0.8rem,2.5vw,1.1rem)]
                                        '>₹ {product.price.toLocaleString()}</p>
                                            <div
                                                className='
                                                flex items-center justify-between
                                                w-[9rem]
                                                p-[0.3rem_0.7rem]
                                                text-white
                                                bg-rose-800
                                                rounded-full
                                            '>
                                                <p>Top Selling</p>
                                                <GoHeartFill
                                                className='
                                                    size-[1.4rem]
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
                {/*  */}
            </div>
        </>

    )
}

export default LatestCollections