/*
    Manipulando Strings e Números

    - Transformar um número quebrado com 2 casas decimais e trocar ponto por vírgula.
*/


/*
    A função 'toFixed' está atrelada ao objeto Number, também pode ser chamada de mérodo
        - Ela retorna uma String representando um número em notação de ponto fixo, passando para o método a quantidade de casas decimais.
*/
let number = 168.41421314
console.log(number.toFixed(2).replace(".", ","))
