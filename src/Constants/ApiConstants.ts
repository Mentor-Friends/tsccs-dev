
export const BASE_URL:string = process.env.BASE_URL || 'https://localhost:7053';

export const GetConceptUrl:string = BASE_URL + '/api/getConcept';

export const GetAllConceptsOfUserUrl:string = BASE_URL + '/api/get_all_concepts_of_user';

export const GetAllConnectionsOfUserUrl:string = BASE_URL + '/api/get_all_connections_of_user';

export const GetAllConnectionsOfCompositionUrl:string = BASE_URL + '/api/get_all_connections_of_composition';

export const GetConceptByCharacterValueUrl: string = BASE_URL + '/api/get_concept_by_character_value';

export const GetConceptByCharacterAndTypeUrl: string = BASE_URL + '/api/get_concept_by_character_and_type';

export const GetCharacterByCharacterUrl: string = BASE_URL + '/api/get_character_by_character';

export const GetAllConceptsByTypeUrl: string = BASE_URL + '/api/get_all_concepts_by_type';

export const GetAllConnectionsOfConceptUrl: string = BASE_URL + '/api/get-link-connections';

export const GetAllAiData:string = 'https://devai.freeschema.com/api/get_ranked_type_id';




//////////////////////////////////////////////////////////////////////////////
//////////////// API For Reserved Ids ///////////////////////////////////////

export const GetReservedIdUrl: string = BASE_URL + '/api/get_reserved_ids';


/////////////////////////////////////////////////////////////////////////////
////////////////API For Creating Data //////////////////////////////////////

export const CreateTheTextDataUrl: string = BASE_URL + '/api/create_text_data';

export const CreateTheCharacterDataUrl: string = BASE_URL + '/api/create_character_data';

export const CreateTheConceptUrl: string = BASE_URL + '/api/create_the_concept';

export const CreateTheConnectionUrl: string = BASE_URL + '/api/create_the_connection';