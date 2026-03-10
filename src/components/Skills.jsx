import { motion } from "framer-motion";
import SkillCard from "./SkillCard";
const skillAnimation = {
  initial: { opacity: 0, y: 25 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false },
  whileHover: {
    y: -10,
    transition: { duration: 0.1 },
  },
};
function Skills() {
  return (
    <section id="skills" className="skills section">
      <div className="container">
        <h2 className="section-title fade-in">Skills & Expertise</h2>
        <div className="skills-grid">
          <motion.div
            className="skill-card"
            {...skillAnimation}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 18,
              delay: 0,
            }}
          >
            <div className="skill-icon">🎨</div>
            <h3 className="skill-title">Design</h3>
            <p className="skill-description">
              UI/UX Design, Visual Identity, Brand Strategy
            </p>
          </motion.div>
          <motion.div
            className="skill-card"
            {...skillAnimation}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 18,
              delay: 0.2,
            }}
          >
            <div className="skill-icon">💻</div>
            <h3 className="skill-title">Development</h3>
            <p className="skill-description">
              Frontend Development, Responsive Design, Performance
            </p>
          </motion.div>
          <motion.div
            className="skill-card"
            {...skillAnimation}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 18,
              delay: 0.4,
            }}
          >
            <motion.div className="skill-icon">☕</motion.div>
            <h3 className="skill-title">Barista</h3>
            <p className="skill-description">
              Milk Steaming, Latte Art, Customer Service, Upselling Techniques,
              Complaint Handling, Hospitality Skills
            </p>
          </motion.div>
          <motion.div
            className="skill-card"
            {...skillAnimation}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 20,
              delay: 0.4,
            }}
          >
            <motion.div className="skill-icon">🚀</motion.div>
            <h3 className="skill-title">Strategy</h3>
            <p className="skill-description">
              Product Strategy, User Research, Analytics
            </p>
          </motion.div>
          <motion.div
            className="skill-card"
            {...skillAnimation}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 18,
              delay: 0.8,
            }}
          >
            <motion.div className="skill-icon">🎯</motion.div>
            <h3 className="skill-title">Marketing</h3>
            <p className="skill-description">
              Digital Marketing, SEO, Content Strategy
            </p>
          </motion.div>
          <motion.div
            className="skill-card"
            {...skillAnimation}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 18,
              delay: 0.9,
            }}
          >
            <motion.div className="skill-icon">⚡</motion.div>
            <h3 className="skill-title">Optimization</h3>
            <p className="skill-description">
              Performance Optimization, A/B Testing
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
export default Skills;
