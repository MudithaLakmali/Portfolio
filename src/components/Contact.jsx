import contact from "../assets/contact.png";
import confetti from "canvas-confetti";
import { motion } from "framer-motion";

function Contact() {
  const handleConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#000000", "#ffffff"], // black & white confetti
    });
  };

  return (
    <div className="flex bg-white justify-center items-center min-h-[500px] px-10">
      {/* Image */}
      <motion.img
        src={contact}
        alt="contact image"
        className="w-200 h-auto relative left-40"
        initial={{ opacity: 0, x: -200 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      />

      {/* Contact Info */}
      <div className="relative right-55 max-w-md text-left space-y-6 ">
        <h2 className="text-4xl font-bold tracking-tight">Wanna Connect</h2>

        <div className="space-y-2">
          <p className="text-gray-700 font-medium">Email</p>
          <a
            href="mailto:muditha0256@gmail.com"
            onClick={handleConfetti}
            title="Just click it..Then it's done"
            className="text-gray-900 underline hover:no-underline transition"
          >
            muditha0256@gmail.com
          </a>
        </div>

        <div className="space-y-2">
          <p className="text-gray-700 font-medium">LinkedIn</p>
          <a
            href="https://linkedin.com/in/muditha-lakmali"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-900 underline hover:no-underline transition"
          >
            linkedin.com/in/muditha-lakmali
          </a>
        </div>

        <p className="italic text-gray-600">
          Hire me before someone else does... Just kidding
        </p>
      </div>
    </div>
  );
}

export default Contact;
