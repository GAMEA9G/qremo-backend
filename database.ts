const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function get(id) {
    try {
        const question = await prisma.question.findUnique({
            where: { id: id },
        });
        console.log(question);
        return question;
    } catch (error) {
        console.error(error);
    }
}

async function newQuestions(topic_id, question, answer) {
    try {
        const newQuestion = await prisma.question.create({
            data: {
                topicId: topic_id,
                question: question,
                answer: answer,
            },
        });
        console.log(`Question added to topic ${topic_id}`);
        console.log(newQuestion);
    } catch (error) {
        console.error(error);
    }
}

async function newSyllabus(syllabus_name) {
    try {
        const newSyllabus = await prisma.syllabus.create({
            data: {
                syllabus: syllabus_name,
            },
        });
        console.log(`${syllabus_name} added to syllabus`);
        console.log(newSyllabus);
    } catch (error) {
        console.error(error);
    }
}

async function newSubject(subject_name, syllabus_id) {
    try {
        const newSubject = await prisma.subject.create({
            data: {
                subject_name: subject_name,
                syllabusId: syllabus_id,
            },
        });
        console.log(`New subject is added: ${subject_name}`);
        console.log(newSubject);
    } catch (error) {
        console.error(error);
    }
}

async function editSubject(subject_name, subject_id) {
    try {
        const updatedSubject = await prisma.subject.update({
            where: { id: subject_id },
            data: { subject_name: subject_name },
        });
        console.log('Subject updated successfully');
        console.log(updatedSubject);
    } catch (error) {
        console.error(error);
    }
}

async function editQuestion(id, question, answer, topic_id) {
    try {
        const updatedQuestion = await prisma.question.update({
            where: { id: id },
            data: {
                question: question,
                answer: answer,
                topicId: topic_id,
            },
        });
        console.log('Question updated successfully');
        console.log(updatedQuestion);
    } catch (error) {
        console.error(error);
    }
}

async function editTopic(id, subject_id, topic) {
    try {
        const updatedTopic = await prisma.topic.update({
            where: { id: id },
            data: {
                subjectId: subject_id,
                topic: topic,
            },
        });
        console.log('Topic updated successfully');
        console.log(updatedTopic);
    } catch (error) {
        console.error(error);
    }
}

async function editSyllabus(id, syllabus) {
    try {
        const updatedSyllabus = await prisma.syllabus.update({
            where: { id: id },
            data: {
                syllabus: syllabus,
            },
        });
        console.log('Syllabus updated successfully');
        console.log(updatedSyllabus);
    } catch (error) {
        console.error(error);
    }
}

async function newTopic(subject_id, topic_name) {
    try {
        const newTopic = await prisma.topic.create({
            data: {
                subjectId: subject_id,
                topic: topic_name,
            },
        });
        console.log(`New topic added to subject ${subject_id}`);
        console.log(newTopic);
    } catch (error) {
        console.error(error);
    }
}

async function getQuestionfromTopic(topic_id) {
    try {
        const questions = await prisma.question.findMany({
            where: { topicId: topic_id },
        });
        console.log(questions);
        return questions;
    } catch (error) {
        console.error(error);
    }
}

module.exports = {
    get,
    newQuestions,
    newSyllabus,
    newSubject,
    newTopic,
    editSubject,
    editQuestion,
    editSyllabus,
};
