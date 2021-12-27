import { useState } from "react";
import Axios from "axios";
// import { useHistory } from "react-router";

export default function Addcounty(props) {
  const [countyName, setCounty] = useState(""); //county Name

  function addCounty() {
    let data = JSON.stringify({
      countyName,
    });
    Axios.post("/p/f21-12/f21-v2/map/addCounty", data, {
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
      <h1>Add County</h1>
      <form
        onSubmit={(event) => {
          addCounty();

          event.preventDefault();
        }}
      >
        <div className="form-group col-md-6">
          <label for="title">County Name</label>
          <input
            type="text"
            className="form-control"
            id="county"
            placeholder="County"
            name="county"
            onChange={(e) => {
              setCounty(e.target.value);
              console.log(e.target.value);
            }}
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
