import styles from "./BlurbComponent.module.css"

const BlurbComponent = ({cardInfo}) => {
  const {heading, image, blurb, id} = cardInfo
  
  return (
    <div id={id} className={styles.container}>
        <img src={image.src} className={styles.image} alt="" />
        <h4 className={styles.heading}>{heading}</h4>
        <p>{blurb}</p>
    </div>
  )
}

export default BlurbComponent