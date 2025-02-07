import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/NavBar/navbar";
import Home from "./components/Home/home";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";
import Video from "./components/Video/video";
import PageTransition from "./components/PageTransition/pageTransition"; // ✅ Import it
import PageTransition2 from "./components/PageTransition/pageTransition2";
import './App.css';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/video" element={<PageTransition2><Video /></PageTransition2>} />
        <Route path="/contact" element={<PageTransition2><Contact /></PageTransition2>} />
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
