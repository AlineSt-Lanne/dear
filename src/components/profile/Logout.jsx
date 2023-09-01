import { Link } from "react-router-dom";
import ButtonLogout from "./ButtonLogout";

function Logout() {
  return (
    <div>
      <Link to="/">
        <ButtonLogout/>
      </Link>
    </div>
  );
}

export default Logout;
