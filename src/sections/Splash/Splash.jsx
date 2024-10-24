import styles from "./SplashStyles.module.css";
import ProfileImg from "../../assets/jamesProfile.jpg";
import linkedinIcon from "../../assets/linkedinIcon.svg";
import githubIcon from "../../assets/githubIcon.svg";
import instagramIcon from "../../assets/instagramIcon.svg";

import { motion } from "framer-motion";
import { useEffect } from "react";

export function Splash() {
  useEffect(() => {
    // Disable scrollbar
    document.body.style.overflow = "hidden";

    // Cleanup function to reset overflow
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []); // Empty dependency array to run only on mount and unmount

  return (
    <motion.div
      initial={{ y: "100%", opacity: 0 }} // Start off below and transparent
      animate={{ y: 0, opacity: 1 }} // Animate to its final position and full opacity
      exit={{ y: "100%", opacity: 0, transition: { duration: 0.3 } }} // Exit down
    >
      <section id="splash" className={styles.container}>
        <div>
          <img
            className={styles.splash}
            src={ProfileImg}
            alt="It's me, James"
          ></img>
        </div>
        <div className={styles.info}>
          <h1>James Roberto Puppin</h1>
          <h2>IT Analyst / Software Developer</h2>
          <span>
            <a href="https://www.linkedin.com/in/james-puppin/" target="_blank">
              <img src={linkedinIcon} alt="LinkedIn Icon" />
            </a>

            <a href="https://github.com/MrPuppin/" target="_blank">
              <img src={githubIcon} alt="GitHub Icon" />
            </a>

            <a href="https://www.instagram.com/james.puppin/" target="_blank">
              <img src={instagramIcon} alt="Instagram Icon" />
            </a>
          </span>
          <p className={styles.description}>
            I'm James and this is my personal/portfolio website.
          </p>
        </div>
      </section>
    </motion.div>
  );
}
