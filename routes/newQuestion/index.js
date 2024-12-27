const express = require('express');
const bodyParser = require('body-parser')
const db = require("../../database.js")
const router = express.Router();
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));


router.post('/', (req, res) => {
    
    
    let topic_id = req.body.topic_id;
    let Question =req.body.question;
    let answer = req.body.answer;

    if (!topic_id || !Question || !answer) {
        req.statusCode =404
        req.statusText ="enter question and answer and topic_id"

   }
   else {
    db.newQuestions(topic_id, Question, answer)
   }
});

module.exports = router;