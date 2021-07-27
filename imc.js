//Programa para calcualr o IMC de uma pessoa e o nivel de obsidade

const nome = "Qingcheng"
const altura = 1.60
const peso = 50

const imc = peso / (altura * altura)

if(imc >= 30) {
    console.log(`${nome} você está acima do peso`)
} else {
    console.log(`${nome} você não está acima do peso`)
}