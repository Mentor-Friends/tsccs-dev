import { FilterSearch } from "./FilterSearch";

export class SearchQuery{
     composition:number = 0;
     type: string = "";
     linker: string = "";
     inpage:number = 10;
     page:number = 1;
     listLinkers:string[] = [];
     textSearch:string = "";
     logic: string = "or";
     filterSearches:FilterSearch[]  = [];
     selectors: string[] = [];

}