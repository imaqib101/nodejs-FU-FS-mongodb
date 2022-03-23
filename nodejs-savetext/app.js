var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var mongodb = require("mongodb");

var dbConn = mongodb.MongoClient.connect(
  "mongodb://localhost:27017/saved_DATA"
);

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.resolve(__dirname, "public")));

app.post("/post-data", function (req, res) {
  dbConn.then(function (db) {
    delete req.body._id; // for safety reasons
    db.collection("datas").insertOne(req.body);
  });
  res.send("Data received:\n" + JSON.stringify(req.body));
});

app.get("/view-datas", function (req, res) {
  dbConn.then(function (db) {
    db.collection("datas")
      .find({})
      .toArray()
      .then(function (datas) {
        res.status(200).json(datas);
      });
  });
});

app.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0");
