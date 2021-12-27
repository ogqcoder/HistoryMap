import { useState } from "react";
import Axios from "axios";
import { useHistory } from "react-router";

export default function Addcountry(props) {
  const [countryName, setCountry] = useState(""); //category Name
  const history = useHistory();

  function addCountry() {
    let data = JSON.stringify({
      //   description,
      //   category,
      countryName,
    });
    Axios.post("/p/f21-12/f21-v2/map/addCountry", data, {
      //must put the slash before map if the path is not from root
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        console.log(res, "res");
      })
      .catch((err) => {
        console.log(err, "err");
      });
  }

  return (
    <div className="form-margin" style={{ zIndex: 100000 }}>
      <h1>Add Country</h1>
      <form
        onSubmit={(event) => {
          addCountry();

          event.preventDefault();
        }}
      >
        <div className="form-group col-md-6">
          <label for="title">Country Name</label>
          <input
            type="text"
            className="form-control"
            id="country"
            placeholder="country"
            name="country"
            onChange={(e) => setCountry(e.target.value)}
            required
          />
        </div>

        <button className="btn btn-primary" type="submit">
          Add
        </button>
      </form>
      <a href="/p/f21-12/f21-v2">Return To Map</a>
    </div>
  );
}
