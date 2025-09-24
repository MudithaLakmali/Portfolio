import contact from "../assets/contact.png";
import confetti from "canvas-confetti";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

function Contact() {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const handleConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#000000", "#ffffff"], // black & white confetti
    });
  };

  return (
    <div className="flex bg-white justify-center items-center min-h-[500px]">
      {/* Image */}
      <div>
        <motion.img
                    src={contact}
                    alt="contact image"
                    className="w-200 h-auto relative left-40" 
                    initial={{ opacity: 0, x: -200 }} 
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                  />
      </div>

      {/* Contact Info */}
      <div className="relative right-40">
        <h2 className="text-3xl font-bold mb-4">Wanna Contact me</h2>

        <p className="text-gray-800 font-medium">
          {"Shoot me an email: "}
          <br />
          <a
            href="mailto:muditha0256@gmail.com"
            onClick={handleConfetti}
            className="text-blue-500 hover:underline inline-block cursor-pointer"
          >
            muditha0256@gmail.com
          </a>

          <div className="mb-10 mt-4">
            {"LinkedIn: "}
            <br />
            <a
              href="https://linkedin.com/in/muditha-lakmali"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              linkedin.com/in/muditha-lakmali
            </a>
          </div>

          <p className="mb-2">{"Hire me before someone else does 😉"}</p>
        </p>
      </div>
    </div>
  );
}

export default Contact;
