import { motion } from 'framer-motion';
import './Hero.css';

import heroImage from '../../assets/hero1.jpg';
import logoimg from '../../assets/logo.png';

const Hero = () => {
  return (
    <section className="hero" id="home">

      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          <img src={logoimg} alt="Golden Lights Photography Logo" />
        </div>
      </nav>

      {/* Background Image */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: "linear" }}
        className="hero-bg"
        style={{ backgroundImage: `url(${heroImage})` }}
      />

      {/* Overlay */}
      <div className="hero-overlay"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="hero-content"
      >
        <p className="hero-subtitle">
          CRAFTING TIMELESS MEMORIES
        </p>

        <h1 className="hero-title">
          DEVI PHOTOGRAPHY
        </h1>
      </motion.div>

    </section>
  );
}

export default Hero;