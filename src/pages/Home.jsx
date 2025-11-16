import Hero from '../components/Home/Hero'
import ServicesHighlight from '../components/Home/ServicesHighlight'
import ClientLogos from '../components/Home/ClientLogos'
import Stats from '../components/Home/Stats'
import PortfolioPreview from '../components/Home/PortfolioPreview'
import Testimonials from '../components/Home/Testimonials'
import CTA from '../components/Home/CTA'
import { Helmet } from 'react-helmet-async'

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Doddamani & Brothers",
  "image": "https://your-domain.com/Logo.jpg",
  "@id": "",
  "url": "https://your-domain.com",
  "telephone": "+919480750444",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Shop no 45, Kumaravyasa Complex",
    "addressLocality": "Gadag-Betigeri",
    "addressRegion": "Karnataka",
    "postalCode": "582101",
    "addressCountry": "IN"
  },
  "openingHoursSpecification": [
    { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "08:00", "closes": "18:00" },
    { "@type": "OpeningHoursSpecification", "dayOfWeek": "Saturday", "opens": "09:00", "closes": "16:00" }
  ]
}

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Doddamani & Brothers — Construction & Consulting | Gadag</title>
        <meta name="description" content="Doddamani & Brothers — Trusted construction and consulting services in Gadag. Residential and commercial projects with quality workmanship." />
        <meta name="keywords" content="construction, contractor, Gadag, civil, residential, commercial" />
        <link rel="canonical" href="https://your-domain.com/" />
        <meta property="og:title" content="Doddamani & Brothers — Construction & Consulting" />
        <meta property="og:description" content="Trusted construction and consulting services in Gadag. Residential and commercial projects with quality workmanship." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://your-domain.com/" />
        <meta property="og:image" content="https://your-domain.com/Logo.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>
      <Hero />
      <ServicesHighlight />
      <ClientLogos />
      <Stats />
      <PortfolioPreview />
      <Testimonials />
      <CTA />
    </>
  )
}

export default Home