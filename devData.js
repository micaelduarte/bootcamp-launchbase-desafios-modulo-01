const dev = {
    id: "Jeff",
    age: 20,
    technologies: [
        {id: "C++", specialty: "Desktop"},
        {id: "Python", specialty: "Data Science"},
        {id: "JavaScript", specialty: "Web/Mobile"}
    ],
}

console.log(`The user ${dev.id} is ${dev.age} years old and uses technology ${dev.technologies[0].id} with specialty in ${dev.technologies[0].specialty}`)