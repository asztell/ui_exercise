import { setLabelClassName, setSpanClassName } from '../../utils/className'

type DebitCardProps = {
  errors: {
    card: boolean
    nameOnCard: boolean
    expirationDate: boolean
    cvv: boolean
  }
  values: {
    card: string
    nameOnCard: string
    expirationDate: string
    cvv: string
  }
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  onBlur: (event: React.FocusEvent<HTMLInputElement>) => void
}

export function DebitCard({
  values,
  errors,
  onChange,
  onBlur
}: DebitCardProps) {
  const { card, nameOnCard, expirationDate, cvv } = values
  const {
    card: cardError,
    nameOnCard: nameOnCardError,
    expirationDate: expirationDateError,
    cvv: cvvError
  } = errors

  return (
    <>
      <div className="field">
        <label htmlFor="card" className={setLabelClassName(cardError)}>
          Card Number
        </label>
        <input
          type="number"
          id="card"
          value={card}
          onChange={onChange}
          onBlur={onBlur}
        />
        <span className={setSpanClassName(cardError)}>
          Valid Card Number is required
        </span>
      </div>
      <div className="field">
        <label
          className={setLabelClassName(nameOnCardError)}
          htmlFor="nameOnCard"
        >
          Name on Card
        </label>
        <input
          type="text"
          id="nameOnCard"
          value={nameOnCard}
          onChange={onChange}
          onBlur={onBlur}
        />
        <span className={setSpanClassName(nameOnCardError)}>
          Valid Name is required
        </span>
      </div>
      <div className="half-field">
        <div className="field">
          <label
            className={setLabelClassName(expirationDateError)}
            htmlFor="expirationDate"
          >
            Expiration Date
          </label>
          <input
            type="date"
            id="expirationDate"
            value={expirationDate}
            onChange={onChange}
            onBlur={onBlur}
          />
          <span className={setSpanClassName(expirationDateError)}>
            Valid Expiration Date is required
          </span>
        </div>
        <div className="field">
          <label className={setLabelClassName(cvvError)} htmlFor="cvv">
            CVV
          </label>
          <input
            type="number"
            id="cvv"
            value={cvv}
            onChange={onChange}
            onBlur={onBlur}
          />
          <span className={setSpanClassName(cvvError)}>
            Valid CVV is required
          </span>
        </div>
      </div>
    </>
  )
}
