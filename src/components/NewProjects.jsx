import React from "react";
import { useNavigate } from "react-router-dom";
import project1 from "../assets/project1.jpeg";
import project2 from "../assets/project2.jpeg";
import project3 from "../assets/project3.jpeg";
import project4 from "../assets/project4.jpeg";
import project5 from "../assets/kairoproject5.png";

function NewProjects() {
  const navigate = useNavigate();

  const handleProjectClick = (projectId) => {
    navigate(`/project/${projectId}`);
  };

  const projects = [
    {
      id: 1,
      img: project5,
      size: "h-[270px]",
      title: "Kairo Project",
      bgColor: "bg-gray-800",
    },
    {
      id: 2,
      img: project3,
      size: "h-[290px]",
      title: "E-Commerce Platform",
      bgColor: "bg-gray-700",
    },
    {
      id: 3,
      img: project2,
      size: "h-[275px]",
      title: "Task Management App",
      bgColor: "bg-gray-600",
    },
    {
      id: 4,
      img: project4,
      size: "h-[275px]",
      title: "Project Four",
      bgColor: "bg-gray-700",
    },
    {
      id: 5,
      img: project1,
      size: "h-[275px]",
      title: "Project Five",
      bgColor: "bg-gray-800",
    },
  ];

  return (
    <div className="relative z-10 min-h-screen w-full bg-white px-10 py-20">
      {/* Top-left heading */}
      <div className="absolute top-10 left-16 text-left">
        <h2 className="text-5xl font-bold text-gray-800 mb-2">
          The Sticky Files
        </h2>
        <p className="text-xl text-gray-700 max-w-md">
          These are some of my projects — fun, simple, and made by me!
        </p>
      </div>

      {/* Projects Grid */}
      <div className="flex flex-col gap-8 mt-40 w-full">
        {/* First Row - 2 projects */}
        <div className="flex justify-between gap-6 w-full">
          {projects.slice(0, 2).map((p) => (
            <div
              key={p.id}
              className={`${p.size} w-1/2 relative overflow-hidden cursor-pointer shadow-lg group`}
              onClick={() => handleProjectClick(p.id)}
            >
              {/* Background with Title (Default State) */}
              <div
                className={`absolute inset-0 ${p.bgColor} flex items-center justify-center transition-opacity duration-500 group-hover:opacity-0`}
              >
                <h3 className="text-white text-3xl font-bold text-center px-6">
                  {p.title}
                </h3>
              </div>

              {/* Image (Revealed on Hover) */}
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
            </div>
          ))}
        </div>

        {/* Second Row - 3 projects */}
        <div className="flex justify-between gap-6 w-full">
          {projects.slice(2, 5).map((p) => (
            <div
              key={p.id}
              className={`${p.size} w-1/3 relative overflow-hidden cursor-pointer shadow-lg group`}
              onClick={() => handleProjectClick(p.id)}
            >
              {/* Background with Title (Default State) */}
              <div
                className={`absolute inset-0 ${p.bgColor} flex items-center justify-center transition-opacity duration-500 group-hover:opacity-0`}
              >
                <h3 className="text-white text-2xl font-bold text-center px-6">
                  {p.title}
                </h3>
              </div>

              {/* Image (Revealed on Hover) */}
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NewProjects;
