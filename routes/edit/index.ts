const express = require('express');
const bodyParser = require('body-parser')
const router = express.Router();
const db = require("../../database.js")
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

router.post('/Subject_name', (req, res) => {


    var id = req.body.id;
    let name = req.body.name;
    if (!id || !name) {
        req.statusCode = 404;
    }
    else {

        db.editSubject(name, id);
        res.send("Subject updated successfully")
    }


});
router.post('/Syllabus', (req, res) => {


    var id = req.body.id;
    let Syllabus = req.body.syllabus;
    if (!id || !Syllabus) {
        req.statusCode = 404;
    }
    else {

        db.editSyllabus(id,Syllabus);
        res.send("Subject updated successfully")
    }


});
router.post('/Topic', (req, res) => {


    let id = req.body.id;
    let question = req.body.question;
    let answer = req.body.answer;
    let topic_id = req.body.topic_id;
    if (!id || !question || !answer) {
        req.statusCode = 404;
    }
    else {

        db.editQuestion(id, question, answer, topic_id);
        res.send("Question updated successfully")
    }


});

router.post('/Question', (req, res) => {


    let id = req.body.id;
    let question = req.body.question;
    let answer = req.body.answer;
    let topic_id = req.body.topic_id;
    if (!id || !question || !answer) {
        req.statusCode = 404;
    }
    else {

        db.editQuestion(id, question, answer, topic_id);
        res.send("Question updated successfully")
    }


});

module.exports = router;