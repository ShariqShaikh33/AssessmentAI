import {dotenv} from "dotenv";
import express,{json} from "express";
import { connect } from "mongoose";

const app = express();
app.use(express.json());

// mongoose.connect(process.env.MONGO_URL,{
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// })
// .then(()=> console.log("MongoDB Connected"))
// .catch(()=> console.error("MongoDB Connection error", err));

app.get("/",(req,res)=>{
    res.send("Quizzy is UP");
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
    console.log(`Connected to port ${process.env.PORT}`)
})