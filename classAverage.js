const classA = [
    {
        id: "Fulano1",
        grade: 2.4
    },
    {
        id: "Fulano2",
        grade: 5.9
    },
    {
        id: "Fulano3",
        grade: 10
    },
    {
        id: "Fulano4",
        grade: 10
    }
]

const classB = [
    {
        id: "Fulano5",
        grade: 4.4
    },
    {
        id: "Fulano6",
        grade: 9.9
    },
    {
        id: "Fulano7",
        grade: 2.8
    }
]

function classAverage(team) {
    let num = 0

    for (let i = 0; i < team.length; i++) {
        num = num + team[i].grade
    }

    let average = num / team.length
    
    return average
}

function classResult(average, team) {
    if (average >= 5) {
        console.log(`The team average was ${average}. The ${team} was approved!`)
    } else {
        console.log(`The team average was ${average}. The ${team} was disapproved`)
    }
}

function markAsFailed(student) {
    student.disapproved = false

    if (student.grade < 5) {
        student.disapproved = true
    }
}

function MessageWasDisapproved(student) {
    if (student.disapproved) {
        console.log(`The student ${student.id} was disapproved`)
    }
}

function checkStudentsInClass(team) {
    for (const student of team) {
        markAsFailed(student)
        MessageWasDisapproved(student)
    }
}

const media1 = classAverage(classA)
const media2 = classAverage(classB)

classResult(media1, "Class A")
classResult(media2, "Class B")

checkStudentsInClass(classA)
checkStudentsInClass(classB)