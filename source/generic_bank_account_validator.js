'use strict'

module.exports = {
  bankNumberIsValid: bankNumber => {
    return (/^([0-9-A-Za-x]{3,5})$/).test(bankNumber)
  },

  agencyNumberIsValid: agencyNumber => {
    return (/^[0-9]{1,5}$/).test(agencyNumber) && parseInt(agencyNumber) > 0
  },

  agencyCheckNumberIsValid: agencyCheckNumber => {
    return (/^[a-zA-Z0-9]{0,2}$/).test(agencyCheckNumber)
  },

  accountNumberIsValid: accountNumber => {
    return (/^[0-9]{1,12}$/).test(accountNumber) && parseInt(accountNumber) > 0
  },

  accountCheckNumberIsValid: accountCheckNumber => {
    return (/^[a-zA-Z0-9]{0,2}$/).test(accountCheckNumber)
  },

  agencyCheckNumberMatch: bankAccount => {
    return true
  },

  accountCheckNumberMatch: bankAccount => {
    return true
  },

  agencyNumberMsgError: length => {
    return 'Agência inválida'
  },

  agencyCheckNumberMsgError: () => {
    return 'Dígito da agência inválido'
  },

  accountNumberMsgError: length => {
    return 'Conta corrente inválida'
  }
}
