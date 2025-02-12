const express = require('express');

const db = require("../../database.js")
const router = express.Router();

router.get('/:id', (req, res) => {
    const id = req.params.id;
    
    res.send(db.get(id));
});
module.exports = router;