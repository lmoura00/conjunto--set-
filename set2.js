module.exports = class Set {
    constructor() {
        this.items = new Map(); // Using a Map for better performance
    }

    add(element) {
        if (!this.has(element)) {
            this.items.set(element, element);
            console.log(`O elemento ${element} foi adicionado com sucesso!`);
            return true; // Indicate success
        }
        console.log(`Não é possível adicionar. O item ${element} já existe no conjunto.`);
        return false; // Indicate failure
    }

    delete(element) {
        if (this.has(element)) {
            this.items.delete(element);
            console.log(`Removido item: ${element}`);
            return true; // Indicate success
        }
        console.log(`Não é possível remover. O item ${element} não existe no conjunto.`);
        return false; // Indicate failure
    }

    has(element) {
        return this.items.has(element);
    }

    clear() {
        this.items.clear();
    }

    size() {
        return this.items.size;
    }

    values() {
        return Array.from(this.items.keys());
    }

    union(otherSet) {
        const unionSet = new Set();
        this.values().forEach(value => unionSet.add(value));
        otherSet.values().forEach(value => unionSet.add(value));
        return unionSet;
    }

    intersection(otherSet) {
        const intersectionSet = new Set();
        const smallerSet = this.size() < otherSet.size() ? this : otherSet;
        smallerSet.values().forEach(value => {
            if (this.has(value) && otherSet.has(value)) {
                intersectionSet.add(value);
            }
        });
        return intersectionSet;
    }
}

