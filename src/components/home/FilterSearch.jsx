import React from "react";
import "./styles/FilterSearch.css";
import logosearch from "../../assets/search.png";
import NavFilterPub from "./NavFilterPub";

function FilterSearch() {
  return (
    <div className="div-filter-search">
      <div className="filter-search">
        <div className="logosearch">
          <input
            className="inputsearch"
            type="text"
            name="searchbar"
            id="searchbar"
            placeholder="Rechercher"
          />
          <img src={logosearch} className="logosearch" alt="logosearch" />
        </div>
        <div className="logofilter">
          <NavFilterPub />
        </div>
      </div>
    </div>
  );
}

export default FilterSearch;
