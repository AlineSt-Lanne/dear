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
import AddPost from "./AddPost";
import UserList from "../components/admin/UserList";
import UserActivities from "../components/admin/UserActivities";
import UserDelete from "../components/admin/UserDelete";
import DeleteAccount from "../components/profile/DeleteAccount";
import MailDeleteProfile from "../components/admin/MailDeleteProfile";
import DeleteProfile from "../components/admin/DeleteProfile";
import Comment from "./Comment";
import Logout from "../components/profile/Logout";
import UserAccount from "../components/profile/UserAccount";
import LoginAdmin from "./LoginAdmin";
import AdminAccount from "../components/admin/AdminAccount";

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
            <Route path="/addpost" element={<AddPost />} />
            <Route path="/userlist" element={<UserList />} />
            <Route path="/useractivities" element={<UserActivities />} />
            <Route path="/userdelete" element={<UserDelete />} />
            <Route
              path="/useraccount/deleteaccount"
              element={<DeleteAccount />}
            />
            <Route path="/maildeleteprofile" element={<MailDeleteProfile />} />
            <Route
              path="userdelete/deleteprofile"
              element={<DeleteProfile />}
            />
            <Route path="/comment" element={<Comment />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/useraccount" element={<UserAccount />} />
            <Route path="/loginadmin" element={<LoginAdmin />} />
            <Route path="/adminaccount" element={<AdminAccount />} />
          </Routes>
        </Router>
      </div>
    );
  }