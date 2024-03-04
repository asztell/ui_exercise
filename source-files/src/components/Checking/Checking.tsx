import { setLabelClassName, setSpanClassName } from '../../utils/className'

type CheckingProps = {
  errors: {
    routing: boolean
    bankAccount: boolean
    confirmBankAccount: boolean
    confirmBankAccountMismatch: boolean
  }
  values: {
    routing: string
    bankAccount: string
    confirmBankAccount: string
  }
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  onBlur: (event: React.FocusEvent<HTMLInputElement>) => void
}

export function Checking({ values, errors, onChange, onBlur }: CheckingProps) {
  const { routing, bankAccount, confirmBankAccount } = values
  const {
    routing: routingError,
    bankAccount: bankAccountError,
    confirmBankAccount: confirmBankAccountError,
    confirmBankAccountMismatch
  } = errors

  return (
    <>
      <div className="field">
        <label htmlFor="routing" className={setLabelClassName(routingError)}>
          Routing Number
        </label>
        <input
          type="number"
          id="routing"
          value={routing}
          onChange={onChange}
          onBlur={onBlur}
        />
        <span className={setSpanClassName(routingError)}>
          Valid Routing Number is required
        </span>
      </div>
      <div className="field">
        <label
          htmlFor="bankAccount"
          className={setLabelClassName(bankAccountError)}
        >
          Bank Account Number
        </label>
        <input
          type="number"
          id="bankAccount"
          value={bankAccount}
          onChange={onChange}
          onBlur={onBlur}
        />
        <span className={setSpanClassName(bankAccountError)}>
          Valid Bank Account Number is required
        </span>
      </div>
      <div className="field">
        <label
          htmlFor="confirmBankAccount"
          className={setLabelClassName(confirmBankAccountError)}
        >
          Confirm Bank Account Number
        </label>
        <input
          type="number"
          id="confirmBankAccount"
          value={confirmBankAccount}
          onChange={onChange}
          onBlur={onBlur}
        />
        <span className={setSpanClassName(confirmBankAccountError)}>
          Valid Confirm Bank Account Number is required
        </span>
        <span className={setSpanClassName(confirmBankAccountMismatch)}>
          Confirm Bank Account Number must match Bank Account Number
        </span>
      </div>
    </>
  )
}
