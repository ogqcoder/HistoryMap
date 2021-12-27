import { useState } from "react";
import Axios from "axios";
import { useHistory } from "react-router";

export default function Addcat(props) {
  const [catName, setCat] = useState(""); //category Name
  const history = useHistory();

  function addCat() {
    let data = JSON.stringify({
      //   description,
      //   category,
      catName,
    });
    Axios.post("/p/f21-12/f21-v2/map/addCategory", data, {
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
    <div className ="form-margin">
	<h1>Add Category</h1>
      <form
        onSubmit={(event) => {
          addCat();
          //   history.push("/");
          //   console.log("hell0", props.history);
          event.preventDefault();
        }}
      >
        <div className="form-group col-md-6">
          <label for="title">Category Name</label>
          <input
            type="text"
            className="form-control"
            id="cat"
            placeholder="Category"
            name="cat"
            onChange={(e) => setCat(e.target.value)}
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
