import { FilterSearch } from "./FilterSearch";
export declare class SearchQuery {
    composition: number;
    type: string;
    linker: string;
    inpage: number;
    page: number;
    listLinkers: string[];
    fullLinkers: string[];
    textSearch: string;
    logic: string;
    filterSearches: FilterSearch[];
    selectors: string[];
}
