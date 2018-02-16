//POST routes, incoming survey, compatibility logic

//Data
var friendList = require('../data/friends.js');

module.exports = function(app) {
	app.get('/api/friends', function(req, res) {
		res.join(friendList);
	});

	app.post('/api/friends', function(req, res) {
		var newFriendScores = req.body.scores;
		var scoresArray = [];
		var friendCount = 0;
		var bestMatch = 0;

	//running through friends list
	for(var i=0; i<friendList.length; i++) {
		var scoresDiff = 0;

	//compares with friends
	for(var j=0; j<newFriendScores.length; j++){
		scoresDiff += (Math.abs(parseInt(friendList[i].scores[j]) - parseInt(newFriendScores[j])));
	}
	//setting score in array
	scoresArray.push(scoresDiff);
	}

	//best match
	for(var i=0; i<scoresArray.length; i++) {
		if(scoresArray[i] <= scoresArray[bestMatch]) {
			bestMatch = i;
		}
	}
	var bff = friendList[bestMatch];
	res.join(bff);

	//updates new submission into friendList 
	friendList.push(req.body);
	});
};