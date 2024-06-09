export declare class BaseUrl {
    static BASE_URL: string;
    static AI_URL: string;
    static MQTT_URL: string;
    static NODE_URL: string;
    static MQTT_CONNECTION: any;
    static GetConceptUrl(): string;
    static GetConnectionUrl(): string;
    static GetConceptBulkUrl(): string;
    static GetConnectionBulkUrl(): string;
    static GetAllConceptsOfUserUrl(): string;
    static GetAllConnectionsOfUserUrl(): string;
    static GetAllConnectionsOfCompositionUrl(): string;
    static GetAllConnectionsOfCompositionBulkUrl(): string;
    static GetConceptByCharacterValueUrl(): string;
    static GetConceptByCharacterAndTypeUrl(): string;
    static GetCharacterByCharacterUrl(): string;
    static GetAllConceptsByTypeUrl(): string;
    static GetAllConnectionsOfConceptUrl(): string;
    static GetAllAiData(): string;
    static GetAllPrefetchConnectionsUrl(): string;
    static GetAllLinkerConnectionOfConceptUrl(): string;
    static DeleteConceptUrl(): string;
    static RecursiveSearchUrl(): string;
    static MakeTheNameInBackendUrl(): string;
    static LoginUrl(): string;
    static SignupUrl(): string;
    static GetCompositionConnectionBetweenTwoConceptsUrl(): string;
    static SearchCompositionsUrl(): string;
    static SearchLinkMultipleAll(): string;
    static CreateSessionId(): string;
    static CreateSessionVisitUrl(): string;
    static CreateGhostConceptApiUrl(): string;
    static CreateGhostConnectionApiUrl(): string;
    static GetReservedIdUrl(): string;
    static GetReservedConnectionIdUrl(): string;
    static CreateTheTextDataUrl(): string;
    static CreateTheCharacterDataUrl(): string;
    static CreateTheConceptUrl(): string;
    static CreateTheConnectionUrl(): string;
    static MakeTheTypeConceptUrl(): string;
    static DeleteTheConnectionUrl(): string;
}
