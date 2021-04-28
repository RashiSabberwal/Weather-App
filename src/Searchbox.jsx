import React from "react";
import "./styles.css";

const Searchbox = ({ searchCity, Search, city, fetchCity }) => {
  return (
    <div className="search-box">
      <input
        className="search-bar"
        type="search"
        placeholder="city"
        value={city}
        onChange={searchCity}
      />
      <button className="button" value={fetchCity} onClick={Search}>
        Search
      </button>
    </div>
  );
};

export default Searchbox;
