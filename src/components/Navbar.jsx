import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>@Muditha Lakmali</div>
      <div style={styles.menu}>
        <a
          href="/CV Final.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-600 transition-colors"
        >
          Resume
        </a>
        <Link to="/meetme" style={styles.link}>
          Meet Me
        </Link>
      </div>
    </nav>
  );
}

const styles = {
  navbar: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 2rem",
    backgroundColor: "rgba(255, 255, 255, 0.3)", // semi-transparent
    backdropFilter: "blur(5px)", // blur effect

    
  },

  menu: {
    display: "flex",
    gap: "1.5rem",
    fontWeight: "500",
  },
  link: {
    textDecoration: "none",
    color: "",
    cursor: "pointer",
    transition: "",
  },
};

export default Navbar;
