/*
    Expressões e operadores

    - Operador condicional (Ternário)
        * Dependendo da condição, nós receberemos valores diferentes: Condição então valor 1 se não valor 2
        * condition ? value1 : value2
*/

// Exemplo café da manhã
let pao = false
let queijo = false

const niceBreakfast = pao && queijo ? 'Café com sanduíche' : 'Café sem sanduíche'
const whateverBreakfast = pao || queijo ? 'Café com pão ou queijo' : 'Café sem pão e queijo'

console.log(niceBreakfast)
console.log(whateverBreakfast)

// Exemplo habilitado a dirigir
let age = 16

const canDrive = age >= 18 ? 'Can drive!' : "Can't drive"

console.log(canDrive)