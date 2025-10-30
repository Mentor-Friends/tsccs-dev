/**
 * API Constants Module for Concept Connection System (CCS-JS)
 *
 * This module defines all API endpoint URLs and configuration for interacting with the FreeSchema backend.
 * It provides centralized URL management and allows dynamic base URL configuration for different environments.
 *
 * @module Constants/ApiConstants
 * @see https://documentation.freeschema.com for API reference
 */

import { BaseUrl } from "../DataStructures/BaseUrl";

/**
 * Default configuration object for the API base URL.
 * Points to the development environment of FreeSchema.
 *
 * @example
 * ```typescript
 * console.log(config.BASE_URL); // "https://devboom.freeschema.com"
 * ```
 */
export const  config = {
    BASE_URL: "https://devboom.freeschema.com"
}

/**
 * The current base URL for all API requests.
 * This value is dynamically retrieved and can be changed using `changeBaseUrl()`.
 *
 * @see {@link getBaseUrl}
 * @see {@link changeBaseUrl}
 */
export const  BASE_URL:string = getBaseUrl()

/**
 * API endpoint URL for retrieving a single concept by ID.
 *
 * @example
 * ```typescript
 * const response = await fetch(`${GetConceptUrl}?id=123`);
 * ```
 *
 * @see https://documentation.freeschema.com for API documentation
 */
export const GetConceptUrl:string = getBaseUrl() + '/api/getConcept';

/**
 * API endpoint URL for retrieving multiple concepts in bulk.
 *
 * @example
 * ```typescript
 * const response = await fetch(GetConceptBulkUrl, {
 *   method: 'POST',
 *   body: JSON.stringify({ ids: [1, 2, 3] })
 * });
 * ```
 */
export const GetConceptBulkUrl:string = getBaseUrl() + '/api/get_concept_bulk';

/**
 * API endpoint URL for retrieving all concepts belonging to a specific user.
 *
 * @example
 * ```typescript
 * const response = await fetch(`${GetAllConceptsOfUserUrl}?userId=456`);
 * ```
 */
export const GetAllConceptsOfUserUrl:string = getBaseUrl() + '/api/get_all_concepts_of_user';

/**
 * API endpoint URL for retrieving all connections belonging to a specific user.
 *
 * @example
 * ```typescript
 * const response = await fetch(`${GetAllConnectionsOfUserUrl}?userId=456`);
 * ```
 */
export const GetAllConnectionsOfUserUrl:string = getBaseUrl() + '/api/get_all_connections_of_user';

/**
 * API endpoint URL for retrieving all connections within a composition.
 * A composition is a grouping of related concepts and their connections.
 *
 * @example
 * ```typescript
 * const response = await fetch(`${GetAllConnectionsOfCompositionUrl}?compositionId=789`);
 * ```
 */
export const GetAllConnectionsOfCompositionUrl:string = getBaseUrl() + '/api/get_all_connections_of_composition';

/**
 * API endpoint URL for retrieving connections of multiple compositions in bulk.
 *
 * @example
 * ```typescript
 * const response = await fetch(GetAllConnectionsOfCompositionBulkUrl, {
 *   method: 'POST',
 *   body: JSON.stringify({ compositionIds: [1, 2, 3] })
 * });
 * ```
 */
export const GetAllConnectionsOfCompositionBulkUrl:string = getBaseUrl() + '/api/get_all_connections_of_composition_bulk';

/**
 * API endpoint URL for retrieving a concept by its character value.
 * Character value is the string representation/label of a concept.
 *
 * @example
 * ```typescript
 * const response = await fetch(`${GetConceptByCharacterValueUrl}?value=hello`);
 * ```
 */
export const GetConceptByCharacterValueUrl: string = getBaseUrl() + '/api/get_concept_by_character_value';

/**
 * API endpoint URL for retrieving a concept by both its character value and type.
 * This provides more specific filtering when multiple concepts share the same character value.
 *
 * @example
 * ```typescript
 * const response = await fetch(`${GetConceptByCharacterAndTypeUrl}?value=hello&typeId=5`);
 * ```
 */
export const GetConceptByCharacterAndTypeUrl: string = getBaseUrl() + '/api/get_concept_by_character_and_type';

/**
 * API endpoint URL for retrieving character data by character string.
 *
 * @example
 * ```typescript
 * const response = await fetch(`${GetCharacterByCharacterUrl}?character=A`);
 * ```
 */
