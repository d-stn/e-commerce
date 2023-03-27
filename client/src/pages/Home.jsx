import { Link } from "react-router-dom"
import Image from "../components/Image"

const Home = () => {
    return (
        <main>
            <div className="sale-element">
                <div>
                    <span>Grab The Best-Selling Headphones Of The Month</span>
                    <Link to="/item/641c92948a711b99fb51cc8d" >
                        <button>Buy Now</button>
                    </Link>
                </div>
                <Image publicId="Headset_RazerKaira_fuummb.png" />
            </div>
            <h1
                style={{
                    wordSpacing: "0.5rem",
                    fontSize: "2.6rem",
                    padding: "2rem",
                    color: "#013d29"
                }}
            >
                Browse the most popular categories
            </h1>

            <Link to="monitor" style={{ display: "flex", width: "100%", marginBottom: "3rem" }}>
                <Image
                    publicId={"monitors_category"}
                    style={{ width: "100%", borderRadius: "10px" }}
                />
            </Link>
            <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
                <Link to="mouse" style={{ display: "flex", width: "30%", marginBottom: "3rem" }}>
                    <Image
                        publicId={"mice_category"}
                        style={{ borderRadius: "10px", width: "100%" }}
                    />
                </Link>
                <Link to="headphones" style={{ display: "flex", width: "30%", marginBottom: "3rem" }}>
                    <Image
                        publicId={"headphones_category"}
                        style={{ borderRadius: "10px", width: "100%" }}
                    />
                </Link>
                <Link to="gpu" style={{ display: "flex", width: "30%", marginBottom: "3rem" }}>
                    <Image
                        publicId={"gpus_category"}
                        style={{ borderRadius: "10px", width: "100%" }}
                    />
                </Link>
            </div>
        </main>
    )
}

export default Home