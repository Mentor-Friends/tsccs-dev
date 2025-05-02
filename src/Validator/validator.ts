import { UpdatePackageLogWithError } from "../Services/Common/ErrorPosting";
import { GetConceptByCharacterAndType, Logger, MakeTheTypeConceptApi } from "../app";
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
        const logData : any = Logger.logfunction("checkUniqueness")
        // Ensure 'the_' is at the start of the type
        if (!type.startsWith('the_')) {
            type = 'the_' + type; 
        }

        const sessionId: number = 999;
        const sessionUserId: number = 999;
        const userId: number = 999;

        // Create the type concept based on session data
        let type_concept: any = await MakeTheTypeConceptApi(type, userId);
        let type_concept_id: number = type_concept.id;

        // Check if the concept exists for the provided value and type_concept_id
        let concept = await GetConceptByCharacterAndType(value, type_concept_id);
        console.log("This is the concept for validator", concept);
        if(concept.id > 0){
            return false;
        }
        Logger.logUpdate(logData);
        return true;

    }

    /**
     * Validates a single form field based on its constraints and uniqueness.
     * @param options - An object containing field properties including name, value, type, and validation constraints.
     * @returns An object containing validation errors if validation fails.
     */
    public async validateField(options:FormFieldData): Promise< {[fieldName:string] : string } > {
        const logData : any = Logger.logfunction("validateField")
        try {
            let startTime = performance.now()
            const errors: { [fieldName: string]: string } = {};

            const {
                name,
                value,
                type,
                dataType,
                pattern,
                conceptType,
                maxLength,
                minLength,
                minValue,
                maxValue,
                accept,
                file,
                required,
                isUnique
            } = options;
        
            
            console.log("Validation is happening on : \n", options)
            // 1. Validate required field (must not be empty)
            if (required && (value === null || value === '')) {
                errors['required'] = `The field ${name} is required.`;
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
            if (value && maxLength !== undefined && maxLength !== null && value.length > maxLength) {
            // if (value && maxLength !== null && value.length > maxLength) {
                errors['maxLength'] = `Length exceeds the maximum length of ${maxLength}`;
            }
    
            // 5. Validate minLength
            if (value && minLength !== null && minLength !== undefined && value.length < minLength) {
                errors['minLength'] = `Length must be at least ${minLength} characters long`;
            }
    
            // 6. Validate minValue (only for numeric fields)
            if (minValue !== null && minValue !== undefined && value && !isNaN(Number(value)) && Number(value) < minValue) {
                errors['minValue'] = `Value must be greater than or equal to ${minValue}`;
            }
    
            // 7. Validate maxValue (only for numeric fields)
            if (maxValue !== null && maxValue !== undefined && value && !isNaN(Number(value)) && Number(value) > maxValue) {
                errors['maxValue'] = `Value must be less than or equal to ${maxValue}`;
            }
    
            // 8. File validation: Check if this is a file input
            if (file) {
                if (type && accept) {
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
            
            Logger.logUpdate(logData);
            console.log("Before Validation Result : ", errors)
            return errors
        } catch (error) {
            UpdatePackageLogWithError(logData, "Validator.validateField", error);
            throw error
        }
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
        const logData : any = Logger.logfunction("validateForm");
        try{
            let startTime = performance.now()
            const validationErrors: FormErrors = {};
    
            // Iterate through the fields in the form data
            for (const fieldName in formData) {
                // const { value, fieldType, dataType, pattern, conceptType, maxLength = null, minLength = null, minValue = null, maxValue = null, accept = null, file = null, required, isUnique } = formData[fieldName];
    
                // Call the validateField function to validate each field
                const fieldErrors = await this.validateField(formData[fieldName]);
                if (Object.keys(fieldErrors).length > 0) validationErrors[fieldName] = fieldErrors;
    
            }    
            Logger.logUpdate(logData);
            return validationErrors
        } catch(error){
            UpdatePackageLogWithError(logData, "Validator.validateForm", error);
            throw error
        }
    }

    /**
     * Take field element attributes
     * @param options  Object conist of attributes
     * @returns Object with status and details
     */
    public validate(options:FormFieldData){
        const logData : any = Logger.logfunction("validate");
        try{
            let error:any = {};
            this.validateField(options).then((err) => {
                if (Object.keys(err).length > 0) {
                    error['status'] = false
                    error['details'] = err;
                } else {
                    error['status'] = true
                }
            })
            console.error("Error on validate object");
            Logger.logUpdate(logData);
            return error;
    
        } catch(error) {
            UpdatePackageLogWithError(logData, "Validator.validate", error);
        }
    
    }
}
