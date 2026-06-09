import { motion } from "framer-motion";
import "./About.css";

import aboutVideo from "../../assets/about-video.mp4";

const About = () => {
  return (
    <section className="about-section" id="about">

      <div className="about-label">
        <span>THE STORYTELLER</span>
      </div>

      <div className="about-wrapper">

        <motion.div
          className="about-image"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <video
            src={aboutVideo}
            autoPlay
            loop
            muted
            playsInline
            className="about-video"
          />

          <div className="video-badge">
            EST. 2025
          </div>
        </motion.div>

        <motion.div
          className="about-content"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="about-mini">
            WEDDING • MATERNITY • PRE-WEDDING
          </span>

          <h2 className="about-title">
            Every Frame Holds
            <br />
            A Story Worth Remembering
          </h2>

          <p className="quote">
            “Capturing the unseen poetry in every frame.”
          </p>

          <p className="about-text">
            Photography is more than preserving moments.
            It is about documenting emotions, relationships,
            and the quiet beauty that often goes unnoticed.
          </p>

          <p className="about-text">
            My approach blends cinematic storytelling with
            timeless editorial aesthetics, creating imagery
            that feels honest, elegant, and deeply personal.
          </p>

          <a href="#contact" className="about-btn">
            Let's Create Together
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default About;