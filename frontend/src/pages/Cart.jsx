import React, { useContext, useEffect, useState } from 'react';
import PrimaryNavbar from '../components/nav/PrimaryNavbar';
import { cartDataContext } from '../store/CartContext';
import shoppingBag from '../assets/shopping-bag.png';
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import CartItemsCards from '../components/Cart/CartItemsCards';
import CartRecommendation from '../components/Cart/CartRecommendation';
import ProgressBar from '../components/Cart/ProgressBar';
import { useNavigate } from 'react-router-dom';


const Cart = () => {

  // USE STATES
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState("");
  const FREE_DELIVERY_THRESHOLD = 500;

  // NAVIGATION
  const navigate = useNavigate();


  // CONTEXT DATA
  const { cartItems, setCartItems } = useContext(cartDataContext);


  // TOTAL PRICE
  useEffect(() => {
    if (cartItems.length > 0) {
      const total = cartItems.reduce((acc, item) => {
        return acc + item?.productId?.price * item?.quantity;
      }, 0);
      setTotalPrice(total);
    } else {
      setTotalPrice(0);
    }
  }, [cartItems]);



  // TOTAL QUANTITY
  useEffect(() => {
    if (cartItems.length > 0) {
      const totalItems = cartItems.reduce((acc, item) => {
        return acc + item.quantity;
      }, 0)
      setTotalQuantity(totalItems);
    } else {
      setTotalQuantity(0);
    }
  }, [cartItems])

  // console.log(cartItems)



  // UPDATE ITEM QUANTITY
  const handleUpdateQuantity = (id, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.productId._id === id ? { ...item, quantity: newQuantity } : item
      )
    )
  };


  return (
    <div className='w-full bg-(--bg-color)'>
      <PrimaryNavbar />
      <p
        className='
          text-white
           w-full
           px-[1rem] xl:px-[6rem] 2xl:px-[10rem]
           mt-[2rem]'>
        Home /
        <span className='text-(--color-primary)'> Cart</span>
      </p>
      {
        cartItems.length > 0
          ? <div
            className="
              flex flex-col lg:flex-row justify-between
              gap-[1rem] 2xl:gap-[2rem]
              mt-[1rem]
              w-full
              p-0 md:px-[1rem] xl:px-[6rem] 2xl:px-[10rem]
            ">

            {/* LEFT CONTENT */}
            <div className='text-white flex-1 sticky top-[2rem] h-fit'>
              <div className='bg-zinc-900 p-[0.7rem] md:p-[0.8rem_1.2rem] 2xl:p-[1rem_1.5rem] md:rounded-[1rem]'>
                <p className='text-[1.8rem]'>Shopping Cart</p>
                <div className='w-full border border-zinc-700 mt-[1.5rem]'></div>


                {/* CART CARD */}
                <div
                  className='
                flex flex-col items-center justify-between
                gap-[1rem] mt-[1rem]
              '>
                  {
                    cartItems.map((item, index) => {
                      return (
                        <CartItemsCards
                          key={index} item={item} handleUpdateQuantity={handleUpdateQuantity} />
                      )
                    })
                  }
                </div>
                <p className='flex items-center justify-end py-[1rem] gap-[0.5rem] mt-[1rem] text-[1.3rem]'>Subtotal ({totalQuantity} items):
                  <span className='flex items-center underline underline-offset-2'>
                    <MdOutlineCurrencyRupee />{totalPrice.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </span>
                </p>
              </div>
              <div className='bg-rose-900 mt-[2rem] p-[1rem] xl:p-[2rem] text-[0.7rem] md:rounded-[1rem]'>
                <p>The price and availability of items at Amazon.in are subject to change. The shopping cart is a temporary place to store a list of your items and reflects each item's most recent price.
                  Do you have a promotional code? We'll ask you to enter your claim code when it's time to pay.
                </p>
              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div className='lg:w-[29vw] xl:w-[28vw] 2xl:w-[23vw] flex flex-col text-white'>
              <div className='p-[1rem] 2xl:p-[1.5rem] bg-zinc-900 md:rounded-[1rem] '>
                <div className='w-full flex gap-[0.5rem]'>
                  <ProgressBar value={totalPrice} max={FREE_DELIVERY_THRESHOLD} />
                  <p className='flex items-center'><MdOutlineCurrencyRupee />{totalPrice.toLocaleString()}</p>
                </div>
                <p
                  className='
              flex items-center
              gap-[0.5rem]
              mt-[0.5rem]
              text-[0.9rem]
              text-emerald-500
            '>
                  <RiVerifiedBadgeFill /> <>{
                    totalPrice >= FREE_DELIVERY_THRESHOLD
                      ? "Your order is eligible for FREE Delivery."
                      : `Add more items worth Rs.${FREE_DELIVERY_THRESHOLD - totalPrice} to get free Delivery.`
                  }</>
                </p>
                <p className='flex items-center justify-between mt-[1rem] text-[1.1rem] 2xl:text-[1.3rem]'>Subtotal ({totalQuantity} items):
                  <span className='flex items-center'>
                    <MdOutlineCurrencyRupee />{totalPrice.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </span>
                </p>

                {/* BUY BUTTON */}
                <button
                  onClick={() => navigate('/order', {
                    state: {
                      cartItems: cartItems,
                      totalPrice: totalPrice,
                      totalQuantity: totalQuantity
                    }
                  })}
                  className='
                    w-full
                    h-[9vw] sm:h-[6vw] md:h-[5vw] lg:h-[3vw] 2xl:h-[2vw]
                    bg-indigo-600
                    rounded-full
                    mt-[2rem] cursor-pointer
                  '>Proceed to Buy</button>
              </div>

              {/* CART RECOMMENDATIONS */}
                <CartRecommendation />
            </div>
          </div>

          : <div className='w-full h-screen flex flex-col items-center justify-center'>
            <img src={shoppingBag} alt="" className='w-[10rem]' />
            <p className='text-white text-[2rem]'>{`Nothing to show in your cart :(`}</p>
          </div>
      }
    </div>
  )
}

export default Cart