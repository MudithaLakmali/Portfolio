function Navbar() {
  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>
        {" @Muditha Lakmali"}
        
      </div>
      <div style={styles.menuIcon}>
        &#9776; {/* This is the hamburger menu icon */}
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
    backgroundColor: "rgba(255, 255, 255, 0)", // Transparent
    zIndex: 1000,
  },
  menuIcon: {
    fontSize: "1.5rem",
    cursor: "pointer",
    },
   
};

export default Navbar;
