/*
    ## Transformar notas escolares ##

    Crie um algoritmo que transforme as notas do sistema numérico para sistema de notas em caracteres A B C
        
        -> de 90 para cima - A
        -> entre 80-90     - B
        -> entre 70-79     - C
        -> entre 60-69     - D
        -> menor que 60    - F
*/
let score = getRandomIntInclusive(0, 100)

// Chama a função 'getScore' para transformar a nota em um conceito A, B, C, D ou F
console.log(getScore(score))

function getScore(score) {
    let scoreA = score >= 90 && score <= 100
    let scoreB = score >= 80 && score < 90
    let scoreC = score >= 70 && score < 80
    let scoreD = score >= 60 && score < 70
    let scoreF = score < 60 && score >= 0
    let scoreFinal

    console.log(`Nota: ${score}`)

    if (scoreA) {
        scoreFinal = "A"
    } else if (scoreB) {
        scoreFinal = "B"
    } else if (scoreC) {
        scoreFinal = "C"
    } else if (scoreD) {
        scoreFinal = "D"
    } else if (scoreF) {
        scoreFinal = "F"
    } else {
        scoreFinal = "Não foi possível definir o conceito: A, B, C, D ou F para a nota"
    }

    return scoreFinal
}

// Gera um número aleatório inteiro entre um range
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;
}