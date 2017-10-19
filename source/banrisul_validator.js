'use strict'

const agencyCheckNumberLength = 2
const accountNumberLength = 9

module.exports = helper => {
  return {
    agencyNumberIsValid: agencyNumber => {
      return helper.CommonBankAccountValidator.agencyNumberIsValid(agencyNumber)
    },

    agencyCheckNumberIsValid: agencyCheckNumber => {
      return agencyCheckNumber.length == agencyCheckNumberLength &&
        helper.GenericBankAccountValidator.agencyCheckNumberIsValid(agencyCheckNumber)
    },

    accountNumberIsValid: accountNumber => {
      return accountNumber.length == accountNumberLength &&
        helper.CommonBankAccountValidator.accountNumberIsValid(accountNumber)
    },

    accountCheckNumberIsValid: accountCheckNumber => {
      return helper.CommonBankAccountValidator.accountCheckNumberIsValid(accountCheckNumber)
    },

    agencyCheckNumberMatch: bankAccount => {
      const checkNumberCalculated = helper.BanrisulCheckNumberCalculator.calculateAgency(bankAccount.agencyNumber)

      return checkNumberCalculated === bankAccount.agencyCheckNumber
    },

    accountCheckNumberMatch: bankAccount => {
      const checkNumberCalculated = helper.BanrisulCheckNumberCalculator.calculateAccount(bankAccount.accountNumber)

      return checkNumberCalculated === bankAccount.accountCheckNumber
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
