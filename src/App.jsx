import "./App.css";
import { AnimatedRoutes } from "./components/animatedRoutes.jsx";
import { Navbar } from "./components/navbar.jsx";
import { HashRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <AnimatedRoutes />
    </Router>
  );
}

export default App;
