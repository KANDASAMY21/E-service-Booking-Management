import Head from "./Head"
import Foot from "./Foot"
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";

function Feedback(){
    const [feed,setFeed]=useState({
      name:"",
      feedback:""
    });
    
    const {n}=useParams()
    const navigate=useNavigate()
    const submit=async (e)=>{
        e.preventDefault()
        try{
          const response=await axios.post("http://localhost:4040/e_service/feedback",feed)
          console.log(response.data)
           
          navigate("/thanks")
        }catch(err){
          console.log(err)
        }
    }
    return(
        <>
        <Head />
         <div class="feed-container">
            <h2>Give your value feedbacks to improve our service 🫡</h2>
          <form onSubmit={submit} method="post">
            <input type="text" className="feed-to" placeHolder="Service man name" value={n} onChange={(e)=>{setFeed({...feed,name:e.target.value})}} required/>
              <textarea class="feed-box" placeHolder="give Feedback here" onChange={(e)=>{setFeed({...feed,feedback:e.target.value})}} required></textarea>
              <button type="submit" class="feed-btn">submit</button>
          </form>
         </div>
         <p>{n}</p>
         <Foot />
        </>
    )
}

export default Feedback