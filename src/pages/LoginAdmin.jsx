import "./styles/LoginAdmin.css";
import ButtonConnexion from "../components/admin/ButtonConnexion";
import logoCircle from "../assets/logo-dear-rond.png";

function LoginAdmin() {
  return (
    <div className="loginadmin">
      <div className="admin-login-top">
        <h1>Bienvenues Aline et Lila</h1>
        <img
          className="logo-admin-rond-login"
          src={logoCircle}
          alt="logo Dear rond"
        />
      </div>
      <div className="formloginadmin">
        <form className="form-login-admin">
          <input
            className="inputPseudoAdmin"
            type="text"
            name="pseudo"
            id="pseudo"
            placeholder="Lila ou Aline"
            />
          <input
            className="inputLogPasswordAdmin"
            type="password"
            name="password"
            id="password"
            placeholder="Mot de passe"
            />
          <div className="buttoncontinueadmin">
            <ButtonConnexion style={{ cursor: "pointer" }} />
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginAdmin;
