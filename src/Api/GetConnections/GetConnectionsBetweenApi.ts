import { BaseUrl } from "../../DataStructures/BaseUrl";
import { FetchConnection } from "../../DataStructures/FetchConnection";
import { HandleHttpError, HandleInternalError, UpdatePackageLogWithError } from "../../Services/Common/ErrorPosting";
import { GetRequestHeader } from "../../Services/Security/GetRequestHeader";
import { Logger } from "../../Middleware/logger.service";

/**
 * Fetches connections matching the given criteria from POST /api/get-connection-between.
 *
 * Accepts an array so multiple independent queries can be resolved in one HTTP request.
 * Each item in the array is resolved independently by the backend; results are returned
 * in the same order with `connectionIds` and the resolved `typeId` populated.
 *
 * **Supported query permutations (per item):**
 * 1. `ofTheConceptId` + `toTheConceptId` + `type` — connections between two specific concepts of that type
 * 2. `ofTheConceptId` + `type`                    — all connections FROM a concept of that type
 * 3. `toTheConceptId` + `type`                    — all connections TO a concept of that type
 * 4. `typeId` + `isComposition: true`             — all internal connections of a composition
 *
 * Fields not relevant to the chosen permutation should be left at their zero/empty defaults.
 * Use {@link buildFetchConnection} to build items without specifying every field manually.
 *
 * @param fetchConnections - Array of query objects; each item is resolved independently.
 * @returns The same array with `connectionIds` and resolved `typeId` populated by the backend.
 *          Returns an empty array on error (error is logged internally).
 *
 * @example
 * // Single query — connections between two concepts
 * const results = await GetConnectionsBetweenApi([
 *     buildFetchConnection({ ofTheConceptId: 103927382, toTheConceptId: 103927389, type: "the_project_s_page" })
 * ]);
 * console.log(results[0].connectionIds); // [18161211]
 *
 * @example
 * // Multiple queries in one request
 * const results = await GetConnectionsBetweenApi([
 *     buildFetchConnection({ ofTheConceptId: 103927382, type: "the_project_s_page" }),
 *     buildFetchConnection({ typeId: 101490186, isComposition: true }),
 * ]);
 * const allIds = results.flatMap(r => r.connectionIds);
 *
 * @see {@link buildFetchConnection} for constructing query items without filling all defaults
 * @see {@link FetchConnection} for the full field reference
 */
export async function GetConnectionsBetweenApi(fetchConnections: FetchConnection[]): Promise<FetchConnection[]> {
    const logData: any = Logger.logfunction("GetConnectionsBetweenApi", arguments);
    let result: FetchConnection[] = [];
    try {
        const header = GetRequestHeader();
        const response = await fetch(BaseUrl.GetConnectionsBetweenUrl(), {
            method: 'POST',
            headers: header,
            body: JSON.stringify(fetchConnections),
        });

        if (!response.ok) {
            HandleHttpError(response);
            throw new Error(`GetConnectionsBetweenApi error: ${response.status}`);
        }

        result = await response.json();
        Logger.logUpdate(logData);
        return result;
    } catch (error) {
        if (error instanceof Error) {
            console.error('GetConnectionsBetweenApi error message: ', error.message);
        } else {
            console.error('GetConnectionsBetweenApi unexpected error: ', error);
        }
        HandleInternalError(error, BaseUrl.GetConnectionsBetweenUrl());
        UpdatePackageLogWithError(logData, 'GetConnectionsBetweenApi', error);
        return result;
    }
}
