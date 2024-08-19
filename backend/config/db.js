import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://greatstack:3616269690900@cluster0.y6bsz.mongodb.net/delivery-app').then(()=> console.log("DB Connected"));
}