var encryption = require('../services/encryption');

module.exports = function(app){

    var Product = app.models.product;

    var controller = {};

   controller.listProducts = function(req, res){
       const PRODUCTS_PER_PAGE = 5;
       var skipProducts = PRODUCTS_PER_PAGE * (req.params.page - 1);
       var query = {};
       if (req.params.search !== "ALL_PRODUCTS"){
           query["$or"] = [
               {
                   name: { "$regex": req.params.search, "$options": "gi" }
               },
               {
                   NCM: { "$regex": req.params.search, "$options": "gi" }
               }
           ];
       }
       Product.find(query).skip(skipProducts).limit(PRODUCTS_PER_PAGE).lean().exec(function(err, products){
           if (err){
               res.send({success: false});
           }
           else{
               Product.count(query, function(err, count){
                   res.send({success: true, products: products, pages: Math.ceil(count / PRODUCTS_PER_PAGE)})
               })
           }
       });
   };

    return controller;
};