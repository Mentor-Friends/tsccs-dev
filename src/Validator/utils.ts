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
            name: null,
            value: null,
            type: null,
            dataType: null,
            pattern : null,
            conceptType: null,
            maxLength: null,
            minLength: null,
            minValue: null,
            maxValue: null,
            accept: null,
            file: null,
            required: false,
            isUnique: true
        };
    }
    
    // Check for the `required` and `isUnique` attribute
    const required = inputElement.hasAttribute('required') || inputElement.getAttribute('data-required') === 'true';
    const isUnique = inputElement.hasAttribute('isUnique') && inputElement.getAttribute('isUnique') === 'true';


    // Proceed to gather data if the element exists
    const data: FormFieldData = {
        name: inputElement.name,
        value: inputElement.value,
        type: inputElement.type,
        dataType: inputElement.getAttribute('data-type'),
        pattern: inputElement.getAttribute('data-pattern'),
        conceptType: inputElement.getAttribute('concept-type'),
        maxLength: inputElement.getAttribute('maxlength') ? parseInt(inputElement.getAttribute('maxlength')!) : null,
        minLength: inputElement.getAttribute('minlength') ? parseInt(inputElement.getAttribute('minlength')!) : null,
        minValue: inputElement.getAttribute('min') ? parseInt(inputElement.getAttribute('min')!) : null,
        maxValue: inputElement.getAttribute('max') ? parseInt(inputElement.getAttribute('max')!) : null,
        accept: inputElement.getAttribute('accept') || null,
        file: inputElement.type === 'file' ? inputElement.files?.[0] || null : null,
        required: required,
        isUnique:isUnique
    };

    return data;
};

