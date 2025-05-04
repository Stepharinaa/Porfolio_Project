import Hero from "./sections/Hero.jsx"
import ShowcaseSection from "./sections/ShowcaseSection.jsx"
import NavBar from "./components/NavBar.jsx"
import FeatureCards from "./sections/FeatureCards.jsx"

const app = () => {
  return (
    <>
    <NavBar />
    <Hero />
    <ShowcaseSection />
    <FeatureCards />
    </>
  )
}

export default app
