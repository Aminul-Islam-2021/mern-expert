// import files & packages
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import DBConnect from "./config/dbConfig.js";

// initialize express app
const app = express();

// invoke and call the function to connect database
DBConnect();

// built-in middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// imported middlewares
app.use(cors());
app.use(cookieParser());

// default route
app.get("/", (req, res) => {
  res.status(200).json("API is running for MERN-Expert");
});

// export the app
export default app;
