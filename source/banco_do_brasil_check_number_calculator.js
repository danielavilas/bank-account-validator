'use strict'

const mod = sumSeq => {
  const result = 11 - (sumSeq % 11)
  if (result === 10) {
    return 'X'
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
      const seq = 9 - i
      sumSeq += parseInt(numbers[i]) * seq
    }

    return mod(sumSeq)
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

    return mod(sumSeq)
  }
}
