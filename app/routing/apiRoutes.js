var friends = require("../data/friends.js");

console.log(friends);

module.exports = function(app) {
    app.get("/api/friends", function (req, res, next) {
       res.json(friends);
    })
    app.post("/api/friends", function(req, res, next) {
        // consolo.log("req.body goes here")
        if(req.body !== {}){;
        res.json(200)
        }
    })
}