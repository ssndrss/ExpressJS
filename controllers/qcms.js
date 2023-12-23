const {qcms, questions, answers, addQcm, addQuestion} = require('../models/inmemory');

const displayQcms = (req, res) => {
    res.render('qcms', {qcms: qcms});
}

const displayQcmJson = (req, res) => {
    res.json(qcms);
}

const displayFormQcm = (req, res) => {
    res.render('newqcm');
}

const displayQcmDetailed = (req, res) => {
    const id = Number(req.params.qcmid);
    console.log(id);
    const qcm = qcms.find((element) => element.id === id);
    let qcm_questions = [];
    if (qcm) {
        qcm_questions = questions.filter((question) => question.id_qcm === id);
    }

    let question_answers = [];
    qcm_questions.forEach((question) => {
        const answersForQuestion = answers.filter((answer) => answer.id_question === question.id);
        question_answers.push({ question, answers: answersForQuestion });
    });
    
    res.render('qcm', {qcm, questions: question_answers, answers: answers});
}

const createNewForm = (req, res) => {
    console.log(req.body);
    let qcm = addQcm({
        name: req.body.name,
        theme: req.body.theme,
        nb_points: req.body.nb_points,
    });

    // ajout des questions au QCM lié
    req.body.questions.forEach((rawQuestion) => {
        let question = addQuestion({
            id_qcm: qcm.id,
            title: rawQuestion.title,
            points: rawQuestion.points,
            answers: rawQuestion.answers
        });
    });

    res.redirect('/qcms/qcms');
}

module.exports = {displayQcms, displayQcmJson, displayFormQcm, createNewForm, displayQcmDetailed};