module.exports = function (app) {
    
    var userController = app.controllers.userController;
    
    
    app.route('/api/users/:id')
        .post(userController.updateUser);    
    
    app.route('/api/users/')
        .post(userController.createUser);

};
