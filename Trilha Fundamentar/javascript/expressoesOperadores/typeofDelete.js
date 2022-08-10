/*
    Expressões e operadores

    - Operadore unários
        * typeof
        * delete
*/
const person = {
    name: "João",
    age: 25
}

console.log(typeof "Bruno") // Verifica qual o tipo do dado

console.log(person)
delete person.age // Deleta uma propriedade do objeto Person, mas só vai deletar se a propriedade existir no objeto
console.log(person)