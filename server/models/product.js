const mongoose = require('mongoose');

module.exports =  function(){

    var productSchema = mongoose.Schema({
        name: String,
        NCM: {
            type: String,
            unique: true
        },
        taxRates: [
            {
                state: String,
                taxRate: Number,
                taxSubstitution: Boolean
            }
        ]
    });

    return mongoose.model('Product', productSchema);
};
