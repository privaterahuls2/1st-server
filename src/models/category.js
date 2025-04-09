import mongoose from "mongoose";

const categorySchema= new mongoose.Schema({
    name: {type:String, requied:true},
    image:{type:String, requied:true},

})

const Category = mongoose.model("Category", categorySchema);

export default Category;