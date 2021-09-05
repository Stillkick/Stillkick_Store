import React, { useState } from "react";
import Menu from '../Json/Menu.json'
import {Link} from 'react-router-dom'

function Main() {
  return (
    <div className="gadget-list">
          <h1>Популярные товары</h1>
          {Menu.map((pop) => {
        return (
          <Link to={"device/" + pop.id} className="gadget-item">
            <h1>{pop.title}</h1>
            <img src={pop.poster} alt="" />
            <h2>{pop.price}</h2>
          </Link>
        );
      })}
    </div>
    );
}

export default Main;
