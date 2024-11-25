import Head from "./Head"
import Foot from "./Foot"
import { useState } from "react"
import { useLocation } from "react-router-dom"
import Worker from "./Worker"
import {v4 as uuidv4} from "uuid"


function Gas(){
    const location=useLocation();
    if (!location.state) {
        console.error("No worker data passed!");
        // Optionally, redirect to another page
        navigate("/");
        return null; // Return null to prevent further rendering
    }
    var workers=location.state
    console.log(workers)
   
   
    const [eworkers,setEworkers]=useState(workers)

    return(
        <>
        <Head />
        <div className="worker-container">
         {
            eworkers.map((worker,index)=>{
                return(
                    
                    <Worker 
                    key={uuidv4()}
                    name={worker.name}
                    job={worker.job}
                    phone={worker.phone}
                    experience={worker.experience}
                    rating={worker.rating}
                    age={worker.age}
                    loc={worker.loc} />
                    
                )
               
            })
         }
          </div>
        <Foot />
        </>
    )
}

export default Gas