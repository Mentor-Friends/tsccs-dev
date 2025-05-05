import { CompositionBinaryTree } from './Composition/CompositionBinaryTree';


export class BaseUrl{
    static BASE_URL: string  = "https://localhost:7053/";

    static NODE_CACHE_URL: string = "";

    static AI_URL: string ="https://ai.freeschema.com";

    static MQTT_URL: string = '192.168.1.249';

    static NODE_URL: string = "http://localhost:5001";

    static LOG_SERVER:string = "https://logdev.freeschema.com";

    static MQTT_CONNECTION:any ;

    static BASE_APPLICATION = "";

    static ACCESS_CONTROL_BASE_URL = "http://localhost:7001";

    static FLAGS : any= {
        logApplication: false,
        logPackage: false,
        accessTracker: false,
        isTest: false
    }

    public static BASE_RANDOMIZER = 999;

    static setRandomizer(id: number) {
        console.log('set randomizer', id)
        this.BASE_RANDOMIZER = id
    }
    static getRandomizer() {
        return this.BASE_RANDOMIZER
    }


   // static GetConceptUrl:string = this.BASE_URL + '/api/getConcept';

    static GetConceptUrl(){
        if (this.NODE_CACHE_URL.trim() === "") {
            return this.BASE_URL + '/api/getConcept';
        } else {
            return this.NODE_CACHE_URL + '/api/getConcept';
        }
    }

    static GetConnectionUrl(){
        if (this.NODE_CACHE_URL.trim() === "") {
            return this.BASE_URL + '/api/get-connection-by-id';
        } else {
            return this.NODE_CACHE_URL + '/api/get-connection-by-id';
        }
    }

    static GetConceptBulkUrl(){
        if (this.NODE_CACHE_URL.trim() === "") {
            return this.BASE_URL + '/api/get_concept_bulk';
        } else {
            return this.NODE_CACHE_URL + '/api/get_concept_bulk';
        }
    }

