const mongoose = require('mongoose'),
    encryption = require('../services/encryption');

module.exports =  function(){

    var userSchema = mongoose.Schema({
        name: String,
        email: {
            type: String,
            unique: true
        },
        salt: String,
        password: String,
        roles: [String]
    });

    userSchema.methods = {
        authenticate(passwordToMatch) {
            return encryption.hashPwd(this.salt, passwordToMatch) === this.password;
        },
        hasRole(role) {
            return this.roles.includes(role);
        }
    };

    return mongoose.model('User', userSchema);
};
