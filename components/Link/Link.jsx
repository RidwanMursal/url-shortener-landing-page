import React from 'react'
import styles from "./Link.module.css"

const Link = ({shortenedLink}) => {
  const {longLink, shortLink} = shortenedLink
  console.log("this is the shortlink") 
  
  
  return (
    <div className={styles["links-container"]}>
        <a href={longLink}> <p>{longLink}</p> </a>
        <div className={styles["links-right"]}>
            <a href={shortLink}> <p>{shortLink}</p> </a>
            <button className={styles.btn}>Copy</button>
        </div>
    </div>
  )
}

export default Link