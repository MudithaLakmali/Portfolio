import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import Stickmangif from "../assets/stickmann.gif";
import { useInView } from "react-intersection-observer";

function Home() {
   const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  return (
    <div className="h-screen w-screen bg-gray-100 relative">
      <Navbar />

      <div className="flex items-center justify-between h-full px-10">
        {/* Left side stickman gif */}
        <div className="flex-1 flex justify-center">
          <motion.img
            src={Stickmangif}
            alt="Stickman GIF"
            className="w-75 h-auto" // smaller size (adjust w-48 as needed)
            initial={{ opacity: 0, x: -100 }} // fade/slide in when page loads
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          />
        </div>

        {/* Right side content */}
        <div className="flex-1">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
           
          >
            <h1 className="text-6xl font-bold text-gray-800 mb-6">
              Hey! <br />
              IT'S MUDITHA
            </h1>
            <p className="text-xl text-gray-600 max-w-md">
              I like coding, plants, and making random fun stuff. This is my
              little space to share whatever I’m up to!
            </p>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-10 w-full flex justify-center">
        <motion.div
          animate={{ y: [0, -10, 0] }} // simple up-and-down bounce
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: "loop",
          }}
          className="text-gray-700 cursor-pointer"
        >
          <h1>Stick Around and Scroll!</h1>
        </motion.div>
      </div>

      <Projects />
      <Footer />
    </div>
  );
}

export default Home;