    static GetConnectionBulkUrl(){
        if (this.NODE_CACHE_URL.trim() === "") {
            return this.BASE_URL + '/api/get_connection_bulk';
        } else {
            return this.NODE_CACHE_URL + '/api/get_connection_bulk';
        }
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

    static GetConceptByCharacterAndCategoryUrl(){
        return this.BASE_URL + '/api/get_concept_by_character_and_category';
    }

    static GetConceptByCharacterAndCategoryDirectUrl(){
        return this.BASE_URL + '/api/get_concept_by_character_and_category_direct';
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
        return this.BASE_URL + '/api/get-preloaded-concepts';
       // return this.AI_URL + '/api/get_ranked_type_id?inpage=300' || process.env.AI_URL ||  'https://ai.freeschema.com/api/get_ranked_type_id?inpage=300';
    }

    static getMyCacheServer() {
        return this.NODE_URL + "/api/v1/cache-server"
    }

    static PostPrefetchConceptConnections(){
        return this.NODE_URL + '/api/v1/access-tracker/sync-access-tracker'
    }

    static GetSuggestedConcepts(){
        return this.NODE_URL + '/api/v1/access-tracker/list-concepts-file'
    }

    static GetSuggestedConnections(){
        return this.NODE_URL + '/api/v1/access-tracker/list-connections-file'
    }

    static PostLogger(){
        return this.LOG_SERVER + '/api/logger'
    }

    static GetAllPrefetchConnectionsUrl(){
        return this.BASE_URL + '/api/get_all_connections_of_user?inpage=500';
    }
    static GetAllLinkerConnectionOfConceptUrl(){
        return this.BASE_URL + '/api/get-all-linkers-from-concept';
    }

    static GetAllLinkerConnectionToConceptUrl(){
        return this.BASE_URL + '/api/get-all-linkers-to-concept';
    }

    static DeleteConceptUrl(){
        return this.BASE_URL + '/api/delete_concept';
    }

    static DeleteUserUrl(){
        return this.BASE_URL + '/api/deleteuser';
    }


    static RecursiveSearchUrl(){
        return this.BASE_URL + '/api/recursivesearch-concept-connection';
    }

    static SearchLinkMultipleAllApiUrl(){
        return this.BASE_URL + '/api/Connection/search-link-multiple-all-ccs';
    }

    static MakeTheNameInBackendUrl(){
        return this.BASE_URL + '/api/make-name-from-frontend';
    }

    static SearchAllTypeWithLinker(auth: boolean = true){
        if(auth){
            return this.BASE_URL + '/api/search-all-with-linker-ccs';

        }
        else{
            return this.BASE_URL + '/api-search-compositions-internal-clean-ccs';
        }
    }

    static LoginUrl(){
        return this.BASE_URL + '/api/auth/login';
    }

    static SignupUrl(){
        return this.BASE_URL + '/api/auth/signup';
    }

    static GetCompositionConnectionBetweenTwoConceptsUrl(){
        return this.BASE_URL + '/api/get-composition-connection-between-two-concepts';
    }

    static  SearchCompositionsUrl(){
        return this.BASE_URL + '/api/search-compositions';
    }

    static SearchLinkMultipleAll(){
        return this.BASE_URL + '/api/Connection/search-link-multiple-all';
    }

    static CreateSessionId(){
        return this.BASE_URL + '/api/create-session-id-remote'
    }

    static CreateSessionVisitUrl(){
        return this.BASE_URL + '/api/create-remote-session-visit'
    }


    //////////////////////////////////////////////////////////////////////////////
    /////////////////////Api for viewing internal data //////////////////////////

    static ViewInternalDataUrl(){
        return this.BASE_URL + '/api/view-api-internal-data-ccs-id-bulk'
    }

    static SearchInternalWithAuthenticatedCcsUrl(){
        return this.BASE_URL + '/api/search-composition-internal-authenticated-ccs';
    }

    static SearchInternalWithCcsUrl(){
        return this.BASE_URL + '/api-search-compositions-internal-clean-ccs';
    }



    static CreateGhostConceptApiUrl(){
        return BaseUrl.NODE_URL + '/api/v1/local-concepts'
    }

    static CreateGhostConnectionApiUrl(){
        return BaseUrl.NODE_URL + '/api/v1/local-connections';
    }

    static GetRealConceptById(){
        return BaseUrl.NODE_URL + '/api/v1/local-concepts-translate';
    }


    //////////////////////////////////////////////////////////////////////////////
    //////////////// API For Reserved Ids ///////////////////////////////////////

    static GetReservedIdUrl(){
        return this.BASE_URL + '/api/get_reserved_ids';
    }

    static GetReservedConnectionIdUrl(){
        return this.BASE_URL + '/api/get_reserved_connection_ids';
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


    static CreateTheConnectionNewUrl(){
        return this.BASE_URL + '/api/create_the_connection_new';
    }

    static MakeTheTypeConceptUrl(){
        return this.BASE_URL + '/api/make_the_type_concept';
    }



    ////////////////////////////////////////////////////////////////////////
    /////////////////////API FOR Deleting Connection //////////////////////

    static DeleteTheConnectionUrl(){
        return this.BASE_URL + '/api/delete_connection';
    }



    //////////////////////////////////////////////////////////////////////
    //////////////////////API FOR FREESCHEMA QUERY //////////////////////
    static FreeschemaQueryUrl(){
        return this.BASE_URL + '/api/freeschema-query';
    }

    //////////////////////////////////////////////////////////////////////
    //////////////////////API FOR IMAGE UPLOAD //////////////////////
    static uploadImageUrl(){
        return this.BASE_URL + '/api/Image/UploadImage';
    }

    //////////////////////////////////////////////////////////////////////
    //////////////////////API FOR FILE UPLOAD //////////////////////
    static uploadFileUrl(){
        return this.BASE_URL + '/api/Image/UploadFile';
    }

    //////////////////////////////////////////////////////////////////////
    //////////////////////// API FOR SENDING MAIL ////////////////////////
    static sendMail(){
        return this.BASE_URL + '/api/sendmail';
    }
    static sendBulkMail(){
        return this.BASE_URL + '/api/sendmail/bulk';
    }

    static getWidgetData(){
        return this.BASE_URL + '/api/get-widget';
    }

    static getLatestWidgetData(){
        return this.BASE_URL + '/api/get-latest-widget';
    }
}