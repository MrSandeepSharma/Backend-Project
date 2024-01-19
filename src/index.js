// require("dotenv").config({path: "./env"});

import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
  path: "./env",
});

const port = process.env.PORT || 4000;

connectDB()
  .then(() => {
    // app.on(error, (error) => {
    //   console.log("error", error);
    // });

    app.listen(port, () => {
      console.log("server is running on PORT :", port);
    });
  })
  .catch((error) => {
    console.log("MongoDB connection failed !!", error);
  });

// import express from "express";
// const app = express();

// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//     app.on("error", (error) => {
//       console.error("ERR", error);
//     });

//     app.listen(process.env.PORT, () => {
//       console.log(`App is listening on port: ${process.env.PORT}`);
//     });
//   } catch (error) {
//     console.error(error);
//     throw error;
//   }
// })();
