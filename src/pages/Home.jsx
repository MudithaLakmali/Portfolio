import stickman1 from "../assets/stickman1.png";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

function Home() {
  return (
    <div className="h-screen w-screen bg-white relative">
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
            IT'S MUDITHA
          </h1>
          <p className="text-xl text-gray-600 max-w-md">
            Welcome to my personal space! I'm Muditha, passionate about IT and
            creativity. This is my homepage where I share my journey and ideas.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
