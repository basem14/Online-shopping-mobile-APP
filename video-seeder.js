var VideoGames = require('./scheme/videoGames');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopping', {useNewUrlParser: true, useUnifiedTopology: true});
var videoGames = [
    new VideoGames({
        imagePath: 'https://eg.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/50/392561/1.jpg?2645',
        title: 'Jumanji: The Video Game',
        description: 'Outright Games Jumanji: The Video Game - PlayStation 4',
        cost: 850
    }),
    new VideoGames({
        imagePath: 'https://eg.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/21/804841/1.jpg?7630',
        title: 'FIFA 20 Standard Edition',
        description: 'EA Sports FIFA 20 Standard Edition - Arabic Version - PlayStation 4 Game',
        cost: 920
    }),
    new VideoGames({
        imagePath: 'https://eg.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/65/752651/1.jpg?0548',
        title: 'Call Of Duty Modern Warfare',
        description: 'Activision Call Of Duty Modern Warfare - Arabic Version - PS4',
        cost: 1090
    }),
];

var done = 0;
for (var i = 0; i < videoGames.length; i++) {
    videoGames[i].save(function(err, result) {
        done++;
        if (done === videoGames.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}