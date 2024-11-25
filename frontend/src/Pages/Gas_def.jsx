import Head from "./Head";
import Foot from "./Foot";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Stove from "../assets/stove.png";

function Gas_Def() {
    const work="gas"
    const navigate=useNavigate()
    const fetchData=async ()=>{
        try{
            const response=await axios.get(`http://localhost:4040/e_service/fetch/${work}`)
            const data=response.data.work_data

            navigate("/gas",{state:data})
            
        }catch(err){
            console.log(err)
        }
    }

    return (
        <>
            <Head />
            <div className="req-container">
                <div className="plumb-div">
                    <h1>Welcome</h1>
                    <h2>Thank you for choosing Instant Service</h2>
                    <h3>
                        <span>Flame On: Reliable Repairs for Your Gas Stove!</span>
                        Oops <br />
                        Are you having trouble with your stove? Don't starve, make a call, problem solved.
                    </h3>
                    <div className="plumb-div2">
                        <img src={Stove} className="plumb" alt="Stove" />
                        <button onClick={fetchData} className="def-btn">Take a Tour</button>
                    </div>
                </div>
            </div>
            <Foot />
        </>
    );
}

export default Gas_Def;
