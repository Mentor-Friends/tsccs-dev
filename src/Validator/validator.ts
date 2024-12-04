import { GetConceptByCharacterAndType, MakeTheTypeConcept } from "../app";
import { DATA_TYPES_RULES } from "./constant";
import { FormErrors, FormFieldData } from "./interface";

export class Validator {

    /**
     * Checks if a concept with the given type and value is unique.
     * @param type concept type where to check
     * @param value value to check
     * @returns boolean indicating uniqueness
     */
    public async checkUniqueness(type: string, value: string): Promise<boolean> {
        // Ensure 'the_' is at the start of the type
        if (!type.startsWith('the_')) {
            type = 'the_' + type; 
        }

        const sessionId: number = 999;
        const sessionUserId: number = 999;
        const userId: number = 999;

        // Create the type concept based on session data
        let type_concept: any = await MakeTheTypeConcept(type, sessionId, sessionUserId, userId);
        let type_concept_id: number = type_concept.id;

        // Check if the concept exists for the provided value and type_concept_id
        let concept = await GetConceptByCharacterAndType(value, type_concept_id);
        if (!concept || !concept.id) {
            return true;
        }
        return false;
    }

    /**
     * Validates a single form field based on its data type, constraints, and uniqueness.
     * @param fieldName - The name of the field being validated (e.g., "email", "phone").
     * @param dataType - The expected data type for the field (e.g., "text", "number").
     * @param value - The value of the field to validate.
     * @param conceptType - The concept type used for uniqueness check.
     * @param maxLength - The maximum allowed length for the field value.
     * @param minLength - The minimum allowed length for the field value.
     * @param minValue - The minimum allowed value for the field (for numeric fields).
     * @param maxValue - The maximum allowed value for the field (for numeric fields).
     * @param accept - The 'accept' attribute value for file inputs.
     * @param file - The file input (if any), used for file type validation.
     * @param required - Whether the field is required.
     * @param isUnique - Whether the field value should be unique.
<<<<<<< HEAD
     * @returns An array of error messages if validation fails, or an empty array if the field is valid.
     */
    public async validateField(
        fieldName: string,
        dataType: string | null,
        value: string | null,
=======
     * @returns An object of error messages if validation fails
     */
    public async validateField(
        fieldName: string,
        fieldType: string | null,
        dataType: string | null,
        value: string | null,
        pattern:string | null,
>>>>>>> 41960ca7e3c35616f1096ce5bba4beb7f0c191b2
        conceptType: string | null,
        maxLength: number | null,
        minLength: number | null,
        minValue: number | null,
        maxValue: number | null,
        accept: string | null,
        file: File | null,
        required: boolean,
<<<<<<< HEAD
        isUnique: boolean = false // Optional parameter for uniqueness check
    ): Promise<string[]> {
        const errors: string[] = [];

        // 1. Validate required field (must not be empty)
        if (required && (value === null || value === '')) {
            errors.push(`${fieldName} is required`);
=======
        isUnique: boolean = false
    ): Promise< {[fieldName:string] : string } > {
        const errors: { [fieldName: string]: string } = {};

        // 1. Validate required field (must not be empty)
        if (required && (value === null || value === '')) {
            errors['required'] = `this is required field`;
>>>>>>> 41960ca7e3c35616f1096ce5bba4beb7f0c191b2
        }

        // 2. Validate using regex pattern for the data type
        if (dataType && value) {
<<<<<<< HEAD
            const pattern = DATA_TYPES_RULES[dataType];
            if (pattern && value !== '' && !pattern.test(value)) {
                errors.push(`Invalid format for ${dataType} in ${fieldName}`);
            }
        }

        // 3. Validate maxLength
        if (value && maxLength !== null && value.length > maxLength) {
            errors.push(`${fieldName} exceeds the maximum length of ${maxLength}`);
        }

        // 4. Validate minLength
        if (value && minLength !== null && value.length < minLength) {
            errors.push(`${fieldName} must be at least ${minLength} characters long`);
        }

        // 5. Validate minValue (only for numeric fields)
        if (minValue !== null && value && !isNaN(Number(value)) && Number(value) < minValue) {
            errors.push(`${fieldName} must be greater than or equal to ${minValue}`);
        }

        // 6. Validate maxValue (only for numeric fields)
        if (maxValue !== null && value && !isNaN(Number(value)) && Number(value) > maxValue) {
            errors.push(`${fieldName} must be less than or equal to ${maxValue}`);
        }

        // 7. File validation: Check if this is a file input
        if (dataType === 'file' && file) {
            if (accept) {
                const acceptedTypes = accept.split(',').map(type => type.trim().toLowerCase());
                const fileExtension = file.name.split('.').pop()?.toLowerCase();
                if (fileExtension && !acceptedTypes.includes(fileExtension)) {
                    errors.push(`${fieldName} must be a valid file type: ${acceptedTypes.join(', ')}`);
=======
            console.log(`Comment on Data Type ${dataType} and Value ${value}`);
            
            let pattern = DATA_TYPES_RULES[dataType];
            console.log("Find Pattern : ", pattern);
            
            if (pattern && value !== '' && !pattern.test(value)) {
                errors['dataType'] = `Invalid format for ${dataType} in ${fieldName}`;
            }
        }

        // 3. Check if the provided pattern match with the value or not
        if (pattern && value) {
            const regex = typeof pattern  === 'string' ? new RegExp(pattern) : pattern
            if (value !== '' && !regex.test(value)) {
                errors['pattern'] = `Pattern doesn't match with data`;
            }
        }

        // 4. Validate maxLength
        if (value && maxLength !== null && value.length > maxLength) {
            errors['maxLength'] = `length exceeds the maximum length of ${maxLength}`;
        }

        // 5. Validate minLength
        if (value && minLength !== null && value.length < minLength) {
            errors['minLength'] = `length must be at least ${minLength} characters long`;
        }

        // 6. Validate minValue (only for numeric fields)
        if (minValue !== null && value && !isNaN(Number(value)) && Number(value) < minValue) {
            errors['minValue'] = `value must be greater than or equal to ${minValue}`;
        }

        // 7. Validate maxValue (only for numeric fields)
        if (maxValue !== null && value && !isNaN(Number(value)) && Number(value) > maxValue) {
            errors['maxValue'] = `value must be less than or equal to ${maxValue}`;
        }

        // 8. File validation: Check if this is a file input
        if (file) {
            if (fieldType && accept) {
                const acceptedTypes = accept.split(',').map(type => type.trim().toLowerCase());
                const fileExtension = file.name.split('.').pop()?.toLowerCase();
                if (fileExtension && !acceptedTypes.includes(fileExtension)) {
                    errors['accept'] = `file must be a valid file type: ${acceptedTypes.join(', ')}`;
>>>>>>> 41960ca7e3c35616f1096ce5bba4beb7f0c191b2
                }
            }
        }

<<<<<<< HEAD
        // 8. Check if the field needs to be unique and perform uniqueness validation
        if (conceptType && isUnique && value) {
            const isUniqueValue = await this.checkUniqueness(conceptType, value);
            if (!isUniqueValue) {
                errors.push(`${fieldName} is not unique`);
            }
        }

        return errors;
=======
        // 9. Check if the field needs to be unique and perform uniqueness validation
        if (conceptType && isUnique && value) {
            const isUniqueValue = await this.checkUniqueness(conceptType, value);
            if (!isUniqueValue) {
                errors['unique'] = `value is not unique`;
            }
        }        

        console.log(`Error of the field ${fieldName} : `, errors);

        return errors
>>>>>>> 41960ca7e3c35616f1096ce5bba4beb7f0c191b2
    }

    /**
     * Validates all form fields by iterating over the provided form data.
     * It checks each field's value, data type, and constraints, collecting errors where necessary.
     * 
     * @param formData - An object representing the form data, where each key is a field name 
     *                   and each value is an object containing the `value`, `dataType`, and constraints (e.g., `maxLength`, `minLength`).
     * 
     * @returns An object containing validation errors for fields that failed validation.
     *          If no errors exist, the object will be empty.
     */
    public async validateForm(formData: { 
        [key: string]: FormFieldData
    }): Promise<FormErrors> {
<<<<<<< HEAD
        const validationErrors: FormErrors = {}

        // Iterate through the fields in the form data
        for (const fieldName in formData) {
            const { value, dataType, conceptType, maxLength = null, minLength = null, minValue = null, maxValue = null, accept = null, file = null, required, isUnique } = formData[fieldName];

            // Call the validateField function to validate each field
            const fieldErrors = await this.validateField(
                fieldName, dataType, value, conceptType, maxLength, minLength, minValue, maxValue, accept, file, required, isUnique
            );

            // If there are errors, add them to the errors object
            if (fieldErrors.length > 0) {
                validationErrors[fieldName] = fieldErrors;
            }
=======
        const validationErrors: FormErrors = {};
        

        // Iterate through the fields in the form data
        for (const fieldName in formData) {
            const { value, fieldType, dataType, pattern, conceptType, maxLength = null, minLength = null, minValue = null, maxValue = null, accept = null, file = null, required, isUnique } = formData[fieldName];

            // Call the validateField function to validate each field
            const fieldErrors = await this.validateField(
                fieldName, fieldType, dataType, value, pattern, conceptType, maxLength, minLength, minValue, maxValue, accept, file, required, isUnique
            );

            if (Object.keys(fieldErrors).length > 0) validationErrors[fieldName] = fieldErrors;

>>>>>>> 41960ca7e3c35616f1096ce5bba4beb7f0c191b2
        }

        return validationErrors;
    }
}
