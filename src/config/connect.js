// const mongoose = require('mongoose');
// import mongoose from "mongoose";

// require('dotenv').config();

//  export default  connectDB = async () => {
//   try {
    
//     const conn = await mongoose.connect('mongodb+srv://rahulsahu3612:Rahul%40123@cluster0.gvtlxjm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
    
//     console.log(`MongoDB Connected: ${conn.connection.host}`);
//   } catch (error) {
//     console.error(`Error: ${error.message}`);
//     process.exit(1);
//   }
// };

// module.exports = connectDB;

import mongoose from "mongoose";

 export const connectDB = async(uri)=>{
    // try {
    //     await mongoose.connect(uri)
    //     console.log("DB connected ");
        
    // } catch (error) {
    //     console.log("Database connection error:", error);
        
        
    // }
    try {
    
          const conn = await mongoose.connect('mongodb+srv://rahulsahu3612:Rahul%40123@cluster0.gvtlxjm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          });
          console.log("DB connected ✔");
          
          console.log(`MongoDB Connected: ${conn.connection.host}`);
        } catch (error) {
          console.error(`Error: ${error.message}`);
          process.exit(1);
        }
 }