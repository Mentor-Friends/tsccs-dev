import { ALLID, NORMAL } from "../../Constants/FormatConstants";
import { Concept } from "../Concept";
import { FilterSearch } from "../FilterSearch";



export class FreeschemaQuery{
    type: string = "";
    inpage: number = 10;
    page: number = 1;
    concepts: Concept[] = [];
    selectors: string[] = [];
    freeschemaQueries : FreeschemaQuery[] = [];
    filters: FilterSearch[] = [];
    filterLogic: string = "";
    typeConnection: string = "";
    outputFormat: number = NORMAL;
    name: string = "";
}