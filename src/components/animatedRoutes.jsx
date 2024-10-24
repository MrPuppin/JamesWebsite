import { Routes, Route, useLocation } from "react-router-dom";
import { Splash } from "../sections/Splash/Splash";
import { Resume } from "../sections/Resume/Resume";
import { Projects } from "../sections/Projects/Projects";

import { AnimatePresence } from "framer-motion";

export function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route>
          <Route path="/" element={<Splash />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}
