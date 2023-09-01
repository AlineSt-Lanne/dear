import { IoIosArrowDroprightCircle } from "react-icons/io";
import { BsListTask } from "react-icons/bs";
import { FaUserFriends } from "react-icons/fa";
import FilActu from "./FilActu";
import Users from "./Users";
import ManageFaCul from "./ManageFaCul";
import logoBlue from "../../assets/dear-logo-blue.png";
import logoCircle from "../../assets/logo-dear-rond.png";
import "./styles/AdminAccount.css";
import Logout from "../profile/Logout";

function AdminAccount() {
  return (
    <div className="admin-account-page">
      <div className="admin-top">
        <div className="backoffice-top">
          <h1>Hello la team</h1>
          <h2>Back-office</h2>
        </div>
        <img className="logo-admin-page" src={logoBlue} alt="logo Dear bleu" />
        <img
          className="logo-admin-rond"
          src={logoCircle}
          alt="logo Dear rond"
        />
      </div>
      <div className="container-admin">
        <div className="container-cat-admin">
          <div className="admin-card">
            <div className="admin-category">
              <BsListTask className="admin-icon" />
              <h3>Le fil d'actualités </h3>
              <button
                type="button"
                className="tabs"
                style={{ cursor: "pointer" }}
              >
                <IoIosArrowDroprightCircle className="arrow-admin" />
              </button>
            </div>
            <div className="admin-category">
              <FaUserFriends className="admin-icon" />
              <h3>Les utilisateurs</h3>
              <button
                type="button"
                className="tabs"
                style={{ cursor: "pointer" }}
              >
                <IoIosArrowDroprightCircle className="arrow-admin" />
              </button>
            </div>
          </div>
          <div className="admin-logout">
            <Logout />
          </div>
        </div>
        <div className="content-tabs">
            <FilActu />
            <Users />
            <ManageFaCul />
        </div>
      </div>
    </div>
  );
}

export default AdminAccount;
