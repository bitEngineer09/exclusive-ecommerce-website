import React, { createContext, useEffect, useState } from 'react'
import { getOrders, placeOrder } from '../services/order.services';

export const orderDataContext = createContext();

const OrderContext = ({children}) => {

    // USE STATES
    const [orderData, setOrderData] = useState([]);

    // PLACE ORDER
    const order = async (orderData) => {
        try {
            console.log(orderData)
            const response = await placeOrder(orderData);
            console.log(response.data);
            return response.data;
        } catch (error) {
            console.log(error);
            return {
                success: false,
                message: error,
            }
        }
    }


    // GET ALL ORDERS
    const getOrder = async (userId) => {
        try {
            const response = await getOrders(userId);
            return response.data;
        } catch (error) {
            console.log(error);
            return {
                success: false,
                message: error,
            }
        }
    }

    console.log(orderData)

    const value = {
        order, getOrder
    }

  return (
    <orderDataContext.Provider value={value}>
        {children}
    </orderDataContext.Provider>
  )
}

export default OrderContext