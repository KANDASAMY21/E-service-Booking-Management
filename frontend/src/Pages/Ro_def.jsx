import  Head from "./Head"
import { Link } from "react-router-dom"
import Water from "../assets/pure-water.png"
import Foot from "./Foot"
import axios from "axios"
import { useNavigate } from "react-router-dom"

function Ro(){
    const work="ro"
    const navigate=useNavigate()
    const fetchData=async()=>{
        try{
           const response=await axios.get(`http://localhost:4040/e_service/fetch/${work}`);
           const data=response.data.work_data

           console.log(data);

           navigate("/ro",{state:data})
        }catch(err){
            console.log(err)
            navigate("/nouser");
            
        }
    }
    return(
        <>
        <Head />
        <div className="req-container">
    <div className="plumb-div">
        <h1>Welcome </h1>
        <h2>Thank you for choosing E Services</h2>
        <h3><span>Pure Water, Pure Life: Trust Our RO Purifiers!</span>
            There are so many <br />deadly diseases like Cholera
            which is caused by unhygenic water.
        </h3>
       <div className="plumb-div2">
        <img src={Water} className="plumb" />
        <button onClick={fetchData} className="def-btn">Take a tour</button>
       </div> 
    </div>

</div>
<Foot />
        </>
    )
}
export default Ro