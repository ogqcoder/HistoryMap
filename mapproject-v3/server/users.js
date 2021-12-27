//
let mysql = require("mysql");
const express = require("express");
let router = express.Router();
const cors = require("cors");
const cookieparser = require("cookie-parser"); //cookies
const session = require("express-session"); //creates session
const bodyParser = require("body-parser");

router.use(express.json());

router.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true, //alloes cookies to be enabled
  })
);
router.use(cookieparser());
router.use(bodyParser.urlencoded({ extended: true }));
router.use(
  session({
    key: "userId",
    secret: "subscribe",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 60 * 60 * 24, //24hours cookie expires
    },
  })
);

var pool = mysql.createPool({
  host: "wyvern.cs.newpaltz.edu",
  user: "p_f21_12",
  password: "xcnmkw",
  database: "p_f21_12_db",
});

router.get("/", (req, res) => {
  pool.query("SELECT * FROM Map", function (err, result, fields) {
    if (err) throw err;
    // console.log(result);
    res.send(result);
  });
});

// INSERT INTO Map (lat, lng, title, description, image)
// VALUES (41.9268, -73.912886, "Hotel Inn", "random", "a.gif");
router.post("/registerUser", (req, res) => {
  const values = [
    req.body.fname,
    req.body.lname,
    req.body.username,
    req.body.password,
  ];

  pool.query(
    "INSERT INTO Student (fname, lname, username, password) VALUES (?, ?, ?, ?)",
    values,
    (err, result) => {
      console.log(err);
    }
  );
  console.log(values);
});

router.post("/login", (req, res) => {
  const values = [req.body.username, req.body.password];
  pool.query(
    "Select * from Student where username = ? AND password = ?",
    values,
    (err, result) => {
      // if (err) console.log(err); error
      // if (result.length > 0) {
      //   req.session.user = result; //creates session
      //   console.log(req.session.user);
      //   res.send(result);
      if (result) {
        res.send({ result, token: "test123" });
        console.log(result);
      } else {
        res.send({ message: "wrong username/password" });
      }
    }
  );
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

module.exports = router;
