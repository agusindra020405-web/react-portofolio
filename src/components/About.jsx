import { motion } from "framer-motion";
function About() {
  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 5, ease: "easeOut" }}
          >
            <h2 className="about-title">About Me</h2>
            <p className="about-description">
              Let me introduce myself, my name is I Made Agus Indra Setiawan. I
              am a student at ITB STIKOM Bali. I am passionate about web
              development and information technology.
            </p>
            <p className="about-description">
              I am a beginner in the world of web development with a strong
              passion for continuous learning and growth in technology. I am
              currently learning the fundamentals of web development, such as
              HTML, CSS, and JavaScript. I believe that learning is a lifelong
              journey. Every line of code I write is a small step toward my
              dream of becoming a professional web developer.
            </p>
          </motion.div>
          <motion.div
            className="about-image"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 3, ease: "easeOut" }}
          >
            <img
              src="FOTO FORMAL.JPG"
              alt="Profile Picture"
              className="profile-image"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
