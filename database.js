const mysql = require('mysql2')
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'admin',
    database: 'db'
})

connection.connect()


function get(id) {
    connection.query("select * from question where id = " + id + ";", (err, rows, fields) => {
        console.log(rows)
        return rows

    })
}

function newQuestions(topic_id, question, answer) {
    connection.query('INSERT INTO `question`(`topic_id`,`question`,`answer`) VALUES("' + eval(topic_id) + '","' + question + '","' + answer + '");', (err, rows, fields) => {
        console.log(`question added to topic ${topic_id}`)
        console.log(err)
    })
}
function newSyllabus(syllabus_name) {
    connection.query('INSERT INTO `syllabus`(`syllabus`) VALUES("' + syllabus_name + '");', (err, rows, fields) => {
        console.log(`${syllabus_name} added to syllabus`)
        console.log(err)
    })
}
function newSubject(subject_name, syllabus_id) {
    connection.query('INSERT INTO `subjects`(`syllabus_id`, `subject_name`) VALUES ("' + syllabus_id + '", "' + subject_name + '");', (err, rows, fields) => {
        console.log(`New subject is added ${subject_name}`)
        console.log(err)
    })
}
function editSubject(Subject_name, subject_id) {

    connection.query(`UPDATE subjects SET subject_name ="` + Subject_name + `" WHERE id =` + subject_id + `  `), (err, rows, fields) => {

        console.log(err)
        console.log(`Subject updated Successfully`);

    }
}
function editQuestion(id, Question, answer, topic_id) {

    connection.query(`UPDATE question SET question  ="` + Question + `",answer="` + answer + `",topic_id ="` + topic_id + `" WHERE id =` + id + ``), (err, rows, fields) => {

        console.log(err)
        console.log(`Subject updated Successfully`);

    }
}
function editTopic(id, subject_id, topic) {

    connection.query(`UPDATE topic SET subject_id  ="` + subject_id + `",topic="` + topic+ `" WHERE id =` + id + ``), (err, rows, fields) => {

        console.log(err)
        console.log(`Topic updated Successfully`);

    }
}

function editSyllabus(id, syllabus) {

    connection.query(`UPDATE syllabus SET syllabus  ="` +syllabus +`" WHERE id =` + id + ``), (err, rows, fields) => {

        console.log(err)
        console.log(`Topic updated Successfully`);

    }
}


function newTopic(subject_id, topic_name) {
    connection.query(`INSERT INTO topic(subject_id, topic) VALUES ('${subject_id}', '${topic_name}');`, (err, rows, fields) => {
        console.log(`New Topic is added to ${subject_id}`);
        console.log(err)
    })
}


function getQuestionfromTopic(topic_id) {
    connection.query("select * from question where topic_id = " + topic_id + ";", (err, rows, fields) => {

        return rows
    })

}


module.exports = { get, newQuestions, newSyllabus, newSubject, newTopic, editSubject, editQuestion,editSyllabus }


