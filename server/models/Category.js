import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    categoryName:{
        type:String,
        required:[true,"Category name is required."],
        minlength: [2, "Category name must be at least 2 characters long."],
        maxlength: [100,"Category name cannot exceed 100 characters."],
        trim:true,
        unique:true
    },
    description:{
        type:String,
        required:false,
        minlength: [2, "Description must be at least 2 characters long."],
        maxlength: [200, "Description cannot exceed 200 characters."],
        trim:true
    }
},
{
    timestamps:true
}
);

const Category = mongoose.model("Category", categorySchema);
export default Category;