import { Link } from "react-router-dom"
import { SocialIcon } from 'react-social-icons';
const Contact=()=>{
    return(
        <div>
            <h2>Contact</h2>
            <div className="mainbox">
                <div className="address">
                    <h2>Address</h2>
                    <h4>Flowerist App</h4>
                    <p>Banglore</p> 
                    <p>basvangudi (D)</p>
                    <p>Pincode:577676</p>
                    <h4>Contact us</h4>
                    <p><span><i class="fa-regular fa-phone"></i></span>Phone:6767565656</p>
                    </div>
                    <div>
                    <p><SocialIcon url="https://www.instagram.com/theaamantrana/?utm_medium=copy_link" /><span>Emailid:flowerist12@gmail.com</span></p>
                    <p><SocialIcon url="https://www.facebook.com/106545271519811/posts/237189595122044/"/><span>flowerist12</span></p>
                    </div>
            </div>
            <Link to="/"><button>Back</button></Link>
        </div>
    )
}

export default Contact