import mongoose from "mongoose";
const connectDb = async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL)
        console.log("Database connected")
    }
    catch (error){
        console.log("Database not connected")
    }
}
export default connectDb;