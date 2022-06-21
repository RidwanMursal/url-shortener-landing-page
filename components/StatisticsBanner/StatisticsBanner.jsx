import styles from "./StatisticsBanner.module.css"
import BlurbComponent from "../BlurbComponent/BlurbComponent"
import { items } from "./data"

const StatisticsBanner = () => {
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