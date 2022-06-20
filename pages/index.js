import HeroBanner from "../components/HeroBanner/HeroBanner"
import Navbar from "../components/Navbar/Navbar"
import ApiSection from "../components/ApiSection/ApiSection"
import StatisticsBanner from "../components/StatisticsBanner/StatisticsBanner"
import FooterBanner from "../components/FooterBanner/FooterBanner"
import Footer from "../components/Footer/Footer"

export default function Home() {
  return (
    <div>
      <div className="top-half">
        <Navbar /> 
        <HeroBanner /> 
      </div>
      
      <div className="middle-section">
        <ApiSection /> 
        <StatisticsBanner /> 
        <FooterBanner /> 
        <Footer /> 
      </div>
      
    </div>
  )
}
