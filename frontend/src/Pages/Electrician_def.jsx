import Head from "./Head"
import { Link } from "react-router-dom"
import Electric from "../assets/tester.png"
import Foot from "./Foot"
import axios from "axios"
import { useNavigate } from "react-router-dom"

function Electrician(){
    const work="electrician"
    const navigate=useNavigate()
    const fetchData=async ()=>{
       try{
         const response=await axios.get(`http://localhost:4040/e_service/fetch/${work}`)
         const data=response.data.work_data

         console.log(data);

        navigate("/electrician",{state:data});
       }catch(err){

         navigate("/nouser")
         console.log(err)
       }
    }
    return(
        <>
        <Head />
        <div className="req-container">
    <div className="plumb-div">
        <h1>Welcome </h1>
        <h2>Thank you for choosing Instant Service</h2>
        <h3><span>Powering Up Your Peace of Mind.</span>
            Electricity is playing a vital role in our life,<br />no worries We are here to Lighting Up Your World with Expertise
        </h3>
       <div className="plumb-div2">
        <img src={Electric} className="plumb" />
        <button onClick={fetchData} className="def-btn">Take a tour </button>
       </div> 
    </div>

</div>
<Foot />
        </>
    )
}
export default Electrician