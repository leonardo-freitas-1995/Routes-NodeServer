const mongoose = require('mongoose'),
      encryption = require('../server/services/encryption');

module.exports = function (app, config) {
    mongoose.Promise = global.Promise;
    mongoose.connect(config.db);
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error...'));
    db.once('open', () => {
        console.log('Routes MongoDB connection opened');
        createRootUser(mongoose.model('User'));
    });
};

function createRootUser(User){
    const salt = encryption.createSalt();
    const hash = "root";
    const rootUser = {
        email: "root@routes",
        name: "Routes Root Admin",
        salt,
        password: encryption.hashPwd(salt, hash),
        roles: ["root"]
    };
    User.findOne({email: rootUser.email}).exec((err, doc) => {
        if (!doc){
            User.create(rootUser);
        }
    });
}
