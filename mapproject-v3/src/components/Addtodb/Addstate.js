import { useState } from "react";
import Axios from "axios";
import { useHistory } from "react-router";

export default function Addstate(props) {
  const [stateName, setState] = useState(""); //category Name
  const history = useHistory();

  function addState() {
    let data = JSON.stringify({
      //   description,
      //   category,
      stateName,
    });
    Axios.post("/p/f21-12/f21-v2/map/addState", data, {
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
      <h1>Add State</h1>
      <form
        onSubmit={(event) => {
          addState();
          //   history.push("/");
          //   console.log("hell0", props.history);
          event.preventDefault();
        }}
      >
        <div className="form-group col-md-6">
          <label for="title">State Name</label>
          <input
            type="text"
            className="form-control"
            id="state"
            placeholder="State"
            name="state"
            onChange={(e) => setState(e.target.value)}
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
