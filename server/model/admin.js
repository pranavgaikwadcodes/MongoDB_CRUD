const mongoose = require('mongoose')

var adminSchmea = new mongoose.Schema({
    username:{
        type: String,
        require: true
    },
    password:{
        type: String,
        require: true
    }
})

const adminDb = mongoose.model('AdminDB',adminSchmea)

module.exports = adminDb