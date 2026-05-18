import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
  name:{type:String, required:true},
  email:{type:String, required:true, unique:true},
  department:{type:String, required:true},
  skills:[String],
  performanceScore:{type:Number, required:true},
  experience:{type:Number, required:true}
},{timestamps:true});

export default mongoose.model("Employee", employeeSchema);