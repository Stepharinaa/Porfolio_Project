import {useRef} from "react"
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react';
import { expCards } from "../constants";
import { calcRationalCurveDerivatives } from "three/examples/jsm/curves/NURBSUtils.js";

gsap.registerPlugin(ScrollTrigger)

const ShowcaseSection = () => {
    const sectionRef = useRef(null)
    const project1Ref = useRef(null)
    const project2Ref = useRef(null)
    const project3Ref = useRef(null)

    useGSAP(() => {
        const projects = [project1Ref.current, project2Ref.current, project3Ref.current]

        projects.forEach((card, index) => {
            gsap.fromTo(
                card,
                {
                    y: 50, opacity: 0
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    delay: 0.3 * (index + 1),
                    scrollTrigger: {
                        trigger: card,
                        start: 'top bottom-=100'
                    }
                }
            )
        })
        gsap.fromTo(
            sectionRef.current, 
            {opacity: 0}, 
            {opacity: 1, duration: 1.5})
    }, [])
  return (
    <section id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          {/* LEFT */}
          <div className="first-project-wrapper" ref={project1Ref}>
            <div className="image-wrapper">
              <img src="/images/project1.png" alt="MailyDail" />
            </div>
            <div className="text-content">
              <h2>
                Reddit-style news, reimagined — MailyDail is a full-stack app for browsing, posting,
                and voting on articles with a fast, responsive, and accessible UI.
              </h2>
              <p className="text-white-50 md:text-xl">
                MailyDail was built using a modern full-stack tech stack including React (with Vite)
                for a fast, modular frontend, React Router for dynamic navigation, and Axios for API
                interactions. It features lazy loading, Lottie animations, and a responsive,
                accessible UI built with a mobile-first approach. <br/>On the backend, I worked with a RESTful API to handle dynamic content such as articles, topics, and user interactions.<br/>Debugging data
                flows and fine-tuning performance using Chrome DevTools also gave me valuable
                real-world problem-solving experience.
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={project2Ref}>
              <div className="image-wrapper bg-[#ffefdb]">
                <img src="/images/project2.png" alt="MailyDail Backend" />
              </div>
              <h2>Maily Dail Backend</h2>
            </div>

            <div className="project" ref={project3Ref}>
              <div className="image-wrapper bg-[#ffe7eb]">
                <img src="/images/project3.png" alt="Raincheck" />
              </div>
              <h2>Events Planning App</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;

