import HBstyles from './HeroBanner.module.css'
import illustration from "../../images/illustration-working.svg"

const HeroBanner = () => {
  console.log(HBstyles)
  return (
    <div className={HBstyles["hero-banner-container"]}>
        <div className={HBstyles["hero-banner-left"]}>
            <div className={HBstyles["text"]}>
                <h1 className={HBstyles["banner-heading"]}>More than just shorter links</h1>
                <p>{"Build your brand's recognition and get detailed insights on how your links are performing"}</p>
            </div>

            <button className={HBstyles["get-started-button"]}>
                Get Started
            </button>
        </div>

        <img src={illustration.src} alt="" className={HBstyles["banner-image"]} />

    </div>
  )
}

export default HeroBanner