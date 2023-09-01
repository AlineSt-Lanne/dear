import { Link } from "react-router-dom";
import ButtonDeleteAccount from "./ButtonDeleteAccount";

function DeleteAccount() {
  return (
    <div>
      <Link to="/">
        <ButtonDeleteAccount/>
      </Link>
    </div>
  );
}

export default DeleteAccount;
