/*
    Expressões e operadores

    - FALSY: Quando um valor é considerado false em contextos onde um booleano é obrigatorio (condicionais e loops)
        * Situações que o pode ser FALSY:
            false
            0
            -0
            ""
            null
            undefined
            NaN
*/

console.log("" ? 'Verdadeiro' : 'Falso')

/*
    - TRUTHY: Quando um valor é considerado true em contextos onde um booleano é obrigatorio (condicionais e loops)
        * Situações que o pode ser TRUTHY:
            true
            {}
            []
            1
            3.23
            "0"
            "false"
            -1
            Infinity
            -Infinity
*/

console.log(Infinity ? 'Verdadeiro' : 'Falso')