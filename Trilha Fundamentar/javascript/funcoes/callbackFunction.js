function sayMyName(name) {
    console.log('Antes de executar a função callback!')
    name()
    console.log('Depois de executar a função callback!')
}

/* 
    Uma função callback é uma função passada a outra função como argumento.
*/
sayMyName(
    () => {
        console.log('Estou em uma callback!')
    }
)
