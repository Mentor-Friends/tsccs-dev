export interface FormErrors {
<<<<<<< HEAD
    [key: string]: string[] | undefined; 
=======
    [key: string]: {} | undefined; 
>>>>>>> 41960ca7e3c35616f1096ce5bba4beb7f0c191b2
}

export interface FormFieldData {
    value: string|null; // value of the field (e.g., email address, password, etc.)
<<<<<<< HEAD
    dataType: string | null; //  Data type of the field (e.g., "text", "number", "email", etc.)
=======
    fieldType: string|null, // type of input field (e.g. text, email, number, file)
    dataType: string | null; //  Data type of the field (e.g., "text", "number", "email", etc.)
    pattern: string | null; // Define the pattern of the data
>>>>>>> 41960ca7e3c35616f1096ce5bba4beb7f0c191b2
    conceptType: string | null; //  Represents the type concept from 'concept-type' attribute (e.g., 'the_name', 'the_phone', etc.)
    maxLength?: number | null; //  Maximum length of the input value
    minLength?: number | null; //  Minimum length of the input value
    minValue?: number | null; //  Minimum value for numeric fields
    maxValue?: number | null; //  Maximum value for numeric fields
    accept?: string | null; //  'accept' attribute for file inputs
    file?: File | null; //  File input (if the field is a file input)
    required: boolean; // Whether the field is required or not
    isUnique: boolean; // Whether the field is unique or not
}