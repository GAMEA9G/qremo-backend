const express = require('express');
const db = require("../../database.js")
const mysql = require('mysql2')
const router = express.Router();


router.get('/:syllabus_id/:nameOfSubject', (req, res) => {
    const nameOfSubject = req.params.nameOfSubject
    const syllabus_id = req.params.syllabus_id
    
    db.newSubject(nameOfSubject, eval(syllabus_id))
    res.send("new subject is added to syllabus");

});


module.exports = router;
