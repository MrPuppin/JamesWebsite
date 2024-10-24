import { motion } from "framer-motion";
import styles from "./ResumeStyles.module.css";
import { useEffect } from "react";

export function Resume() {
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
        initial={{ x: "-100%", opacity: 0 }} // Start off to the left and transparent
        animate={{ x: 0, opacity: 1 }} // Animate to its final position and full opacity
        exit={{ x: "-100%", opacity: 0, transition: { duration: 0.3 } }} // Exit to the left
      >
        <div className={styles.resumecontainer}>
          <header id="header" className={styles.header}>
            <h1>James Roberto Puppin</h1>
            <h2>IT Analyst / Software Developer</h2>
            <p>
              Email:
              <a href="mailto:jamespuppin@hotmail.com">
                jamespuppin@hotmail.com
              </a>
            </p>
            <p>Phone: (647) 518-9706</p>
            <p>Toronto, ON</p>
          </header>
          <div className={styles.resumegrid}>
            <section className={styles.resumesection}>
              <h3>Summary</h3>
              <p>
                I'm a driven developer based in Toronto, with a love for
                technology and problem-solving. Over the past few years, I’ve
                developed custom solutions for Dynamics 365 (on-premises) using
                C# and JavaScript, enhancing user experiences and system
                efficiency. I've got a knack for simplifying complex problems
                and I enjoy helping teams reach their goals. Whether it's
                optimizing applications or guiding newcomers, I'm passionate
                about making tech accessible and enjoyable for everyone.
              </p>
            </section>

            <section className={styles.resumesection}>
              <h3>Experience</h3>
              <div className={styles.job}>
                <h3>
                  <a href="https://feddev-ontario.canada.ca/en">
                    Federal Development Agency for Southern Ontario
                  </a>
                </h3>
                <div className={styles.titles}>
                  <h4>IT Analyst</h4>
                  <p className={styles.jobduration}>May 2022 - October 2024</p>
                </div>
                <ul className={styles.jobnotes}>
                  <li>
                    <p>
                      Responsible for software development and maintenance of a
                      Government of Canada grants and contributions system which
                      is directly responsible for over $3.2 billion worth of
                      funds being disbursed to southern Ontario businesses.
                    </p>
                  </li>
                  <li>
                    <p>
                      Engineered .NET framework C# plugins for Dynamics 365,
                      leveraging LINQ, Dataverse, and Web API to deliver
                      enhanced customization, control, and editability beyond
                      the capabilities of built-in PowerApps functions.
                    </p>
                  </li>
                  <li>
                    <p>
                      Utilized JavaScript to create client side functionality
                      and custom web resources, improving client-side
                      interactions, user experience, and dynamic form behaviors.
                    </p>
                  </li>
                  <li>
                    <p>
                      Collaborated with cross-functional teams to gather and
                      analyze business requirements. Created estimates and
                      maintained timelines while delivering requested
                      functionality on time and within specifications.
                    </p>
                  </li>
                  <li>
                    <p>
                      Conducted performance tuning and optimization of existing
                      applications, resulting in increased system eﬃciency, 100%
                      reduction in server side timeouts, and saving dozens of
                      hours of loading time per year.
                    </p>
                  </li>
                  <li>
                    <p>
                      Assisted in the integration of our Dynamics 365 server
                      with other business applications using APIs, connectors,
                      and virtual machines. Ex. document manager for hosting
                      documents outside of system, CRA business validation for
                      validating client information, and Internal Financial
                      System for automatic disbursement of funds.
                    </p>
                  </li>
                  <li>
                    <p>
                      Diagnosed, tested, and resolved bugs using error log and
                      code analysis. Proposed workarounds for system
                      limitations, leading to enhanced system reliability and
                      user satisfaction.
                    </p>
                  </li>
                </ul>
              </div>
              <div className={styles.job}>
                <div className={styles.titles}>
                  <h4>Programmer (Co-Op)</h4>
                  <p className={styles.jobduration}>
                    May 2020 - September 2021
                  </p>
                </div>
                <ul className={styles.jobnotes}>
                  <li>
                    <p>
                      Supported the development team in building and
                      customization of Dynamics 365 applications to meet
                      specific client needs during the early days of a system
                      being built in a rush.
                    </p>
                  </li>
                  <li>
                    <p>
                      Participated in code reviews and contributed to
                      documentation, ensuring adherence to best practices.
                    </p>
                  </li>
                  <li>
                    <p>
                      Assisted in debugging and resolving legacy software
                      defects, enhancing overall application stability.
                    </p>
                  </li>
                  <li>
                    <p>
                      Trained and mentored new students in programming concepts
                      and system functionalities, fostering a deeper
                      understanding of software development practices, and
                      measureable improvement in efficiency.
                    </p>
                  </li>
                </ul>
              </div>
            </section>

            <section className={styles.resumesection}>
              <h3>Skills</h3>
              <ul className={styles.skillslist}>
                <li className={styles.skillset}>
                  <h4>Programming Languages</h4>
                  <br></br>
                  <p>
                    C#, Typescript, Javascript, C, Java, JSON, Python, SQL,
                    HTML, CSS, XML
                  </p>
                </li>
                <br></br>
                <li className={styles.skillset}>
                  <h4>Software</h4>
                  <br></br>
                  <p>
                    Git, Office, Visual Studio Enterprise, Azure DevOps, Power
                    Platform
                  </p>
                </li>
                <br></br>
                <li className={styles.skillset}>
                  <h4>Methodologies</h4>
                  <br></br>
                  <p>Agile, Scrum, Waterfall</p>
                </li>
                <br></br>
                <li className={styles.skillset}>
                  <h4>Languages</h4>
                  <br></br>
                  <p>English, French Portuguese</p>
                </li>
              </ul>
            </section>

            <section className={styles.resumesection}>
              <h3>Education</h3>
              <div className={styles.education}>
                <div className={styles.titles}>
                  <h4>
                    Wilfrid Laurier University - Bachelor of Science Honours
                    Computer Science
                  </h4>
                  <p className={styles.eduduration}>2017 - 2022</p>
                </div>
                <p>
                  Co-operative Education and Management Option <br></br>
                  2019 Vice President of PHI Society
                  <br></br>
                  Relevant courses include: Data structures I & II, Algorithms,
                  Database, OS, OOP, Software Engineering,
                </p>
              </div>
            </section>
            <section className={styles.resumesection}>
              <h3>Awards</h3>
              <ul className={styles.certificationslist}>
                <div className={styles.titles}>
                  <li className={styles.skillset}>
                    <h4>Dean's Honour Roll</h4>
                    <br></br>
                    <p>
                      Wilfrid Laurier University Faculty of Science - 2022
                      <br></br>
                      Awarded for achieving a minimum overall GPA of 10 (A-) in
                      all courses taken
                    </p>
                  </li>
                </div>
                <br></br>
                <div className={styles.titles}>
                  <li className={styles.skillset}>
                    <h4>President's Award of Excellence</h4>
                    <br></br>
                    <p>
                      FedDev Ontario - 2021<br></br>Awarded to the Minerva
                      (Grants and Contribution system) team for our work in
                      developing our grants and contributions system quickly and
                      efficiently during the beginning of the COVID-19 pandemic
                    </p>
                  </li>
                </div>
              </ul>
            </section>
          </div>
        </div>
      </motion.div>
    </>
  );
}
