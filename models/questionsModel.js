class Question {

    #id;
    #id_qcm;
    #title;
    #points = 5;

    constructor(qcmToCreate) {
        this.#id = qcmToCreate.id;
        this.#id_qcm = qcmToCreate.id_qcm;
        this.#title = qcmToCreate.title;
        this.#points = qcmToCreate.points;
    }

    get id() {
        return this.#id;
    }

    get id_qcm() {
        return this.#id_qcm;
    }

    get title() {
        return this.#title;
    }

    get points() {
        return this.#points;
    }
}

module.exports = Question;