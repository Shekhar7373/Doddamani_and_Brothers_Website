import { Helmet } from 'react-helmet-async'
import Mission from '../components/About/Mission'
import Timeline from '../components/About/Timeline'
import Team from '../components/About/Team'

const AboutMeta = () => (
  <Helmet>
    <title>About — Doddamani & Brothers</title>
    <meta name="description" content="About Doddamani & Brothers — mission, values, team and company timeline. Local construction expertise in Gadag." />
    <link rel="canonical" href="https://your-domain.com/about" />
    <meta property="og:title" content="About — Doddamani & Brothers" />
    <meta property="og:description" content="Mission, values and team of Doddamani & Brothers. Quality construction and local expertise." />
  </Helmet>
)

const About = () => {
  return (
    <>
      <AboutMeta />
      <Mission />
      <Timeline />
      <Team />
    </>
  )
}

export default About