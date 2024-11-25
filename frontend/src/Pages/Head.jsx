import { Link } from "react-router-dom"



function Head(){
    return(
        <>
        <header>
        <div class="container">
            <h1>Instant Service</h1>
            <nav>
                <ul>
                    <li><Link to="/">Login</Link></li>
                    <li><a href="/register">Register</a></li>
                    <li><a href="/contact">Contact Us</a></li>
                   
                </ul>
            </nav>
        </div>
        </header>
        
        </>
    )
}

export default Head