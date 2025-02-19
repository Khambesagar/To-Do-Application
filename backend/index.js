import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from 'cors';

// Router Imports
import userRoute from "./route/user.route.js"
import todoRouter from "./route/todo.route.js"

const PORT = process.env.PORT || 4000;

const app = express();
app.use(cors())
app.use(express.json());// for data pass in json (POST)
dotenv.config();

const URI = process.env.MongoDB_URI;
const SECRET_KEY =process.env.SECRET_KEY;
// Connect to mongoDB
try{
    mongoose.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true});
    console.log("Connected to MongoDB");
} catch (error){
    console.log("Error connecting to MongoDB", error);
    
}

// Authentication Routes ...................
app.use('/user',userRoute); //Signup and Login

//Todo...............
app.use('/todo',todoRouter); //for todo

app.listen(PORT, () => {
  console.log(`Server is running on port 4000`);
  
})


