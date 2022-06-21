import styles from "./Navbar.module.css"
import logo from "../../images/logo.svg"
import {GiHamburgerMenu} from "react-icons/gi"
import MobileNavigation from "../MobileNavigation/MobileNavigation"
import { useState } from "react"

const Navbar = () => {
  const [menueClosed, setMenueClosed] = useState(true)
  return (
    <div className={styles["navbar-container"]}>
      <div className={styles["left-text-container"]}>
        <img src={logo.src} alt="" className={styles["logo"]} />
        <div className={styles["links"]}>
          <p className={styles.p}>Features</p>
          <p className={styles.p}>Pricing</p>
          <p className={styles.p}>Resources</p>
        </div>
      </div>

      <div className={styles["right-text-container"]}>

          {/* <p className={styles.p}>Login</p> */}
          <button className={styles["login-button"]}>Login</button>
          <button className={styles["signup-button"]}>Sign Up</button>
      </div>

      <GiHamburgerMenu className={styles["hamburger-menue"]} onClick={() => setMenueClosed(!menueClosed)}/>

      <MobileNavigation menueClosed={menueClosed} /> 
      
    </div>
  )
}

export default Navbar