import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import devices from "../Json/Devices.json";

function DeviceDetails() {
  const [device, setDevice] = useState();
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    setDevice(devices.filter((item) => String(item.id) == String(id))[0]);
  }, [id]);
  const handleSplit = (text) => {
    let arr = text.split(",");
    return arr;
  };
  if (device) {
    return (
      <div className="all-details">
        <img src={device.poster_hd} alt="" />
        <div className="details-text">
          <h1>{device.title}</h1>
          <h2>{device.price}</h2>
          {handleSplit(device.overview).map((review) => {
            return <span>{review}</span>;
          })}
        </div>
      </div>
    );
  } else return "Загрузка...";
}

export default DeviceDetails;
