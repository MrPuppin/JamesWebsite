import { motion } from "framer-motion";
import styles from "./ProjectStyles.module.css";
import { useEffect } from "react";

export function Projects() {
  useEffect(() => {
    // Disable scrollbar
    document.body.style.overflow = "hidden";

    // Cleanup function to reset overflow
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []); // Empty dependency array to run only on mount and unmount

  return (
    <>
      <motion.div
        initial={{ x: "100%", opacity: 0 }} // Start off to the right and transparent
        animate={{ x: 0, opacity: 1 }} // Animate to its final position and full opacity
        exit={{ x: "100%", opacity: 0, transition: { duration: 0.2 } }} // Exit to the right }}
      >
        <section id="projects" className={styles.container}>
          <div className={styles.info}>
            <h1> Projects Page Under Construction</h1>
          </div>
        </section>
      </motion.div>
    </>
  );
}