export const GetCharacterByCharacterUrl: string = getBaseUrl() + '/api/get_character_by_character';

/**
 * API endpoint URL for retrieving all concepts of a specific type.
 *
 * @example
 * ```typescript
 * const response = await fetch(`${GetAllConceptsByTypeUrl}?typeId=10`);
 * ```
 */
export const GetAllConceptsByTypeUrl: string = getBaseUrl() + '/api/get_all_concepts_by_type';

/**
 * API endpoint URL for retrieving all connections associated with a specific concept.
 * This includes both incoming and outgoing connections.
 *
 * @example
 * ```typescript
 * const response = await fetch(`${GetAllConnectionsOfConceptUrl}?conceptId=123`);
 * ```
 */
export const GetAllConnectionsOfConceptUrl: string = getBaseUrl() + '/api/get-link-connections';

/**
 * API endpoint URL for retrieving AI-ranked data.
 * Can be overridden via the AI_URL environment variable.
 *
 * @remarks
 * The default query parameter `inpage=500` limits the number of results returned.
 *
 * @example
 * ```typescript
 * const response = await fetch(GetAllAiData);
 * ```
 */
export const GetAllAiData:string = process.env.AI_URL ||  'https://ai.freeschema.com/api/get_ranked_type_id?inpage=500';




//////////////////////////////////////////////////////////////////////////////
//////////////// API For Reserved Ids ///////////////////////////////////////

/**
 * API endpoint URL for retrieving reserved IDs from the system.
 * Reserved IDs are pre-allocated concept IDs used for system-level concepts.
 *
 * @example
 * ```typescript
 * const response = await fetch(GetReservedIdUrl);
 * ```
 *
 * @see https://documentation.freeschema.com for information about reserved IDs
 */
export const GetReservedIdUrl: string = getBaseUrl() + '/api/get_reserved_ids';


/////////////////////////////////////////////////////////////////////////////
////////////////API For Creating Data //////////////////////////////////////

/**
 * API endpoint URL for creating text data in the system.
 *
 * @example
 * ```typescript
 * const response = await fetch(CreateTheTextDataUrl, {
 *   method: 'POST',
 *   body: JSON.stringify({ text: 'Hello World' })
 * });
 * ```
 */
export const CreateTheTextDataUrl: string = getBaseUrl() + '/api/create_text_data';

/**
 * API endpoint URL for creating character data in the system.
 *
 * @example
 * ```typescript
 * const response = await fetch(CreateTheCharacterDataUrl, {
 *   method: 'POST',
 *   body: JSON.stringify({ character: 'A' })
 * });
 * ```
 */
export const CreateTheCharacterDataUrl: string = getBaseUrl() + '/api/create_character_data';

/**
 * API endpoint URL for creating a new concept in the system.
 *
 * @example
 * ```typescript
 * const response = await fetch(CreateTheConceptUrl, {
 *   method: 'POST',
 *   body: JSON.stringify({
 *     characterValue: 'example',
 *     typeId: 5,
 *     userId: 123
 *   })
 * });
 * ```
 */
export const CreateTheConceptUrl: string = getBaseUrl() + '/api/create_the_concept';

/**
 * API endpoint URL for creating a new connection between concepts.
 *
 * @example
 * ```typescript
 * const response = await fetch(CreateTheConnectionUrl, {
 *   method: 'POST',
 *   body: JSON.stringify({
 *     ofTheConceptId: 1,
 *     toTheConceptId: 2,
 *     typeId: 3
 *   })
 * });
 * ```
 */
export const CreateTheConnectionUrl: string = getBaseUrl() + '/api/create_the_connection';

/**
 * Changes the base URL for all API endpoints.
 * This is useful for switching between development, staging, and production environments.
 *
 * @param url - The new base URL to use for API requests
 *
 * @example
 * ```typescript
 * changeBaseUrl('https://production.freeschema.com');
 * ```
 *
 * @remarks
 * This function modifies the global BaseUrl object, affecting all subsequent API calls.
 * Make sure to call this before making any API requests if you need a custom URL.
 */
export function changeBaseUrl(url:string){
    BaseUrl.BASE_URL = url;
}

/**
 * Retrieves the current base URL being used for API requests.
 *
 * @returns The current base URL string
 *
 * @example
 * ```typescript
 * const currentUrl = getBaseUrl();
 * console.log(currentUrl); // "https://devboom.freeschema.com"
 * ```
 */
export function getBaseUrl(){
    return BaseUrl.BASE_URL;
}


