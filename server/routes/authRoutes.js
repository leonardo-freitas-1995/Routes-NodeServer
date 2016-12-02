var auth = require('../../config/auth');

module.exports = function (app) {
    app.post('/login', auth.authenticate);

    app.post('/logout', function (req, res) {
        req.logout();
        res.end();
    });
};
