import Plumb from "../assets/gas.jpg";
import gas from "../assets/plumber.jpg";
import ro from "../assets/water.jpg";
import electric from "../assets/electrician.jpg";
import "../index.css";
import Head from "./Head";
import { Link } from "react-router-dom";
import Foot from "./Foot";

function Home() {
    return (
        <>
            <Head />
            <div className="top-container">
                <h2 className="welcome">Welcome to Instant Service</h2>
                <h4>Find and book a variety of electronic services</h4>
                <div className="mid-box">
                    <div className="features">
                        <Link to="/Plumb_def"><img src={gas} className="feature-img" alt="Solid pipings" /></Link>
                        <p>Solid pipings</p>
                    </div>
                    <div className="features">
                        <Link to="/electrician_def"><img src={electric} className="feature-img" alt="Never lose electricity" /></Link>
                        <p>Never lose electricity</p>
                    </div>
                    <div className="features">
                        <Link to="/gas_def"><img src={Plumb} className="feature-img" alt="You can cook, we got you covered" /></Link>
                        <p>You can cook, we got you covered</p>
                    </div>
                    <div className="features">
                        <Link to="/Ro_def"><img src={ro} className="feature-img" alt="Modern RO purifiers" /></Link>
                        <p>Modern RO purifiers</p>
                    </div>
                </div>
            </div>
            <Foot />
        </>
    );
}

export default Home;
