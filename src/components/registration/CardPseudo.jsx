import "./styles/CardPseudo.css";
import { Link } from "react-router-dom";
import ProgressBar from "./ProgressBar";
import ButtonContinue from "./ButtonContinue";
import ButtonReturn from "../home/ButtonReturn";

export default function CardPseudo() {
  return (
    <div className="bloc-card-pseudo">
      <div className="pseudoreturnarrow">
        <ButtonReturn />
      </div>
      <div className="pseudo-progressbar">
        <ProgressBar color="white" width="80vw" value={33} max={100} />
      </div>
      <div className="title-card">
        <h1>Procédons ensemble à ton inscription</h1>
        <h2>PSEUDO ET ÂGE</h2>
        <h3>Et oui, ici tout est anonyme</h3>
      </div>
      <div className="bloc-pseudo">
        <form className="form-pseudo">
          <label className="pseudoform" htmlFor="pseudo">
            <h2 className="stringform">Pseudo</h2>
            <input
              className="inputformpseudo"
              id="pseudo"
              type="text"
              name="pseudo"
              placeholder="Indique ton pseudo"/>
          </label>
          <h2 className="stringform">Ma tranche d'âge</h2>
          <select
            className="option-age"
            id="share-select">
            <option value="">--Choisir une tranche d'âge--</option>
            <option value="18-25">18 - 25 ans</option>
            <option value="26-35">26 - 35 ans</option>
            <option value="36-45">36 - 45 ans</option>
            <option value="45+">45 ans et +</option>
          </select>
        </form>
      </div>
      <div className="button-continue">
        <Link to="/registration/register">
          <ButtonContinue style={{ cursor: "pointer" }} />
        </Link>
      </div>
    </div>
  );
}
