var express = require("express");
var fetch = require("node-fetch");
var port = 8000;
const cors = require("cors");
var router = express.Router();
var app = express();
app.set("view engine", "ejs");
app.use(cors());

let url = "https://api.rootnet.in/covid19-in/stats/latest";

let settings = { method: "Get" };

app.get("/", function (req, res) {
  fetch(url, settings)
    .then((res) => res.json())
    .then((json) => {
      res.send(json);
    });
});

app.listen(port, () => console.log(`App listening on port ${port}!`));
