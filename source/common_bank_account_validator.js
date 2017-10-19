'use strict'

const agencyNumberLength = 4

module.exports = {
  agencyNumberIsValid: agencyNumber => {
    return (/^(?!0000)([0-9]{4})$/).test(agencyNumber)
  },

  agencyCheckNumberIsValid: agencyCheckNumber => {
    return (/^[a-zA-Z0-9]{0,1}$/).test(agencyCheckNumber)
  },

  accountNumberIsValid: accountNumber => {
    return (/^[0-9]{1,12}$/).test(accountNumber) && parseInt(accountNumber) > 0
  },

  accountCheckNumberIsValid: accountCheckNumber => {
    return (/^[a-zA-Z0-9]{1}$/).test(accountCheckNumber)
  },

  agencyNumberMsgError: length => {
    if (length === undefined) {
      length = agencyNumberLength
    }

    return `A agência deve conter ${length} números. Complete com zeros a esquerda se necessário.`
  },

  agencyCheckNumberMsgError: length => {
    if (length === undefined || length === 0) {
      return 'O dígito da agência deve ser vazio'
    } else if (length === 1) {
      return 'O dígito da agência deve conter 1 dígito'
    }

    return `O dígito da agência deve conter ${length} números. Complete com zeros a esquerda se necessário.`

  },

  accountNumberMsgError: length => {
    return `A conta corrente deve conter ${length} números. Complete com zeros a esquerda se necessário.`
  }
}
