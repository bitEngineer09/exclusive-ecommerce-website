import React, { useContext, useState } from 'react'
import PrimaryNavbar from '../components/nav/PrimaryNavbar'
import DeliveryInfo from '../components/OrderPage/DeliveryInfo'
import CartTotals from '../components/OrderPage/CartTotals'
import { useLocation } from 'react-router-dom';
import { orderDataContext } from '../store/OrderContext';

const Order = () => {

    // USE LOCATION
    const location = useLocation();
    const { cartItems, totalPrice, totalQuantity } = location.state || {};
    console.log(cartItems)
    // USE STATES
    const [method, setMethod] = useState("");
    const [finalPrice, setFinalPrice] = useState(totalPrice + (totalPrice * 0.02));

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        street: "",
        city: "",
        state: "",
        pincode: "",
        country: "",
        phone: "",
    });


    // CONTEXT DATA
    const { order } = useContext(orderDataContext);


    // ONCHANGE HANDLER
    const onChangeHandler = (e) => {
        const name = e.target.name;  // Jo input field change hua, uska 'name' attribute le raha hai
        const value = e.target.value; // Jo nayi value user ne input ki, wo le raha hai
        setFormData(prev => ({ ...prev, [name]: value }));
    }


    // ONSUBMIT HANDLER
    const onSubmitHandler = async (e) => {
        e.preventDefault();

        if (!method) {
            alert("Please select a payment method!");
            return;
        }

        if (!cartItems || cartItems.length === 0) {
            alert("No items in cart!");
            return;
        }

        // Map items to ensure price is present
        const itemsToSend = cartItems.map(item => ({
            productId: item.productId._id || item.productId,
            quantity: item.quantity,
            sizes: item.sizes,
            price: item.price !== undefined
                ? item.price
                : (item.productId && item.productId.price) // fallback
        }));

        try {
            const orderData = {
                address: formData,
                items: itemsToSend,
                amount: finalPrice,
                paymentMethod: method,
                payment: method === "Razorpay",
                date: new Date().toISOString(),
            };

            const response = await order(orderData);
            console.log(response);
            if (response.success) {
                alert("Order placed successfully!");
            } else {
                console.log(response.message);
                alert("Error placing order: " + response.message);
            }

        } catch (error) {
            console.error("Error placing order:", error);
            alert("Something went wrong. Please try again.");
        }
    }




    return (
        <div className='w-full min-h-screen bg-(--bg-color)'>
            <PrimaryNavbar />
            <div
                className='
                    grid grid-cols-2 items-center
                    px-[15rem]
                    text-white
                    mt-[3rem]
                    gap-[10rem]
                '>

                <DeliveryInfo
                    onChangeHandler={onChangeHandler}
                    firstName={formData.firstName}
                    lastName={formData.lastName}
                    email={formData.email}
                    street={formData.street}
                    city={formData.city}
                    state={formData.state}
                    pincode={formData.pincode}
                    country={formData.country}
                    phone={formData.phone}
                />

                <div className="flex justify-center">
                    <CartTotals
                        method={method}
                        setMethod={setMethod}
                        onSubmitHandler={onSubmitHandler}
                        cartItems={cartItems}
                        totalPrice={totalPrice}
                        totalQuantity={totalQuantity}
                        setFinalPrice={setFinalPrice}
                    />
                </div>
            </div>
        </div>
    )
}

export default Order