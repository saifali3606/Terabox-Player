import { BrowserRouter as Router, Routes, Route,useLocation} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/NavBar/navbar";
import Home from "./components/Home/home";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";
import Video from "./components/Video/video";
import './App.css';


function AnimatedRoutes() {
  const location = useLocation(); // Detects route changes

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<>
          <Home />
        </>} />
        <Route path="/video" element={<Video />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}

  function App() {
    return (
      <Router>
        <Navbar />
        <AnimatedRoutes />
        <Footer />
      </Router>
    );
  }


export default App;
