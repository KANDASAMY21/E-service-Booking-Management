import Plumb from "../assets/plumber.jpg"
function Worker(props){
    return(
        <>
       
                    <div className="worker">
                        <img src={Plumb} className="worker-img" alt="Plumber" />
                        <div className="worker-details">
                            <h4><strong>Name:</strong> {props.name}</h4>
                            <h4><strong>Age:</strong> {props.age}</h4>
                            <h4><strong>Experience:</strong> {props.experience}</h4>
                            <h4><strong>Rating:</strong> {props.rating}</h4>
                            <h4><strong>Phone:</strong> {props.phone}</h4>
                            <h4><strong>Jobs known:</strong> {props.job}</h4>
                            <h4><strong>Location:</strong> {props.loc}</h4>
                        </div>
                        <a className="book" href={`/request/${props.name}/${props.phone}`} id={props.name}>
                            <h4>Request service</h4>
                        </a>
                        <a className="book" href={`tel:+91${props.phone}`}>
                            <h4>Contact</h4>
                        </a>
                        <a className="book" href={`/feedback/${props.name}`}>
                            <h4>Feedback</h4>
                        </a>
                    </div>
               
        </>
    )
}

export default Worker