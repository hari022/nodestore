const  express = require('express');
const  router = express.Router();
const  mongoose = require('mongoose');
const product = require('../models/product');

const db = 'mongodb://hari02212:Cc7449747@ds161262.mlab.com:61262/nodestore'
mongoose.Promise = global.Promise;

mongoose.connect(db, function (err) {


    if (err){

        console.log(err);
    }

})

// router.get('/', function (req, res) {
//     // console.log("GET");
//     // product.find({})
//     //     .exec(function (err, products) {
//     //
//     //         if(err){
//     //
//     //             console.log("error")
//     //
//     //         }else {
//     //             res.json(products);
//     //         }
//     //
//     //     })
//
//     res.send('hello');
//
// })

router.get('/products', function (req, res) {
    console.log("GET");
    product.find({})
        .exec(function (err, products) {

            if(err){

                console.log("error")

            }else {
                res.json(products);
            }

        })

    // res.send('phello');

})

router.get('/product/:id', function (req, res) {
    console.log("GET single");
    product.findById(req.params.id)
        .exec(function (err, product) {

            if(err){

                console.log("error")

            }else {
                res.json(product);
            }

        })

    // res.send('phello');

})

router.put('/product/:id', function (req, res) {
    console.log("update single");
    console.log(req.body.cartQuantity);

    product.findByIdAndUpdate(req.params.id,

        {
            $set: {Name: req.body.Name,Description: req.body.Description,Os: req.body.OS,Price: req.body.Price,cartQuantity: req.body.cartQuantity, img: req.body.img }
        },

        {
            new : true
        },

    function(err, updatedProduct){

        if (err){
            console.log('error from updated product')
        }else {
            res.json(updatedProduct)
        }

    });

    // res.send('phello');

});

module.exports = router;