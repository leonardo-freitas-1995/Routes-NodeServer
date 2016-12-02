var passport = require('passport');

module.exports = {
  authenticate(req, res, next) {
    if (req.body.username !== undefined)
            req.body.username = req.body.username.toLowerCase();
        const auth = passport.authenticate('local', (err, user) => {
            if (err) {
                return next(err);
            }
            if (!user) {
                res.send({success: false});
            }
            req.logIn(user, err => {
                if (err) {
                    return next(err);
                }
                res.send({success: true, user});
            });
        });
        auth(req, res, next);
  }
};
