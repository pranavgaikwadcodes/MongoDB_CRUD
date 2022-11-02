const mongoose = require('mongoose')

var schema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    course: {
        type: String,
        require: true,
    },
    currentcourseYear: {
        type: Number,
        require: true
    },
    seatNumber: {
        type: String,
        require: true,
        unique: true
    },
    gender: String,
    dob: {
        type: Date,
        require: true,
        unique: true
    },
    phoneNumber: {
        type: Number,
        require: true,
        unique: true
    },
    Address: {
        type: String,
        require: true,
        unique: true
    },
    Percentage: {
        type: Number,
        require: true,
        unique: true
    },
    AdmissionType: {
        type: String,
        require: true,
        unique: true
    },
    Category: {
        type: String,
        require: true,
        unique: true
    },
})

const Userdb = mongoose.model('userdb',schema)

module.exports = Userdb