import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Intro from "./Intro";

export default function Body() {
    return (
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Intro />} />
          </Routes>
        </Router>
      </div>
    );
  }