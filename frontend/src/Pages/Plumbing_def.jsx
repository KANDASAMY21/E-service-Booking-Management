import Head from "./Head"
import Plumber from "../assets/Plumber.png"
import Foot from "./Foot"
import axios from "axios"
import { useNavigate } from "react-router-dom"

function Plumbing(){
    const work="plumber"
    const navigate=useNavigate()
    const fetchData=async ()=>{
        try{
          const response=await axios.get(`http://localhost:4040/e_service/fetch/${work}`)
          const data=response.data
          navigate("/plumbers",{state:data})

        }catch(err){
            navigate("/nouser")
           console.log("No data");
        }
    }
    return(
        <>
        <Head />
        <div className="req-container">
    <div className="plumb-div">
        <h1>Welcome </h1>
        <h2>Thank you for choosing E Services</h2>
        <h3><span>Trusted Plumbing Solutions.</span>
            We are providing services in<br /> madurai,chennai and coimbatore.
            Fair price,no extra charges
        </h3>
       <div className="plumb-div2">
        <img src={Plumber} className="plumb" />
        <button onClick={fetchData} className="def-btn">Take a tour</button>
       </div> 
    </div>

</div>
<Foot />
        </>
    )
}
export default Plumbing