/**
 * Validates textFields for a valid value.
 * @param {Object} textFields - An input object or an array of input objects.
 * @returns {boolean} - Return either true if inputs contain values or false if no value is present.
 */
export const validateText = textFields => {
  let isValid = true;
  let validTextFields = true;

  if (!Array.isArray(textFields)) {
    isValid = validateTextField.bind(this, textFields)();
    return isValid;
  }

  for (let i = 0; i < textFields.length; i++) {
    isValid = validateTextField.bind(this, textFields[i])();

    if (!isValid) {
      validTextFields = false;
    }
  }

  return validTextFields;
};

/**
 * Validates textFields for a valid value.
 * @param {Object} textFields - An input object.
 * @returns {boolean} - Return either true if inputs contain values or false if no value is present.
 */
export const validateSanitization = textFields => {
  let isValid = true;
  let regEx = new RegExp('[^A-Za-z0-9]');

  for (let i = 0; i < textFields.length; i++) {
    let value;

    if (!(value = textFields[i].input.value) || textFields[i].input.type === 'password') {
      continue;
    }

    if (textFields[i].input.type === 'email') {
      continue;
    }

    let match = regEx.exec(value);

    if (!match) {
      continue;
    }

    isValid = false;
    textFields[i].error.innerHTML = `${match} is an invalid character.`;
    textFields[i].error.parentElement.classList.add('is-invalid');
  }
  return isValid;
};

const validateTextField = textField => {
  let isValid = true;

  if (!textField.input.value) {
    isValid = false;
    textField.error.innerHTML = 'Field can not be empty';
    textField.error.parentElement.classList.add('is-invalid');
  }

  return isValid;
};
