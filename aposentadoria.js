//Programa para calcular a aposentadoria de uma pessoa *Ficticio

const nome = "Silvana"
const sexo = "F"
const idade = 48
const contribuicao = 38

const idadeMaisContribuicao = idade + contribuicao

if(sexo === "F"){
    if(contribuicao >= 30 && idadeMaisContribuicao >= 85) {
        console.log(`${nome}, você pode se aposentar!`)
    } else {
        console.log(`${nome}, você ainda não pode se aposentar!`)
    }
} else {
    if(contribuicao >= 30 && idadeMaisContribuicao >= 95) {
        console.log(`${nome}, você pode se aposentar`)
    } else {
        console.log(`${nome}, você ainda não pode se aposentar`)
    }
}