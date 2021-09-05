import React from "react";
import SmartList from "../Json/SmartList.json";
import { Link } from "react-router-dom";

function Smart() {
  return (
    <div className="gadget-list">
      {SmartList.map((smart) => {
        return (
          <Link to={"device/" + smart.id} className="gadget-item">
            <h1>{smart.title}</h1>
            <img src={smart.poster} alt="" />
            <h2>{smart.price}</h2>
          </Link>
        );
      })}
    </div>
  );
}

export default Smart;
