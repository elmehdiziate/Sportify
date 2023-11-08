import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authrouter from "./routes/auth.js"
import usersrouter from "./routes/users.js"
import fieldsrouter from "./routes/fields.js"


const app = express();
dotenv.config();


const connect = async() =>{
    try {
        await mongoose.connect(process.env.MONGO_DB);
        console.log("connected to mongoDB...");
      } catch (error) {
        console.log("enable to connect with database")
        throw error
      }
}

mongoose.connection.on("disconnected", () =>{
    console.log("MongoDB disconnected")
})

mongoose.connection.on("connected", () =>{
    console.log("MongoDB connected")
})


//middlewares

app.use((req,res,next) =>{
    console.log("Hello from middleware")
    next()
})

app.use(express.json())

app.use("/auth", authrouter)
app.use("/users", usersrouter)
app.use("/fields", fieldsrouter)



app.listen(8000, () =>{
    connect()
    console.log("Connected ...")
})