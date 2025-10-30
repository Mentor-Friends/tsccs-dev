/**
 * Text data creation API module for the Concept Connection System.
 * This module provides functionality to create and persist text data entries in the
 * CCS database. Text data represents the textual content associated with concepts,
 * enabling rich descriptions, annotations, and semantic information storage.
 *
 * @module Api/Create/CreateTheTextData
 * @see https://documentation.freeschema.com for text data structure and usage
 */

import { CreateTheTextDataUrl } from "../../Constants/ApiConstants";
import { TheTexts } from "../../DataStructures/TheTexts";
import { BaseUrl } from "../../DataStructures/BaseUrl";
import { GetRequestHeader } from "../../Services/Security/GetRequestHeader";
import { HandleHttpError } from "../../Services/Common/ErrorPosting";

/**
 * Creates a new text data entry in the Concept Connection System database.
 * This function sends a POST request to persist text content that can be associated
 * with concepts, providing descriptive or explanatory information. Text data is a
 * fundamental component for enriching concepts with human-readable content.
 *
 * @param textData - The TheTexts object containing the text content and metadata
 *                   to be persisted in the database
 * @returns A promise that resolves to a TheTexts object containing the created
 *          text data with its assigned ID and all associated properties
 *
 * @example
 * ```typescript
 * const newText = new TheTexts(
 *   userId,
 *   characterId,
 *   conceptId,
 *   "Sample text content",
 *   languageId,
 *   typeId
 * );
 * const createdText = await CreateTextData(newText);
 * console.log(`Text data created with ID: ${createdText.id}`);
 * ```
 *
 * @remarks
 * This function is essential for adding textual descriptions to concepts in the
 * knowledge graph. Text data can include:
 * - Concept descriptions and definitions
 * - Annotations and notes
 * - Multi-language translations
 * - Rich content and documentation
 *
 * The function uses GetRequestHeader() to include authentication credentials
 * and necessary headers for the API request. The created text data is returned
 * with its server-assigned ID, enabling immediate reference and updates.
 *
 * All HTTP errors are processed through HandleHttpError and logged with
 * descriptive error messages. Errors are propagated to the caller after logging.
 *
 * @throws Will throw an error if the HTTP request fails or returns a non-OK status,
 *         after logging the error details to the console
 * @see TheTexts for the text data structure
 * @see GetRequestHeader for authentication details
 * @see HandleHttpError for error handling
 * @see https://documentation.freeschema.com for text data model and language support
 */
export async function CreateTextData(textData: TheTexts){
    try{
            var header = GetRequestHeader();
            const response = await fetch(BaseUrl.CreateTheTextDataUrl(),{
                method: 'POST',
                headers:header,
                body: JSON.stringify(textData),
            });
            if(!response.ok){
              HandleHttpError(response);
                throw new Error(`Error! status: ${response.status}`);
            }
             const resultString = await response.json();
            const result = resultString as TheTexts;

            return result;
    }
    catch (error) {
        if (error instanceof Error) {
          console.log('Create the text error message: ', error.message);
        } else {
          console.log('Create the text unexpected error: ', error);
        }
       throw error;
      }
}