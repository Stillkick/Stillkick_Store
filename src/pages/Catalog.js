import React, { useContext } from "react";
import { UserContext } from "../components/User";
import Devices from "../Json/Devices.json";

function Catalog() {
  const User = useContext(UserContext);
  const handleKorzina = (id) => {
      console.log(id)
    if (User.user)   {
      if (User.user.korzina) {
          if(!User.user.korzina.includes(id)){
        User.setUser({ ...User.user, korzina: [...User.user.korzina, id] });
    }
      } 
    }
    else {
        console.log("korzina net");
      User.setUser({ ...User.user, korzina: [id] });
    }
  };
  return (
    <div className="gadget-list">
      {Devices.map((element) => (
        <div key={element.id} className="gadget-item">
          <h1>{element.title}</h1>
          <img src={element.poster} alt={element.title} />
          <button className="btn-catalog" onClick={(e) => handleKorzina(element.id)}>
            Добавить в Корзину
          </button>
        </div>
      ))}
    </div>
  );
}

export default Catalog;
