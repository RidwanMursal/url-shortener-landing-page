import styles from './Footer.module.css'
import {AiFillFacebook, AiOutlineInstagram, AiOutlineTwitter} from "react-icons/ai"
import {BsPinterest} from "react-icons/bs"
import FooterLinks from '../FooterLinks/FooterLinks'
import { footerItems } from './data'

const Footer = () => {
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