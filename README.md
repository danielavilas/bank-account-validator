# Bank account validator in NodeJS

[Moip bank-acocunt-validator-js](https://github.com/moip/bank-account-validator-js/) in NodeJS.

#

``` javascript
'use strict'

const BankAccount = require('bank_account.js')
const bankNumber = '001'
const agencyNumber = '0000'
const agencyCheckNumber = '0'
const accountNumber = '00000'
const accountCheckNumber = '0'

BankAccount.validate({
  bankNumber: bankNumber,
  agencyNumber: agencyNumber,
  agencyCheckNumber: agencyCheckNumber,
  accountNumber: accountNumber,
  accountCheckNumber: accountCheckNumber,
  valid: () => {
    console.log('Valid!')
  },
  invalid: data => {
    console.log('Invalid: ', data)
  }
})
```
