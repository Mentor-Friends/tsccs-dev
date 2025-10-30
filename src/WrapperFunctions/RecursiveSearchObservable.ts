import {
  Connection,
  ConnectionData,
  DependencyObserver,
  GetAllConnectionsOfCompositionBulk,
  GetCompositionFromConnectionsWithDataId,
  GetConnectionBulk,
  RecursiveSearchApiRaw,
} from "../app";
import { RAW } from "../Constants/FormatConstants";

/**
 * Observable wrapper for recursive multi-level searches following linker paths with automatic updates.
 */
class RecursiveSearchObservable extends DependencyObserver {
  /** Array of linker type names defining the search path */
  searchLinkers: string[];
  /** Search text placeholder */
  searchText: string = "";
  /** Text to search for in linked concepts */
  textSearch: string;
  /** List of connection objects */
  connections: Connection[] = [];
  /** List of external (linker) connection IDs */
  externalConnectionIds: number[] = [];
  /** Search result data */
  data: any = [];

  /**
   * Creates a new recursive search observable.
   * @param id - The starting concept ID for the recursive search
   * @param linkers - Array of linker type names defining the traversal path
   * @param textSearch - Optional text to search for in linked concepts
   * @param format - Output format (RAW for raw IDs, undefined for formatted compositions)
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

  /**
   * Overrides base method to track connection changes for concepts in the search results.
   * @param id - The concept ID to track
   */
  listenToEvent(id: number) {
    window.addEventListener(`${id}`, (event) => {
      // console.log("this is listening after the event is fired", id, event);
      if (!this.isUpdating) {
        this.isUpdating = true;
        let that = this;

        setTimeout(async function () {
          let newConnection =
            await ConnectionData.GetConnectionByOfTheConceptAndType(id, id);
          for (let i = 0; i < newConnection.length; i++) {
            await ConnectionData.GetConnection(newConnection[i]).then(
              (conn) => {
                if (conn.typeId == that.mainConcept) {
                  if (!that.internalConnections.includes(conn.id)) {
                    that.internalConnections.push(conn.id);
                  }
                } else {
                  if (!that.linkers.includes(conn.id)) {
                    that.linkers.push(conn.id);
                  }
                }
                if (!that.conceptIds.includes(conn.toTheConceptId)) {
                  that.conceptIds.push(conn.toTheConceptId);
                }

                // compositions
                if (!that.compositionIds.includes(conn.ofTheConceptId)) {
                  that.compositionIds.push(conn.ofTheConceptId);
                }
                if (!that.compositionIds.includes(conn.toTheConceptId)) {
                  that.compositionIds.push(conn.toTheConceptId);
                }
              }
            );
          }
          that.isUpdating = false;
          await that.bind();
          that.notify();
        }, 200);
      } else {
       // console.log("rejected this");
      }
    });
  }

  /**
   * Executes recursive search and sets up change listeners for all found compositions.
   * @returns Formatted search results or raw ID structure
   */
  async bind(): Promise<any> {
    if (!this.isDataLoaded) {
      this.isDataLoaded = true;

      const result = await RecursiveSearchApiRaw(
        this.mainConcept,
        this.searchLinkers,
        this.textSearch
      );

      this.compositionIds = result.compositionIds || [];
      this.internalConnections = result.internalConnections || [];
      this.externalConnectionIds = result.externalConnections || [];
      this.linkers = this.externalConnectionIds;

      // const internalConnections = await GetConnectionBulk(
      //   this.internalConnections
      // );
      this.connections = await GetConnectionBulk(this.externalConnectionIds);
      var prefetch: number[] = [];

      // listen external connection
      // for (var i = 0; i < this.connections.length; i++) {
      //   prefetch.push(this.connections[i].toTheConceptId);
      //    this.listenToEvent(this.connections[i].toTheConceptId);
      // }
      // listen internal connection
      // for (var i = 0; i < this.internalConnections.length; i++) {
      //   //prefetch.push(internalConnections[i].toTheConceptId);
      //    this.listenToEvent(this.internalConnections[i]);
      // }

      for (let i = 0; i < this.compositionIds.length; i++) {
        this.listenToEvent(this.compositionIds[i]);
      }
      //await GetAllConnectionsOfCompositionBulk(prefetch);

      this.listenToEvent(this.mainConcept);
    }
    return await this.build();
  }

  /**
   * Builds the search results in the specified format.
   * @returns Formatted composition data or raw ID structure
   */
  async build() {

    this.externalConnectionIds = this.linkers;
    if (this.format && this.format == RAW) {
      this.data = {
        compositionIds: this.compositionIds,
        internalConnections: this.internalConnections,
        externalConnections: this.externalConnectionIds,
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
 * Creates an observable that performs recursive multi-level searches and updates subscribers when results change.
 * @param id - The starting concept ID for the recursive search
 * @param linkers - Array of linker type names defining the traversal path
 * @param searchText - Optional text to search for in linked concepts
 * @param format - Output format (RAW for raw IDs, undefined for formatted compositions)
 * @returns Observable instance for the recursive search
 *
 * @example
 * const observer = RecursiveSearchListener(123, ["Author", "Category"], "tutorial", RAW);
 * observer.subscribe((results) => console.log(results));
 */
export function RecursiveSearchListener(
  id: number,
  linkers: string[],
  searchText: string = "",
  format?: number
) {
  return new RecursiveSearchObservable(id, linkers, searchText, format);
}
