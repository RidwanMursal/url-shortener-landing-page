import Link from "../Link/Link"
import styles from "./ApiSection.module.css"
import {fetchUrl} from "./utils"
import { useState } from 'react'

const ApiSection = () => {
  const [shortenedLinks, setShortenedLinks] = useState([])
  const [input, setInput] = useState("")
  const [validInput, setValidInput] = useState({isValid:true, message:""})
  console.log(shortenedLinks)

  // const addLink = (response, validInput, setValidInput, shortenedLinks, setShortenedLinks) => {
  //   console.log(response)
  //   if (response.ok) {
  //     if (!validInput.isValid) setValidInput({isValid:true, message:""})
  //     const {result} = response
  //     setShortenedLinks([
  //       ...shortenedLinks, 
  //       {longLink: result.original_link, shortLink: result.full_short_link}
  //     ])
  //   }else {
  //     setValidInput({isValid:false, message: "Not a Valid Link"})
  //   }
  // }

  // const fetchUrl = async (validInput, setValidInput, shortenedLinks, setShortenedLinks) => {
  //   if (input === "") {
  //     setValidInput({isValid:false, message:"please input a link"})
  //     //alert("please add a link")
  //   }else {
  //     //console.log(input, "in link")
  //     const request = await fetch(`https://api.shrtco.de/v2/shorten?url=${input}`)
  //     const shortenedLink = await request.json()
  //     addLink(shortenedLink, validInput, setValidInput, shortenedLinks, setShortenedLinks)
  //   }
  // }


  return (
    <div className={styles["container"]}>
      <div className={styles["input-container"]}>


        <div className={styles.d}>
        
          <input type="text" value={input} className={validInput.isValid? `${styles.input}`: `${styles.input} ${styles["input-error"]}` } onChange={(e) => setInput(e.target.value)}/>
          <p className={styles.error}>{validInput.message}</p>
        </div>
        
        <div>
        <button className={styles["btn"]} onClick={() => fetchUrl(validInput, setValidInput, shortenedLinks, setShortenedLinks, input)}>Shorten it!</button>
        </div>
        
        
      </div>

      {shortenedLinks.map(link => <Link key={link.shortLink} shortenedLink={link}/> )}

    </div>
  )
}

export default ApiSection