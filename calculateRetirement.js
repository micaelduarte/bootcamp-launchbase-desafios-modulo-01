//Program to calculate a person's retirement *Ficticio

const id = "Silvana"
const sex = "F"
const age = 48
const contribuition = 38

const agePlusContribuition = age + contribuition

if(sex === "F") {
    if(contribuition >= 30 && agePlusContribuition >= 85) {
        console.log(`${id}, you can if retire!`)
    } else {
        console.log(`${id}, you still can't retire!`)
    }
} else {
    if(contribuition >= 30 && agePlusContribuition >= 95) {
        console.log(`${id}, you can if retire`)
    } else {
        console.log(`${id}, you still can't retire`)
    }
}