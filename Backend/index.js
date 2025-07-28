import {config} from "dotenv";
import express,{json} from "express";
import {connect} from "mongoose";
import { templateRouter } from "./routes/index.js";
import { errorHandler } from "./utils/errorHandler.js";
import cors from "cors";


config();
const app = express();
app.use(json());
app.use(cors());

connect(process.env.MONGO_URI)
.then(()=>{
    console.log("Connected to the Database");
})
.catch((err)=>{
    console.error("Cannot connect to the Database",err);
});

app.use("/api/templates", templateRouter);

app.use(errorHandler); 

app.get("/",(req,res)=>{
    res.send("Quizzy is UP");
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log(`Connected to port ${PORT}`)
})