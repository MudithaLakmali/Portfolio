import stickman1 from "../assets/stickman1.png";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import Projects from "../components/Projects";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="h-screen w-screen bg-gray-100 relative">
      <Navbar />

      <div className="flex items-center justify-between h-full px-10">
        {/* Left side stickman */}
        <div className="flex-1 flex justify-center">
          <motion.img
            src={stickman1}
            alt="Stickman"
            className=""
            initial={{ opacity: 0, x: -100 }} // start off-screen left
            animate={{ opacity: 1, x: 0 }} // slide in to position
            transition={{ duration: 1 }} // 1 second smooth animation
          />
        </div>

        {/* Right side content */}
        <div className="flex-1">
          <h1 className="text-6xl font-bold text-gray-800 mb-6">
            Hey! <br />
            IT'S MUDITHA
          </h1>
          <p className="text-xl text-gray-600 max-w-md">
            I like coding, plants, and making random fun stuff. This is my
            little space to share whatever I’m up to!
          </p>
        </div>
      </div>

      <div className="absolute bottom-10 w-full flex justify-center">
        <motion.div
          animate={{ y: [0, -10, 0] }} // simple up-and-down shake
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: "loop",
          }}
          className="text-gray-700  cursor-pointer"
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
