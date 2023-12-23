const Qcm = require('./qcmsModel');
const Question = require('./questionsModel');
const Answer = require('./answersModel');

const qcms = [
    new Qcm(
        {id: 0, name: 'Introduction à Javascript', theme: 'Javascript', nb_points: 20}
    ),
    new Qcm(
        {id: 1, name: 'Les classes', theme: 'PHP', nb_points: 20}
    ),
    new Qcm(
        {id: 2, name: 'Le modèle MVC', theme: 'Javascript', nb_points: 20}
    )
];

const questions = [
    new Question(
        {id: 0, id_qcm: 0, title: 'Qu\'est-ce que Javascript ?', points: 5}
    ),
    new Question(
        {id: 1, id_qcm: 0, title: 'Javascript est-il un langage front-end ou back-end ?', points: 5}
    ),
    new Question(
        {id: 2, id_qcm: 0, title: 'Qui a créé le Javascript ?', points: 5}
    ),
    new Question(
        {id: 3, id_qcm: 0, title: 'Quelle différence entre Javascript et Java ?', points: 5}
    )
];

const answers = [
    new Answer(
        {id: 0, id_question: 0, title: 'Un sport', correct_answer: false}
    ),
    new Answer(
        {id: 1, id_question: 0, title: 'Une série télé', correct_answer: false}
    ),
    new Answer(
        {id: 2, id_question: 0, title: 'Un langage de programmation', correct_answer: true}
    ),
    new Answer(
        {id: 3, id_question: 0, title: 'Le surnom d\'une célébrité', correct_answer: false}
    ),
    new Answer(
        {id: 4, id_question: 1, title: 'Front-end', correct_answer: true}
    ),
    new Answer(
        {id: 5, id_question: 1, title: 'Back-end', correct_answer: false}
    ),
    new Answer(
        {id: 6, id_question: 1, title: 'Les deux', correct_answer: false}
    ),
    new Answer(
        {id: 7, id_question: 1, title: 'Aucun des deux', correct_answer: false}
    ),
    new Answer(
        {id: 8, id_question: 2, title: 'Jean-Luc Mélenchon', correct_answer: false}
    ),
    new Answer(
        {id: 9, id_question: 2, title: 'Elon Musk', correct_answer: false}
    ),
    new Answer(
        {id: 10, id_question: 2, title: 'Brendan Eich', correct_answer: true}
    ),
    new Answer(
        {id: 11, id_question: 2, title: 'Philippe Poutou', correct_answer: false}
    ),
    new Answer(
        {id: 12, id_question: 3, title: 'Aucune, Java est l\'abbréviation de Javascript', correct_answer: false}
    ),
    new Answer(
        {id: 13, id_question: 3, title: 'Ce sont deux langages complètement différents', correct_answer: true}
    ),
    new Answer(
        {id: 14, id_question: 3, title: 'Java est une marque d\'électroménager', correct_answer: false}
    ),
    new Answer(
        {id: 15, id_question: 3, title: 'Java est le nom de l\'entreprise qui a créé Javascript', correct_answer: false}
    ),
];

function addQcm(rawObject) {

    let maxId = 0;

    qcms.forEach((qcm) => {
        if (maxId < qcm.id) {
            maxId = qcm.id
        }
    })
    // création du QCM
    const qcm = new Qcm(
        {
            id: maxId + 1,
            name: rawObject.name,
            theme: rawObject.theme,
            nb_points: Number(rawObject.nb_points)
        }
    );
    // ajout du QCM à la liste qcms
    qcms.push(qcm);
    return qcm;
}

function addQuestion(rawObject) {
    let maxId = 0;

    questions.forEach((question) => {
        if (maxId < question.id) {
            maxId = question.id;
        }
    });

    // création de la question
    const question = new Question({
        id: maxId + 1,
        id_qcm: rawObject.id_qcm,
        title: rawObject.title,
        points: Number(rawObject.points)
    });

    // ajout de la question au QCM lié
    questions.push(question);

    // ajout des réponses à la question liée
    rawObject.answers.forEach((rawAnswer) => {
        addAnswer({
            id_question: question.id,
            title: rawAnswer.title,
            correct_answer: rawAnswer.correct_answer
        });
    });

    return question;
}

function addAnswer(rawObject) {
    let maxId = 0;

    answers.forEach((answer) => {
        if (maxId < answer.id) {
            maxId = answer.id;
        }
    });

    // création de la réponse
    const answer = new Answer({
        id: maxId + 1,
        id_question: rawObject.id_question,
        title: rawObject.title,
        correct_answer: rawObject.correct_answer
    });

    // ajout de la réponse à la question liée
    answers.push(answer);
    return answer;
}

module.exports = { qcms, questions, answers, addQcm, addQuestion, addAnswer};