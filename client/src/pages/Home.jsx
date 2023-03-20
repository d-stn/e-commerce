import { Link } from "react-router-dom"
import { AdvancedImage } from "@cloudinary/react"
import { Cloudinary } from "@cloudinary/url-gen"
import { fill } from "@cloudinary/url-gen/actions/resize"

const Home = () => {
    const cld = new Cloudinary({
        cloud: {
            cloudName: 'ddq7og6ff'
        }
    });

    return (
        <main>
            <div className="sale-element">
                <div>
                    <span>Grab The Best-Selling Headphones Of The Month</span>
                    <Link to="/item/641083f53174138f9a068a99" >
                        <button>Buy Now</button>
                    </Link>
                </div>
                <img src="https://res.cloudinary.com/ddq7og6ff/image/upload/v1678741327/Headset_RazerKaira_fuummb.png" alt="RazerKaira"></img>
            </div>
            <h1
                style={{
                    wordSpacing: "0.5rem",
                    fontSize: "2.6rem",
                    padding: "2rem",
                    color: "#013d29"
                }}
            >Browse the most popular categories</h1>

            <Link to="monitor" style={{ display: "flex", width: "100%", marginBottom: "3rem" }}>
                <AdvancedImage cldImg={cld.image("monitors_category")} style={{ width: "100%", borderRadius: "10px" }} />
            </Link>

            <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
                <Link to="mouse" style={{ display: "flex", width: "30%", marginBottom: "3rem" }}>
                    <AdvancedImage
                        cldImg={
                            cld.image("mice_category")
                            // .resize(
                            //     fill()
                            //         .width(540)
                            //         .height(350)
                            // )
                        }
                        style={{ borderRadius: "10px", width: "100%" }}
                    />
                </Link>
                <Link to="headphones" style={{ display: "flex", width: "30%", marginBottom: "3rem" }}>
                    <AdvancedImage
                        cldImg={
                            cld.image("headphones_category")
                                .resize(
                                    fill()
                                        .width(540)
                                        .height(350)
                                )
                        }
                        style={{ borderRadius: "10px", width: "100%" }}
                    />
                </Link>
                <Link to="gpu" style={{ display: "flex", width: "30%", marginBottom: "3rem" }}>
                    <AdvancedImage
                        cldImg={
                            cld.image("gpus_category")
                                .resize(
                                    fill()
                                        .width(540)
                                        .height(350)
                                )
                        }
                        style={{ borderRadius: "10px", width: "100%" }}
                    />
                </Link>
            </div>
        </main>
    )
}

export default Home