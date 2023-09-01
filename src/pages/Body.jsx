import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FACul from "./FACul";
import Intro from "./Intro";
import IntroAdult from "./IntroAdult";
import SorryNotAdult from "../components/intro/SorryNotAdult";
import Registration from "./Registration";
import Register from "./Register";
import GoodConduct from "../components/registration/GoodConduct";
import Hello from "../components/registration/Hello";

export default function Body() {
    return (
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Intro />} />
            <Route path="/facul" element={<FACul />} />
            <Route path="/introadult" element={<IntroAdult />} />
            <Route path="/sorrynotadult" element={<SorryNotAdult />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/registration/register" element={<Register />} />
            <Route
              path="/registration/register/goodconduct"
              element={<GoodConduct />}
            />
            <Route
              path="/registration/register/goodconduct/hello"
              element={<Hello />}
            />
          </Routes>
        </Router>
      </div>
    );
  }