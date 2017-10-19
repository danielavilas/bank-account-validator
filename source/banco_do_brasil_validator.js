'use strict'

const agencyCheckNumberLength = 1
const accountNumberLength = 8

module.exports = helper => {
  return {
    agencyNumberIsValid: agencyNumber => {
      return helper.CommonBankAccountValidator.agencyNumberIsValid(agencyNumber)
    },

    agencyCheckNumberIsValid: agencyCheckNumber => {
      return agencyCheckNumber.length == agencyCheckNumberLength &&
        helper.CommonBankAccountValidator.agencyCheckNumberIsValid(agencyCheckNumber)
    },

    accountNumberIsValid: accountNumber => {
      return accountNumber.length == accountNumberLength &&
        helper.CommonBankAccountValidator.accountNumberIsValid(accountNumber)
    },

    accountCheckNumberIsValid: accountCheckNumber => {
      return helper.CommonBankAccountValidator.accountCheckNumberIsValid(accountCheckNumber)
    },

    agencyCheckNumberMatch: bankAccount => {
      const checkNumberCalculated = helper.BancoDoBrasilCheckNumberCalculator.calculateAgency(
        bankAccount.agencyNumber
      )

      return checkNumberCalculated === bankAccount.agencyCheckNumber.toUpperCase()
    },

    accountCheckNumberMatch: bankAccount => {
      const checkNumberCalculated = helper.BancoDoBrasilCheckNumberCalculator.calculateAccount(
        bankAccount.accountNumber
      )
      if (checkNumberCalculated == 'X') {
        if (bankAccount.accountCheckNumber.toUpperCase() == '0') return true
      }

      return checkNumberCalculated === bankAccount.accountCheckNumber.toUpperCase()
    },

    agencyNumberMsgError: () => {
      return helper.CommonBankAccountValidator.agencyNumberMsgError()
    },

    agencyCheckNumberMsgError: () => {
      return helper.CommonBankAccountValidator.agencyCheckNumberMsgError(agencyCheckNumberLength)
    },

    accountNumberMsgError: () => {
      return helper.CommonBankAccountValidator.accountNumberMsgError(accountNumberLength)
    },

    accountNumberLength: accountNumberLength
  }
}
