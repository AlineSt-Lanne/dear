import "./styles/Register.css";
import { Link } from "react-router-dom";
import ProgressBar from "../components/registration/ProgressBar";
import ButtonContinue from "../components/registration/ButtonContinue";
import ButtonReturn from "../components/home/ButtonReturn";

export default function Register() {
  return (
    <div className="register">
      <div className="register-arrow-return">
        <ButtonReturn />
      </div>
      <div className="register-progressbar">
        <ProgressBar color="white" width="80vw" value={66} max={100} />
      </div>
      <div className="register-title">
        <h2>Procédons ensemble à ton inscription</h2>
        <form className="form-register">
          <input
            className="inputEmail"
            type="email"
            name="email"
            id="email"
            placeholder="sophie.durand@gmail.com"/>
          <input
            className="inputPassword"
            type="password"
            name="password"
            id="password"
            placeholder="Mot de passe"/>
          <input
            className="inputConfirmPassword"
            type="password"
            name="password"
            id="password"
            placeholder="Confirmation du mot de passe"/>
          <div className="button-continue">
            <Link to="/registration/register/goodconduct">
              <ButtonContinue style={{ cursor: "pointer" }} />
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
