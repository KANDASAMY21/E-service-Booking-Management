import Head from "./Head"
import Foot from "./Foot"
import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

function Login(){
    const [form,setForm]=useState({
        name:"",
        password:""
    })

    const navigate=useNavigate()
    const submit=async (e)=>{
        e.preventDefault();
        try{
           const response=await axios.post("http://localhost:4040/e_service/login",form);
           console.log(response.data);

           setForm({
            name:"",
            password:""
           })

           navigate("/welcome",{state:form.name})
        }catch(err){
            alert("Username doesn't exist!!!")
           console.log(err)
        }
    }

    return(
        <>
        <Head />
        <div class="login-container">
               <form onSubmit={submit} className="login">
                  <h2>Login</h2>
                      <input type="text" placeHolder="Username" name="user" required onChange={(e)=>{setForm({...form,name:e.target.value})}}/> 
                      <input type="password" placeHolder="password" name="pass" autoFocus autoComplete="false" required onChange={(e)=>{setForm({...form,password:e.target.value})}} />
                      <button type="submit" className="login-btn">Log-in</button>
                      <p>if you don't have an account <a href="/register">Register</a></p>
                </form>
        </div>
        <Foot />
        </>
    )
}

export default Login