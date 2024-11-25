import Head from "./Head"
import Foot from "./Foot"

function Thanks(){
    return(
        <>
        <Head />
        <div class="feed-container">
             <h2><i>Thank you for your feedback,</i> <br />We'll try to improve our service if it doesn't satisfy you.</h2>
        </div>
        <Foot />
        </>
    )
}

export default Thanks