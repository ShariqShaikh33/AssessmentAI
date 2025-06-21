import {config} from "dotenv";
import express,{json} from "express";
import mongoose, { connect } from "mongoose";

config();
const app = express();
app.use(json());

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("Connected to the Database");
})
.catch(()=>{
    console.error("Cannot connect to the Database");
});


app.get("/",(req,res)=>{
    res.send("Quizzy is UP");
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log(`Connected to port ${PORT}`)
})