import Contact from "../components/contact";
import Footer from "../components/Footer";

function Meetme() {
    return (
      <div>
        <div id="aboutme" className="bg-gray-50 py-16 px-6">
          {/* Intro Section */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">About Me</h2>
            <p className="text-gray-700 text-lg">
              Hi! I’m Muditha Lakmali, an IT & Management undergraduate with a
              passion for software engineering and entrepreneurship. I enjoy
              building web apps, exploring new technologies, and solving
              real-world problems.
            </p>
          </div>

          {/* Technologies Section */}
          <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {/* Frontend */}
            <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Frontend</h3>
              <p>React, HTML, CSS, JavaScript, Tailwind</p>
            </div>

            {/* Backend */}
            <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Backend</h3>
              <p>Laravel, ASP.NET, PHP, Node.js (basic)</p>
            </div>

            {/* Database */}
            <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Database</h3>
              <p>MySQL, PostgreSQL, NoSQL</p>
            </div>

            {/* Version Control */}
            <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Version Control</h3>
              <p>Git, GitHub</p>
            </div>
          </div>
        </div>
            <Contact />
            <Footer/>
      </div>
    );
}

export default Meetme;
