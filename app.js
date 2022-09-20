require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const apiRouter = require("./app/router/api-router");
//const PORT = 4000;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false })); // get post data

app.use("/api", apiRouter);

console.log("connecting to db...");
//let MONGOODB_URI = "mongodb://127.0.0.1:27017/zomatoapi";
//let MONGOODB_URI = "mongodb+srv://FirstApp:FirstApp123@firstapp.jmnugej.mongodb.net/zomatoapitest";

mongoose.connect(process.env.MONGOODB_URI).then(()=>{
  app.listen(process.env.PORT,function(){
      console.log("connected !!!");
      console.log(`app is running on http://localhost:${process.env.PORT}`);
  });
}).catch((error)=>{
      console.log(error);
      process.exit(1);
});
