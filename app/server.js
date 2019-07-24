var express = require("express");
let _ = require("lodash");

var app = express();
var ex1 = require("./ex1");

app.get("/matchedWords", function(req, res) {
  var a = req.query.a;
  //console.log(a);
  var words = ex1.matchedWords(a);
  //console.log(words);
  res.send(JSON.stringify(words));
});

app.get("/variation", function(req, res) {
  var c = req.query.c;
  var test = _.split(c, ",");
  var v = ex1.variation(test);

  res.send(JSON.stringify(v));
});
app.listen(3000);
