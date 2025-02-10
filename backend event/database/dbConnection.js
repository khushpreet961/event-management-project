import mongoose from "mongoose";

export const dbConnection =()=>{
    mongoose.connect(process.env.MONGO_URL,{dbName:"EVENT_MANAGEMENT"}).then(()=>{
        console.log("connected to database");
    }).catch((err)=>{
        console.log("some error is occured while connecting to database",err);
        
    });
};