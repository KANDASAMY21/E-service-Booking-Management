import Head from "./Head"
import Foot from "./Foot"
import { Link } from "react-router-dom"
import { useState } from "react"
import axios from 'axios'
import { useNavigate } from "react-router-dom"

function Register(){
    const [form,setForm]=useState({
        name:"",
        password:"",
        retyped:""
    })
    const navigate=useNavigate()
    const submit=async (e)=>{
        e.preventDefault();
        try{
          const response=await axios.post("http://localhost:4040/e_service/register",form)
          console.log(response.data)

          setForm({
            name:"",
            password:"",
            retyped:""
          })

         navigate("/welcome",{state:form.name})
        }catch(err){
          alert("Username already exist!!!")
           console.log(err)
        }
    }

    return(
        <>
        <Head />
        <div className="login-container">
   <form className="login" onSubmit={submit}>
    <h2>Register</h2>
      <input type="text" placeHolder="Username" name="user" required onChange={(e)=>{setForm({...form,name:e.target.value})}} /> 
      <input type="password" placeHolder="password" name="pass" autoFocus autoComplete="false" required onChange={(e)=>{setForm({...form,password:e.target.value})}}/>
      <input type="password" placeHolder="Retype" name="repass" autoFocus autoComplete="false" required onChange={(e)=>{setForm({...form,retyped:e.target.value})}}/>
      
      <button type="submit" className="login-btn">Signup</button>
      <p>if you have an account <a href="/">Sign in</a></p>
           
   </form>
</div>
<Foot />
</>
    )
}
export default Register