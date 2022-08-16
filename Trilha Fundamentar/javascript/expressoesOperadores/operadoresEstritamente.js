/*
    Expressões e operadores

    - Operadores de comparação estritamente
*/

let one = 1
let two = 2

// estritamente igual a   ===
console.log(one === "1") // false, porque? A comparação é feita do valor e tipo
console.log(one === 1) // true

// estritamente diferente de   !==
console.log(two !== "2") // true, porque? A comparação de valor é false, só que o tipo é diferente.
console.log(two !== 2) // false