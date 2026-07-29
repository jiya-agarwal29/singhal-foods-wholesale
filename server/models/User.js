import mongoose from "mongoose";
import validator from "validator";
import addressSchema from "./address.schema.js";

const userSchema = new mongoose.Schema({
    ownerName: {
        type: String,
        trim: true,
        required: [true, "Owner name is required!"],
        minlength: [2, "Owner name must be at least 2 characters long."],
        maxlength: [50, "Owner name cannot exceed 50 characters."]
    },

    email: {
        type: String,
        required: [true, "Email is required."],
        unique: true,
        lowercase: true,
        trim: true,
        validate: {
            validator: function (value) {
                return validator.isEmail(value);
            },
            message: "Please enter a valid email address."
        }
    },

    phone: {
        type: String,

        required: [true, "Phone number is required."],
        trim: true,
        validate: {
            validator: function (value) {
                return validator.isMobilePhone(value, "en-IN");
            },
            message: "Please enter a valid Indian mobile number."
        }
    },

    password: {
        type: String,
        required: [true, "Password is required."],
        minlength: [8, "Password must be at least 8 characters long."],
        maxlength: [128, "Password cannot exceed 128 characters."],
        validate: {
            validator: function (value) {
                return validator.isStrongPassword(value, {
                    minLength: 8,
                    minLowercase: 1,
                    minUppercase: 1,
                    minNumbers: 1,
                    minSymbols: 1
                });
            },
            message: "Password must contain at least 8 characters, including 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character."
        }
    },

    role: {
        type: String,
        required: [true, "Role is required"],
        default: "customer",
        enum: {
            values: ["customer", "admin"],
            message: "Role must be either customer or admin."
        }
    },

    businessName: {
        type: String,
        required: [function () {
            return this.role === "customer";
        }, "Business name is required for customers."],
        trim: true,
        minlength: [2, "Business name must be at least 2 characters long."],
        maxlength: [100, "Business name cannot exceed 100 characters."]
    },

    businessType: {
        type: String,
        required: [function () {
            return this.role === "customer";
        }, "Business type is required for customers."],
        enum: {
            values: ["Hotel",
                "Restaurant",
                "Cafe",
                "Bakery",
                "Retail Store",
                "Caterer",
                "Mess",
                "Other"],
            message: "Please select a valid business type."
        }
    },

    gstNumber: {
        type: String,
        uppercase: true,
        trim: true,
    },

    deliveryAddress:addressSchema,

    isVerified: {
        type: Boolean,
        default: false
    },
},
    {
        timestamps: true
    }
);

const User = mongoose.model("User", userSchema);

export default User;