var Fashions = require('./scheme/fashions');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopping', {useNewUrlParser: true, useUnifiedTopology: true});
var fashions = [
    new Fashions({
        imagePath: 'https://cf3.s3.souqcdn.com/item/2020/04/01/12/27/31/17/0/item_XXL_122731170_698f6d9f7f115.jpg',
        title: 'Bella Donna ',
        description: 'Bella Donna Front Sheer Layer Palazzo Pants for Women - Black',
        cost: 700
    }),
    new Fashions({
        imagePath: 'https://cf4.s3.souqcdn.com/item/2020/04/23/12/29/23/24/0/item_XXL_122923240_42fc3b35d9b56.jpg',
        title: 'Basic T-Shirt ',
        description: 'Off Cliff Cotton V-Neck Regular Fit Basic T-Shirt for Men - Maroon',
        cost: 75
    }),
    new Fashions({
        imagePath: 'https://cf3.s3.souqcdn.com/item/2020/05/17/12/52/27/89/2/item_XXL_125227892_d15bfe76cdcc1.jpg',
        title: 'Oxford Shoes ',
        description: 'Grinta Faux-Nubuck Round-Toe Oxford Shoes for Men - Grey, 43',
        cost: 300
    })
];

var done = 0;
for (var i = 0; i < fashions.length; i++) {
    fashions[i].save(function(err, result) {
        done++;
        if (done === fashions.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}