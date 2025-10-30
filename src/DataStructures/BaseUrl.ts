/**
 * @fileoverview BaseUrl module for managing API endpoints and service URLs in CCS-JS.
 * This module provides centralized configuration for all backend API endpoints,
 * MQTT connections, and external services.
 * @module DataStructures/BaseUrl
 */

import { CompositionBinaryTree } from './Composition/CompositionBinaryTree';

/**
 * Centralized configuration for all backend API endpoints and service URLs.
 * Provides methods to generate fully qualified URLs for various API operations.
 *
 * @class BaseUrl
 * @example
 * ```typescript
 * // Get concept API URL
 * const url = BaseUrl.GetConceptUrl();
 * fetch(url, { ... });
 *
 * // Change base URL for different environment
 * BaseUrl.BASE_URL = "https://api.production.com/";
 * ```
 *
 * @remarks
 * All URL methods return fully qualified URLs by combining BASE_URL with the endpoint path.
 * Static properties can be modified to point to different environments or services.
 */
export class BaseUrl{
    /** Base URL for the main CCS backend API server */
    static BASE_URL: string  = "https://localhost:7053/";

    /** URL for AI service endpoints */
    static AI_URL: string ="https://ai.freeschema.com";

    /** MQTT broker URL for real-time messaging */
    static MQTT_URL: string = '192.168.1.249';

    /** Node.js service URL for additional backend operations */
    static NODE_URL: string = 'http://localhost:5001/';

    /** Active MQTT connection instance */
    static MQTT_CONNECTION:any ;



   // static GetConceptUrl:string = this.BASE_URL + '/api/getConcept';

    /**
     * Returns the URL for retrieving a single concept by ID.
     * @returns {string} The concept retrieval API endpoint
     */
    static GetConceptUrl(){
        return this.BASE_URL + '/api/getConcept';
    }

    /**
     * Returns the URL for retrieving a single connection by ID.
     * @returns {string} The connection retrieval API endpoint
     */
    static GetConnectionUrl(){
        return this.BASE_URL + '/api/get-connection-by-id';
    }

    /**
     * Returns the URL for retrieving multiple concepts in bulk.
     * @returns {string} The bulk concept retrieval API endpoint
     */
    static GetConceptBulkUrl(){
        return this.BASE_URL + '/api/get_concept_bulk';
    }

    /**
     * Returns the URL for retrieving multiple connections in bulk.
     * @returns {string} The bulk connection retrieval API endpoint
     */
    static GetConnectionBulkUrl(){
        return this.BASE_URL + '/api/get_connection_bulk';
    }

    /**
     * Returns the URL for retrieving all concepts belonging to a user.
     * @returns {string} The user concepts retrieval API endpoint
     */
    static  GetAllConceptsOfUserUrl(){
        return this.BASE_URL +  '/api/get_all_concepts_of_user';
    }

    /**
     * Returns the URL for retrieving all connections belonging to a user.
     * @returns {string} The user connections retrieval API endpoint
     */
    static GetAllConnectionsOfUserUrl(){
        return this.BASE_URL + '/api/get_all_connections_of_user';
    }

    /**
     * Returns the URL for retrieving all connections of a composition.
     * @returns {string} The composition connections retrieval API endpoint
     */
    static  GetAllConnectionsOfCompositionUrl(){
        return this.BASE_URL + '/api/get_all_connections_of_composition';
    }

    /**
     * Returns the URL for retrieving composition connections in bulk.
     * @returns {string} The bulk composition connections retrieval API endpoint
     */
    static GetAllConnectionsOfCompositionBulkUrl(){
        return this.BASE_URL + '/api/get_all_connections_of_composition_bulk';
    }
    
    /**
     * Returns the URL for retrieving a concept by its character value.
     * @returns {string} The character value search API endpoint
     */
    static GetConceptByCharacterValueUrl(){
        return this.BASE_URL + '/api/get_concept_by_character_value';
    }

    /**
     * Returns the URL for retrieving a concept by both character value and type.
     * @returns {string} The character and type search API endpoint
     */
    static GetConceptByCharacterAndTypeUrl(){
        return this.BASE_URL + '/api/get_concept_by_character_and_type';
    }

    /**
     * Returns the URL for retrieving a concept by character value and category.
     * @returns {string} The character and category search API endpoint
     */
    static GetConceptByCharacterAndCategoryUrl(){
        return this.BASE_URL + '/api/get_concept_by_character_and_category';
    }

