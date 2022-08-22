/*
    Estrutura de repetição
*/

let person = {
    name: 'John',
    age: 30,
    weight: 80.6
}

for (let prop in person) {
    // console.log(person["name"])
    // console.log(person.name)
    console.log(prop)
    console.log(person[prop])
}