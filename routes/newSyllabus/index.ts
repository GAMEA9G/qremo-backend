const express = require('express');
const bodyParser = require('body-parser')
const db = require("../../database.js")
const router = express.Router();
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));


router.post('/', (req, res) => {



    let name = req.body.name;


    if (!name) {
        req.statusCode = 404
        req.statusText = "name and id are required"

    }
    else {
        db.newSyllabus(name)
        res.send("New syllabus: " + name)
    }
});

module.exports = router;