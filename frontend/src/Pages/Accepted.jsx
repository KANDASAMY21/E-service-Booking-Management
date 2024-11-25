import Head from "./Head"
import Foot from "./Foot"
import { useLocation } from "react-router-dom"

function Accepted(){
    const location=useLocation()
    const data=location.state
    console.log(data)
    return(
        <>
        <Head />
        <div class="req-container">
    <div class="booked">
        <h2>
            Your service request is complete.Tecnician <span>{data.name}</span> will resolve your service request(<span>{data.service}</span>) on or before <span>{data.req_date}</span>.
            You can reach him by this moblie number <span>{data.phone}</span>
        </h2>
    </div>
</div>
       <Foot />
        </>
    )
}

export default Accepted