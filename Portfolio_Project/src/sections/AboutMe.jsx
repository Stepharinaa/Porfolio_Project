import React, { useRef } from 'react';
import TitleHeader from '../components/TitleHeader';

const AboutMe = () => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;

    let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
    angle = (angle + 360) % 360;

    card.style.setProperty('--start', angle + 60);
  };

  return (
    <section id="aboutme" className="flex-center section-padding scroll-mt-50">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader title="About Me" sub="🤔 Who Am I?" />

        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          className="card card-border timeline-card rounded-xl p-10 mt-6 break-inside-avoid-column"
        >
          <div className="glow"></div>
          <p className="text-white-50 text-lg relative z-10">
            I’m a motivated and curious problem-solver who thrives in fast-paced,
            collaborative environments. Although I was initially hesitant to step
            into the tech world, I quickly found myself falling down the rabbit
            hole — captivated by how things work behind the scenes. That
            fascination led me to complete a 13-week intensive full-stack
            bootcamp, where I built a strong foundation in both front-end and
            back-end development. Since then, I’ve developed a keen interest in
            writing clean, tested, and reliable code — with a particular focus on
            quality, automation, and software that performs well under pressure.
            I bring energy, adaptability, and a team-oriented mindset to every
            project, and I’m excited to keep growing as a developer by
            contributing to innovative, real-world solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

