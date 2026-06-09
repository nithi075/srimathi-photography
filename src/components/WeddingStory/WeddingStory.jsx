import { motion } from "framer-motion";
import "./WeddingStory.css";

import story1 from "../../assets/story1.jpg";
import story2 from "../../assets/story2.jpg";

const ExperienceSection = () => {
  return (
    <section className="wedding-story-section">

      <h2 className="section-title">
        THE EXPERIENCE
      </h2>

      {/* Step 1 */}
      <motion.div
        className="story-wrapper"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="story-image">
          <img src={story1} alt="Consultation" />
        </div>

        <div className="story-content">
          <span className="story-date">STEP 01</span>

          <h3>THE CONNECTION</h3>

          <p>
            Every story begins with a conversation. We take time to
            understand your vision, your personality, and the moments
            that matter most to you.
          </p>
        </div>
      </motion.div>

      {/* Step 2 */}
      <motion.div
        className="story-wrapper reverse"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="story-image">
          <img src={story2} alt="Photography Experience" />
        </div>

        <div className="story-content">
          <span className="story-date">STEP 02</span>

          <h3>THE STORYTELLING</h3>

          <p>
            Through a documentary and cinematic approach, every frame is
            crafted to preserve authentic emotions and timeless memories.
          </p>
        </div>
      </motion.div>

    </section>
  );
};

export default ExperienceSection;