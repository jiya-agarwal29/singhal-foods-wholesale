import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
    street: {
        type: String,
        required: true,
        trim: true
    },

    city: {
        type: String,
        required: true,
        trim: true
    },

    state: {
        type: String,
        required: true,
        trim: true
    },

    pincode: {
        type: String,
        required: true,
        match: [/^\d{6}$/, "Invalid pincode."]
    }
});

export default addressSchema;