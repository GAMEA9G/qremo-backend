const express = require('express');
const bodyParser = require('body-parser')
const db = require("../../database.js")
const router = express.Router();
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));


router.post('/', (req, res) => {
    
    
    let subject_id = req.body.subject_id;
    let topic_name = req.body.topic_name;

    if (!subject_id || !topic_name) {
        req.statusCode =404
        req.statusText ="Subject id and topic name is required"

   }
   else {
    db.newTopic(subject_id,topic_name)
   }
});

module.exports = router;