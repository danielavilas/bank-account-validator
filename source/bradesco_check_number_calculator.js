'use strict'

const multiplyAccordingWeight = (number, i) => {
  const weight = [2, 7, 6, 5, 4, 3, 2]

  return number * weight[i]
}
const accountModule = sumSeq => {
  const module = sumSeq % 11
  if (module === 0) {
    return '0'
  } else if (module === 1) {
    return 'P'
  }

  return (11 - module).toString()

}
const agencyModule = sumSeq => {
  const result = 11 - (sumSeq % 11)
  if (result === 10) {
    return 'P'
  } else if (result === 11) {
    return '0'
  }

  return result.toString()
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

    return accountModule(sumSeq)
  },

  // Agency validation
  calculateAgency: agencyNumber => {
    const numbers = agencyNumber.split('')
    let sumSeq = 0
    const sequence = 0
    for (let i = 0; i < numbers.length; i++) {
      const seq = 5 - i
      sumSeq += parseInt(numbers[i]) * seq
    }

    return agencyModule(sumSeq)
  }
}
