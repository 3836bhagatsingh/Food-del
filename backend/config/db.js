import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('mongodb+srv://3836bhagatsingh:9149363499@cluster0.qjitc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/food-del').then(()=>console.log("DB Connected"));
   
}


