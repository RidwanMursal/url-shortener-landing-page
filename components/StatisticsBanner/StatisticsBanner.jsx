import styles from "./StatisticsBanner.module.css"
import brIcon from "../../images/icon-brand-recognition.svg"
import drIcon from "../../images/icon-detailed-records.svg"
import fcIcon from "../../images/icon-fully-customizable.svg"
import BlurbComponent from "../BlurbComponent/BlurbComponent"

const StatisticsBanner = () => {
  const items = [
    {
      id: "br",
      image: brIcon,
      heading: "Brand Recognition", 
      blurb: "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content", 
    }, 
    {
      id: "dr",
      image: drIcon, 
      heading: "Detailed Records", 
      blurb: "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions"
    }, 
    {
      id: "fc",
      image: fcIcon, 
      heading: "Fully Customizable", 
      blurb: "Improve brand awareness and content discoverablity through customizable links, supercharging audience engagement"
    }
  ]
  return (
    <div className={styles.container}>
        <div className={styles.top}>
            <h1>Advanced Statistics</h1>
            <p>Track how your links are performing across the web with our advanced statistics dashboard</p>
        </div>

        <div className={styles.bottom}>
          {items.map(item => <BlurbComponent key={item.id} cardInfo={item}/>)}
        </div>

        <div className={styles.line}></div>

    </div>
  )
}

export default StatisticsBanner