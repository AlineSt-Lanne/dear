import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Intro from "./Intro";
import FACul from "./FACul";

export default function Body() {
    return (
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Intro />} />
            <Route path="/facul" element={<FACul />} />
          </Routes>
        </Router>
      </div>
    );
  }