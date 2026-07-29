import mongoose from "mongoose";
import validator from "validator";

const productSchema = new mongoose.Schema(
    {
        productName: {
            type: String,
            required: [true, "Product name is required."],
            trim: true,
            minlength: [2, "Product name must be at least 2 characters long"],
            maxlength: [100, "Product name cannot exceed 100 characters."],
            unique: true
        },

        categoryId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Category",
            required: [true, "Category is required."]
        },

        brand: {
            type: String,
            trim: true,
            minlength: [2, "Brand name must be at least 2 characters long."],
            maxlength: [50, "Brand name cannot exceed 50 characters."]
        },

        description: {
            type: String,
            trim: true,
            maxlength: [500, "Description cannot exceed 500 characters."]
        },

        unit: {
            type: String,
            required: [true, "Unit is required."],
            enum: {
                values: [
                    "Kg",
                    "Bag",
                    "Packet",
                    "Bottle",
                    "Tin",
                    "Carton",
                    "Piece"
                ],
                message: "Please select a valid unit."
            }
        },

        price: {
            type: Number,
            required: [true, "Price is required."],
            min: [0.01, "Price must be greater than 0."]
        },

        stockQuantity: {
            type: Number,
            required: [true, "Stock quantity is required."],
            min: [0, "Stock quantity cannot be negative."]
        },

        minimumStock: {
            type: Number,
            required: [true, "Minimum stock is required."],
            min: [0, "Minimum stock cannot be negative."]
        },

        image: {
            type: String,
            trim: true,
            validate: {
                validator: validator.isURL,
                message: "Please enter a valid image URL."
            }
        },

        availability: {
            type: Boolean,
            default: true
        }
    },
    {
        timestamps: true
    }
);

const Product = mongoose.model("Product", productSchema);

export default Product;