'use strict'

const BancoDoBrasilValidator = require(`${__dirname}/banco_do_brasil_validator.js`)
const BradescoValidator = require(`${__dirname}/bradesco_validator.js`)
const ItauValidator = require(`${__dirname}/itau_validator.js`)
const SantanderValidator = require(`${__dirname}/santander_validator.js`)
const BanrisulValidator = require(`${__dirname}/banrisul_validator.js`)
const CitibankValidator = require(`${__dirname}/citibank_validator`)
const HSBCValidator = require(`${__dirname}/hsbc_validator.js`)
const helper = {
  CommonBankAccountValidator: require(`${__dirname}/common_bank_account_validator.js`),
  GenericBankAccountValidator: require(`${__dirname}/generic_bank_account_validator.js`),
  BancoDoBrasilCheckNumberCalculator: require(`${__dirname}/banco_do_brasil_check_number_calculator.js`),
  BanrisulCheckNumberCalculator: require(`${__dirname}/banrisul_check_number_calculator.js`),
  BradescoCheckNumberCalculator: require(`${__dirname}/bradesco_check_number_calculator.js`),
  ItauCheckNumberCalculator: require(`${__dirname}/itau_check_number_calculator.js`)
}
const validators = bankNumber => {
  const validators = {
    '001': BancoDoBrasilValidator(helper),
    '237': BradescoValidator(helper),
    '341': ItauValidator(helper),
    '033': SantanderValidator(helper),
    '041': BanrisulValidator(helper),
    '745': CitibankValidator(helper),
    '399': HSBCValidator(helper)
  }

  if (validators[bankNumber]) {
    return validators[bankNumber]
  }

  return helper.GenericBankAccountValidator
}

module.exports = {
  validate: params => {

    const errors = []
    const validator = validators(params.bankNumber)

    if (validator.accountNumberLength) {
      if (params.accountNumber.length < validator.accountNumberLength) {
        params.accountNumber = '0'.repeat(validator.accountNumberLength - params.accountNumber.length) + params.accountNumber
      }
    }

    if (!helper.GenericBankAccountValidator.bankNumberIsValid(params.bankNumber)) {
      errors.push({
        description: 'Banco inválido',
        code: 'INVALID_BANK_NUMBER'
      })
    }

    if (!validator.agencyNumberIsValid(params.agencyNumber)) {
      errors.push({
        description: validator.agencyNumberMsgError(),
        code: 'INVALID_AGENCY_NUMBER'
      })
    }

    if (!validator.agencyCheckNumberIsValid(params.agencyCheckNumber)) {
      errors.push({
        description: validator.agencyCheckNumberMsgError(),
        code: 'INVALID_AGENCY_CHECK_NUMBER'
      })
    }

    if (!validator.accountNumberIsValid(params.accountNumber)) {
      errors.push({
        description: validator.accountNumberMsgError(),
        code: 'INVALID_ACCOUNT_NUMBER'
      })
    }

    if (!validator.accountCheckNumberIsValid(params.accountCheckNumber)) {
      errors.push({
        description: 'Dígito da conta corrente inválido',
        code: 'INVALID_ACCOUNT_CHECK_NUMBER'
      })
    }

    if (validator.agencyNumberIsValid(params.agencyNumber) &&
        validator.agencyCheckNumberIsValid(params.agencyCheckNumber)) {
      if (!validator.agencyCheckNumberMatch(params)) {
        errors.push({
          description: 'Dígito da agência não corresponde ao número da agência preenchido',
          code: 'AGENCY_CHECK_NUMBER_DONT_MATCH'
        })
      }
    }

    if (validator.accountNumberIsValid(params.accountNumber) &&
        validator.accountCheckNumberIsValid(params.accountCheckNumber)) {
      if (!validator.accountCheckNumberMatch(params)) {
        errors.push({
          description: 'Dígito da conta não corresponde ao número da conta/agência preenchido',
          code: 'ACCOUNT_CHECK_NUMBER_DONT_MATCH'
        })
      }
    }

    if (errors.length === 0) {
      params.valid()
    } else {
      params.invalid({ errors: errors })
    }
  }
}
