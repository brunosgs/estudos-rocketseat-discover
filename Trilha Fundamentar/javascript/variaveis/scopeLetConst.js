/*
    - const e let são locais e funcionam só no local que foram criadas
*/

let y = 1

{

    let y = 0

    console.log('> Existe y = ', y)
}

console.log('> Existe y depois do bloco? y = ', y)