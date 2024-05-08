import { BaseUrl } from "../DataStructures/BaseUrl";


export const  config = {
    BASE_URL: "https://devboom.freeschema.com"
}


export const  BASE_URL:string = getBaseUrl()

export const GetConceptUrl:string = getBaseUrl() + '/api/getConcept';

export const GetConceptBulkUrl:string = getBaseUrl() + '/api/get_concept_bulk';

export const GetAllConceptsOfUserUrl:string = getBaseUrl() + '/api/get_all_concepts_of_user';

export const GetAllConnectionsOfUserUrl:string = getBaseUrl() + '/api/get_all_connections_of_user';

export const GetAllConnectionsOfCompositionUrl:string = getBaseUrl() + '/api/get_all_connections_of_composition';

export const GetAllConnectionsOfCompositionBulkUrl:string = getBaseUrl() + '/api/get_all_connections_of_composition_bulk';

export const GetConceptByCharacterValueUrl: string = getBaseUrl() + '/api/get_concept_by_character_value';

export const GetConceptByCharacterAndTypeUrl: string = getBaseUrl() + '/api/get_concept_by_character_and_type';

export const GetCharacterByCharacterUrl: string = getBaseUrl() + '/api/get_character_by_character';

export const GetAllConceptsByTypeUrl: string = getBaseUrl() + '/api/get_all_concepts_by_type';

export const GetAllConnectionsOfConceptUrl: string = getBaseUrl() + '/api/get-link-connections';

export const GetAllAiData:string = process.env.AI_URL ||  'https://ai.freeschema.com/api/get_ranked_type_id?inpage=500';




//////////////////////////////////////////////////////////////////////////////
//////////////// API For Reserved Ids ///////////////////////////////////////

export const GetReservedIdUrl: string = getBaseUrl() + '/api/get_reserved_ids';


/////////////////////////////////////////////////////////////////////////////
////////////////API For Creating Data //////////////////////////////////////

export const CreateTheTextDataUrl: string = getBaseUrl() + '/api/create_text_data';

export const CreateTheCharacterDataUrl: string = getBaseUrl() + '/api/create_character_data';

export const CreateTheConceptUrl: string = getBaseUrl() + '/api/create_the_concept';

export const CreateTheConnectionUrl: string = getBaseUrl() + '/api/create_the_connection';

export function changeBaseUrl(url:string){
    BaseUrl.BASE_URL = url;
}

export function getBaseUrl(){
    return BaseUrl.BASE_URL;
}


