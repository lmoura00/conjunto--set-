module.exports = class Set {
    constructor() {
        this.items = [];
    }

    add(element) {
        if (this.has(element)) {
            console.log("Não é possível adicionar. Item já existe no conjunto");
        } else {
            this.items.push(element);
            console.log("O elemento, " + element + " foi adicionado com sucesso!");
        }
    }

    deleteV1(element) {
        if (this.has(element)) {
            this.items = this.items.filter(item => item !== element);
            console.log("Removido item: " + element);
        }
    }

    delete(element) {
        const index = this.items.indexOf(element);
        if (index !== -1) {
            this.items.splice(index, 1);
            return true;
        }
        return false;
    }

    pop() {
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    hasVerificar(element) {
        let exists = false;
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i] === element) {
                exists = true;
                break;
            }
        }
        if (exists) {
            console.log("O item, " + element + " existe no conjunto");
        } else {
            console.log("O item, " + element + " NÃO existe no conjunto");
        }
    }

    has(element) {
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i] === element) {
                return true;
            }
        }
        return false;
    }

    clear() {
        this.items = [];
    }
};
