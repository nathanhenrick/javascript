const pessoas = [
    {
        nome: "Gilson",
        idade: 42
    },
    {
        nome: "Simone",
        idade: 39
    },
    {
        nome: "Nathan",
        idade: 18
    },
    {
        nome: "Guilherme",
        idade: 9
    },
    {
        nome: "Nathalia",
        idade: 7
    },
    {
        nome: "Maria",
        idade: 2
    }
]

console.log(`Aqui jaz uma lista da minha família (dem ordem decrescente):
    ${pessoas[0].nome} é o pai da família e tem ${pessoas[0].idade} anos;
    ${pessoas[1].nome} é a mãe da família e tem ${pessoas[1].idade} anos;
    ${pessoas[2].nome} é o filho mais velho da família e tem ${pessoas[2].idade} anos;
    ${pessoas[3].nome} é o segundo filho da família e tem ${pessoas[3].idade} anos;
    ${pessoas[4].nome} é a terceira filha da família e tem ${pessoas[4].idade} anos;
    ${pessoas[5].nome} é a caçula da família e tem ${pessoas[5].idade} anos;

`)

for (let i = 0; i < pessoas.length; i++) {
    console.log (`${pessoas[i].nome} possui ${pessoas[i].idade} anos`)
}