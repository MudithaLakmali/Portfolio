function Aboutus() {
  return (
    <div className="min-h-screen bg-gray-200 p-8">
      <div className="max-w-7xl mx-auto flex">
        {/* Left Side - Contact Box (1/4 width) */}
        <div className="w-1/4 pr-8 ">
          <div className="bg-gray-100 shadow-xl rounded-2xl p-6 animate-fade-in-left transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            {/* Profile Image */}
            <div className="flex justify-center mb-6">
              <div className="w-24 h-24 bg-gray-300 rounded-full flex items-center justify-center">
                <svg
                  className="w-12 h-12 text-gray-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>

            {/* Contact Details */}
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-black text-center mb-4">
                Contact
              </h3>

              <div className="flex items-center space-x-2">
                <svg
                  className="w-4 h-4 text-gray-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span className="text-black text-sm">muditha@example.com</span>
              </div>

              <div className="flex items-center space-x-2">
                <svg
                  className="w-4 h-4 text-gray-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span className="text-black text-sm">+94 123 456 789</span>
              </div>

              <div className="flex items-center space-x-2">
                <svg
                  className="w-4 h-4 text-gray-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-black text-sm">Colombo, Sri Lanka</span>
              </div>

              <div className="flex items-center space-x-2">
                <svg
                  className="w-4 h-4 text-gray-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-black text-sm">
                  linkedin.com/in/muditha
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - About Content (3/4 width) */}
        <div className="w-3/4 pl-8 animate-fade-in-right">
          <div className="bg-gray-100 shadow-xl rounded-2xl p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <h2 className="text-4xl font-bold text-black mb-4">
              Muditha Lakmali
            </h2>

            {/* Divider Line */}
            <div className="w-20 h-1 bg-black mb-6"></div>

            {/* About Paragraph */}
            <div className="text-black text-lg leading-relaxed space-y-4 mb-8">
              <p>
                Hello! I'm Muditha Lakmali, a passionate and dedicated
                professional with a strong background in web development and
                design. I specialize in creating innovative digital solutions
                that combine functionality with aesthetic appeal.
              </p>
              <p>
                With years of experience in the field, I have developed
                expertise in modern technologies and frameworks. I believe in
                continuous learning and staying updated with the latest industry
                trends to deliver exceptional results for every project.
              </p>
              <p>
                My approach to work is collaborative and detail-oriented. I
                enjoy working with clients to understand their vision and
                transform it into reality through clean, efficient, and
                user-friendly solutions. Whether it's a small business website
                or a complex web application, I'm committed to delivering
                quality work that exceeds expectations.
              </p>
            </div>

            {/* Download Resume Button */}
            <button className="bg-black text-gray-100 px-8 py-3 rounded-lg font-semibold transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-gray-800">
              <div className="flex items-center space-x-2">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Download Resume</span>
              </div>
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fade-in-left {
          animation: fadeInLeft 0.8s ease-out forwards;
        }

        .animate-fade-in-right {
          animation: fadeInRight 0.8s ease-out forwards;
          animation-delay: 0.2s;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}

export default Aboutus;
