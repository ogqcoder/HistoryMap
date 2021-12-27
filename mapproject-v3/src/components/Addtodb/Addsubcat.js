import { useState } from "react";
import Axios from "axios";
import { useHistory } from "react-router";

export default function Addsubcat(props) {
  const [subcatName, setSubcat] = useState(""); //title
  const history = useHistory();

  function addSubcat() {
    let data = JSON.stringify({
      //   description,
      //   category,
      subcatName,
    });
    Axios.post("/p/f21-12/f21-v2/map/addSubcat", data, {
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
    <div className="form-margin" >
      <h1>Add Subcategory</h1>
      <form
        onSubmit={(event) => {
          addSubcat();
          // history.push("/");
          // console.log("hell0", props.history);
          event.preventDefault();
        }}
      >
        <div className="form-group col-md-6">
          <label for="title">Subcategory Name</label>
          <input
            type="text"
            className="form-control"
            id="subcat"
            placeholder="Subcategory"
            name="subcat"
            onChange={(e) => setSubcat(e.target.value)}
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
