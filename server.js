var bodyParser = require("body-parser");
var express = require("express");

var app = express();
var PORT = process.env.PORT || 3000;

var jsonParser = bodyParser.json();

var urlencodedParser = bodyParser.urlencoded ({ extended: false});

// app.port("/", function (req, res) {
//     res.send("Linked!!");
// });

app.use(bodyParser.urlencoded({ extended: false }));

app.use (bodyParser.json({ type: "application/*+json" }));

app.use(bodyParser.raw ({ type: "application/vnd.custom-type" }));

app.use(bodyParser.text({ type: "text/html" }));

// app.use(function (req, res) {
//     res.setHeader("Content-Type", "text/plain");
//     res.write("You posted: \n");
//     res.end(JSON.stringify(req.body, null, 2))
// });

app.listen(PORT, function() {
    console.log("Listening on Port: " + PORT);
});