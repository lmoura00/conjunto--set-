module.exports = class set{
    constructor(){
        this.item = []
    }

    add(element){
        this.has(element)
        if(this.has(element) === true){
            console.log("Não é possível adicionar. Item já existe no conjunto")
        }
        else{
            this.item.push(element)
            console.log("O elemento, "+element+" foi adicionado com sucesso!")
        }
    }
    delete(element){
        for(var i = 0; i<this.item.length; i++){
            if(this.item[i] === element){
                let spliced = this.item.splice(i, 1)
                console.log("Removido item: " + spliced)
            }
        }
    }
    pop(){
        return this.item.pop()
    }
    peek(){
        return this.item[this.item.length-1]
    }
    hasVerificar(element){
        for (var i = 0; i<this.item.length;i++){
            if(this.item[i] === element){
                console.log("O item, " + element + " existe no conjunto")
            }
            else{
                console.log("O item, " + element + " NÃO existe no conjunto")
            }
        }
    }
    has(element){
        for (var i = 0; i<this.item.length;i++){
            if(this.item[i] === element){
                return true
            }
            else{
                return false
            }
        }
    }


}
