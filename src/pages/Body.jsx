import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FACul from "./FACul";
import Intro from "./Intro";
import IntroAdult from "./IntroAdult";
import SorryNotAdult from "../components/intro/SorryNotAdult";
import Registration from "./Registration";
import Register from "./Register";
import GoodConduct from "../components/registration/GoodConduct";
import Hello from "../components/registration/Hello";
import Connection from "./Connection";
import Bonjour from "../components/connection/Bonjour";
import Home from "./Home";

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
            <Route path="/connection" element={<Connection />} />
            <Route path="/connection/bonjour" element={<Bonjour />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </Router>
      </div>
    );
  }