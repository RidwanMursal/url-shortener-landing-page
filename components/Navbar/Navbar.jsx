import styles from "./Navbar.module.css"
import logo from "../../images/logo.svg"

const Navbar = () => {
  console.log(styles)
  return (
    <div className={styles["navbar-container"]}>
      <div className={styles["left-text-container"]}>
        <img src={logo.src} alt="" className={styles["logo"]} />
        <div className={styles["links"]}>
          <p>Features</p>
          <p>Pricing</p>
          <p>Resources</p>
        </div>
      </div>

      <div className={styles["right-text-container"]}>
        
          <button className={styles["login-button"]}>Login</button>
          <button className={styles["signup-button"]}>Sign Up</button>
      </div>
    </div>
  )
}

export default Navbar