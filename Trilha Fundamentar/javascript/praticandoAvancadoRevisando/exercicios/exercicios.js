/*
    1 - Declare uma variável de nome weight.
*/
let weight;

/*
    2 - Que tipo de dado é a variável acima?
*/
console.log(typeof weight);

/*
    3 - Declare uma variável e atribua valores para cada um dos dados:
        * name: String
        * age: Number (integer)
        * stars: Number (float)
        * isSubscribed: Boolean
*/
let name = "Bruno";
let age = 28;
let stars = 2.69;
let isSubscribed = true;

/*
    4 - A variável student abaixo é de que tipo de dado?
    4.1 - Atribua a ela as mesmas propriedades e valores do exercício 3.
    4.2 - Mostre no concole a seguinte mensagem:
        * <name> de idade <age> pesa <weight> kg.

        Atenção, substitua <name>, <age> e <weight> pelos valores de cada propriedade do objeto.
*/
let student = {
    name: "Bruno",
    age: 28,
    weight: 83.300,
    isSubscribed: true
}; // 4.1

console.log(typeof student); // 4: object
console.log("Concatenando: " + student.name + " de idade " + student.age + " pesa " + student.weight + "kg."); // 4.2
console.log(`Interpolando: ${student.name} de idade ${student.age} pesa ${student.weight}kg.`); // 4.2

/*
    5 - Declare uma variável do tipo array, de nome students e atribua a ela nenhum valor, ou seja, somente o array vazio.
*/
let students = [];

/*
    6 - Reatribua valor para a variável acima, colocando dentro dela o objeto student da questão 4. (Não copiar e colar o objeto, mas usar o objeto criado e inserir ele no array).
*/
students = [
    student
]

/*
    7 - Coloque no console o valor da posição zero do arrays acima.
*/
console.log(students[0])

/*
    8 - Crie um novo student e coloque na posição 1 do array students
*/
const john = {
    name: "John",
    age: 23,
    weight: 76.100,
    isSubscribed: true
};
// students = [
//     student,
//     john
// ]
students[1] = john

console.log(students)

/*
    9 - Sem rodar o código responda: 
        * Qual é a resposta do código abaixo e porque? Após sua resposta, rode o código e veja se você acertou.
            console.log(a);
            var a = 1;
        
    R: Vai imprimir 'undefined', pois nesse contexto a 'var a' vai sofre um 'hoisting', vai ser elevada só que não com o valor atribuído, sendo assim ele será 'undefined'.
*/
console.log(a);
var a = 1;

/*
    10 - Altere o código da questão 9 e ao invés de definir como um 'var a = 1', defina como 'let b = 1'. Qual é a resposta do código e porque? Após sua resposta, rode o código e veja se você acertou.

    R: Vai mostrar um erro de referência, nesse caso ela não eleva = 'hoisting', sendo assim não elevada para o início do escopo.
*/
console.log(b)
let b = 1;