// Revisando os Arrays

const animals = [
    'Lion',
    'Monkey',
    'Cat',
    {
        name: 'Dog',
        age: 3
    }
]

/* 
    Acessando os valores dentro de um array:
        1 - Acessa a posição específica do array;
        2 - Pega o tamanho do array;
        3 - Acessa a posição específica do array, acessando um objeto pegando a propriedade definida.
    
    OBS: Não é uma boa prática utilizar arrays com tipos de dados diferentes, exemplo do array 'animals', onde existe strings e um objeto que tem propriedades. Pode ocasionar problemas de acesso a propriedades não definidas no array, assim trazendo como 'undefined'.
*/

console.log(animals[2])  // 1
console.log(animals.length) // 2
console.log(animals[3].name) // 3
console.log(animals[2].name) // undefined