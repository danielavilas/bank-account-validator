'use strict'

const multiplyAccordingParity = (number, index) => {
  return number * (index % 2 === 0 ? 2 : 1)
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
const _module = sumSeq => {
  const module = sumSeq % 10
  if (module === 0) {
    return '0'
  }

  return (10 - module).toString()
}

module.exports = {
  calculate: (agencyNumber, accountNumber) => {
    const numbers = (agencyNumber + accountNumber).split('')
    let sumSeq = 0
    let sequence = 0
    for (let i = 0; i < numbers.length; i++) {
      const number = parseInt(numbers[i])
      sequence = multiplyAccordingParity(number, i)
      sequence = adjustAccordingLength(sequence)
      sumSeq += sequence
    }

    return _module(sumSeq)
  }
}
