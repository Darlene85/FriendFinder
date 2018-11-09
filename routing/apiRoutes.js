// file should contain two routes:


var path = require('path')

module.exports = function () {

    // A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
    app.get("/api/friends", function (req, res) {
        return res.json(friends);
    });

    // A POST routes /api/friends. This will be used to handle incoming survey results. 
    app.post("/api/friends", function (req, res) {
        var newFriend = req.body;
        console.log(newFriend);
        friends.push(newFriend);
        res.join(newFriend);
    });
    // This route will also be used to handle the compatibility logic.
    app.post("", function (req, res) {
        var compatibility = req.answers
        console.log(compatibility)
        for (var i = 0; i < questions.length; i++) {
            if (compatibility === questions[i].correctAnswer) {
                return res.json();
            }
        };
    });
};