import React, {useContext} from "react";
import Devices from "../Json/Devices.json";
import {UserContext} from "../components/User"

function Korzina() {
  const User = useContext(UserContext);
   const handlekorzinaDelete = (id) =>{
    User.setUser({...User.user,korzina: User.user.korzina.filter((el) => el !== id),
     });
   }
  return (
    <div className="gadget-list">
      {User && User.user && User.user.korzina.length > 0 ? (
        User.user.korzina.map((el) => {
          const product = Devices.filter(
            (prod) => String(prod.id) === String(el)
          )[0];
          return (
            <div className="gadget-item">
              <h1>{product.title}</h1>
              <img src={product.poster} alt={product.title} />
              <h2>{product.price}</h2>
              <button className="btn-delete btn-catalog" onClick={() => handlekorzinaDelete(product.id)}>Удалить из корзины</button>
            </div>
          );
        })
      ) : (
        <h1>Ваша корзина пуста</h1>
      )}
    </div>
  );
}

export default Korzina;
