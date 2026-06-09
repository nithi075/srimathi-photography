import { motion } from 'framer-motion';
import './Hero.css';
import heroImage from '../../assets/hero1.jpg';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div
        className="hero-bg"
        style={{ backgroundImage: `url(${heroImage})` }}
      />

      <div className="hero-overlay" />

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        <span className="journal-tag">THE VISUAL JOURNAL • VOL. 01</span>

        <h1 className="hero-title">
          DEV
          <br />
          STUDIOZ
        </h1>

        <div className="journal-line"></div>

        <p className="hero-quote">
          Documenting stories through light, emotion, and timeless frames.
          Every photograph becomes a page in an unfolding journal.
        </p>

        <button
          className="cta-button"
          onClick={() =>
            document
              .getElementById('portfolio')
              ?.scrollIntoView({ behavior: 'smooth' })
          }
        >
          Explore Journal
        </button>
      </motion.div>

      <div className="journal-date">EST. 2025</div>
    </section>
  );
};

export default Hero;