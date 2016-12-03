module.exports = function (app) {
    
    var productController = app.controllers.productController;
    
    
    app.route('/api/products/:search/:page')
        .get(productController.listProducts);


};
