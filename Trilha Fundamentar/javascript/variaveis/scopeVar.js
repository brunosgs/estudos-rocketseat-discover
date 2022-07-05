/*
    - Escopo determina a visibilidade de alguma variável no JS.
*/


//Block statement
{
    console.log('> Block statement x')
}


/*
    - var é global, também local e poderá funcionar fora de um escopo de bloco
    - hoisting: sugere que as declarações de variáveis e funções são fisicamente movidas para o topo do seu código 
*/
console.log('> Existe y antes do bloco?', y) // Foi aplicado o conceito de hoisting

{
    var y = 0
}

console.log('> existe y depois do bloco? ', y)