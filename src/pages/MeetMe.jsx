
import Footer from "../components/Footer";
import Meetmeimg from "../assets/Meetme.png";
import Technologies from "../components/Technologies";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Contact_ from "../components/Contact_";


function Meetme() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  return (
    <div className="relative">
      <div>
        <div
          id="meetme"
          className="bg-gray-100 py-16 px-6 flex flex-col md:flex-row items-center gap-10 "
        >
          {/* Left Side (Text) */}
          <div className="flex-1 flex flex-col justify-center relative left-50">
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Just Me</h2>
              <p className="text-lg text-gray-600 mb-6">
                an IT undergraduate who loves coding… but only when I’m building
                things I actually like (because bug fixing at 2 AM is not my
                idea of fun).
              </p>

              <p className="text-lg text-gray-600 mb-6">
                When I’m not coding, you’ll probably find me somewhere between
                mountain tops or exploring new places.
              </p>

              <p className="text-lg text-gray-600 mb-6">
                Oh, and I just started writting too! My blogs are a bit of a
                mixed bag. you’ll find posts on{" "}
                <a
                  href="https://medium.com/@muditha0256"
                  className="font-bold underline hover:text-gray-800"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Medium
                </a>
                , . Curious? Go ahead!
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Finally I’m just a good girl.
              </p>
            </motion.div>
          </div>

          {/* Right Side (Image) */}
          <div className="flex-1 flex justify-center">
            <motion.img
              src={Meetmeimg}
              alt="meetme"
              className="w-90 h-auto mt-10 relative left-10" // smaller size (adjust w-48 as needed)
              initial={{ opacity: 0, x: 100 }} // fade/slide in when page loads
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            />
          </div>
        </div>

        {/* Contact & Footer */}
        <div className="">
          {" "}
          <Technologies />
        </div>
      </div>

      <Contact_ />

      <Footer />
    </div>
  );
}

export default Meetme;
