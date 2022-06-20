import styles from './Footer.module.css'
import {AiFillFacebook, AiOutlineInstagram, AiOutlineTwitter} from "react-icons/ai"
import {BsPinterest} from "react-icons/Bs"
import FooterLinks from '../FooterLinks/FooterLinks'

const Footer = () => {
  const footerItems = [
      {
          heading: "Features", 
          content: ["Link Shortening", "Branded Linkes", "Analytics"]
      }, 
      {
          heading: "Resources", 
          content: ["Blog", "Development", "Support"], 
      }, 
      {
          heading: "Company", 
          content: ["About", "Our Team", "Careers", "Contact"]
      }
  ]
  return (
    <div className={styles.container}>
        <h2 className={styles.logo}>Shortly</h2>
        <div className={styles.links}>
            {footerItems.map(item => <FooterLinks key={item.heading} item={item}/> )}
            <div className={styles.icons}>
                <AiFillFacebook className={styles.fb}/> 
                <AiOutlineTwitter className={styles.twitter} /> 
                <BsPinterest className={styles.printerest} />
                <AiOutlineInstagram className={styles.instagram} /> 
            </div>
        </div>
    </div>
  )
}

export default Footer