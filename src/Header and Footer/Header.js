import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import poisk from "../poisk.svg";
import basket from "../basket.png";
import Devices from "../Json/Devices.json";
import calendar from '../calendar.png'
import home from '../home.svg'
import Catalog from "../pages/Catalog";

function Header({night,setNight}) {
  const [sResults, setSResults] = useState(false);
  const [search, SetSearch] = useState(false);
  const handleSearch = (sr) => {
    SetSearch(sr);
    console.log(sr);
    const fil = Devices.filter((elem) =>
      elem.title.toLowerCase().includes(sr.toLowerCase())
    );
    setSResults(fil);
  };
  return (
    <>
      <header className={!night ? "dark-mode Menu" : "day-mode Menu"}>
        <Link to="/" className="Menu_link">
          <img src={home} alt="" />
        </Link>
        <Link to="/Smartphone" className="Menu_link">
          <h3>Mobile phone</h3>
        </Link>
        <Link to="/Computers" className="Menu_link">
          <h3>Computers</h3>
        </Link>
        <Link to="/Appliances" className="Menu_link">
          <h3>Appliances</h3>
        </Link>
        <Link to="/catalog" className="Menu_link">
          <h3>Catalog</h3>
        </Link>
        <Link to="/korzina" className="Menu_link">
        <img src={basket} alt="" />
        </Link>
        <div className="navbar__search">
          <input type="text" onChange={(e) => handleSearch(e.target.value)} />
          <img src={poisk} alt="search" />
          {sResults && search.length > 0 ? (
            <ul className="search__results">
              {sResults.map((elem) => {
                return (
                  <li key={"searchid"+elem.id}>
                    <Link to={"/device/" + elem.id}>{elem.title} </Link>
                  </li>
                );
              })}
            </ul>
          ) : null}
        </div>
        <button className="btn-catalog" onClick={() => setNight(!night)}>
        {night ? "день" : "ночь"}
      </button>
      </header>
    </>
  );
}

export default Header;
