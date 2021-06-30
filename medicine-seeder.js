var Medicine = require('./scheme/medicine');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopping', {useNewUrlParser: true, useUnifiedTopology: true});
var medicine = [
    new Medicine({
        imagePath: 'https://eg.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/39/87361/1.jpg?1201',
        title: 'Gazik Cream',
        description: 'Gazik Cream Eye Contour Cream - 30 Gm',
        cost: 75
    }),
    new Medicine({
        imagePath: 'https://eg.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/80/63966/1.jpg?6156',
        title: 'Regetone Cream',
        description: 'Mastermed Pharma Regetone Cream With Collagen Anti Wrinkling - 100g',
        cost: 90
    }),
    new Medicine({
        imagePath: 'https://eg.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/96/318281/1.jpg?8845',
        title: 'Collagen Shampoo',
        description: 'Ogx Thick & Full Biotin & Collagen Shampoo - 385 Ml',
        cost: 299
    })
];

var done = 0;
for (var i = 0; i < medicine.length; i++) {
    medicine[i].save(function(err, result) {
        done++;
        if (done === medicine.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}