import "./styles/User.css";
import { Link } from "react-router-dom";
import iconcross from "../../assets/icon-cross.png";
import iconeye from "../../assets/icon-eye.png";

function User() {
  return (
    <div className="user-container">
      <div className="align-pseudo-pictos">
        <div className="user-title">PowerAnanas35</div>
        <div className="pictos-list-user">
          <Link to="/useractivities">
            <img className="iconeye" src={iconeye} alt="icon-eye" />
          </Link>
          <Link to="/userdelete">
            <img className="iconcross" src={iconcross} alt="icon-cross" />
          </Link>
        </div>
      </div>
    </div>
  );
}
export default User;