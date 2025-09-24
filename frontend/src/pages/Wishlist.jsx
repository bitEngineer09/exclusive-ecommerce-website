import React, { useContext, useEffect, useState } from 'react';
import PrimaryNavbar from '../components/nav/PrimaryNavbar';
import { productDataContext } from '../store/ProductContext';
import { MdCurrencyRupee } from "react-icons/md";
import { BsEmojiHeartEyes } from "react-icons/bs";
import { IoHeart } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

const Wishlist = () => {

  // USE STATES
  const [wishList, setWishList] = useState([]);
  const navigate = useNavigate();

  // console.log(wishList);
  // CONTEXT DATA
  const { handleWishListData } = useContext(productDataContext);

  useEffect(() => {
    const fetchWishListData = async () => {
      try {
        const response = await handleWishListData();
        // console.log(response.wishListData);
        setWishList(response.wishListData);
        return response;
      } catch (error) {
        console.log(error);
      }
    }
    fetchWishListData();
  }, []);

  return (
    <div className='w-full min-h-screen  bg-(--bg-color)'>
      <PrimaryNavbar />
      <h1 className='text-[3rem] text-white mt-[1.5rem] flex items-center justify-center gap-[1rem]'>My <span className='text-rose-800'>WishList</span> </h1>
      <div className='w-full text-white'>
        <div
          className="
              collectionDiv
              w-[100rem] sm:w-[130rem] md:w-full
              flex md:grid md:grid-cols-3 lg:grid-cols-5
              items-center justify-items-center
              overflow-auto sm:overflow-hidden
              gap-x-[0.5rem] sm:gap-x-[1rem]
              gap-y-[1.3rem]
              mt-[1rem] md:mt-[3rem]
              px-[10rem]
              ">
          {
            // const startIndex = 14
            wishList.map((item, index) => {
              return (
                <div
                  key={index}
                  className='
                      collectionCard
                      w-[55vw] sm:w-[57vw] md:w-[31vw] lg:w-[23vw] lg:max-w-[18rem]
                      h-[72vw] sm:h-[62vw] md:h-[44vw] lg:h-[35vw] xl:h-[33vw] 2xl:h-[25vw] lg:max-h-[26rem]
                      p-[0.5rem]
                      rounded-[0.4rem]
                      bg-stone-900
                      '>
                  <img
                    onClick={() => navigate(`/collections/${item.productId._id}`)}
                    src={item.productId.image1}
                    alt=""
                    className='
                        w-full max-w-[30rem]
                        object-cover rounded-[0.4rem]
                        h-[42vw] sm:h-[42vw] md:h-[29vw] lg:h-[24vw] xl:h-[23vw] lg:max-h-[18rem]
                        cursor-pointer
                        '/>
                  <div className="flex flex-col justify-between details mt-[0.7rem]">
                    <p
                      onClick={() => navigate(`/collections/${item.productId._id}`)}
                      className='
                          productNameCollection
                          text-zinc-400 text-[clamp(0.65rem,2.5vw,0.85rem)]
                          mb-[0.6rem] 2xl:mb-[1rem]
                          hover:text-rose-400 duration-200
                          cursor-pointer
                          '>{item.productId.name.slice(0, 50) + "..."}</p>


                    <div className='flex items-center justify-between'>
                      <p
                        className='
                            flex items-center
                            productPriceCollection
                            text-white text-[clamp(0.8rem,2.5vw,1.1rem)]
                            '><MdCurrencyRupee/> {item.productId.price.toLocaleString()}</p>
                      <div
                        className='
                            flex items-center justify-between
                            w-[10rem]
                            p-[0.3rem_0.7rem]
                            text-white
                            bg-rose-800
                            rounded-full
                            '>
                        <p className='flex items-center gap-[0.5rem]'>My loved item<IoHeart  className='size-[1.1rem]' /></p>

                      </div>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Wishlist