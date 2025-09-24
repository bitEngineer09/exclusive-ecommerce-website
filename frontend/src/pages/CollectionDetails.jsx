import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { productDataContext } from '../store/ProductContext';
import PrimaryNavbar from '../components/nav/PrimaryNavbar';
import { TbTruckDelivery } from "react-icons/tb";
import { SlPaypal } from "react-icons/sl";
import { IoMdReturnLeft } from "react-icons/io";
import { FiLock } from "react-icons/fi";
import Footer from '../components/Footer/Footer';
import ItemDetails from '../components/CollectionDetails/ItemDetails';
import RecommendedProducts from '../components/CollectionDetails/RecommendedProducts';
import { cartDataContext } from '../store/CartContext';
import Review from '../components/Review/Review';
import ReviewBanner from '../components/Review/ReviewBanner';

const CollectionDetails = () => {

    // USE STATE
    const [item, setItem] = useState({});
    const [selectedSize, setSelectedSize] = useState([]);
    const [selectedImage, setSelectedImage] = useState("");
    const [counter, setCounter] = useState(1);
    const [isZoomed, setIsZoomed] = useState(false);
    const [zoomStyle, setZoomStyle] = useState({});

    const handleMouseEnter = () => setIsZoomed(true);
    const handleMouseLeave = () => setIsZoomed(false);

    // console.log(item?.reviews?[0]?.comment)

    // USE PARAMS
    const { id } = useParams();
    // console.log(id)

    // CONTEXT DATA
    const { singleProduct, handleAddWishList, handleWishListData } = useContext(productDataContext);
    const { addItemsToCart } = useContext(cartDataContext);
    const imageKeys = ["image1", "image2", "image3", "image4"];


    // DATA VARIABLES
    const features = [
        { icon: <TbTruckDelivery className='text-[1.5rem] 2xl:text-[2rem] mb-[0.4rem] 2xl:mb-[0.7rem] text-pink-700' />, content: "Fast Delivery" },
        { icon: <SlPaypal className='text-[1.5rem] 2xl:text-[2rem] mb-[0.4rem] 2xl:mb-[0.7rem] text-pink-700' />, content: "Pay on Delivery" },
        { icon: <IoMdReturnLeft className='text-[1.5rem] 2xl:text-[2rem] mb-[0.4rem] 2xl:mb-[0.7rem] text-pink-700' />, content: "10 days Return & Exchange" },
        { icon: <FiLock className='text-[1.5rem] 2xl:text-[2rem] mb-[0.4rem] 2xl:mb-[0.7rem] text-pink-700' />, content: "Secure transaction" },
    ]


    // MOUSE ZOOM FUNCTION
    const handleMouseMove = (e) => {
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
        const x = ((e.pageX - left) / width) * 100;
        const y = ((e.pageY - top) / height) * 100;

        setZoomStyle({
            backgroundImage: `url(${item[selectedImage || "image1"]})`,
            backgroundPosition: `${x}% ${y}%`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "200%", // zoom level
        });
    };

    const category = item.category;
    const ID = item._id;


    // COUNTER FUNCTION
    const handleIncrement = () => {
        setCounter((prev) => prev + 1);
    }

    const handleDecrement = () => {
        setCounter((prev) => (prev > 1) ? prev - 1 : prev);
    }

    const averageRating = item?.reviews?.length
        ? item.reviews.reduce((acc, review) => acc + review.rating, 0) / item.reviews.length
        : 0;

    useEffect(() => {
        const fetchSingleProductData = async (id) => {
            try {
                const response = await singleProduct(id);
                // console.log(response.product);
                setItem(response.product);
                return response.product;
            } catch (error) {
                console.log(error);
            }
        }
        fetchSingleProductData(id)
    }, [id]);

    // console.log(item.reviews)


    return (
        <div className='bg-(--bg-color) min-h-screen flex flex-col'>
            <PrimaryNavbar />
            <div className='w-full '>
                <div className=" mt-[0.7rem] sm:mt-[1.2rem] md:mt-[2rem] p-[0.2rem]mx-auto">
                    <div
                        className="
                            grid
                            grid-cols-1
                            md:grid-cols-[45%_51%]
                            lg:grid-cols-[40%_54%]
                            2xl:grid-cols-[45%_45%]
                            gap-[1.5rem] md:gap-[1rem]
                        ">

                        {/* IMAGE CONTAINER */}
                        <div
                            className='
                                grid grid-cols-[80%] sm:grid-cols-[65%] md:grid-cols-[12%_70%] xl:grid-cols-[13%_auto]
                                items-start justify-center 
                                md:gap-[0.5rem] xl:gap-[2rem] 
                            '>
                            {/* ALL IMAGES */}
                            <div className='flex flex-row md:flex-col w-full space-y-[1rem]'>
                                {
                                    imageKeys.map((image, index) => {
                                        return (
                                            <img
                                                key={index}
                                                src={item[image]}
                                                alt="itemImage"
                                                onClick={() => setSelectedImage(image)}
                                                className='
                                                    cursor-pointer
                                                    w-full
                                                    h-[20vw] sm:h-[18vw] md:h-[6vw] xl:h-[4.5vw]
                                                    object-cover rounded-[0.5rem]
                                                '/>
                                        )
                                    })
                                }

                            </div>

                            {/* PREVIEW IMAGE */}
                            <div className='w-full sm:mt-[1rem] md:mt-0'>
                                <div
                                    className='
                                        w-full 
                                        h-[22rem] sm:h-[76vw] md:h-[45vw] lg:h-[40vw] xl:h-[44vw] 2xl:h-[40vw]
                                        relative overflow-hidden rounded-[1rem]
                                    '
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                    onMouseMove={handleMouseMove}
                                >
                                    <img
                                        src={item[selectedImage || "image1"]}
                                        alt="image1"
                                        className='
                                        w-full h-full object-cover rounded-[1rem]
                                    '/>
                                </div>
                            </div>
                        </div>

                        {/* ZOOMED IMAGE ON RIGHT SIDE */}
                        {isZoomed ?
                            <div
                                className='
                                    absolute right-[10%] top-[16.5%]
                                    xl:w-[35vw] xl:h-[30vw] 2xl:w-[45vw] 2xl:h-[40vw]
                                    border border-gray-300
                                    rounded-lg shadow-lg
                                '
                                style={zoomStyle}
                            />
                            :
                            <ItemDetails
                                item={item}
                                counter={counter}
                                handleDecrement={handleDecrement}
                                handleIncrement={handleIncrement}
                                features={features}
                                addItemsToCart={addItemsToCart}
                                selectedSize={selectedSize} setSelectedSize={setSelectedSize}
                                handleAddWishList={handleAddWishList}
                                handleWishListData={handleWishListData}
                                averageRating={averageRating}
                            />
                        }

                    </div>
                </div>
            </div>


            {/* RECOMMENDED PRODUCTS */}
            <RecommendedProducts category={category} ID={ID} />

            <div className="grid grid-cols-[50%_45%] justify-between px-[6rem] mt-[10rem]">

                {/* Right Side: Sticky ReviewBanner */}
                <div className="h-fit sticky top-[3rem]">
                    <ReviewBanner />
                </div>

                {/* Left Side: Reviews */}
                <div>
                    <Review id={ID} reviews={item.reviews} />
                </div>
            </div>

            <div className="footer flex-1 w-full">
                <Footer />
            </div>
        </div>

    )
}

export default CollectionDetails