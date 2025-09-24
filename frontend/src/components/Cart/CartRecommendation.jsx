import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { productDataContext } from '../../store/ProductContext';
import { MdOutlineCurrencyRupee } from "react-icons/md";
import RatingStars from '../RatingStars';

const CartRecommendation = () => {

    // USE STATES
    const [products, setProducts] = useState([]);

    // USE NAVIGATE
    const navigate = useNavigate();

    // CONTEXT DATA
    const { getAllProductsData } = useContext(productDataContext);

    // GET RANDOM PRODUCT
    const getRandomProduct = (allProducts, count) => {
        const shuffled = [...allProducts].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    }

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await getAllProductsData();
                const randomSix = getRandomProduct(response.products, 6);
                setProducts(randomSix);
            } catch (error) {
                console.log(error);
            }
        }
        fetchProducts();
    }, [])

    return (
        <div 
            className='
                lg:w-full
                p-[0.8rem] 2xl:p-[1rem]
                flex lg:flex-col
                overflow-auto lg:overflow-hidden
                gap-[1rem] lg:gap-[0.5rem] 2xl:gap-[0.6rem]
                mt-[1.5rem]
                rounded-[1rem]
                bg-zinc-900
            '>
            {
                products.map((pro) => {
                    return (
                        <div
                            key={pro._id}
                            className='
                                flex flex-col lg:flex-row
                                shrink-0
                                w-[10rem] lg:w-full
                                lg:gap-[1.3rem] 2xl:gap-[1rem]
                                text-white
                            '>
                            <img
                                src={pro.image1}
                                alt=""
                                className='
                                    h-[35vw] md:h-[28vw] lg:h-[15vw] xl:h-[11vw] 2xl:h-[8vw]
                                    min-w-[12vw] lg:min-w-[10vw] 2xl:min-w-[7vw]
                                    mb-[1rem]
                                    rounded-[0.5rem] object-cover
                                '/>
                            <div className='w-full'>
                                <p className='text-wrap text-[0.7rem] xl:text-[0.8rem] mb-[0.6rem]'>{pro.name.slice(0, 40)}</p>
                                <RatingStars />
                                <p className='flex items-center text-[1rem] xl:text-[1.2rem] mt-[1rem]'><MdOutlineCurrencyRupee />{pro.price.toLocaleString()}</p>
                                <p
                                    onClick={() => navigate(`/collections/${pro._id}`)}
                                    className='
                                        text-[0.6rem] xl:text-[0.7rem]
                                        mt-[0.5rem]
                                        bg-rose-900
                                        rounded-full
                                        p-[0.3rem_1rem]
                                        cursor-pointer
                                '>See all Buying Options</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default CartRecommendation