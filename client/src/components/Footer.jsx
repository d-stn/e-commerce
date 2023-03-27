import { useState } from "react"
import { FacebookIcon, InstagramIcon, TwitterIcon, YoutubeIcon } from "../styles/icons";

const githubURL = "https://github.com/d-stn"

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
                    <a href={githubURL}>
                        <FacebookIcon />
                    </a>
                    <a href={githubURL}>
                        <TwitterIcon />
                    </a>
                    <a href={githubURL}>
                        <InstagramIcon />
                    </a>
                    <a href={githubURL}>
                        <YoutubeIcon />
                    </a>
                </div>
            </section>
            <section>
                <a href={githubURL}>About</a>
                <a href={githubURL}>Careers</a>
                <a href={githubURL}>FAQ</a>
                <a href={githubURL}>Contact Us</a>
            </section>
            <section>
                <a href={githubURL}>Terms and Conditions</a>
                <a href={githubURL}>Privacy Policy</a>
                <a href={githubURL}>Cookie Policy</a>
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