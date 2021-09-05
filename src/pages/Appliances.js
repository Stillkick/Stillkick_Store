import React from "react";
import Appliancess from "../Json/Appliancess.json";
import { Link } from "react-router-dom";

function Appliances() {
  return (
    <div className="gadget-list">
      {Appliancess.map((aps) => {
        return (
          <Link to={"device/" + aps.id} className="gadget-item">
            <h1>{aps.title}</h1>
            <img src={aps.poster} alt="" />
            <h3>{aps.price}</h3>
          </Link>
        );
      })}
    </div>
  );
}

export default Appliances;
