import "./styles/NavFilterPub.css";
import filter from "../../assets/filter-blue.png";

export default function NavFilterPub() {
  return (
    <nav className="menuResearch">
      <div className="filter-container">
        <button
          className="navfilter"
          type="button"
          style={{ cursor: "pointer" }}
        >
          <img src={filter} className="logofilter" alt="filter" />
        </button>
      </div>
      <div className="categorie-container">
        <h4> Catégories </h4>
        <div className="confirm-filter-container">
          <button
            id="confirmFilter"
            type="button"
            style={{ cursor: "pointer" }}
          >
            VALIDER LES FILTRES
          </button>
        </div>
      </div>
    </nav>
  );
}