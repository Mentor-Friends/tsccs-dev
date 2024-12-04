import { FormFieldData } from "./interface";

/**
 * Utility function to get input field data and attributes
 * @param fieldName - The Name of the form field.
 * @returns - An object containing the field's value and constraints (type, maxLength, etc.).
 */
export const createFormFieldData = (fieldName: string): FormFieldData => {
     const inputElements = document.getElementsByName(fieldName) as NodeListOf<HTMLInputElement>;
     const inputElement = inputElements[0];

    // Check if the element exists
    if (!inputElement) {
        console.warn(`Element with NAME "${fieldName}" not found.`);
        return {
            value: null,
<<<<<<< HEAD
            dataType: null,
=======
            fieldType: null,
            dataType: null,
            pattern : null,
>>>>>>> 41960ca7e3c35616f1096ce5bba4beb7f0c191b2
            conceptType: null,
            maxLength: null,
            minLength: null,
            minValue: null,
            maxValue: null,
            accept: null,
<<<<<<< HEAD
=======
            file: null,
>>>>>>> 41960ca7e3c35616f1096ce5bba4beb7f0c191b2
            required: false,
            isUnique: true
        };
    }
    
    // Check for the `required` and `isUnique` attribute
    const required = inputElement.hasAttribute('required') || inputElement.getAttribute('data-required') === 'true';
    const isUnique = inputElement.hasAttribute('isUnique') && inputElement.getAttribute('isUnique') === 'true';

    // Proceed to gather data if the element exists
    const data: FormFieldData = {
        value: inputElement.value,
<<<<<<< HEAD
        dataType: inputElement.getAttribute('data-type'),
=======
        fieldType: inputElement.type,
        dataType: inputElement.getAttribute('data-type'),
        pattern: inputElement.getAttribute('data-pattern'),
>>>>>>> 41960ca7e3c35616f1096ce5bba4beb7f0c191b2
        conceptType: inputElement.getAttribute('concept-type'),
        maxLength: inputElement.getAttribute('data-maxlength') ? parseInt(inputElement.getAttribute('data-maxlength')!) : null,
        minLength: inputElement.getAttribute('data-minlength') ? parseInt(inputElement.getAttribute('data-minlength')!) : null,
        minValue: inputElement.getAttribute('data-min') ? parseInt(inputElement.getAttribute('data-min')!) : null,
        maxValue: inputElement.getAttribute('data-max') ? parseInt(inputElement.getAttribute('data-max')!) : null,
        accept: inputElement.getAttribute('accept') || null,
<<<<<<< HEAD
=======
        file: inputElement.type === 'file' ? inputElement.files?.[0] || null : null,
>>>>>>> 41960ca7e3c35616f1096ce5bba4beb7f0c191b2
        required: required,
        isUnique:isUnique
    };
    return data;
};

