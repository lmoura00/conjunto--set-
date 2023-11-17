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

    delete(element) {
        if (this.has(element)) {
            this.items = this.items.filter(item => item !== element);
            console.log("Removido item: " + element);
        }
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
    size() {
        let count = 0;
        for (let key in this.items) {
            if (this.items.hasOwnProperty(key)) {
                count++; // {4}
            }
        }
        return count;
    };
    values() {
        let values = [];
        for (let key in this.items) {
            if (this.items.hasOwnProperty(key)) {
                values.push(key);
            }
        }
        return values;
    };
    union(outroSet) {
        const unionSet = new Set();
        this.values().forEach(value => unionSet.add(value));
        outroSet.values().forEach(value => unionSet.add(value));
        return unionSet;
    }
    intersection(otherSet) {
        const intersectionSet = new Set();
        const values = this.values();
        const otherValues = otherSet.values();
        let biggerSet = values;
        let smallerSet = otherValues;
        if (otherValues.length - values.length > 0) {
            biggerSet = otherValues;
            smallerSet = values;
        }
        smallerSet.forEach(value => {
            if (biggerSet.includes(value)) {
                intersectionSet.add(value);
            }
        });
        return intersectionSet;
    }
    difference(otherSet) {
        const differenceSet = new Set(); 
        this.values().forEach(value => { 
            if (!otherSet.has(value)) { 
                differenceSet.add(value); 
            }
        });
        return differenceSet;
    }
    isSubsetOf(otherSet) {
        if (this.size() > otherSet.size()) { 
            return false;
        }
        let isSubset = true; 
        this.values().every(value => { 
            if (!otherSet.has(value)) { 
                isSubset = false; 
                return false;
            }
            return true; 
        });
        return isSubset
    }
};
