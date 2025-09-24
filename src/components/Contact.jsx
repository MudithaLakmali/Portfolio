import contact from "../assets/contact.png";
import confetti from "canvas-confetti";

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
    <div className="flex bg-gray-100 justify-center items-center min-h-[500px]">
      {/* Image */}
      <div>
        <img
          src={contact}
          alt="contact img"
          className="w-190 relative left-50"
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
