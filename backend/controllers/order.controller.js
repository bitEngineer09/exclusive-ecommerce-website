import { Order } from "../models/order.model.js";
import { User } from "../models/user.model.js";


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


// FETCH ALL ORDERS
export const getAllOrder = async (req, res) => {
    try {
        if (!req.user) return res.status(400).json({success: false, message: "You are not authenticated"});

        const { userId } = req.query;
        // console.log(userId);

        const orders = await Order.find({userId}).populate("items.productId");
        if (!orders) return res.status(400).json({success: false, message: "No order found"});

        return res.status(200).json({success: true, message: orders});

    } catch (error) {
        console.log(error);
        return res.status(400).json({success: false, message: error});
    }
}


// FOR ADMIN
