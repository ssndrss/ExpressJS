class Answer {

    #id;
    #id_question;
    #title;
    #correct_answer = Boolean;

    constructor(qcmToCreate) {
        this.#id = qcmToCreate.id;
        this.#id_question = qcmToCreate.id_question;
        this.#title = qcmToCreate.title;
        this.#correct_answer = qcmToCreate.correct_answer;
    }

    get id() {
        return this.#id;
    }

    get id_question() {
        return this.#id_question;
    }

    get title() {
        return this.#title;
    }

    get correct_answer() {
        return this.#correct_answer;
    }
}

module.exports = Answer;