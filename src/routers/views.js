const express = require('express')
const formidable = require("formidable")
const router = new express.Router()
const path = require('path')
const Subjects = require('../models/subjects')
const tempUploadFolder = path.join(__dirname, '../../public/tempUpload')

// Functions here, remove later
saveFields = async (fields, filepath, fileName) => {
    try {
        fields.filePath = filepath
        fields.fileName = fileName
        const subject = new Subjects({
            ...fields,
            filepath: filepath,
            fileName: fileName
        })
        await subject.save()
        return true
    } catch (error) {
        console.log(error)
    }
}


router.get('/', async (req, res) => {
    try {
        res.render('index')
    } catch (e) {
        console.log(e)
    }

})

router.get('/questions', async (req, res) => {
    try {
        res.render('questions')
    } catch (e) {
        console.log(e)
    }

})

router.get('/admin', async (req, res) => {
    try {
        subjectsList = await Subjects.find()
        // console.log(subjectsList)
        res.render('admin', { subjectsList })
    } catch (error) {
        console.log(error)
    }
})

// API Endpoint to handle uploaded files
router.post('/fileUploadHandler', async (req, res) => {
    try {
        // console.log("Got upload request")
        const form = new formidable.IncomingForm()
        form.multilples = false
        form.uploadDir = tempUploadFolder
        form.parse(req, async (err, fields, files) => {
            savestatus = await saveFields(fields, files.file.filepath, files.file.newFilename)
            if (savestatus) res.status(200).send()
            if (err) {
                console.log(err)
            }
        })
    } catch (error) {
        console.log(error)
    }
})

module.exports = router