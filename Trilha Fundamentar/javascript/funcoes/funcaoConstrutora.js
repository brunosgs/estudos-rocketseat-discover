/*
    Function() constructor

    * expressão new
    * criar um novo objeto
    * this keyword
*/

function Person(name) {
    this.name = name
    this.walk = function () {
        return this.name + " está andando!"
    }
}

// Ao utilizar o 'new' seguindo da função, a função se torna um função construtora
const bruno = new Person("Bruno")
const joao = new Person("João")

console.log(bruno.walk())
console.log(joao.walk())
