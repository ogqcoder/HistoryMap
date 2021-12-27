import { useState, useEffect } from "react";
import Axios from "axios";
// import { useHistory } from "react-router";

export default function EditMarker(props) {
  const [markers, setMarkers] = useState([]); // map markers
  const [edit, setEdit] = useState(); //used to populate new form
  const [location, setLocation] = useState(""); //title
  const [description, setDescription] = useState("");
  // const [category, setCategory] = useState("");
  // const [image, setImage] = useState("");
  const [subcatID, setSubcatID] = useState();
  const [catID, setCatID] = useState();
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");
  const [data, setData] = useState([]); //used for subcategory in form
  const [cat, setCat] = useState([]); //used for category in form
  const [link, setLink] = useState(); //used for category in form
  const [mapID, setMapID] = useState(0);

  useEffect(() => {
    fetch("/p/f21-12/f21-v2/map")
      .then((res) => res.json())
      .then((response) => {
        setMarkers(response);

	 if (edit) {
      const map = edit[0];
      setLat(map.lat);
      setLng(map.lng);
      setLocation(map.title);
      setMapID(map.mapID);
      setDescription(map.description);
      setLink(map.link);
      setSubcatID(map.subcatID);
      setCatID(map.catID);
    }

      });
  }, [edit]);

  useEffect(() => {
    fetch("/p/f21-12/f21-v2/map/getSubcat")
      .then((res) => res.json())
      .then((response) => {
        setData(response);
      });
  }, []);
  useEffect(() => {
    fetch("/p/f21-12/f21-v2/map/getCategory")
      .then((res) => res.json())
      .then((response) => {
        setCat(response);
      });
  }, []);

  function editMap(d) {
    //this accepts the object of the marker at that iteration now I am
    console.log(d.mapID);
    fetch("/p/f21-12/f21-v2/map/" + d.mapID)
      .then((res) => res.json())
      .then((response) => {
        setEdit(response);
      });
  }
  function deleteFromMap(d) {
    console.log(d.mapID, "mapID");
    Axios.delete("/p/f21-12/f21-v2/map/deleteFromMarkers", {
      //axios delete parameters are structured differently than post and get
      data: { mapID: d.mapID },
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => console.log(res))
      .catch((err) => {
        console.log(err, "err");
      });

    window.location.reload(false);
  }
  function forgetIt() {
    setEdit("");
  }

  function getAllSubcat(edit) {
    //this "edit" parameter represents the selected row to edit
    // console.log(typeof data, "data");
    return (
      <div>
        <label for="select">Choose a subcategory:</label>
        <select
          id="select"
          class="form-control"
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

  function getAllCategories(edit) {
    //this "edit" parameter represents the selected row to edit
    // console.log(typeof cat, "type");
    return (
      <div>
        <label for="select2">Choose a Category:</label>
        <select
          id="select2"
          class="form-control"
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
  function form() {
    if (edit) {
      return (
        <form
          style={{
            position: "absolute",
            background: "white",
            top: 0,
            width: "100%",
            height: "100%",
          }}
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
          <div className="form-row form-margin">
            <div className="form-group col-md-6">
              <label for="title">Location Name</label>
              <input
                type="text"
                className="form-control"
                id="fname"
                placeholder="Location"
                name="location"
                defaultValue={edit[0].title}
                required
                onChange={(e) => setLocation(e.target.value)}
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
                step="any"
                defaultValue={edit[0].lat}
                onChange={(e) => {
                  setLat(e.target.value);
                }}
                required
              />
            </div>
            <div className="form-group col-md-6">
              <label for="lng">Longitude</label>
              <input
                type="number"
                className="form-control"
                id="lng"
                placeholder="Longitude"
                name="lng"
                step="any"
                defaultValue={edit[0].lng}
                onChange={(e) => {
                  setLng(e.target.value);
                }}
                required
              />

              <label for="description">Description:</label>

              <textarea
                id="description"
                name="textarea"
                rows="4"
                cols="50"
                defaultValue={edit[0].description}
                className="form-control"
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
              {getAllSubcat(edit)}
              {getAllCategories(edit)}
              <label for="link">Link</label>
              <input
                type="text"
                className="form-control"
                id="link"
                placeholder="Link"
                name="link"
                defaultValue={edit[0].link}
                onChange={(e) => {
                  setLink(e.target.value);
                }}
                required
              />
            </div>
          </div>

          <button
            className="btn btn-primary"
            onClick={() => {
              setMapID(edit[0].mapID);
              console.log(mapID, "mapID");
              updateMarker(edit);
            }}
          >
            Update
          </button>
          <button className="btn btn-primary" onClick={() => forgetIt()}>
            Nvm
          </button>
        </form>
      );
    }
  }

  function updateMarker(e) {
    let data = JSON.stringify({
      lat,
      lng,
      location,
      description,
      link,
      subcatID,
      catID,
      mapID,
    });
    console.log(subcatID, "subcat");
    Axios.post("/p/f21-12/f21-v2/map/updateMarker", data, {
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
      <table style={{marginTop: "50px"}}
        id="productTable"
        class="table table-bordered table-condensed table-striped"
      >
        <thead>
          <tr>
            <th>Edit</th>
            <th>Location</th>
            <th>Description</th>
            <th>Latitude</th>
            <th>Longitude</th>
            <th>Link</th>
            <th>Delete</th>
          </tr>
        </thead>

        {markers.map((d, i) => {
          // console.log(d.title, "title");
          return (
            <tr key={d.mapID}>
              <td>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => editMap(d)}
                >
                  Edit Marker
                </button>
              </td>
              <td>{d.title}</td>
              <td>{d.description}</td>
              <td>{d.lat}</td>
              <td>{d.lng}</td>
              <td>{d.link}</td>
              <td>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => {
                    deleteFromMap(d);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </table>
      {form()}
      <a href="/p/f21-12/f21-v2">Return To Map</a>
    </div>
  );
}
