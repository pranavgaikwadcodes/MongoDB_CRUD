const mongoose = require('mongoose')

var Studentschema = new mongoose.Schema({
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
        type: String,
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


const StudentDb = mongoose.model('studentdb',Studentschema)

module.exports = StudentDb
