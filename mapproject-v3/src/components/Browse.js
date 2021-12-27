import Axios from "axios";
import { useEffect, useState } from "react";

function g() {
  console.log("beast");
}
export default function Browse() {
  const [cat, setCat] = useState([]);
  const [catID, setCatID] = useState(0);
  const [catName, setCatName] = useState();
  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    fetch("/map/getCategory")
      .then((res) => res.json())
      .then((response) => {
        // console.log(response);
        setCat(response);
      });
  }, []);

  useEffect(() => {
    var d = JSON.stringify({
      catName,
    });

    console.log(d, "d");
    Axios.post("/map/getCategoryByName", d, {
      headers: { "Content-Type": "application/json" },
    }).then((response) => {
      setMarkers(response.data);
      console.log(markers, "markers");
    });
  }, [catName]); //variable gets put into array, everytime variable is changed, component will re-render with new information

  function getMarkersByCategory() {
    return (
      <div>
        {markers.map((d) => {
          return (
            <option value={d.mapID} key={d.mapID}>
              {d.title}
            </option>
          );
        })}
      </div>
    );
  }

  return (
    <div>
      <label for="select2">Choose a Category:</label>
      <select
        id="select2"
        className="form-control"
        onChange={(e) => {
          var catName = e.target.value;
          setCatName(catName);
        }}
      >
        {cat.map((d) => {
          return <option key={d.catID}>{d.catName}</option>;
        })}
      </select>
      {getMarkersByCategory()}
    </div>
  );
}

export { g };
