import "../App.css";
import { useState, useEffect } from "react";
import Axios from "axios";

export default function CategoryNavbar(props) {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    Axios.get("/p/f21-12/f21-v2/map/getCategory")
      .then((res) => {
        setLinks(res.data);
      })
      .catch((err) => {
        console.log(err, "err");
      });
  }, []);

  function categoryLinks() {
    return (
      <div>
        {links.map((d, i) => {
          return (
            <a
              href="javascript:void(0)"
              className="hover"
              onClick={() => {
                props.setCategory(d.catName);
              }}
            >
              {d.catName}
            </a>
          );
        })}
      </div>
    );
  }
  return (
    <div id="catNav">
      <div
        style={{
          // width: "200px",

          background: "white",
        }}
      >
        <ul class="nav flex-column">
          <li>Categories</li>
          <ul>
            <a
              href="javascript:void(0)"
              className="hover"
              onClick={() => {
                props.setCategory(null);
              }}
            >
              All
            </a>
            {categoryLinks()}
          </ul>
        </ul>
      </div>
    </div>
    // <div>
    //   <div id="mySidebar" className="sidebar">
    //     <a
    //       href="javascript:void(0)"
    //       class="closebtn"
    //       onClick={() => closeNav()}
    //     >
    //       &times;
    //     </a>
    //     <a href="#">About</a>
    //     <a href="#">Services</a>
    //     <a href="#">Clients</a>
    //     <a href="#">Contact</a>
    //   </div>

    //   <div id="main">
    //     <button
    //       style={{ position: "absolute", zIndex: 20 }}
    //       className="openbtn"
    //       onClick={() => openNav()}
    //     >
    //       &#9776; Open Sidebar
    //     </button>
    //   </div>
    // </div>
  );
}
