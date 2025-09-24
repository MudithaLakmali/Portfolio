import { FaReact, FaJs, FaPhp, FaGitAlt } from "react-icons/fa";
import { SiLaravel, SiMysql, SiPostgresql, SiPython } from "react-icons/si";

function Technologies() {
  const techCategories = [
    {
      title: "Frontend",
      icons: [
        { icon: <FaReact size={40} />, name: "React.js" },
        { icon: <FaJs size={40} />, name: "JavaScript" },
      ],
    },
    {
      title: "Backend",
      icons: [
        { icon: <SiLaravel size={40} />, name: "Laravel" },
        { icon: <FaPhp size={40} />, name: "PHP" },
        { icon: <SiPython size={40} />, name: "Python" },
      ],
    },
    {
      title: "Database",
      icons: [
        { icon: <SiMysql size={40} />, name: "MySQL" },
        { icon: <SiPostgresql size={40} />, name: "PostgreSQL" },
      ],
    },
    {
      title: "Version Control",
      icons: [{ icon: <FaGitAlt size={40} />, name: "Git" }],
    },
  ];

  return (
    <div className="bg-gray-100 py-16 px-6">
      <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
        Technologies I Use
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {techCategories.map((category, idx) => (
          <div
            key={idx}
            className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center transition-transform duration-300 hover:scale-105"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              {category.title}
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {category.icons.map((tech, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center bg-gray-100 rounded-lg p-3 w-20"
                >
                  {tech.icon}
                  <span className="text-xs text-gray-800 mt-2 text-center">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Technologies;
