function validatePIN (pin) {
  return /^[0-9]{4}(?:[0-9]{2})?$/.test(pin);
}