import Hero from "./sections/Hero.jsx"
import ShowcaseSection from "./sections/ShowcaseSection.jsx"
import NavBar from "./components/NavBar.jsx"
import FeatureCards from "./sections/FeatureCards.jsx"
import TechStack from "./sections/TechStack.jsx"
import Footer from "./sections/Footer.jsx"
import AboutMe from "./sections/AboutMe.jsx"
import Contact from "./sections/Contact.jsx"

const app = () => {
  return (
    <>
    <NavBar />
    <Hero />
    <AboutMe />
    <ShowcaseSection />
    <FeatureCards />
    <TechStack />
    <Contact />
    <Footer />
    </>
  )
}

export default app
