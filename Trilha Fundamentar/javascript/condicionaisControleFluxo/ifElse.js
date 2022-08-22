/*
    Condicionais e controle de fluxo

    DICAS: 
        -> Sempre utilize blocos nos if's, é possível utilizar sem fechar o bloco, quando dentro do escopo do if existe uma linha de código;
        -> Sempre transformar as condicionais, quando possível, em variáveis
        -> If's podem receber valores falsy ou truthy
*/

let temperature = 36.9
let highTemperature = temperature >= 37.5
let mediumTemperature = temperature < 37.5 && temperature >= 37

if (highTemperature) {
    console.log('Febre alta!')
} else if (mediumTemperature) {
    console.log('Febre moderada!')
} else {
    console.log('Saudável')
}