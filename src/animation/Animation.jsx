import { motion } from "framer-motion";

function Animation({ children, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 75 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: delay * 0.1 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}

export default Animation;
