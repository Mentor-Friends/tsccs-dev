import { GetConceptByCharacterAndType, Logger, MakeTheTypeConcept } from "../app";
import { getCookie, LogData } from "../Middleware/logger.service";
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
     * @returns An object of error messages if validation fails
     */
    public async validateField(
        fieldName: string,
        fieldType: string | null,
        dataType: string | null,
        value: string | null,
        pattern:string | null,
        conceptType: string | null,
        maxLength: number | null,
        minLength: number | null,
        minValue: number | null,
        maxValue: number | null,
        accept: string | null,
        file: File | null,
        required: boolean,
        isUnique: boolean = false
    ): Promise< {[fieldName:string] : string } > {
        let startTime = performance.now()
        const errors: { [fieldName: string]: string } = {};

        // 1. Validate required field (must not be empty)
        if (required && (value === null || value === '')) {
            errors['required'] = `This is required field`;
        }

        // 2. Validate using regex pattern for the data type
        if (dataType && value) {
            let pattern = DATA_TYPES_RULES[dataType];
            if (pattern && value !== '' && !pattern.test(value)) {
                errors['dataType'] = `Invalid value for ${dataType}`;
            }
        }

        // 3. Check if the provided pattern match with the value or not
        if (pattern && value) {
            const regex = typeof pattern  === 'string' ? new RegExp(pattern) : pattern
            if (value !== '' && !regex.test(value)) {
                errors['pattern'] = `Pattern doesn't match with value`;
            }
        }

        // 4. Validate maxLength
        if (value && maxLength !== null && value.length > maxLength) {
            errors['maxLength'] = `Length exceeds the maximum length of ${maxLength}`;
        }

        // 5. Validate minLength
        if (value && minLength !== null && value.length < minLength) {
            errors['minLength'] = `Length must be at least ${minLength} characters long`;
        }

        // 6. Validate minValue (only for numeric fields)
        if (minValue !== null && value && !isNaN(Number(value)) && Number(value) < minValue) {
            errors['minValue'] = `Value must be greater than or equal to ${minValue}`;
        }

        // 7. Validate maxValue (only for numeric fields)
        if (maxValue !== null && value && !isNaN(Number(value)) && Number(value) > maxValue) {
            errors['maxValue'] = `Value must be less than or equal to ${maxValue}`;
        }

        // 8. File validation: Check if this is a file input
        if (file) {
            if (fieldType && accept) {
                const acceptedTypes = accept.split(',').map(type => type.trim().toLowerCase());
                const fileExtension = file.name.split('.').pop()?.toLowerCase();
                if (fileExtension && !acceptedTypes.includes(fileExtension)) {
                    errors['accept'] = `File must be a valid file type: ${acceptedTypes.join(', ')}`;
                }
            }
        }

        // 9. Check if the field needs to be unique and perform uniqueness validation
        if (conceptType && isUnique && value) {
            const isUniqueValue = await this.checkUniqueness(conceptType, value);
            if (!isUniqueValue) {
                errors['unique'] = `Value is not unique`;
            }
        }

        /**
         * Integrate Logger
         * 
         */
        console.log("validateField...");
                
        let sessionId:string = getCookie('SessionId');
        let dataLog:LogData= {
            userId: "",
            responseStatus: 200,
            responseTime: `${(performance.now() - startTime).toFixed(3)}ms`,
            responseSize: `${JSON.stringify(errors).length}` || "",
            sessionId: sessionId,
            functionName: "validateField",
            functionParameters : ['fieldName', 'fieldType', 'dataType', 'value', 'pattern', 'conceptType', 'minLength', 'maxLength', 'minValue', 'maxValue', 'accept', 'file', 'required', 'isUnique']
        }
        console.log("Print logData : ", dataLog);
        
        Logger.log(
            "INFO",
            "From function validateField",
            dataLog
        )
        /**
         * End of Logger Integration
         */

        return errors
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
        let startTime = performance.now()
        const validationErrors: FormErrors = {};

        // Iterate through the fields in the form data
        for (const fieldName in formData) {
            const { value, fieldType, dataType, pattern, conceptType, maxLength = null, minLength = null, minValue = null, maxValue = null, accept = null, file = null, required, isUnique } = formData[fieldName];

            // Call the validateField function to validate each field
            const fieldErrors = await this.validateField(
                fieldName, fieldType, dataType, value, pattern, conceptType, maxLength, minLength, minValue, maxValue, accept, file, required, isUnique
            );

            if (Object.keys(fieldErrors).length > 0) validationErrors[fieldName] = fieldErrors;

        }

        /**
         * Integrate Logger
         * 
         */
        console.log("validateForm...");
                
        let sessionId:string = getCookie('SessionId');
        let dataLog:LogData= {
            userId: "",
            responseStatus: 200,
            responseTime: `${(performance.now() - startTime).toFixed(3)}ms`,
            responseSize: `${JSON.stringify(validationErrors).length}` || "",
            sessionId: sessionId,
            functionName: "validateForm",
            functionParameters : ['formData']
        }
        console.log("Print logData : ", dataLog);
        
        Logger.log(
            "INFO",
            "From function validateForm",
            dataLog
        )
        /**
         * End of Logger Integration
         */


        return validationErrors;
    }
}
