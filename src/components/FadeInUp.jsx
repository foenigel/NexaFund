import { motion } from "framer-motion";

const FadeInUp = ({ children, delay = 0, animate = true }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={animate ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInUp;
