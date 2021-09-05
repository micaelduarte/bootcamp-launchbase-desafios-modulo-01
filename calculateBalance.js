const users = [
    {
      id: "Salvio",
      revenues: [115.3, 48.7, 98.3, 14.5],
      expenditure: [85.3, 13.5, 19.9]
    },
    {
      id: "Marcio",
      revenues: [24.6, 214.3, 45.3],
      expenditure: [185.3, 12.1, 120.0]
    },
    {
      id: "Lucia",
      revenues: [9.8, 120.3, 340.2, 45.3],
      expenditure: [450.2, 29.9]
    }
  ]

  function calculateBalance(revenues, expenditure) {
      let totalRevenue = sumNumber(revenues)
      let totalExpenditure = sumNumber(expenditure)

      return totalRevenue - totalExpenditure
  }

  function sumNumber(numbers) {
    let sum = 0

    for(let i = 0; i < numbers.length; i++) {
        sum = sum + numbers[i]
    }
    
    return sum
  }

  for(let i = 0; i < users.length; i++) {
      let saldo = calculateBalance(users[i].revenues, users[i].expenditure)

      if(saldo >= 0) {
          console.log(`${users[i].id} has a POSITIVE balance of ${saldo}`)
      } else {
          console.log(`${users[i].id} has a NEGATIVE balance of ${saldo}`)
      }
  }