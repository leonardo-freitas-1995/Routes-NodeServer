module.exports = function (app) {
    
    var productController = app.controllers.productController;
    
    
    app.route('/api/products/:search/:page')
        .get(productController.listProducts);     
    
    app.route('/api/products/:search')
        .get(productController.searchProducts); 
    
    app.route('/api/products/')
        .post(productController.createProduct);


};
