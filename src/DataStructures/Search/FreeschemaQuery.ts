import { ALLID, NORMAL } from "../../Constants/FormatConstants";
import { Concept } from "../Concept";
import { FilterSearch } from "../FilterSearch";



export class FreeschemaQuery{
    type: string = "";
    inpage: number = 10;
    page: number = 1;
    concepts: Concept[] = [];
    conceptIds: number[] = [];
    selectors: string[] = [];
    freeschemaQueries : FreeschemaQuery[] = [];
    filters: FilterSearch[] = [];
    filterLogic: string = "";
    typeConnection: string = "";
    order: string = "DESC";
    outputFormat: number = NORMAL;
    name: string = "";
    filterAncestor:string = "";
    reverse: boolean = false;
    limit: boolean = true;
    isSecure:boolean = true;
    includeInFilter: boolean = false;
    isOldConnectionType: boolean = false;
}