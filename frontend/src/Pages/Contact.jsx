import Head from "./Head"
import { Link } from "react-router-dom"
import Foot from "./Foot"
import x from "../assets/logos.png"
import whats from "../assets/whatsapp.png"
import insta from '../assets/instagram (1).png'
import mail from "../assets/gmail.png"
import phone from "../assets/phone.png"

function Contact(){
    return(
        <>
        <Head />
        <div className="contact-container">
  <div className="contact-us">
     <h1>Thanks for using Instant Service</h1>
     <h1>To contact us</h1>
     <div className="contact">
       <h4>@Instant_Service in Twitter</h4>
       <Link to="https://x.com/Solutions2K"><img src={x} className="contact-img"/></Link>
     </div>
     <div className="contact">
        <h4>InstantService@gmail.com in G-mail</h4>
        <Link to="mailto:alluaswin007@gmail.com"><img src={mail} className="contact-img" /></Link>
      </div>
      <div className="contact">
        <h4>Contact number</h4>
        <Link to="tel:+916385562110"><img src={phone} className="contact-img" /></Link>
      </div>
      <div className="contact">
        <h4>InstantService@2024 in instagram</h4>
        <Link to="https://www.instagram.com/2ksolutions2024"><img src={insta} className="contact-img" /></Link>
      </div>
      <div className="contact">
        <h4>Whatsapp link</h4>
        <Link to="https://x.com/Solutions2K"><img src={whats} className="contact-img" /></Link>
      </div>
  </div>
</div>
<Foot />
        </>

    )
}
export default Contact