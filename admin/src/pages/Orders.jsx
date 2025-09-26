import React from 'react';
import Nav from '../components/nav/Nav';
import SideBar from '../components/nav/SideBar';
import { useContext } from 'react';
import { orderDataContext } from '../store/OrderContext';
// import { useNavigate } from 'react-router-dom';
import { MdCurrencyRupee } from "react-icons/md";

const Orders = () => {

  const { finalData, handleStatusChange } = useContext(orderDataContext);
  // const navigate = useNavigate();

  const statusOptions = ["pending", "processing", "shipped", "delivered", "cancelled"];

  return (
    <div className='w-full'>
      <Nav />
      <div className="mainContainer flex h-screen">
        <SideBar />
        <div
          className="
            mainContent
            flex flex-col overflow-auto
            gap-[1rem]
            w-full min-h-screen 
            bg-[#0C0A09] px-[2rem]
            pb-[4rem]
          ">
          {
            finalData?.map((itemDetails, index) => {
              const newDate = new Date(itemDetails.date).toLocaleDateString("en-IN", {
                year: "numeric",
                month: "short",
                day: "numeric"
              });
              return (
                <div key={index} className='mt-[3rem] text-white'>
                  <div className='flex items-center w-full justify-between'>
                    <span
                      className='bg-zinc-900 p-[1rem] rounded-[0.3rem] text-[1.7rem]'>
                      #ORDER ID: {itemDetails?.orderId}
                    </span>
                    {/* <p className='text-[1.7rem]'>
                      Placed on: <span
                        className='text-rose-500'>
                        {newDate}
                      </span>
                    </p> */}
                  </div>
                  <div className='w-full bg-zinc-900 p-[1.3rem] rounded-[0.5rem] mt-[1rem]'>
                    <div className='flex justify-between items-center'>
                      <div className='flex gap-[2rem]'>

                        {/* PRODUCT IMAGE */}
                        <img
                          src={itemDetails.productDetails.image1}
                          alt=""
                          className='w-[15rem] rounded-[0.5rem]'
                        />

                        {/* MAIN CONTENT */}
                        <div className='w-[45rem] flex flex-col justify-center gap-[1rem]'>
                          <p
                            // onClick={() => navigate(`/collections/${itemDetails.productDetails._id}`)}
                            className='text-[1.8rem] text-blue-400 cursor-pointer'>
                            {itemDetails.productDetails.name.slice(0, 40) + "..."}
                          </p>
                          <p
                            className='text-[1.4rem] text-zinc-400'>
                            {itemDetails.productDetails.description.slice(0, 110) + "..."}
                          </p>
                          <p
                            className='text-[1.4rem]'>
                            Ordered Sizes: {itemDetails.sizes.join(", ")}
                          </p>
                          <p
                            className='flex items-center text-[1.6rem]'>
                            Price: <span className='flex items-center font-medium text-emerald-500'>
                              <MdCurrencyRupee />{(itemDetails.price).toLocaleString()}
                            </span>
                          </p>
                          <p
                            className='flex items-center text-[1.6rem] underline underline-offset-3'>
                            Total Price: <span
                              className='flex items-center text-rose-500 font-medium'>
                              <MdCurrencyRupee />
                              {(itemDetails.price * itemDetails.quantity).toLocaleString()}
                            </span>
                          </p>
                        </div>
                      </div>

                      {/* ORDER DETAILS */}
                      <div className='text-[1.7rem] space-y-[0.7rem]'>
                        <p>
                          Qty: {itemDetails.quantity}
                        </p>
                        <p>
                          Method: {itemDetails.paymentMode}
                        </p>
                        <p>
                          Status: {itemDetails.status}
                        </p>
                        <p>
                          Date: <span className='text-pink-500'>{newDate}</span>
                        </p>
                      </div>

                      {/* CUSTOMER DETAILS */}
                      <div className='text-[1.4rem] space-y-[0.7rem]'>
                        <p>
                          Customer: {itemDetails.address.firstName + " " + itemDetails.address.lastName}
                        </p>
                        <p>
                          Phone: {itemDetails.address.phone}
                        </p>
                        <p>
                          Country: {itemDetails.address.country}
                        </p>
                        <p>
                          State: {itemDetails.address.state}
                        </p>
                        <p>
                          City: {itemDetails.address.city}
                        </p>
                        <p>
                          address: {itemDetails.address.street}, PinCode: {itemDetails.address.pincode}
                        </p>
                      </div>

                      {/* ORDER STATUS */}
                      <select
                        value={itemDetails.status}
                        onChange={(e) => handleStatusChange(itemDetails.orderId, e.target.value)}
                        className='
                            text-[1.4rem]
                            outline-none
                            p-[1rem_2rem]
                            rounded-[1rem]
                            bg-zinc-700
                            text-white font-medium
                        '>
                        {
                          statusOptions.map((status, index) => (
                            <option key={index} value={status}>
                              {status}
                            </option>
                          ))
                        }
                      </select>

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

export default Orders