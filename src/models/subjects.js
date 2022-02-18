const mongoose = require('mongoose')
const fs = require("fs")
const path = require('path')


const subjectSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
    },
    email: {
        type: String,
        trim: true
    },
    phone: {
        type: String,
        trim: true
    },
    bdate: {
        type: String,
        trim: true
    },
    addnInfo: {
        type: String,
        trim: true
    },
    filePath: {
        type: String,
        trim: true
    },
    fileName: {
        type: String,
        trim: true
    }
})
// Schema Virtuals

const Subjects = mongoose.model('Subjects', subjectSchema)
module.exports = Subjects