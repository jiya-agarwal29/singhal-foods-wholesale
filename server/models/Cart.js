import mongoose from "mongoose";


const cartSchema = new mongoose.Schema({
    customerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: [true, "Customer is required."]
    },
    products: [
        {
            productId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Product",
                required: [true, "Product is required."]
            },

            quantity: {
                type: Number,
                required: [true, "Quantity is required."],
                min: [1, "Quantity must be at least 1."]
            },

            price: {
                type: Number,
                required: [true, "Price is required."],
                min: [0.01, "Price must be greater than 0."]
            }
        }
    ],

    totalAmount: {
        type: Number,
        default: 0,
        min: [0, "Total amount cannot be negative."]
    },
},
    {
        timestamps: true
    }
);

const Cart = mongoose.model("Cart", cartSchema);
export default Cart;
