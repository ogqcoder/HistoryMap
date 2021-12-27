let mysql = require("mysql");
const express = require("express");
let router = express.Router();

router.use(express.json());

var pool = mysql.createPool({
  host: "wyvern.cs.newpaltz.edu",
  user: "p_f21_12",
  password: "xcnmkw",
  database: "p_f21_12_db",
});
router.get("/", (req, res) => {
  pool.query("SELECT * FROM Hmap", function (err, result, fields) {
    if (err) throw err;
    // console.log(result);
    res.send(result);
  });
});

// INSERT INTO Map (lat, lng, title, description, image)
// VALUES (41.9268, -73.912886, "Hotel Inn", "random", "a.gif");
// router.post("/addToMarkers", (req, res) => {
//   const values = [
//     req.body.lat,
//     req.body.lng,
//     req.body.location,
//     // req.body.description,
//     // req.body.image,
//   ];
//   //(lat, lng, title, description, image)
//   pool.query(
//     "INSERT INTO Map (lat, lng, title) VALUES(?, ?, ?)",
//     values,
//     function (error, result) {
//       if (error) console.log(error);
//       else console.log(result);
//     }
//   );
// });

router.post("/addToMarkers", (req, res) => {
  const values = [
    req.body.lat,
    req.body.lng,
    req.body.location,
    req.body.description,
    // req.body.image, when you uncomment add a ? and the image in query
    req.body.link,
    req.body.catID,
    req.body.subcatID,
    // req.body.countyID,
    // req.body.stateID,
    // req.body.countryID,
  ];
  //(lat, lng, title, description, image)
  pool.query(
    "INSERT INTO Hmap (lat, lng, title, description, link, catID, subcatID, countyID, stateID, countryID ) VALUES(?, ?, ?, ?, ?, ?, ?, 1, 1, 1)",
    values,
    function (error, result) {
      if (error) console.log(error);
      else res.send(result);
    }
  );
});
router.delete("/deleteFromMarkers", (req, res) => {
  const values = [req.body.mapID];
  //(lat, lng, title, description, image)
  pool.query(
    "DELETE FROM Hmap WHERE mapID = ?",
    values,
    function (error, result) {
      if (error) console.log(error);
      else res.send(result);
      console.log(result);
    }
  );
});

router.post("/updateMarker", (req, res) => {
  const values = [
    req.body.lat,
    req.body.lng,
    req.body.location,
    req.body.description,
    // req.body.image, when you uncomment add a ? and the image in query
    req.body.link,
    req.body.catID,
    req.body.subcatID,
    req.body.mapID,
    // req.body.countyID,
    // req.body.stateID,
    // req.body.countryID,
  ];
  //(lat, lng, title, description, image)
  pool.query(
    "UPDATE Hmap SET lat=?, lng =?, title =?, description =?, link=?, catID=?, subcatID=? WHERE mapID = ?",
    values,
    function (error, result) {
      if (error) console.log(error);
      else {
        console.log(result);
        res.send(result);
      }
    }
  );
});

router.post("/addCounty", (req, res) => {
  const values = [req.body.countyName];
  //(lat, lng, title, description, image)
  pool.query(
    "INSERT INTO Hcounty (countyName) VALUES(?)",
    values,
    function (error, result) {
      if (error) console.log(error);
      else console.log(result);
    }
  );
});
router.post("/addState", (req, res) => {
  const values = [req.body.state];
  //(lat, lng, title, description, image)
  pool.query(
    "INSERT INTO Hstate (stateName) VALUES(?)",
    values,
    function (error, result) {
      if (error) console.log(error);
      else console.log(result);
    }
  );
});

router.post("/addCountry", (req, res) => {
  const values = [req.body.countryName];
  //(lat, lng, title, description, image)
  pool.query(
    "INSERT INTO Hcountry (countryName) VALUES(?)",
    values,
    function (error, result) {
      if (error) console.log(error);
      else console.log(result);
    }
  );
});

router.post("/addCategory", (req, res) => {
  const values = [req.body.catName];
  //(lat, lng, title, description, image)
  pool.query(
    "INSERT INTO Hcategory (catName) VALUES(?)",
    values,
    function (error, result) {
      if (error) console.log(error);
      else console.log(result);
    }
  );
});

router.post("/addSubcat", (req, res) => {
  const values = [req.body.subcatName];
  //(lat, lng, title, description, image)
  pool.query(
    "INSERT INTO Hsubcat (subcatName) VALUES(?)",
    values,
    function (error, result) {
      if (error) console.log(error);
      else console.log(result);
    }
  );
});

router.get("/getCounty", (req, res) => {
  // const values = [req.body.subcatName];
  //(lat, lng, title, description, image)
  pool.query("Select * from Hcounty", function (error, result) {
    if (error) console.log(error);
    else {
      console.log(result);
      res.send(result);
    }
  });
});
router.get("/getState", (req, res) => {
  // const values = [req.body.subcatName];
  //(lat, lng, title, description, image)
  pool.query("Select * from Hstate", function (error, result) {
    if (error) console.log(error);
    else {
      console.log(result);
      res.send(result);
    }
  });
});
router.get("/getCountry", (req, res) => {
  // const values = [req.body.subcatName];
  //(lat, lng, title, description, image)
  pool.query("Select * from Hcountry", function (error, result) {
    if (error) console.log(error);
    else {
      console.log(result);
      res.send(result);
    }
  });
});

router.get("/getCategory", (req, res) => {
  // const values = [req.body.subcatName];
  //(lat, lng, title, description, image)
  pool.query("Select * from Hcategory", function (error, result) {
    if (error) console.log(error);
    else {
      // console.log(result);
      res.send(result);
    }
  });
});
router.get("/getSubcat", (req, res) => {
  // const values = [req.body.subcatName];
  //(lat, lng, title, description, image)
  pool.query("Select * from Hsubcat", function (error, result) {
    if (error) console.log(error);
    else {
      res.send(result);
    }
  });
});
// var connection = mysql.createConnection({
//   host: "cs.newpaltz.edu",
//   user: "p_f21_12",
//   password: "xcnmkw",
//   database: "p_f21_12_db",
// });
// connection.connect(function (err) {
//   if (err) {
//     return console.error("error: " + err.message);
//   }

//   console.log("Connected to the MySQL server.");
// });
router.get("/getCategoryID", (req, res) => {
  //selects the category with that catID number
  const values = [req.body.catID];
  //(lat, lng, title, description, image)
  pool.query(
    "Select * from Hcategory Where catID= ?",
    values,
    function (error, result) {
      if (error) console.log(error);
      else {
        // console.log(result);
        res.send(result);
      }
    }
  );
});
//Uses a Query within query, the inner query selects the catId based on the catName
//the outer query selects the Hmap rows where the catID is the same as the one returned from the inner query
router.post("/getCategoryByName", (req, res) => {
  const values = [req.body.catName];
  //(lat, lng, title, description, image)
  pool.query(
    "Select * from Hmap Where catID = (Select catID from Hcategory where catName = ?)",
    values,
    function (error, result) {
      if (error) res.send(error);
      else {
        // console.log(result);
        res.send(result);
      }
    }
  );
});

router.get("/:id", (req, res) => {
  pool.query(
    "SELECT * FROM Hmap WHERE mapID = ?",
    req.params.id,
    function (err, result, fields) {
      if (err) throw err;
      // console.log(result);
      res.send(result);
    }
  );
});
module.exports = router;
