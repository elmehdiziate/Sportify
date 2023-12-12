import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authrouter from "./routes/auth.js";
import usersrouter from "./routes/users.js";
import fieldsrouter from "./routes/fields.js";
import cors from "cors";
import passport from "passport";
import cookieSession from "cookie-session";
import bookingrouter from "./routes/booking.js";
import paypal from "paypal-rest-sdk";
import bodyParser from "body-parser";

import passportSetup from "./passport.js";

const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB);
    console.log("connected to mongoDB...");
  } catch (error) {
    console.log("enable to connect with database");
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("MongoDB disconnected");
});

mongoose.connection.on("connected", () => {
  console.log("MongoDB connected");
});

//middlewares

app.use((req, res, next) => {
  console.log("Hello from middleware");
  next();
});

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

app.use(express.json());

app.use("/auth", authrouter);
app.use("/users", usersrouter);
app.use("/fields", fieldsrouter);
app.use("/booking", bookingrouter);

// Configure PayPal SDK
paypal.configure({
  mode: "sandbox",
  client_id: "AbhfZU1xYqOiebj4XZ8e1XNvKAXdBc2OWxpFaT-9xfzsAUfyH9k_b31cTIylTuAPNxwieuKovBEHH_lp",
  client_secret: "EMtPKP8vUTJR3hum7jfpuj7jGuQZLWUVT4jM2buVxWJZrEZ_SCh-Otkcivrqo9fgpHyVK-p1AVyD-619",
});

// Add bodyParser middleware to parse JSON requests
app.use(bodyParser.json());

// Define a route for handling payments
app.post("/api/pay", async (req, res) => {
  const { sessionId, hours, paymentMethod } = req.body;

  // Calculate total price based on hours (assuming $5 per hour)
  const totalPrice = parseFloat(hours) * 5;

  const create_payment_json = {
    transactions: [
      {
        item_list: {
          items: [
            {
              name: "Booking",
              sku: "001",
              price: totalPrice.toFixed(2),
              currency: "USD",
              quantity: 1,
            },
          ],
        },
        amount: {
          currency: "USD",
          total: totalPrice.toFixed(2),
        },
      },
    ],
  };

  try {
    const payment = await paypal.payment.create(create_payment_json);

    // Extract the approval URL from the payment response
    const approvalUrl = payment.links.find((link) => link.rel === "approval_url").href;

    res.json({ approvalUrl });
  } catch (error) {
    console.error("Error creating PayPal payment:", error);
    res.status(500).json({ error: "Failed to create PayPal payment." });
  }
});

app.listen(8000, () => {
  connect();
  console.log("Connected ...");
});
