import Head from "./Head";
import Foot from "./Foot";
import { useLocation } from "react-router-dom";
import Mech from '../assets/mechanic.png'
import One from '../assets/number-one.png'

function Welcome(){
    const location=useLocation()
    const name=location.state
    return(
        <>
        <Head />
        <div class="suc-container">
                <h2>Welcome to Instant Service <strong class="user">{name}!</strong></h2>
                <h3>To use our services redirect to home page </h3>
                <a href="/home"><img src={Mech} class="mech" /></a>
                <img src={One} class="pointer" />
        </div>
        <Foot />
        </>
    )
}

export default Welcome