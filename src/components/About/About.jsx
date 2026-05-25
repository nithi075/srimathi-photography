import { motion } from 'framer-motion';
import './About.css';

// Import your image
import aboutImage from '../../assets/about1.png';

const About = () => {
  return (
    <section className="about-section">

      <div className="about-wrapper">

        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="about-image"
        >
          <img src={aboutImage} alt="Photographer" />
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="about-content"
        >
          <p className="quote">
            "Capturing the unseen poetry in every frame."
          </p>

          <h2 className="about-title">
            THE ARTIST BEHIND THE LENS
          </h2>

          <p className="about-text">
            With a background in cinematic arts and a passion for timeless storytelling,
            I document your wedding not just as an event, but as a living, breathing story.
            My focus is on the quiet, intimate moments that define true love.
          </p>

          <button className="about-btn">
            Read My Full Journey
          </button>

        </motion.div>

      </div>

    </section>
  );
};

export default About;