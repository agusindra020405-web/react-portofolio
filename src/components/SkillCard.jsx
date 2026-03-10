import { motion } from "framer-motion";

const skillAnimation = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, amount: 0.3 },
  whileHover: { y: -10, scale: 1.02, transition: { duration: 0.2 } }
};

function SkillCard({ icon, title, description, delay }) {
  return (
    <motion.div
      className="skill-card"
      {...skillAnimation}
      transition={{ delay: delay }}
    >
      <div className="skill-icon">{icon}</div>
      <h3 className="skill-title">{title}</h3>
      <p className="skill-description">{description}</p>
    </motion.div>
  );
}

export default SkillCard;