import mongoose from "mongoose";
import addressSchema from "./address.schema.js";

const orderSchema = new mongoose.Schema(
{
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
        required: [true, "Total amount is required."],
        min: [0, "Total amount cannot be negative."]
    },

    businessNotes: {
        type: String,
        trim: true,
        maxlength: [500, "Business notes cannot exceed 500 characters."]
    },

    orderStatus: {
        type: String,
        default: "Pending",
        enum: {
            values: [
                "Pending",
                "Confirmed",
                "Packed",
                "Out for Delivery",
                "Delivered",
                "Cancelled"
            ],
            message: "Please select a valid order status."
        }
    },

    deliveryAddress:addressSchema,

    orderDate: {
        type: Date,
        default: Date.now
    }
},
{
    timestamps: true
}
);

const Order = mongoose.model("Order", orderSchema);

export default Order;