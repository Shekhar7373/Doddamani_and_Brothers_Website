import Hero from '../components/Home/Hero'
import ServicesHighlight from '../components/Home/ServicesHighlight'
import Stats from '../components/Home/Stats'
import PortfolioPreview from '../components/Home/PortfolioPreview'
import Testimonials from '../components/Home/Testimonials'
import CTA from '../components/Home/CTA'

const Home = () => {
  return (
    <>
      <Hero />
      <ServicesHighlight />
      <Stats />
      <PortfolioPreview />
      <Testimonials />
      <CTA />
    </>
  )
}

export default Home