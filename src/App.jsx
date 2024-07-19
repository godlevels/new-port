/* eslint-disable no-unused-vars */
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Navbar from './components/Navbar/Navbar';
import { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import Footer from './components/Footer';

const App = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = e => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 15,
      y: mousePosition.y - 15,
      backgroundColor: "black",
      scale: 1,
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "grey",
      mixBlendMode: "difference",
      scale: 2,
    }
  };

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  return (
    <Router>
      <Navbar />
      <motion.div 
        className='bg-black/55 h-8 w-8 rounded-full fixed top-0 left-0 pointer-events-none' 
        variants={variants}
        animate={cursorVariant}
      />
      <Routes>
        <Route path="/" element={<Home onMouseEnter={textEnter} onMouseLeave={textLeave} />} />
        <Route path="/projects" element={<Projects onMouseEnter={textEnter} onMouseLeave={textLeave} />} />
        <Route path="/about" element={<About onMouseEnter={textEnter} onMouseLeave={textLeave} />} />
        <Route path="/contact" element={<Contact onMouseEnter={textEnter} onMouseLeave={textLeave} />} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