    /**
     * Returns the URL for direct retrieval by character and category.
     * @returns {string} The direct character and category search API endpoint
     */
    static GetConceptByCharacterAndCategoryDirectUrl(){
        return this.BASE_URL + '/api/get_concept_by_character_and_category_direct';
    }

    /**
     * Returns the URL for retrieving character information by character value.
     * @returns {string} The character search API endpoint
     */
    static GetCharacterByCharacterUrl(){
        return this.BASE_URL + '/api/get_character_by_character';
    }

    /**
     * Returns the URL for retrieving all concepts of a specific type.
     * @returns {string} The type-based concept search API endpoint
     */
    static GetAllConceptsByTypeUrl(){
        return this.BASE_URL + '/api/get_all_concepts_by_type';
    }

    /**
     * Returns the URL for retrieving all outgoing connections from a concept.
     * @returns {string} The concept outgoing connections API endpoint
     */
    static GetAllConnectionsOfConceptUrl(){
        return this.BASE_URL + '/api/get-link-connections';
    }

    /**
     * Returns the URL for retrieving all incoming connections to a concept.
     * @returns {string} The concept incoming connections API endpoint
     */
    static GetAllConnectionsToConceptUrl(){
        return this.BASE_URL + '/api/get-link-reverse-connections';
    }

    /**
     * Returns the URL for retrieving AI-preloaded concept data.
     * @returns {string} The AI preloaded concepts API endpoint
     */
    static GetAllAiData(){
        return this.BASE_URL + '/api/get-preloaded-concepts';
       // return this.AI_URL + '/api/get_ranked_type_id?inpage=300' || process.env.AI_URL ||  'https://ai.freeschema.com/api/get_ranked_type_id?inpage=300';
    }

    /**
     * Returns the URL for prefetching user connections with pagination.
     * @returns {string} The prefetch connections API endpoint with inpage parameter
     */
    static GetAllPrefetchConnectionsUrl(){
        return this.BASE_URL + '/api/get_all_connections_of_user?inpage=500';
    }

    /**
     * Returns the URL for retrieving all linker connections from a concept.
     * @returns {string} The concept linkers API endpoint
     */
    static GetAllLinkerConnectionOfConceptUrl(){
        return this.BASE_URL + '/api/get-all-linkers-from-concept';
    }

    /**
     * Returns the URL for retrieving all linker connections to a concept.
     * @returns {string} The reverse concept linkers API endpoint
     */
    static GetAllLinkerConnectionToConceptUrl(){
        return this.BASE_URL + '/api/get-all-linkers-to-concept';
    }

    /**
     * Returns the URL for deleting a concept.
     * @returns {string} The concept deletion API endpoint
     */
    static DeleteConceptUrl(){
        return this.BASE_URL + '/api/delete_concept';
    }

    /**
     * Returns the URL for recursive search of concepts and connections.
     * @returns {string} The recursive search API endpoint
     */
    static RecursiveSearchUrl(){
        return this.BASE_URL + '/api/recursivesearch-concept-connection';
    }

    /**
     * Returns the URL for searching multiple links in CCS format.
     * @returns {string} The multiple link search API endpoint
     */
    static SearchLinkMultipleAllApiUrl(){
        return this.BASE_URL + '/api/Connection/search-link-multiple-all-ccs';
    }

    /**
     * Returns the URL for creating names in the backend.
     * @returns {string} The name creation API endpoint
     */
    static MakeTheNameInBackendUrl(){
        return this.BASE_URL + '/api/make-name-from-frontend';
    }

    /**
     * Returns the URL for user login authentication.
     * @returns {string} The login API endpoint
     */
    static LoginUrl(){
        return this.BASE_URL + '/api/auth/login';
    }

    /**
     * Returns the URL for user signup/registration.
     * @returns {string} The signup API endpoint
     */
    static SignupUrl(){
        return this.BASE_URL + '/api/auth/signup';
    }

    /**
     * Returns the URL for getting composition connections between two concepts.
     * @returns {string} The composition connection API endpoint
     */
    static GetCompositionConnectionBetweenTwoConceptsUrl(){
        return this.BASE_URL + '/api/get-composition-connection-between-two-concepts';
    }

    /**
     * Returns the URL for searching compositions.
     * @returns {string} The composition search API endpoint
     */
    static  SearchCompositionsUrl(){
        return this.BASE_URL + '/api/search-compositions';
    }

    /**
     * Returns the URL for searching multiple links.
     * @returns {string} The multiple link search API endpoint
     */
    static SearchLinkMultipleAll(){
        return this.BASE_URL + '/api/Connection/search-link-multiple-all';
    }

