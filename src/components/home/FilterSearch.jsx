import React from "react";
import "./styles/FilterSearch.css";
import logosearch from "../../assets/search.png";
import filter from "../../assets/filter-blue.png";

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
          <button
            className="navfilter"
            type="button"
            style={{ cursor: "pointer" }}
          >
            <img src={filter} className="logofilter" alt="filter" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default FilterSearch;
