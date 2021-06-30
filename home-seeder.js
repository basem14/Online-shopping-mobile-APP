var Home = require('./scheme/home');

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/shopping', {useNewUrlParser: true, useUnifiedTopology: true});

var home = [
    new Home({
        imagePath: 'https://cf5.s3.souqcdn.com/item/2020/03/28/12/26/82/46/4/item_XL_122682464_edecda2484a96.jpg',
        title: 'Beanbag Chair',
        description: 'Penguin Beanbag Chair, Blue',
        cost: 275
    }),
    new Home({
        imagePath: 'https://cf1.s3.souqcdn.com/item/2016/08/11/11/36/44/93/item_XL_11364493_15853722.jpg',
        title: ' Garment Rack',
        description: 'Garment Rack, Metal, Black, Hg 301',
        cost: 157 
    }),
    new Home({
        imagePath: 'https://cf1.s3.souqcdn.com/item/2018/08/22/37/21/22/74/item_XL_37212274_145094359.jpg',
        title: 'Dining Room Chair',
        description: 'Chair covers Dyed Jacquard Stretch Dining Room Chair Slipcovers-Red wine',
        cost: 32
    }),
    
];

var done = 0;
for (var i = 0; i < home.length; i++) {
    home[i].save(function(err, result) {
        done++;
        if (done === home.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}