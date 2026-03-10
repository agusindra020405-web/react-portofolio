import { motion } from "framer-motion";

const name = "AGUS INDRA";

function SplashScreen() {
  return (
    <motion.div
      className="splash-screen"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <motion.h1
        className="logo-text"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
      >
        {name.split("").map((char, index) => (
          <motion.span
            key={index}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6 }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.h1>

      <motion.p
        className="intro-subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
      >
        P O R T O F O L I O
      </motion.p>
    </motion.div>
  );
}

export default SplashScreen;
