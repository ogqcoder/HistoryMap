const express = require("express");
const app = express();
const db = require("./database");
const bodyParser = require("body-parser");
const path = require("path");
const user = require("./users");
const cors = require("cors");
const cookieparser = require("cookie-parser"); //cookies
const session = require("express-session"); //creates session

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.urlencoded({ extended: false }));
app.use(cors());


app.use(express.static('/var/www/projects/f21-12/html/f21-v6/mapproject-v2/build'));

/*
 app.get('/', function (req, res) {
  res.sendFile(path.join('/var/www/projects/f21-12/html/f21-v6/mapproject-v2/build'));
}); 
*/


app.get("/api", (req, res) => {
  res.json({ message: "phenomenal" });
});

app.use("/map", db);
app.use("/users", user);


app.get('/*', function (req, res) {
  console.log('sending to react:' + req.url );
  res.sendFile(path.join('/var/www/projects/f21-12/html/f21-v6/mapproject-v2/build', 'index.html'));
}); 

app.get("/", (req, res) => {
  res.send("Hello World!");
});

port = 10012;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
