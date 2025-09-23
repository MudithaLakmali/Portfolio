import { useEffect, useMemo, useRef, useState } from "react";
import project1 from "../assets/project1.jpeg";
import project2 from "../assets/project2.jpeg";
import project3 from "../assets/project3.jpeg";
import project4 from "../assets/project4.jpeg";

function Projects() {
  const projects = useMemo(
    () => [
      {
        id: 0,
        title: "E-Commerce Platform",
        subtitle: "Full-stack web application",
        img: project1,
        description:
          "A modern e-commerce platform built with React and Node.js, featuring user authentication, payment integration, and responsive design.",
        technologies: "React, Node.js, MongoDB, Stripe API",
        github: "https://github.com/yourusername/ecommerce-platform",
      },
      {
        id: 1,
        title: "Weather Dashboard",
        subtitle: "Real-time weather tracking",
        img: project2,
        description:
          "Interactive weather dashboard that provides real-time weather data, forecasts, and beautiful visualizations using modern APIs.",
        technologies: "React, OpenWeather API, Chart.js, Tailwind CSS",
        github: "https://github.com/yourusername/weather-dashboard",
      },
      {
        id: 2,
        title: "Task Management App",
        subtitle: "Productivity and organization tool",
        img: project3,
        description:
          "A collaborative task management application with drag-and-drop functionality, real-time updates, and team collaboration features.",
        technologies: "React, Firebase, DND Kit, TypeScript",
        github: "https://github.com/yourusername/task-manager",
      },
      {
        id: 3,
        title: "Portfolio Website",
        subtitle: "Personal showcase platform",
        img: project4,
        description:
          "A responsive portfolio website featuring 3D animations, smooth scrolling, and interactive elements to showcase projects and skills.",
        technologies: "React, Three.js, Framer Motion, Tailwind CSS",
        github: "https://github.com/yourusername/portfolio-website",
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
      <div className="relative z-10 h-full w-full flex flex-col items-center justify-center gap-8 py-40 ">
        <div className="absolute top-10 left-25 ">
          <h2 className="text-5xl font-bold text-gray-800 mb-4">
            The Sticky Files
          </h2>
          <p className="text-xl text-gray-600">
            These are some of my projects—fun, simple, and made by me!
          </p>
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
                  <div className="h-full w-full overflow-hidden rounded-2xl bg-white shadow-md border border-gray-200">
                    <div className="h-48 w-full overflow-hidden">
                      <img
                        src={project.img}
                        alt={project.title}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="p-6 text-gray-800">
                      <h3 className="text-xl font-semibold mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 mb-2">{project.subtitle}</p>
                      <p className="text-gray-700 mb-3">
                        {project.description}
                      </p>
                      <p className="text-gray-500 mb-3 font-medium">
                        Technologies: {project.technologies}
                      </p>
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
