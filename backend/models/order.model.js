import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    items: [
        {
            productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
            quantity: { type: Number, required: true },
            price: { type: Number, required: true },
        }
    ],
    amount: {
        type: Number,
        required: true,
    },
    address: {
        firstName: String,
        lastName: String,
        street: String,
        city: String,
        state: String,
        pincode: String,
        country: String,
        phone: String,
    },
    status: {
        type: String,
        enum: ["pending", "processing", "shipped", "delivered", "cancelled"],
        default: "pending",
        required: true,
    },
    paymentMethod: {
        type: String,
        required: true,
    },
    payment: {
        type: Boolean,
        required: true,
        default: false,
    },
    date: {
        type: Date,
        required: true,
        default: Date.now(),
    }
}, { timestamps: true });

export const Order = mongoose.model("Order", orderSchema);