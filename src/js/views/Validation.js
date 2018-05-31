export default class Validation {


    static validateText(textFields) {
        let isValid = true;

        if(!Array.isArray(textFields)) {
            isValid = validateTextField.bind(this,textFields)();
            return isValid;
        };

        for (let i = 0; i < textFields.length; i++) {
            isValid = validateTextField.bind(this,textFields[i])();
        };

        return isValid;
    };

    static validateSanitization(textFields) {
        let isValid = true;
        let regEx = new RegExp("[^A-Za-z0-9]");

        for (let i = 0; i < textFields.length; i++) {
            let value;

            if (!(value = textFields[i].obj.value) || textFields[i].obj.type === 'password') {
                continue;
            };

            if(textFields[i].obj.type === 'email') {
                continue;
            };

            let match = regEx.exec(value);

            if(!match) {
                continue;
            };

            let isValid = false;
            textFields[i].error.innerHTML = `${match} is an invalid character.`
            textFields[i].error.parentElement.classList.add('is-invalid');

        };
        return isValid;
    }

};

const validateTextField = (textField) => {
    let isValid = true;

    if (!textField.obj.value) {
        isValid = false;
        textField.error.innerHTML = 'Field can not be empty';
        textField.error.parentElement.classList.add('is-invalid');
    };

    return isValid;
};

