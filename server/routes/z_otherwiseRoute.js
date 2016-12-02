module.exports = function (app) {

    app.all("/api/*", (req, res) => {
        res.send(404);
    });

    app.get('*', (req, res) => {
        res.render('index', {
            bootstrappedUser: req.user
        });
    });
};
