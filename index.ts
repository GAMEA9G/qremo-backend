import express from 'express';
const app = express();
const port = 3000;
;



const db = require("./database.js")
const question = require('./routes/question');
const subject = require('./routes/addSubject');
const edit = require('./routes/edit');
const newQuestion = require('./routes/newQuestion');
const newTopic = require('./routes/newTopic');
const newSyllabus = require('./routes/newSyllabus');
app.use('/question', question);
app.use('/addSubject', subject);
app.use('/newQuestion',newQuestion );
app.use('/newTopic',newTopic);
app.use('/edit', edit);
app.use('/newSyllabus',newSyllabus);
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});