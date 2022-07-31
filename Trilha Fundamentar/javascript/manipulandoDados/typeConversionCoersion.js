/*
    Type conversion (typecasting) vs Type coersion: É a alteração de um tipo de dado para outro tipo.

    - Type conversion (typecasting)
        * É alterado um tipo de dado para outro explicitamente.

    - Type coersion
        * É o javascript fazendo a troca do tipo de dado.
*/


console.log('9' + 5) // Utilizou um type coersion, o javascript fez a troca do tipo Number: 5 para uma String: '5'

console.log(Number('9') + 5) // Utilizou um type conversion, o usuário manualment fez a troca do tipo String: '5' para um Number: '5'