/*
    Manipulando Arrays
*/

let techs = ["html", "css", "js"]
console.log(techs)

// - Adicionar um item no fim;
techs.push("nodejs")
console.log(techs)

// - Adicionar no começo;
techs.unshift("sql")
console.log(techs)

// - Remover do fim;
techs.pop()
console.log(techs)

// - Remover do começo;
techs.shift()
console.log(techs)

// - Pegar somente alguns elementos do array;
console.log(techs.slice(1, 3))

// - Remover 1 ou mais items em qualquer posição do array;
techs.splice(1, 1)
console.log(techs)

// - Encontrar a posição de um elemento do array;
let index = techs.indexOf("html")
console.log(index)