    /**
     * Returns the URL for creating remote session IDs.
     * @returns {string} The session ID creation API endpoint
     */
    static CreateSessionId(){
        return this.BASE_URL + '/api/create-session-id-remote'
    }

    /**
     * Returns the URL for recording remote session visits.
     * @returns {string} The session visit recording API endpoint
     */
    static CreateSessionVisitUrl(){
        return this.BASE_URL + '/api/create-remote-session-visit'
    }


    // ========================================================================
    // INTERNAL DATA API ENDPOINTS
    // ========================================================================

    /**
     * Returns the URL for viewing internal CCS data in bulk.
     * @returns {string} The internal data viewing API endpoint
     */
    static ViewInternalDataUrl(){
        return this.BASE_URL + '/api/view-api-internal-data-ccs-id-bulk'
    }

    /**
     * Returns the URL for searching internal authenticated CCS compositions.
     * @returns {string} The authenticated internal search API endpoint
     */
    static SearchInternalWithAuthenticatedCcsUrl(){
        return this.BASE_URL + '/api/search-composition-internal-authenticated-ccs';
    }

    // ========================================================================
    // RESERVED IDS API ENDPOINTS
    // ========================================================================

    /**
     * Returns the URL for retrieving reserved concept IDs.
     * @returns {string} The reserved IDs API endpoint
     */
    static GetReservedIdUrl(){
        return this.BASE_URL + '/api/get_reserved_ids';
    }

    /**
     * Returns the URL for retrieving reserved connection IDs.
     * @returns {string} The reserved connection IDs API endpoint
     */
    static GetReservedConnectionIdUrl(){
        return this.BASE_URL + '/api/get_reserved_connection_ids';
    }

    // ========================================================================
    // DATA CREATION API ENDPOINTS
    // ========================================================================

    /**
     * Returns the URL for creating text data.
     * @returns {string} The text data creation API endpoint
     */
    static CreateTheTextDataUrl(){
        return this.BASE_URL + '/api/create_text_data';
    }

    /**
     * Returns the URL for creating character data.
     * @returns {string} The character data creation API endpoint
     */
    static CreateTheCharacterDataUrl(){
        return this.BASE_URL + '/api/create_character_data';
    }

    /**
     * Returns the URL for creating concepts.
     * @returns {string} The concept creation API endpoint
     */
    static CreateTheConceptUrl(){
        return this.BASE_URL + '/api/create_the_concept';

    }

    /**
     * Returns the URL for creating connections.
     * @returns {string} The connection creation API endpoint
     */
    static CreateTheConnectionUrl(){
        return this.BASE_URL + '/api/create_the_connection';
    }

    /**
     * Returns the URL for creating connections using the new endpoint.
     * @returns {string} The new connection creation API endpoint
     */
    static CreateTheConnectionNewUrl(){
        return this.BASE_URL + '/api/create_the_connection_new';
    }

    /**
     * Returns the URL for creating type concepts.
     * @returns {string} The type concept creation API endpoint
     */
    static MakeTheTypeConceptUrl(){
        return this.BASE_URL + '/api/make_the_type_concept';
    }

    // ========================================================================
    // DATA DELETION API ENDPOINTS
    // ========================================================================

    /**
     * Returns the URL for deleting a single connection.
     * @returns {string} The connection deletion API endpoint
     */
    static DeleteTheConnectionUrl(){
        return this.BASE_URL + '/api/delete_connection';
    }

    /**
     * Returns the URL for deleting multiple connections in bulk.
     * @returns {string} The bulk connection deletion API endpoint
     */
    static DeleteTheConnectionBulkUrl(){
        return this.BASE_URL + '/api/delete_connection_bulk';
    }

    // ========================================================================
    // FREESCHEMA QUERY API ENDPOINTS
    // ========================================================================

    /**
     * Returns the URL for executing FreeSchema queries.
     * @returns {string} The FreeSchema query API endpoint
     */
    static FreeschemaQueryUrl(){
        return this.BASE_URL + '/api/freeschema-query';
    }

    // ========================================================================
    // TYPE BULK API ENDPOINTS
    // ========================================================================

    /**
     * Returns the URL for retrieving type concepts by character in bulk.
     * @returns {string} The bulk type concept retrieval API endpoint
     */
    static GetConceptConnectionByType(){
        return this.BASE_URL + '/api/get_type_concept_by_character_bulk';
    }




}