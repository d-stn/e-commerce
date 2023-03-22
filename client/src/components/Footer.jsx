import { useState } from "react"
import { FacebookIcon, InstagramIcon, TwitterIcon, YoutubeIcon } from "../styles/icons";

const Footer = () => {
    const [email, setEmail] = useState("")
    const handleOnClick = () => {
        // TODO: Add implementation
        console.log(email);
    }

    return (
        <footer>
            <section>
                <span className="title">TechRider</span>
                <div style={{ display: "flex", justifyContent: "space-around" }}>
                    <a href="https://github.com/d-stn">
                        <FacebookIcon />
                    </a>
                    <a href="https://github.com/d-stn">
                        <TwitterIcon />
                    </a>
                    <a href="https://github.com/d-stn">
                        <InstagramIcon />
                    </a>
                    <a href="https://github.com/d-stn">
                        <YoutubeIcon />
                    </a>
                </div>
            </section>
            <section>
                <a href="https://github.com/d-stn">About</a>
                <a href="https://github.com/d-stn">Careers</a>
                <a href="https://github.com/d-stn">FAQ</a>
                <a href="https://github.com/d-stn">Contact Us</a>
            </section>
            <section>
                <a href="https://github.com/d-stn">Terms and Conditions</a>
                <a href="https://github.com/d-stn">Privacy Policy</a>
                <a href="https://github.com/d-stn">Cookie Policy</a>
            </section>
            <section>
                <span>Stay up to date on sales and new products</span>
                <input placeholder="Enter your e-mail address" onChange={(e) => setEmail(e.target.value)} />
                <button onClick={handleOnClick}>Sign up</button>
            </section>
        </footer>
    )
}

export default Footer