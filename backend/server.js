import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import employeeRoutes from "./src/routes/employeeRoutes.js";
import authRoutes from "./src/routes/authRoutes.js";
import aiRoutes from "./src/routes/aiRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("MongoDB Connected"))
.catch(err=>console.log(err));

app.use("/api/employees", employeeRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/ai", aiRoutes);

app.get("/", (req,res)=>{
  res.json({message:"API Running"});
});

app.listen(process.env.PORT, ()=>{
  console.log(`Server running on ${process.env.PORT}`);
});