import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
    },
    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user"
    },
    cart: [
        {
            productId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Product"
            },
            quantity: {
                type: Number,
                default: 1,
            },
            sizes: [
                {
                    type: String,
                }
            ],
            price: {
                type: Number,
                required: true,
            }
        },
    ],
    wishList: [
        {
            productId: {
                type: mongoose.Schema.Types.ObjectId,   
                ref: "Product",
            }
        }
    ]
}, { timestamps: true });

export const User = mongoose.model("User", userSchema);

