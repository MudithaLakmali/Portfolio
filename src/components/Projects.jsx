import { useEffect, useMemo, useRef, useState } from "react";
import project1 from "../assets/project1.jpeg";
import project2 from "../assets/project2.jpeg";
import project3 from "../assets/project3.jpeg";
import project4 from "../assets/project4.jpeg";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Projects() {
  const projects = useMemo(
    () => [
      {
        id: 0,
        title: "Spendwise",
        subtitle: "App development",
        img: project1,
        description:
          "SpendWise is a simple app that helps users track expenses, set budgets, and manage money wisely.",
        technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
        github:
          "https://github.com/NalakaDineshSamarasingha/SpendWise-frontend",
      },
      {
        id: 1,
        title: "Smart Hydroponic System",
        subtitle: "Hardware Project",
        img: project2,
        description:
          "A modern solution for growing plants without soil, using sensors to monitor water, nutrients, and light for healthier and faster growth.",
        technologies: ["C++", "IoT"],
        github: "https://github.com/yourusername/weather-dashboard",
      },
      {
        id: 2,
        title: "Firefly Glow",
        subtitle: "Webpage",
        img: project3,
        description:
          "Firefly Glow is a bright and simple webpage that adds a spark of creativity and fun.",
        technologies: ["React", "Tailwind"],
        github: "https://github.com/MudithaLakmali/firefly",
      },
      {
        id: 3,
        title: "Portfolio Website",
        subtitle: "Personal showcase platform",
        img: project4,
        description:
          "Not about being perfect — just me having fun and sharing what I love to do.",
        technologies: ["React", "JS", "Framer Motion", "Tailwind CSS"],
        github: "https://github.com/MudithaLakmali/Portfolio",
      },
    ],
    []
  );

  const [index, setIndex] = useState(0);
  const sectionRef = useRef(null);
  const [parallaxY, setParallaxY] = useState(0);
  const rafRef = useRef(0);

  const next = () => setIndex((prev) => (prev + 1) % projects.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + projects.length) % projects.length);

  const lastTriggerTimeRef = useRef(0);

  const handleMouseMove = (e) => {
    const target = e.currentTarget;
    const rect = target.getBoundingClientRect();
    const xWithin = e.clientX - rect.left;
    const centerX = rect.width / 2;
    const now = Date.now();
    const cooldownMs = 450;
    const deadZone = rect.width * 0.2;

    if (now - lastTriggerTimeRef.current < cooldownMs) return;

    if (xWithin > centerX + deadZone) {
      next();
      lastTriggerTimeRef.current = now;
    } else if (xWithin < centerX - deadZone) {
      prev();
      lastTriggerTimeRef.current = now;
    }
  };

  const rotationDeg = index * -(360 / projects.length);
  const radiusPx = 480;
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <div
      ref={sectionRef}
      style={{
        backgroundColor: "white",
        backgroundPosition: `center ${parallaxY}px`,
        willChange: "background-position",
      }}
      className="min-h-screen"
    >
      <div className="relative z-10 h-full w-full flex flex-col items-center justify-center gap-8 py-40">
        <div className="">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute top-10 left-25"
          >
            <h2 className="text-5xl font-bold text-gray-800 mb-4">
              The Sticky Files
            </h2>
            <p className="text-xl text-gray-600">
              These are some of my projects—fun, simple, and made by me!
            </p>
          </motion.div>
        </div>

        <div
          className="carousel w-full flex items-center justify-center px-4 sm:px-8 pt-10"
          onMouseMove={handleMouseMove}
        >
          <div
            className="carousel__ring"
            style={{
              transform: `translateZ(-${radiusPx}px) rotateY(${rotationDeg}deg)`,
            }}
          >
            {projects.map((project, i) => {
              const baseAngle = i * (360 / projects.length);
              return (
                <div
                  key={project.id}
                  className="carousel__item"
                  style={{
                    transform: `rotateY(${baseAngle}deg) translateZ(${radiusPx}px)`,
                  }}
                >
                  <div className="h-full w-full overflow-hidden rounded-2xl bg-white shadow-md border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                    <div className="h-48 w-full overflow-hidden">
                      <img
                        src={project.img}
                        alt={project.title}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="p-6 text-gray-800">
                      <h3 className="text-xl font-semibold mb-2 text-gray-900">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 mb-2 italic">
                        {project.subtitle}
                      </p>
                      <p className="text-gray-700 mb-3">
                        {project.description}
                      </p>
                      <div className="mb-3">
                        <span className="font-medium text-gray-500">
                          Technologies:{" "}
                        </span>
                      </div>
                      <div className="mb-3">
                        {project.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-gray-800 font-medium"
                      >
                        View on GitHub
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex gap-2 mt-8">
          {projects.map((project, i) => (
            <span
              key={project.id}
              onClick={() => setIndex(i)}
              className={`h-3 w-3 rounded-full cursor-pointer transition-all duration-300 ${
                i === index
                  ? "bg-gray-800 scale-125"
                  : "bg-gray-400 hover:bg-gray-600"
              }`}
            />
          ))}
        </div>
      </div>

      <style>{`
        .carousel {
          perspective: 1200px;
        }
        
        .carousel__ring {
          position: relative;
          width: 320px;
          height: 520px;
          transform-style: preserve-3d;
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .carousel__item {
          position: absolute;
          width: 320px;
          height: 520px;
          left: 0;
          top: 0;
          transform-style: preserve-3d;
        }

        @media (max-width: 640px) {
          .carousel__ring {
            width: 280px;
            height: 500px;
          }
          .carousel__item {
            width: 280px;
            height: 500px;
          }
        }
      `}</style>
    </div>
  );
}

export default Projects;
