const passport = require('passport'),
    mongoose = require('mongoose'),
    LocalStrategy = require('passport-local').Strategy,
    User = mongoose.model('User');

module.exports = function () {
    passport.use(new LocalStrategy(
        (username, password, done) => {
            User.findOne({email: username}).exec((err, user) => {
                if (user && user.authenticate(password)) {
                    return done(null, user);
                } else {
                    return done(null, false);
                }
            });
        }
    ));

    passport.serializeUser((user, done) => {
        if (user) {
            done(null, user._id);
        }
    });

    passport.deserializeUser((id, done) => {
        User.findOne({_id: id}).exec((err, user) => {
            if (user) {
                return done(null, user);
            } else {
                return done(null, false);
            }
        });
    });
};
