import styles from './FooterBanner.module.css'

const FooterBanner = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>
        Boost your links today 
      </h1>
      <button className={styles.button}>
        Get Started
      </button>
    </div>
  )
}

export default FooterBanner