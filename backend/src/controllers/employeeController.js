import Employee from "../models/Employee.js";

export const addEmployee = async(req,res)=>{
  try{
    const employee = await Employee.create(req.body);
    res.status(201).json(employee);
  }catch(error){
    res.status(400).json({message:error.message});
  }
};

export const getEmployees = async(req,res)=>{
  const employees = await Employee.find();
  res.json(employees);
};

export const searchEmployee = async(req,res)=>{
  const {department} = req.query;
  const employees = await Employee.find({department});
  res.json(employees);
};

export const deleteEmployee = async(req,res)=>{
  await Employee.findByIdAndDelete(req.params.id);
  res.json({message:"Deleted"});
};