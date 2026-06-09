import { motion } from 'framer-motion';
import './StorySection.css';
import story1 from '../../assets/story4.jpg';
import story2 from '../../assets/story3.jpg';

const stories = [
  {
    id: 1,
    image: story1,
    title: "Ganeshkumar & Moniga",
    location: "Trichy, Tamilnadu",
    category: "Candid Wedding",
    date: "May 2026"
  },
  {
    id: 2,
    image: story2,
    title: "Akash & Anbu",
    location: "Trichy, Tamilnadu",
    category: "Traditional Portrait",
    date: "April 2026"
  }
];

const StorySection = () => {
  return (
    <section className="story-section">
      <h2 className="section-title">Featured Wedding Stories</h2>

      <div className="story-grid">
        {stories.map((story, index) => (
          <motion.div 
            key={story.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
            className="story-card"
          >
            <div className="image-wrapper">
              <img src={story.image} alt={story.title} />
              <div className="overlay"></div>
            </div>
            
            <div className="story-info">
              <span className="category">{story.category} • {story.date}</span>
              <h3>{story.title}</h3>
              <p className="location">{story.location}</p>
              <a href="#" className="view-link">Read Story</a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default StorySection;