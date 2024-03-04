export function setLabelClassName(error: boolean) {
  return error ? 'has-error' : ''
}

export function setSpanClassName(error: boolean) {
  return error ? 'error-message' : 'hide'
}
