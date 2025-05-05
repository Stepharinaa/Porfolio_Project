import { words } from "../constants"
import Button from "../components/Button"
import HeroExperience from "../components/HeroModels/HeroExperience.jsx"
import {useGSAP} from "@gsap/react"
import gsap from "gsap"

const Hero = () => {
    useGSAP(() => {
        gsap.fromTo(".hero-text h1", {
            y: 50,
            opacity: 0
        },
    {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1,
        ease: 'power2.inOut',
    })
    })


  return (
    <section id="hero" className="relative overflow-hidden">
        <div className="absolute top-0 left-0 z-10">
            <img src="/images/bg.png" alt="background" />
        </div>

        <div className="hero-layout">
            {/*LEFT SIDE: HERO CONTENT*/}
            <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
                <div className="flex flex-col gap-7">
                    <div className="hero-text">
                        <h1>I turn ideas into
                            <span className="slide">
                                <span className="wrapper">
                                    {words.map((word) => (
                                        <span key={word.text} className="flex items-center md:gap-3 gap-1 pb-2">
                                            <img
                                            src={word.imgPath}
                                            alt={word.text}
                                            className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                                            />

                                            <span>{word.text}</span>
                                        </span>
                                    ))}
                                </span>
                            </span>
                        </h1>
                        <h1>code that delivers results</h1>
                    </div>
                    <p className="text-white-50 flex md:text-xl md:w-150 relative z-10 pointer-events-none">
                    Hi, I'm Steph — a developer based in London with a passion for quality engineering, test automation, and building robust software that works!
                    </p>
                    <Button 
                    className="md:w-80 md:h-16 w-60 h-12"
                    id="button"
                    text="See my Work"/>
                </div>
            </header>

            <figure>
                <div className="hero-3d-layout">
                    <HeroExperience />
                </div>
            </figure>
        </div>
    </section>
  )
}

export default Hero
