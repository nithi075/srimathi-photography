import "./FilmSection.css";

// Import your BTS videos
import video1 from "../../assets/video1.mp4";
import video2 from "../../assets/video2.mp4";
import video3 from "../../assets/video3.mp4";
import video4 from "../../assets/video4.mp4";

const FilmSection = () => {

  const videos = [
    {
      title: "BTS - Wedding Shoot",
      video: video1,
    },

    {
      title: "BTS - Maternity Session",
      video: video2,
    },

    {
      title: "BTS - Couple Moments",
      video: video3,
    },

    {
      title: "BTS - Creative Direction",
      video: video4,
    },
  ];

  return (

    <section className="bts-film-section">

      <h2 className="bts-film-title">
        BEHIND THE SCENES
      </h2>

      <div className="bts-film-grid">

        {videos.map((item, index) => (

          <div
            key={index}
            className="bts-film-card"
          >

            <video
              src={item.video}
              autoPlay
              muted
              loop
              playsInline
              className="bts-film-video"
            />

            <div className="bts-film-overlay"></div>

            <div className="bts-film-play-btn">

              <svg
                viewBox="0 0 24 24"
                fill="white"
                width="28"
                height="28"
              >
                <path d="M8 5v14l11-7z" />
              </svg>

            </div>

            <p>{item.title}</p>

          </div>

        ))}

      </div>

    </section>
  );
};

export default FilmSection;