import express from "express";
const app = express();

import dotenv from "dotenv";
dotenv.config();

import "express-async-errors";
import morgan from "morgan";

// db and authenicateUser
import connectDB from "./db/connect.js";

//routers
import authRouter from "./routes/authRoutes.js";
import productRouter from "./routes/productRoutes.js";

// middleware
import notFoundMiddleware from "./middleware/not-found.js";
import errorHandlerMiddleware from "./middleware/error-handler.js";

if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}
app.use(express.json({ limit: "1mb" }));

app.get("/", (req, res) => {
  res.send("Welcome!");
});

app.get("/api/v1", (req, res) => {
  res.send("Welcome!");
});

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/products", productRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
  } catch (error) {
    console.log(error);
  }
};

start();
