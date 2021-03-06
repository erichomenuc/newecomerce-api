const express = require('express')
const Product = require('../models/products');
// const { ObjectId } = require('mongodb')
const router = express.Router()
// const getClient = require('../db/mongodb')


router.get('/products', (req,res)=> {
    Product.find()
    .then((products)=> {
        res.send(products);
    })
    .catch((err)=>res.send(err))
});


// router.get('/products', (req, res) => {
//     getClient((err, db) => {
//         if(err) return res.send(err)
//             db.collection('products').find().toArray((err, result) => {
//         if(err) return res.send(err)
//             return res.send(result)
//         }) 
//     })
// })

router.post('/product', (req, res) => {
    console.log(req.body)

    const product = new Product(req.body);
    product.save()
        .then(() => {
            res.send(product);
        })
        .catch((err) => {
            res.status(500).send(err);
        });

    // const ar = []
    // ar.push(req.body)
    // getClient((err, db) => {
    //     if(err) return res.send(err)
    //     db.collection('products').insertMany(ar, (err, result) => {
    //     if(err) return res.send(err)
    //     return res.send(result)
        // }) 
    // })
})

router.get('/product/:id', (req, res) => {
    const { id } = req.params;
   Product.findById(id)
   .then((product)=>{
       res.send(product);
   })
   .catch((err)=> {
       res.send(err);
   });
});

// router.patch('/product/:id', (req, res) => {
//     const { id } = req.params;
//     getClient((err, db) => {
//         db.collection('products').updateOne({
//             _id: new ObjectId(id)
//         },{
//             $set: {
//                 price: 10,
//             }
//         }, (err, result) => {
//             if(err) return res.send(err)
//             return res.send(result)
//         })
//     })
// });

// router.delete('/product/:id', (req, res) => {
//     const { id } = req.params;
//     getClient((err, db) => {
//         db.collection('products').deleteOne({
//             _id: new ObjectId(id)
//         }, (err, result) => {
//             if(err) return res.send(err)
//             return res.send(result)
//         })
//     })
// });


module.exports = router