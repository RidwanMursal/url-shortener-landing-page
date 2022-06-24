import Link from "../Link/Link"
import styles from "./ApiSection.module.css"
import {fetchUrl} from "./utils"
import { useEffect, useState } from 'react'

const ApiSection = () => {
  const [shortenedLinks, setShortenedLinks] = useState([])
  const [input, setInput] = useState("")
  const [validInput, setValidInput] = useState({isValid:true, message:""})
  console.log(shortenedLinks)

  // get/set links from and to local storage 
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("links"))
    if (items && items.length > 0) {setShortenedLinks(items)}
  }, [])

  useEffect(() => {
    localStorage.setItem("links", JSON.stringify(shortenedLinks))
  }, [shortenedLinks])

  return (
    <div className={styles["container"]}>
      <div className={styles["input-container"]}>


        <div className={styles.d}>
        
          <input type="text" value={input} className={validInput.isValid? `${styles.input}`: `${styles.input} ${styles["input-error"]}` } onChange={(e) => setInput(e.target.value)}/>
          <p className={styles.error}>{validInput.message}</p>
        </div>
        
        <div>
        <button className={styles["btn"]} onClick={() => fetchUrl(validInput, setValidInput, shortenedLinks, setShortenedLinks, input, setInput)}>Shorten it!</button>
        </div>
        
        
      </div>

      {shortenedLinks.map(link => <Link key={link.shortLink} shortenedLink={link}/> )}

    </div>
  )
}

export default ApiSection