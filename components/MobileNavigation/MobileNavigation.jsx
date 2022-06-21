import styles from './MobileNavigation.module.css'

const MobileNavigation = ({menueClosed}) => {
  return (
    <div className={menueClosed? `${styles.hidden} ${styles.container}`:`${styles.container}`}>
        <p className={styles.p}>Features</p>
        <p className={styles.p}>Pricing</p>
        <p className={styles.p}>Resources</p>
        <div className={styles.line}></div>
        <p className={styles.p}>Login</p>
        <button className={styles.button}>Sign Up</button>
    </div>
  )
}

export default MobileNavigation