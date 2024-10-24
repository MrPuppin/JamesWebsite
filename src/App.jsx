import "./App.css";
import { AnimatedRoutes } from "./components/animatedRoutes";
import { Navbar } from "./components/navbar";
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
