export class BaseUrl{
    static BASE_URL: string  = "https://localhost:7053/";

    static AI_URL: string ="https://ai.freeschema.com";

   // static GetConceptUrl:string = this.BASE_URL + '/api/getConcept';

    static GetConceptUrl(){
        return this.BASE_URL + '/api/getConcept';
    }

    static GetConnectionUrl(){
        return this.BASE_URL + '/api/get-connection-by-id';
    }

    static GetConceptBulkUrl(){
        return this.BASE_URL + '/api/get_concept_bulk';
    }

    static GetConnectionBulkUrl(){
        return this.BASE_URL + '/api/get_connection_bulk';
    }

    static  GetAllConceptsOfUserUrl(){
        return this.BASE_URL +  '/api/get_all_concepts_of_user';
    }


    static GetAllConnectionsOfUserUrl(){
        return this.BASE_URL + '/api/get_all_connections_of_user';
    }

    static  GetAllConnectionsOfCompositionUrl(){
        return this.BASE_URL + '/api/get_all_connections_of_composition';
    }

    static GetAllConnectionsOfCompositionBulkUrl(){
        return this.BASE_URL + '/api/get_all_connections_of_composition_bulk';
    }
    
    static GetConceptByCharacterValueUrl(){
        return this.BASE_URL + '/api/get_concept_by_character_value';
    }

    static GetConceptByCharacterAndTypeUrl(){
        return this.BASE_URL + '/api/get_concept_by_character_and_type';
    }

    static GetCharacterByCharacterUrl(){
        return this.BASE_URL + '/api/get_character_by_character';
    }

    static GetAllConceptsByTypeUrl(){
        return this.BASE_URL + '/api/get_all_concepts_by_type';
    }

    static GetAllConnectionsOfConceptUrl(){
        return this.BASE_URL + '/api/get-link-connections';
    }
    
    static GetAllAiData(){
        return this.AI_URL + '/api/get_ranked_type_id?inpage=300' || process.env.AI_URL ||  'https://ai.freeschema.com/api/get_ranked_type_id?inpage=500';
    }

    static GetAllPrefetchConnectionsUrl(){
        return this.BASE_URL + '/api/get_all_connections_of_user?inpage=500';
    }
    static GetAllLinkerConnectionOfConceptUrl(){
        return this.BASE_URL + '/api/get-all-linkers-from-concept';
    }

    static DeleteConceptUrl(){
        return this.BASE_URL + '/api/delete_concept';
    }

    static RecursiveSearchUrl(){
        return this.BASE_URL + '/api/recursivesearch-concept-connection';
    }

    static MakeTheNameInBackendUrl(){
        return this.BASE_URL + '/api/make-name-from-frontend';
    }

    static LoginUrl(){
        return this.BASE_URL + '/api/auth/login';
    }

    static GetCompositionConnectionBetweenTwoConceptsUrl(){
        return this.BASE_URL + '/api/get-composition-connection-between-two-concepts';
    }




    //////////////////////////////////////////////////////////////////////////////
    //////////////// API For Reserved Ids ///////////////////////////////////////

    static GetReservedIdUrl(){
        return this.BASE_URL + '/api/get_reserved_ids';
    }


    /////////////////////////////////////////////////////////////////////////////
    ////////////////API For Creating Data //////////////////////////////////////

    static CreateTheTextDataUrl(){
        return this.BASE_URL + '/api/create_text_data';
    }

    static CreateTheCharacterDataUrl(){
        return this.BASE_URL + '/api/create_character_data';
    }

    static CreateTheConceptUrl(){
        return this.BASE_URL + '/api/create_the_concept';

    }

    static CreateTheConnectionUrl(){
        return this.BASE_URL + '/api/create_the_connection';
    }





}