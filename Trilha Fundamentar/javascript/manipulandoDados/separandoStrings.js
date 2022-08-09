/*
    Manipulando Strings e Arrays

    - Separa um texto que contém espaços, em um novo array onde cada texto é uma posiçãodo array. Depois disso, transforme o array em um texto e onde eram espaços, coloque _
*/

let phrase = "Estou aprendendo a programar usando javascript!"

// split() divide a string em um array utilizando um parâmetro.
let myArray = phrase.split(" ")
console.log(myArray)

// join() faz a junção do array em uma string utilizando um parâmetro como separador.
let phraseWithUnderscore = myArray.join("_")
console.log(phraseWithUnderscore)