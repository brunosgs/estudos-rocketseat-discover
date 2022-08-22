/*
    ## Celsius para Fahrenheit ##

    Crie uma função que receba um string em celsius ou fahrenheit e faça a transformação de uma unidade para outra

        -> C = (F - 32) * 5/9
        -> F = C * 9/5 + 32
*/
const result = transformDegree('41F')

console.log(result)

function transformDegree(degree) {
    const celsiusExists = degree.includes('C')
    const fahrenheitExists = degree.includes('F')
    let celsiusDegree
    let fahrenheitDegree

    if (celsiusExists) {
        celsiusDegree = Number(degree.replace("C", ""))
        fahrenheitDegree = celsiusDegree * 9 / 5 + 32

        return `${degree} convertidos para fahrenheit é ${fahrenheitDegree}F`
    } else if (fahrenheitExists) {
        fahrenheitDegree = Number(degree.replace("F", ""))
        celsiusDegree = (fahrenheitDegree - 32) * 5 / 9

        return `${degree} convertidos para celsius é ${celsiusDegree}C`
    }

    return `Não foi possível converter ${degree}`
}