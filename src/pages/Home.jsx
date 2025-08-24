import HeroSection from '../components/HeroSection'
import Banner from '../components/Banner'
import ServicesSection from '../components/ServicesSection'
import StatsBanner from '../components/StatsBanner'
import Testimonials from '../components/Testimonial'
import IntegrationsBanner from "../components/IntegrationBanner"

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Banner />
      <ServicesSection />
      <StatsBanner />
      <Testimonials />
      <IntegrationsBanner />
    </div>
  )
}

export default Home