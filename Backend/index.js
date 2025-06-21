import {config} from "dotenv";
import express,{json} from "express";
import { connect } from "mongoose";

config();
const app = express();
app.use(json());

// mongoose.connect(process.env.MONGO_URL,{
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// })
// .then(()=> console.log("MongoDB Connected"))
// .catch(()=> console.error("MongoDB Connection error", err));

app.get("/",(req,res)=>{
    res.send("Quizzy is UP");
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log(`Connected to port ${PORT}`)
})