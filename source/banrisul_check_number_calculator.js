'use strict'

const multiplyAccordingWeight = (number, i) => {
  const weight = [3, 2, 4, 7, 6, 5, 4, 3, 2]

  return number * weight[i]
}
const moduleAccount = sumSeq => {
  const module = sumSeq % 11
  if (module === 0) {
    return '0'
  } else if (module === 1) {
    return '6'
  }

  return (11 - module).toString()
}
const firstAgencyDigit = agencyNumbers => {
  let sumSeq = 0
  let sequence = 0
  for (let i = 0; i < agencyNumbers.length; i++) {
    const number = parseInt(agencyNumbers[i])
    sequence = multiplyAccordingParity(number, i)
    sequence = adjustAccordingLength(sequence)
    sumSeq += sequence
  }

  return moduleAgencyFirstDigit(sumSeq)
}
const secondAgencyDigit = (agencyNumbers, firstDigit) => {
  agencyNumbers.push(firstDigit)
  let sumSeq = 0
  const sequence = 0
  for (let i = 0; i < agencyNumbers.length; i++) {
    const seq = 6 - i
    sumSeq += parseInt(agencyNumbers[i]) * seq
  }
  const module = moduleAgencySecondDigit(sumSeq)
  if (module === '1') {
    if (firstDigit != 9) {
      firstDigit += 1
    } else {
      firstDigit = 0
    }
    secondAgencyDigit(agencyNumbers, firstDigit)
  }

  return module
}
const multiplyAccordingParity = (number, index) => {
  return number * (index % 2 === 0 ? 1 : 2)
}
const adjustAccordingLength = sequence => {
  if (sequence > 9) {
    const numbers = sequence.toString().split('')
    sequence = 0
    for (let i = 0; i < numbers.length; i++) {
      sequence += parseInt(numbers[i])
    }
  }

  return sequence
}
const moduleAgencyFirstDigit = sumSeq => {
  const module = sumSeq % 10
  if (module === 0) {
    return '0'
  }

  return (10 - module).toString()
}
const moduleAgencySecondDigit = sumSeq => {
  const module = sumSeq % 11
  if (module === 0) {
    return '0'
  } else if (module === 1) {
    return '1'
  }

  return (11 - module).toString()
}

module.exports = {
  // Account validation
  calculateAccount: accountNumber => {
    const numbers = accountNumber.split('')
    let sumSeq = 0
    const sequence = 0
    for (let i = 0; i < numbers.length; i++) {
      const number = parseInt(numbers[i])
      sumSeq += multiplyAccordingWeight(number, i)
    }

    return moduleAccount(sumSeq)
  },

  // Agency validation
  calculateAgency: agencyNumber => {
    const numbers = agencyNumber.split('')
    const firstDigit = firstAgencyDigit(numbers)
    const secondDigit = secondAgencyDigit(numbers, firstDigit)

    return firstDigit + secondDigit
  }
}
