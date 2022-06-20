import styles from './FooterLinks.module.css'

const FooterLinks = ({item}) => {
  const {heading, content} = item
  return (
    <div className={styles.container}>
        <h5 className={styles.heading}>{heading}</h5>
        {content.map(link => <p className={styles.p} key={link}>{link}</p>)}
    </div>
  )
}

export default FooterLinks