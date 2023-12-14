class Qcm {

    #id;
    #name;
    #theme;
    #author;
    #nb_points = 20;

    constructor(qcmToCreate) {
        this.#id = qcmToCreate.id;
        this.#name = qcmToCreate.name;
        this.#theme = qcmToCreate.theme;
        this.#author = qcmToCreate.author;
        this.#nb_points = qcmToCreate.nb_points;
    }

    get id() {
        return this.#id;
    }

    get name() {
        return this.#name;
    }

    get theme() {
        return this.#theme;
    }

    get author() {
        return this.#author;
    }

    get nb_points() {
        return this.#nb_points;
    }

    toJSON(key) {
        console.log(key);
        return {id: this.#id, name: this.#name};
    }
}

module.exports = Qcm;