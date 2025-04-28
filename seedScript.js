import "dotenv/config.js"
import mongoose from "mongoose"
import {Category, Product} from "./src/models/index.js";
import { categories, products } from "./seedData.js";

async function seedDatabase() {
    try {
        await mongoose.connect('mongodb+srv://rahulsahu3612:Rahul%40123@cluster0.gvtlxjm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
        await Product.deleteMany({});
        await Category.deleteMany({});

        const categoryDocs = await Category.insertMany(categories);

        const categoryMap = categoryDocs.reduce((map,category) =>{
            map[category.name] = category._id;
            return  map
        }, {})

        const productWithCategoryIds = products.map((product)=>({
            ...product,
            category:categoryMap[product.category],
        }))

        await Product.insertMany(productWithCategoryIds);

        console.log("Database Seeded Successfully ❤️");

        
    } catch (error) {
        console.error("Error Seeding database:", error)
    } finally {
        mongoose.connection.close()
    }
}

seedDatabase();