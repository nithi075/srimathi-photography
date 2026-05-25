import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./FilmSection.css";

// Import your videos
import video1 from "../../assets/video1.mp4";
import video2 from "../../assets/video2.mp4";
import video3 from "../../assets/video1.mp4";
import video4 from "../../assets/video2.mp4";

const FilmSection = () => {

  const videos = [
    {
      title: "THE NARRATIVE I",
      video: video1,
    },

    {
      title: "THE NARRATIVE II",
      video: video2,
    },

    {
      title: "THE NARRATIVE III",
      video: video3,
    },

    {
      title: "THE NARRATIVE IV",
      video: video4,
    },
  ];

  const [index, setIndex] = useState(0);

  // Auto Slide
  useEffect(() => {

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % videos.length);
    }, 4000);

    return () => clearInterval(timer);

  }, []);

  return (

    <section className="film-section">

      <h2 className="section-title">
        CINEMATIC FILMS
      </h2>

      <div className="film-container">

        <AnimatePresence mode="wait">

          <motion.div
            key={index}
            className="video-card"

            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}

            transition={{ duration: 0.8 }}
          >

            {/* Video */}
            <video
              src={videos[index].video}
              autoPlay
              muted
              loop
              playsInline
              className="bg-video"
            />

            {/* Overlay */}
            <div className="video-overlay"></div>

            {/* Play Icon */}
            <div className="play-btn">

              <svg
                viewBox="0 0 24 24"
                fill="white"
                width="30"
                height="30"
              >
                <path d="M8 5v14l11-7z" />
              </svg>

            </div>

            {/* Title */}
            <p>{videos[index].title}</p>

          </motion.div>

        </AnimatePresence>

      </div>

    </section>
  );
};

export default FilmSection;