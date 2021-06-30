var Books = require('./scheme/books');

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/shopping', {useNewUrlParser: true, useUnifiedTopology: true});

var books = [
    new Books({
        imagePath: 'https://cf5.s3.souqcdn.com/item/2017/09/12/24/04/91/69/item_XL_24049169_35101103.jpg',
        title: 'New Insights Into Business',
        description: 'New Insights Into Business: Workbook with Answer key ,Ed. :1 by Graham Tullis - M. Lannon Publishe',
        cost: 10
    }),
    new Books({
        imagePath: 'https://cf4.s3.souqcdn.com/item/2015/12/09/96/87/60/5/item_XL_9687605_11215499.jpg',
        title: ' Professional English in Use',
        description: 'Professional English in Use Medicine by Eric Glendinning - Paperback',
        cost: 82 
    }),
    new Books({
        imagePath: 'https://cf1.s3.souqcdn.com/item/2017/11/30/28/39/34/25/item_XL_28393425_74635981.jpg',
        title: 'Idiot Brain',
        description: 'Idiot Brain: What Your Head Is Really Up to By Dean Burnett',
        cost: 70
    }),
    
];

var done = 0;
for (var i = 0; i < books.length; i++) {
    books[i].save(function(err, result) {
        done++;
        if (done === books.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}