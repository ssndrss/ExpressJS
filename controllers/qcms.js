const {qcms, addQcm, addQuestion} = require('../models/inmemory');

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
    res.render('qcm', {qcm});
}

const createNewForm = (req, res) => {
    console.log(req.body);
    let qcm = addQcm(
        {
            name: req.body.name,
            theme: req.body.theme,
            nb_points: req.body.nb_points,
        }
    );
    let question = addQuestion(
        {
            id_qcm: qcm.id,
            title: req.body.title,
            points: req.body.points
        }
    );
    addAnswer(
        {
            id_question: question.id,
            title: req.body.title,
            correct_answer: req.body.correct_answer
        }
    );
    res.redirect('/qcms');
}

module.exports = {displayQcms, displayQcmJson, displayFormQcm, createNewForm, displayQcmDetailed};