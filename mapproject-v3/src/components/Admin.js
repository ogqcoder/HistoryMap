import { useState } from "react";
import Axios from "axios";

export default function Admin(props) {
  const [location, setLocation] = useState(""); //title
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");

  function addMarker() {
    let data = JSON.stringify({
      //   description,
      //   category,
      lat,
      lng,
      location,
    });
    Axios.post("/p/f21-12/f21-v2/map/addToMarkers", data, {
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
    <div>
      <h1></h1>
      <form>
        <div className="form-row">
          {/* <div className="form-group col-md-6">
          <label for="inputEmail4">Email</label>
          <input
            type="email"
            className="form-control"
            id="inputEmail4"
            placeholder="Email"
          />
        </div> */}
          <div className="form-group col-md-6">
            <label for="title">Location Name</label>
            <input
              type="text"
              className="form-control"
              id="fname"
              placeholder="First Name"
              name="location"
              onChange={(e) => setLocation(e.target.value)}
              required
            />
          </div>
          <div className="form-group col-md-6">
            <label for="lname">Latitude</label>
            <input
              type="text"
              className="form-control"
              id="lat"
              placeholder="Last Name"
              name="lat"
              onChange={(e) => setLat(e.target.value)}
              step="any"
              required
            />
          </div>
          <div className="form-group col-md-6">
            <label for="lng">Longitude</label>
            <input
              onChange={(e) => setLng(e.target.value)}
              type="number"
              className="form-control"
              id="lng"
              placeholder="Longitude"
              name="lng"
              step="any"
              required
            />
          </div>
          {/* <div className="form-group col-md-6">
            <label for="password">Password</label>
            <input
              onChange={(e) => {
                setPassword(e.target.value);
                console.log(username);
              }}
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
              name="password"
              step="any"
              required
            />
          </div> */}

          {/* <div className="form-group col-md-1">
          <label for="age">Age</label>
          <input
            type="number"
            className="form-control"
            id="age"
            placeholder="Age"
          />
        </div> */}
        </div>

        <button
          className="btn btn-primary"
          onClick={(event) => {
            addMarker();
            console.log("hell0", props.history, lat, lng, location);
            event.preventDefault();
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}
