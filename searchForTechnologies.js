//Search for users who use CSS

const users = [
    { id: "Carlos", technologies: ["HTML", "CSS"] },
    { id: "Jasmine", technologies: ["Javascript", "CSS"] },
    { id: "Tuane", technologies: ["HTML", "Node.js"] }
]

function checaSeUsuarioUsaCSS(user) {

    for(let i = 0; i < user.technologies.length; i++) {
        if (user.technologies[i] === "CSS") {        
            return true
        }
    }

    return false
}

for(let i = 0; i < users.length; i++) {
    const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(users[i])

    if(usuarioTrabalhaComCSS) {
        console.log(`The user ${users[i].id} work with CSS`)
    }
}