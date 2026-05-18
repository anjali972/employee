import {useEffect, useState} from "react";
import axios from "axios";

const API = "http://localhost:5000/api";

export default function App(){

  const [employees,setEmployees] = useState([]);
  const [recommendation,setRecommendation] = useState("");

  const [form,setForm] = useState({
    name:"",
    email:"",
    department:"",
    skills:"",
    performanceScore:"",
    experience:""
  });

  const token = localStorage.getItem("token");

  const fetchEmployees = async()=>{
    const res = await axios.get(`${API}/employees`,{
      headers:{Authorization:`Bearer ${token}`}
    });

    setEmployees(res.data);
  };

  useEffect(()=>{
    if(token){
      fetchEmployees();
    }
  },[]);

  const handleChange = (e)=>{
    setForm({...form,[e.target.name]:e.target.value});
  };

  const handleSubmit = async(e)=>{
    e.preventDefault();

    await axios.post(`${API}/employees`,
      {
        ...form,
        skills:form.skills.split(",")
      },
      {
        headers:{Authorization:`Bearer ${token}`}
      }
    );

    fetchEmployees();
  };

  const getAIRecommendation = async(emp)=>{
    const res = await axios.post(
      `${API}/ai/recommend`,
      emp,
      {
        headers:{Authorization:`Bearer ${token}`}
      }
    );

    setRecommendation(res.data.recommendation);
  };

  return(
    <div className="container">
      <h1>AI Employee Analytics System</h1>

      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" onChange={handleChange}/>
        <input name="email" placeholder="Email" onChange={handleChange}/>
        <input name="department" placeholder="Department" onChange={handleChange}/>
        <input name="skills" placeholder="React,Node" onChange={handleChange}/>
        <input name="performanceScore" placeholder="Performance Score" onChange={handleChange}/>
        <input name="experience" placeholder="Experience" onChange={handleChange}/>
        <button>Add Employee</button>
      </form>

      <h2>Employees</h2>

      {
        employees.map((emp)=>(
          <div key={emp._id} className="card">
            <h3>{emp.name}</h3>
            <p>{emp.department}</p>
            <p>Score: {emp.performanceScore}</p>

            <button onClick={()=>getAIRecommendation(emp)}>
              Get AI Recommendation
            </button>
          </div>
        ))
      }

      <div className="recommendation">
        <h2>AI Recommendation</h2>
        <p>{recommendation}</p>
      </div>
    </div>
  );
}