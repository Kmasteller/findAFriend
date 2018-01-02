var friends = require("../data/friends.js");

// console.log(friends);

module.exports = function(app) {

    app.get("/api/friends", function (req, res) {
       res.json(friends);
    });

    app.post("/api/friends", function(req, res) {
        // res.json(friends);
        // if(req.body !== {}){;
        // res.json(200)
        // }

        var match = {
            name: "",
            photo: "",
            difference: 100
        };

        console.log(req.body);

        var userData = req.body;
        var userScores = userData.scores;

        console.log (userScores);

        var totalDifference = 0;

        for (var i=0; i<friends.length; i++) {
            console.log(friends[i]);
            totalDifference = 0;
            for (var j=0; j<friends[i].scores[i]; j++) {    
                totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));
                if (totalDifference <= match.difference) {
                    match.name = friends[i].name;
                    match.photo = friends[i].photo;
                    match.difference = totalDifference;

                }
            }
        }   
        friends.push(userData);   
        res.json(match);
    });
}