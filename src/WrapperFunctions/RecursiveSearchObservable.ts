import {
  Connection,
  DependencyObserver,
  GetAllConnectionsOfCompositionBulk,
  GetCompositionFromConnectionsWithDataId,
  GetConnectionBulk,
  RecursiveSearchApiRaw,
} from "../app";
import { RAW } from "../Constants/FormatConstants";

class RecursiveSearchObservable extends DependencyObserver {
  searchLinkers: string[];
  searchText: string = "";
  textSearch: string;
  connections: Connection[] = [];
  data: any = [];

  /**
   *
   * @param id this is the id whose links need to be found
   * @param linker this is the type connection that is connected to the mainConcept(id)
   * @param inpage number of outputs that has to be displayed
   * @param page the page which needs to be displayed as per the inpage parameter
   * @param format the format in which the output should be displayed (RAW, undefined)
   */
  constructor(
    id: number,
    linkers: string[],
    textSearch: string = "",
    format?: number
  ) {
    super();
    this.mainConcept = id;
    this.searchLinkers = linkers;
    this.textSearch = textSearch;
    if (format) this.format = format;
  }

  async bind(): Promise<any> {
    if (!this.isDataLoaded) {
      const result = await RecursiveSearchApiRaw(
        this.mainConcept,
        this.searchLinkers,
        this.textSearch
      );

      this.compositionIds = result.compositionIds || [];
      this.internalConnections = result.internalConnections || [];
      const externalConnections = result.externalConnections || [];
      const internalConnections = await GetConnectionBulk(
        this.internalConnections
      );
      this.connections = await GetConnectionBulk(externalConnections);
      var prefetch: number[] = [];

      // listen external connection
      for (var i = 0; i < this.connections.length; i++) {
        prefetch.push(this.connections[i].toTheConceptId);
        this.listenToEvent(this.connections[i].toTheConceptId);
      }
      // listen internal connection
      for (var i = 0; i < internalConnections.length; i++) {
        prefetch.push(internalConnections[i].toTheConceptId);
        this.listenToEvent(internalConnections[i].toTheConceptId);
      }
      await GetAllConnectionsOfCompositionBulk(prefetch);

      this.isDataLoaded = true;
      this.listenToEvent(this.mainConcept);
    }
    return await this.build();
  }

  async build() {
    if (this.format && this.format == RAW) {
      this.data = {
        compositionIds: this.compositionIds,
        internalConnections: this.internalConnections,
        externalConnections: this.connections,
      };
    } else {
      this.data = await GetCompositionFromConnectionsWithDataId(
        this.compositionIds,
        this.internalConnections
      );
    }
    return this.data;
  }
}

/**
 * Method to listen the changes in recursive search data
 * @param id this is the id whose links need to be found
 * @param linker this is the type connection that is connected to the mainConcept(id)
 * @param inpage number of outputs that has to be displayed
 * @param page the page which needs to be displayed as per the inpage parameter
 * @param format the format in which the output should be displayed (RAW, undefined)
 */
export function RecursiveSearchListener(
  id: number,
  linkers: string[],
  searchText: string = "",
  format?: number
) {
  return new RecursiveSearchObservable(id, linkers, searchText, format);
}
