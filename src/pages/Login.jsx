import { Link } from "react-router-dom";
import "./styles/Login.css";
import ButtonReturn from "../components/home/ButtonReturn";
import ButtonContinue from "../components/registration/ButtonContinue";

function Login() {
  return (
    <div className="login">
      <div className="buttonreturnlogin">
        <ButtonReturn />
      </div>
      <div className="formlogin">
        <form className="form-login">
          <input
            className="inputPseudo"
            type="text"
            name="pseudo"
            id="pseudo"
            placeholder="supertomate27"
          />
          <input
            className="inputLogPassword"
            type="password"
            name="password"
            id="password"
            placeholder="Mot de passe"
          />
        <Link to="/connection/bonjour">
            <ButtonContinue style={{ cursor: "pointer" }} />
        </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
