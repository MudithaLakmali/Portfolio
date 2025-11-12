import React from "react";
import { useParams } from "react-router-dom";

function ProjectDetails() {
  const { id } = useParams();

  const projectDetails = {
    1: {
      title: "Kairo Project",
      description:
        "A comprehensive project management system designed to streamline workflow processes and enhance team collaboration through intuitive task organization and real-time communication features.",
      duration: "January 2025 – March 2025",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Socket.io"],
      whatIDid:
        "Led frontend development using React with TypeScript, implemented real-time collaboration features using Socket.io, designed RESTful APIs with Node.js and Express, and managed database architecture with MongoDB. Focused on creating an intuitive user interface with drag-and-drop functionality for task management.",
      challenges:
        "Implemented real-time synchronization across multiple users while maintaining data consistency and performance optimization for large project datasets.",
      achievements:
        "Reduced task completion time by 30% through streamlined workflow design and improved team collaboration efficiency.",
      liveLink: "https://kairo-project.com",
      githubLink: "https://github.com/yourusername/kairo-project",
    },
    2: {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution featuring real-time inventory management, secure payment processing, and personalized shopping experiences with advanced product filtering and recommendation systems.",
      duration: "October 2024 – December 2024",
      technologies: ["React", "Stripe API", "Node.js", "PostgreSQL", "Redis"],
      whatIDid:
        "Developed the complete frontend architecture using React with state management, implemented secure payment integration with Stripe API, built RESTful APIs for product management and order processing, and optimized database queries for high-performance product searches.",
      challenges:
        "Ensured PCI compliance for payment processing and handled high traffic during peak shopping seasons with efficient caching strategies.",
      achievements:
        "Achieved 99.8% uptime and processed over 1,000+ transactions securely with zero payment failures.",
      liveLink: "https://ecommerce-platform.com",
      githubLink: "https://github.com/yourusername/ecommerce-platform",
    },
    3: {
      title: "Task Management App",
      description:
        "A real-time collaborative task management application enabling teams to track progress, assign responsibilities, and monitor project timelines with instant updates and notifications.",
      duration: "May 2024 – July 2024",
      technologies: ["React", "Firebase", "Material UI", "Context API"],
      whatIDid:
        "Engineered real-time data synchronization using Firebase Firestore, created responsive UI components with Material UI, implemented state management using Context API, and developed push notification system for task updates and deadlines.",
      challenges:
        "Managed real-time data conflicts and ensured offline functionality with seamless synchronization when back online.",
      achievements:
        "Improved team productivity by 40% through intuitive task organization and real-time collaboration features.",
      liveLink: "https://task-manager-app.com",
      githubLink: "https://github.com/yourusername/task-manager",
    },
    4: {
      title: "Social Media Dashboard",
      description:
        "An analytics dashboard for visualizing and managing social media data with clear performance insights and growth metrics.",
      duration: "August 2024 – September 2024",
      technologies: ["React", "D3.js", "Redux"],
      whatIDid:
        "Developed interactive data visualizations using D3.js, managed application state with Redux, and implemented modular components for performance analytics and audience engagement tracking.",
      challenges:
        "Optimized large dataset rendering in charts and ensured smooth user interactions with dynamic visualizations.",
      achievements:
        "Delivered real-time visualization performance improvements by 45% through optimized rendering techniques.",
      liveLink: "https://social-dashboard.com",
      githubLink: "https://github.com/yourusername/social-dashboard",
    },
    5: {
      title: "Portfolio Website",
      description:
        "A minimalist personal portfolio website showcasing projects, skills, and achievements with smooth navigation and a clean layout.",
      duration: "April 2024 – May 2024",
      technologies: ["React", "Tailwind CSS", "Vite"],
      whatIDid:
        "Designed and developed a fully responsive personal portfolio using React and Tailwind CSS, implemented routing for project details pages, and optimized performance with lazy loading.",
      challenges:
        "Maintaining minimalism while ensuring detailed project representation and responsive performance.",
      achievements:
        "Successfully improved visitor engagement with clean navigation and consistent design aesthetics.",
      liveLink: "https://portfolio-website.com",
      githubLink: "https://github.com/yourusername/portfolio",
    },
  };

  const project = projectDetails[id];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-black">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Project Not Found</h2>
          <p>The requested project could not be found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-black py-12 px-6 pt-20">
      <div className="max-w-4xl mx-auto">
        <div className="border border-black rounded-2xl shadow-sm overflow-hidden">
          {/* Header Section */}
          <div className="bg-white border-b border-black px-8 py-6">
            <h1 className="text-3xl font-bold mb-2">{project.title}</h1>
            <p className="text-lg">{project.description}</p>
          </div>

          {/* Project Details */}
          <div className="p-8">
            <table className="w-full text-left">
              <tbody>
                <tr className="border-b border-black">
                  <td className="py-4 font-semibold w-48 align-top">
                    Duration
                  </td>
                  <td className="py-4">{project.duration}</td>
                </tr>

                <tr className="border-b border-black">
                  <td className="py-4 font-semibold align-top">
                    Technologies Used
                  </td>
                  <td className="py-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 border border-black rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </td>
                </tr>

                <tr className="border-b border-black">
                  <td className="py-4 font-semibold align-top">
                    Key Responsibilities
                  </td>
                  <td className="py-4">{project.whatIDid}</td>
                </tr>

                <tr className="border-b border-black">
                  <td className="py-4 font-semibold align-top">
                    Technical Challenges
                  </td>
                  <td className="py-4">{project.challenges}</td>
                </tr>

                <tr className="border-b border-black">
                  <td className="py-4 font-semibold align-top">
                    Key Achievements
                  </td>
                  <td className="py-4">{project.achievements}</td>
                </tr>

                <tr>
                  <td className="py-4 font-semibold align-top">
                    Project Links
                  </td>
                  <td className="py-4">
                    <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-2 sm:space-y-0">
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline font-medium hover:opacity-80"
                      >
                        Live Demo
                      </a>
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline font-medium hover:opacity-80"
                      >
                        GitHub Repository
                      </a>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;
