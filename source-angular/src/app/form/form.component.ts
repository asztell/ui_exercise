import { Component } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common'
import dayjs from 'dayjs'

type FormValuesType = {
  loanAccount: string
  checking: null | string
  debitCard: null | string
  routing: string
  bankAccount: string
  confirmBankAccount: string
  card: string
  nameOnCard: string
  expirationDate: string
  cvv: string
}

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  title = 'form'
  formValues: FormValuesType = {
    loanAccount: '',
    checking: 'true',
    debitCard: null,
    routing: '',
    bankAccount: '',
    confirmBankAccount: '',
    card: '',
    nameOnCard: '',
    expirationDate: '',
    cvv: ''
  }

  public get isFormValid(): boolean {
    if (this.formValues.checking === 'true') {
      return (
        this.formValues.loanAccount.length === 10 &&
        this.formValues.routing.length === 9 &&
        this.formValues.bankAccount.length === 10 &&
        this.formValues.confirmBankAccount.length === 10
      )
    }
    return (
      this.formValues.loanAccount.length === 10 &&
      this.formValues.card.length === 16 &&
      this.formValues.nameOnCard.length > 1 &&
      dayjs(this.formValues.expirationDate, 'MM/YY').isValid() &&
      this.formValues.cvv.length === 3
    )
  }

  public setAccountType(accountType: string) {
    if (accountType === 'checking') {
      this.formValues.checking = 'true'
      this.formValues.debitCard = null
    } else {
      this.formValues.checking = null
      this.formValues.debitCard = 'true'
    }
  }

  onSubmit() {
    console.log('Form submitted:', this.formValues)
    if (this.isFormValid) {
      console.log('Form submitted successfully!')
    } else {
      console.log('Form is invalid!')
    }
  }
}
