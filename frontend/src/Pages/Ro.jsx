import Head from "./Head"
import Foot from "./Foot"
import { useLocation } from "react-router-dom"
import {v4 as uuidv4} from "uuid"
import { useState } from "react"
import Worker from "./Worker"

function Ro(){
    const location=useLocation()
    const data=location.state

    const [workers,setWorkers]=useState(data)
    return(
        <>
        <Head />
        <div className="worker-container">
        {
            workers.map((worker)=>{
                return(
                    <Worker 
                    key={uuidv4()}
                    name={worker.name}
                    job={worker.job}
                    phone={worker.phone}
                    experience={worker.experience}
                    rating={worker.rating}
                    age={worker.age}
                    loc={worker.loc}
                    />
                )
            })
        }
        </div>
        <Foot />
        </>
    )
}

export default Ro