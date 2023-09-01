import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FACul from "./FACul";
import Intro from "./Intro";
import IntroAdult from "./IntroAdult";
import SorryNotAdult from "../components/intro/SorryNotAdult";

export default function Body() {
    return (
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Intro />} />
            <Route path="/facul" element={<FACul />} />
            <Route path="/introadult" element={<IntroAdult />} />
            <Route path="/sorrynotadult" element={<SorryNotAdult />} />
          </Routes>
        </Router>
      </div>
    );
  }