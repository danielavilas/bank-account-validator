'use strict'

const agencyCheckNumberLength = 1
const accountNumberLength = 7

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
      const checkNumberCalculated = helper.BradescoCheckNumberCalculator.calculateAgency(bankAccount.agencyNumber)
      let checkNumberInformed = bankAccount.agencyCheckNumber.toUpperCase()
      if (checkNumberInformed === '0') {
        checkNumberInformed = 'P'
      }

      return checkNumberCalculated === checkNumberInformed
    },

    accountCheckNumberMatch: bankAccount => {
      const checkNumberCalculated = helper.BradescoCheckNumberCalculator.calculateAccount(bankAccount.accountNumber)
      if (checkNumberCalculated == 'P') {
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
