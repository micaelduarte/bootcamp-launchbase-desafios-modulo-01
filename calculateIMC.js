//Program for calculate IMC of a person

const id = "Qingcheng"
const height = 1.60
const weight = 50

const imc = weight / (height * height)

if(imc >= 30) {
    console.log(`${id} you are overweight`)
} else {
    console.log(`${id} you are not overweight`)
}