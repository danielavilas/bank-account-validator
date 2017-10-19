'use strict'

const accountNumberLength = 7

module.exports = helper => {
  return {
    agencyNumberIsValid: agencyNumber => {
      return helper.CommonBankAccountValidator.agencyNumberIsValid(agencyNumber)
    },

    agencyCheckNumberIsValid: agencyCheckNumber => {
      return agencyCheckNumber === undefined || agencyCheckNumber === ''
    },

    accountNumberIsValid: accountNumber => {
      return accountNumber.length == accountNumberLength &&
        helper.CommonBankAccountValidator.accountNumberIsValid(accountNumber)
    },

    accountCheckNumberIsValid: accountCheckNumber => {
      return helper.CommonBankAccountValidator.accountCheckNumberIsValid(accountCheckNumber)
    },

    agencyCheckNumberMatch: bankAccount => {
      return true
    },

    accountCheckNumberMatch: bankAccount => {
      return true
    },

    agencyNumberMsgError: () => {
      return helper.CommonBankAccountValidator.agencyNumberMsgError()
    },

    agencyCheckNumberMsgError: () => {
      return helper.CommonBankAccountValidator.agencyCheckNumberMsgError()
    },

    accountNumberMsgError: () => {
      return helper.CommonBankAccountValidator.accountNumberMsgError(accountNumberLength)
    },

    accountNumberLength: accountNumberLength
  }
}
