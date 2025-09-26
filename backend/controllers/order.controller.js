import { Order } from "../models/order.model.js";
import { User } from "../models/user.model.js";
import razorpay from 'razorpay';

// PLACE ORDER
export const placeOrder = async (req, res) => {
    try {

        const userId = req?.user?.id;
        if (!userId) return res.status(400).json({ success: false, message: "You are not authenticated" });

        const { items, amount, address } = req.body;

        const orderData = {
            userId, items, amount,
            address,
            paymentMethod: "COD",
            payment: false,
            date: Date.now()
        }

        const newOrder = new Order(orderData); // Order here is model
        await newOrder.save();

        // jab order create ho jaaega, to cartData empty karna hai
        await User.findByIdAndUpdate(userId, { cart: [] });

        return res.status(200).json({
            success: true,
            message: "Order placed"
        })

    } catch (error) {
        console.log(error);
        return res.status(400).json({ success: false, message: "Order placing error", error: error });
    }
}


// FETCH USER ORDERS
export const getAllOrder = async (req, res) => {
    try {
        if (!req.user) return res.status(400).json({ success: false, message: "You are not authenticated" });

        const { userId } = req.query;
        // console.log(userId);

        const orders = await Order.find({ userId }).populate("items.productId");
        if (!orders) return res.status(400).json({ success: false, message: "No order found" });

        return res.status(200).json({ success: true, message: orders });

    } catch (error) {
        console.log(error);
        return res.status(400).json({ success: false, message: error });
    }
}


//! FOR ADMIN
// FETCH ALL ORDERS
export const getAllOrderAdmin = async (req, res) => {
    try {
        const adminOrders = await Order.find({}).populate("items.productId");
        if (!adminOrders) return res.status(400).json({ success: false, message: "Internal server error" });

        return res.status(200).json({ success: true, orders: adminOrders });

    } catch (error) {
        console.log(error.message);
        return res.status(400).json({
            success: false, message: error.message
        })
    }
}


// ORDER STATUS
export const updateStatus = async (req, res) => {
    try {
        const { orderId, status } = req.body;

        await Order.findByIdAndUpdate(orderId, { status });
        return res.status(200).json({ success: true, message: "Status updated" });

    } catch (error) {
        console.log(error.message);
        return {
            success: false,
            message: error.message,
        }
    }
}

//! PAYMENT GATEWAY

// CREATING RAZORPAY INSTANCE
const razorpayInstance = new razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
});


const currency = "inr";
// PLACE ORDER RAZORPAY
export const placeOrderRazorpay = async (req, res) => {
    try {
        const { items, amount, address } = req.body;
        const userId = req.user.id;
        const orderData = {
            items,
            amount,
            userId,
            address,
            paymentMethod: "Razorpay",
            payment: false,
            date: Date.now()
        }

        const newOrder = new Order(orderData);
        await newOrder.save();

        const options = {
            amount: amount * 100,
            currency: currency.toUpperCase(),
            receipt: newOrder._id.toString(),
        }

        await razorpayInstance.orders.create(options, (error, order => {
            if (error) {
                console.log(error);
                return res.status(500).json(error);
            }
            res.status(200).json({ success: true, message: error })
        }))
    } catch (error) {
        console.log(error);
        return res.status(400).json({ success: false, message: error });
    }
}



