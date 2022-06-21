import React from 'react'
import styles from "./Link.module.css"

const Link = ({shortenedLink}) => {
  const {longLink, shortLink} = shortenedLink
  console.log("this is the shortlink") 
  const copyToClipboard = (e, shortLink) => {
    // Edit button text and class 
    e.target.textContent = "Copied"
    e.target.classList.remove(styles.btn) 
    e.target.classList.add(styles["btn-copied"])

    //Copy value to clipboard 
    navigator.clipboard.writeText(shortLink)
  }
  
  
  return (
    <>
      <div className={styles["links-container"]}>
          <a className={styles.a} href={longLink}> <p>{longLink}</p> </a>
          <div className={styles["links-right"]}>
              <a className={styles.a, styles["short-link"]} href={shortLink}> <p>{shortLink}</p> </a>
              <button className={styles.btn} onClick={(e) => copyToClipboard(e, shortLink)}>Copy</button>
          </div>
      </div>

        {/* Mobile div */}
        <div className={styles["mobile-container"]}>
          <a className={styles.a} href={longLink}> <p className={styles.p}>{longLink}</p> </a>
          <div className={styles.line}></div>
          <a className={styles.a, styles["short-link"]}  href={shortLink}> <p>{shortLink}</p> </a>
          <button className={styles.btn} onClick={(e) => copyToClipboard(e, shortLink)}>Copy</button>
        </div>
        
    
    </>
  )
}

export default Link