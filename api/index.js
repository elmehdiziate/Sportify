import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authrouter from "./routes/auth.js"
import usersrouter from "./routes/users.js"
import fieldsrouter from "./routes/fields.js"
import cors from "cors"
import passport from "passport";
import cookieSession from "cookie-session";
import passportSetup from "./passport.js";

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

app.use(
	cookieSession({
		name: "session",
		keys: ["cyberwolve"],
		maxAge: 24 * 60 * 60 * 1000, 
	})
);

app.use(passport.initialize());
app.use(passport.session()); // This should come after cookie-session


app.use(
	cors({
		origin: "http://localhost:3000",
		methods: "GET,POST,PUT,DELETE",
		credentials: true,
	})
);


app.use(express.json())

app.use("/auth", authrouter)
app.use("/users", usersrouter)
app.use("/fields", fieldsrouter)



app.listen(8000, () =>{
    connect()
    console.log("Connected ...")
})