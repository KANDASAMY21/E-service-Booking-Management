import Head from "./Head"
import Foot from "./Foot"
import Error from "../assets/error-404.png"

function Nouser(){
    return(
        <>
        <Head />
        <div className="req-container">
        <img src={Error} alt="error" className="error-img" />
        </div>
        <Foot />
        </>
    )
}

export default Nouser