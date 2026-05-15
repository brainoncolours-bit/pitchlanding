import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Problem from '../components/sections/Problem'
import HowItWorks from '../components/sections/HowItWorks'
import Benefits from '../components/sections/Benefits'
import Journey from '../components/sections/Journey'
import Testimonials from '../components/sections/Testimonials'
import FAQ from '../components/sections/FAQ'
import FinalCTA from '../components/sections/FinalCTA'
import Contact from '../components/common/Contact'
import Gallery from '../components/sections/Gallery'

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Problem />
      <HowItWorks />
      <Benefits />
      <Journey />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Contact />
      <section id="gallery">
        <Gallery />
      </section>
    </div>
  )
}
