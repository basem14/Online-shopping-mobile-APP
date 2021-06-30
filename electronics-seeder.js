var Electronics = require('./scheme/electronics');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopping', {useNewUrlParser: true, useUnifiedTopology: true});
var electronics = [
    new Electronics({
        imagePath: 'https://cf2.s3.souqcdn.com/item/2019/11/17/90/20/64/12/item_XL_90206412_39f2b351491f3.jpg',
        title: 'Dell G5 15-5590 Gaming Laptop',
        description: 'Dell G5 15-5590 Gaming Laptop, intel core i7-9750H, 16GB RAM, 1TB HDD + 128 GB SSD, NVIDIA GTX1660Ti 6GB DDR5 Graphics, 15.6 inch FHD IPS, Backlit KB, Windows, Black',
        cost: 19666
    }),
    new Electronics({
        imagePath: 'https://cf4.s3.souqcdn.com/item/2019/07/03/55/27/80/42/item_XL_55278042_1bb9f7e7b9218.jpg',
        title: 'Jac 49N 49 Inch Full HD LED TV',
        description: 'Dell G5 15-5590 Gaming Laptop, intel core i7-9750H, 16GB RAM, 1TB HDD + 128 GB SSD, NVIDIA GTX1660Ti 6GB DDR5 Graphics, 15.6 inch FHD IPS, Backlit KB, Windows, Black',
        cost: 3799
    }),
    new Electronics({
        imagePath: 'https://cf5.s3.souqcdn.com/item/2017/06/23/23/17/95/32/item_XL_23179532_32824207.jpg',
        title: 'JBL E35 Wired Headphone',
        description: 'Headphone cable length: 133.4,centimeters Headphones jack type 3.5 millimetersEar ,cushion material PU Leather',
        cost: 1131
    }),

new Electronics({
    imagePath: 'https://cf2.s3.souqcdn.com/item/2016/03/12/10/26/19/09/item_XL_10261909_12928836.jpg',
    title: 'Nikon COOLPIX B500',
    description: 'Nikon COOLPIX B500 - 16 Megapixel, Compact Camera, Black',
    cost: 4335
})
];

var done = 0;
for (var i = 0; i < electronics.length; i++) {
    electronics[i].save(function(err, result) {
        done++;
        if (done === electronics.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}