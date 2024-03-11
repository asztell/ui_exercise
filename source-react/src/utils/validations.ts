import dayjs from 'dayjs'

const threeDigits = /^\d{3}$/
const nineDigits = /^\d{9}$/
const tenDigits = /^\d{10}$/
const name =
  /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/
const visa = /^4[0-9]{12}(?:[0-9]{3})?$/
const masterCard =
  /^5[1-5][0-9]{14}|^(222[1-9]|22[3-9]\\d|2[3-6]\\d{2}|27[0-1]\\d|2720)[0-9]{12}$/
const amex = /^3[47][0-9]{13}$/
const discover = /^6(?:011|5[0-9]{2})[0-9]{12}$/
const diners = /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/

export type ValidationKey =
  | 'card'
  | 'loanAccount'
  | 'routing'
  | 'bankAccount'
  | 'confirmBankAccount'
  | 'nameOnCard'
  | 'expirationDate'
  | 'cvv'

export type Validation = {
  [key in ValidationKey]: (value: string) => boolean
}

export const validate: Validation = {
  card: (card: string) => {
    if (
      visa.test(card) ||
      masterCard.test(card) ||
      amex.test(card) ||
      discover.test(card) ||
      diners.test(card)
    ) {
      return true
    }
    return false
  },
  loanAccount: (loanAccount: string) => tenDigits.test(loanAccount),
  routing: (routing: string) => nineDigits.test(routing),
  bankAccount: (bankAccount: string) => tenDigits.test(bankAccount),
  confirmBankAccount: (confirmBankAccount: string) =>
    tenDigits.test(confirmBankAccount),
  nameOnCard: (nameOnCard: string) =>
    nameOnCard !== '' || name.test(nameOnCard),
  expirationDate: (expirationDate: string) => dayjs(expirationDate).isValid(),
  cvv: (cvv: string) => threeDigits.test(cvv)
}
