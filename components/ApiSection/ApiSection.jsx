import Link from "../Link/Link"
import styles from "./ApiSection.module.css"
import { useState } from 'react'

const ApiSection = () => {
  const [shortenedLinks, setShortenedLinks] = useState([])
  const [input, setInput] = useState("")
  console.log(shortenedLinks)

  const addLink = (response) => {
    console.log(response)

    if (response.ok) {
      const {result} = response
      setShortenedLinks([
        ...shortenedLinks, 
        {longLink: result.original_link, shortLink: result.full_short_link}
      ])
    }

  }

  const fetchUrl = async () => {
    if (input === "") {
      alert("please add a link")
    }else {
      //console.log(input, "in link")
      const request = await fetch(`https://api.shrtco.de/v2/shorten?url=${input}`)
      const shortenedLink = await request.json()
      addLink(shortenedLink)
    }
  }
  return (
    <div className={styles["container"]}>
      <div className={styles["input-container"]}>
        <input type="text" value={input} className={styles["input"]} onChange={(e) => setInput(e.target.value)}/>
        <button className={styles["btn"]} onClick={() => fetchUrl()}>Shorten it!</button>
        
      </div>

      {shortenedLinks.map(link => <Link shortenedLink={link}/> )}

    </div>
  )
}

export default ApiSection