import { motion } from 'framer-motion';
import './Hero.css';

// Import your background image
import heroImage from '../../assets/hero1.jpg';

const Hero = () => {
  return (
    <section className="hero">

      {/* Background Image Container */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: "linear" }}
        className="hero-bg"
        style={{ backgroundImage: `url(${heroImage})` }}
      ></motion.div>

      {/* Dark Overlay */}
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
};

export default Hero;