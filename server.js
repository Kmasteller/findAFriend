var bodyParser = required("body-parser");
var express = required("express");

var app = express();
var PORT = process.env.PORT || 3000;

app.port("/", function (req, res) {
    res.send("Linked!!");
});

app.use(bodyParser.urlencoded({ extended: false }));

app.use (bodyParser.json());

app.use(function (req, res) {
    res.setHeader("Content-Type", "text/plain");
    res.write("You posted: \n");
    res.end(JSON.stringify(req.body, null, 2))
});

app.listen(PORT, function() {
    console.log("Listening on Port: " + PORT);
});