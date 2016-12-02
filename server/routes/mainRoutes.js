module.exports = function (app) {

    app.get('/partials/*', (req, res) => {
        res.render(`../../public/partials/${req.params[0]}`);
    });

    app.get('/templates/*', (req, res) => {
        res.render(`../../public/partials/templates/${req.params[0]}`);
    });

};
