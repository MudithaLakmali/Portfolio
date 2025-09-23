import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import MeetMe from "./pages/MeetMe";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meetme" element={<MeetMe />} />
      </Routes>
    </Router>
  );
}

export default App;
