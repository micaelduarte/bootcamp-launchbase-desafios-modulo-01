// Creating a list of users with their names and technologies they use

const users = [
    { id: "Carlos", technologies: ["HTML", "CSS"] },
    { id: "Jasmine", technologies: ["Javascript", "CSS"] },
    { id: "Tuane", technologies: ["HTML", "Node.js"] }
]

for(let i = 0; i < users.length; i++) {
    
    let message = `${users[i].id} work with ${users[i].technologies[0]}` 

    if(users[i].technologies.length > 1){
        for (let u = 1; u < users[i].technologies.length; u++){
            message = message + `, ${users[i].technologies[u]}`
        }
    }
    console.log(message)

}
