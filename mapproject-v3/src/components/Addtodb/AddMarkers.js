import { useState, useEffect } from "react";
import Axios from "axios";

//Adds Location to Map

export default function AddMarkers(props) {
  const [location, setLocation] = useState(""); //title
  const [description, setDescription] = useState("");
  // const [image, setImage] = useState("");
  const [link, setLink] = useState("");
  const [subcatID, setSubcatID] = useState(0);
  const [catID, setCatID] = useState(0);
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");
  const [data, setData] = useState([]); //used for subcategory in form
  const [cat, setCat] = useState([]); //used for category in form
  const [success, setSuccess] = useState(""); //used to determine map marker has been added to database

  useEffect(() => {
    fetch("/p/f21-12/f21-v2/map/getSubcat")
      .then((res) => res.json())
      .then((response) => {
        setData(response);
        setCatID(1); // this is put here because the onChange will not execute function if user does not change the category
        setSubcatID(1); //same as up top
      });
  }, []);
  useEffect(() => {
    fetch("/p/f21-12/f21-v2/map/getCategory")
      .then((res) => res.json())
      .then((response) => {
        setCat(response);
      });
  }, []);

  function addMarker() {
    let data = JSON.stringify({
      //   description,
      //   category,
      lat,
      lng,
      location,
      description,
      link,
      subcatID,
      catID,
    });
    Axios.post("/p/f21-12/f21-v2/map/addToMarkers", data, {
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        setSuccess("Successfully Added");
      })
      .catch((err) => {
        console.log(err, "err");
      });
  }

  function getAllSubcat() {
    return (
      <div>
        <label for="select">Choose a subcategory:</label>
        <select
          id="select"
          className="form-control"
          onChange={(e) => {
            var subcatIndex = e.target.value; // this allows you to access the key value of the option, good for matching foreign keys

            setSubcatID(subcatIndex);
          }}
        >
          {data.map((d) => {
            return (
              <option value={d.subcatID} key={d.subcatID}>
                {d.subcatName}
              </option>
            );
          })}
        </select>
      </div>
    );
  }
  function formSuccess() {
    if (success) {
      return <p style={{ color: "green" }}>{success}</p>;
    }
  }

  function getAllCategories() {
    return (
      <div>
        <label for="select2">Choose a Category:</label>
        <select
          id="select2"
          className="form-control"
          onChange={(e) => {
            var catIndex = e.target.value;

            setCatID(catIndex);
          }}
        >
          {cat.map((d) => {
            return (
              <option value={d.catID} key={d.catID}>
                {d.catName}
              </option>
            );
          })}
        </select>
      </div>
    );
  }

  return (
    <div className="form-margin">
      <h1>Add Marker</h1>
      <form
        onSubmit={(event) => {
          addMarker();

          event.preventDefault();
        }}
      >
        <div className="form-row">
          <div className="form-group col-md-6">
            <label for="title">Location Name</label>
            <input
              type="text"
              className="form-control"
              id="fname"
              placeholder="Location"
              name="location"
              onChange={(e) => setLocation(e.target.value)}
              required
            />
          </div>

          <div className="form-group col-md-6">
            <label for="lname">Latitude</label>
            <input
              type="number"
              className="form-control"
              id="lat"
              placeholder="Latitude"
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
            {getAllCategories()}
            {getAllSubcat()}

            <label for="description">Description:</label>
          </div>
          <div className="form-group col-md-6">
            <textarea
              className="form-control"
              id="description"
              name="description"
              rows="4"
              cols="50"
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <div className="form-group col-md-6">
            <label for="link">Link</label>
            <input
              onChange={(e) => setLink(e.target.value)}
              type="text"
              className="form-control"
              id="link"
              placeholder="Link"
              name="link"
            />
          </div>
        </div>

        <button className="btn btn-primary" type="submit">
          Add
        </button>
      </form>
      <a href="/p/f21-12/f21-v2">Return To Map</a>
    </div>
  );
}
