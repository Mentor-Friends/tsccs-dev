/**
 * Request/response shape for the POST /api/get-connection-between endpoint.
 *
 * Use only the fields relevant to your query permutation and leave the rest at their
 * zero/empty defaults. The backend resolves `typeId` from the `type` string when
 * `typeId` is 0, so you never need to supply both.
 *
 * **Query permutations:**
 * 1. `ofTheConceptId` + `toTheConceptId` + `type` — connections between two specific concepts of that type
 * 2. `ofTheConceptId` + `type`                    — all connections FROM a concept of that type
 * 3. `toTheConceptId` + `type`                    — all connections TO a concept of that type
 * 4. `typeId` + `isComposition: true`             — all internal connections of a composition
 *
 * After the request, the backend populates `connectionIds` and the resolved `typeId`
 * on each item and returns the same array.
 */
export interface FetchConnection {
    /** Source concept ID. 0 means "not specified". */
    ofTheConceptId: number;
    /** Target concept ID. 0 means "not specified". */
    toTheConceptId: number;
    /** Resolved type concept ID. Set directly or leave 0 — backend resolves it from `type`. */
    typeId: number;
    /** Human-readable type string (e.g. "the_project_s_page"). Used when typeId is 0. */
    type: string;
    /** Legacy type string resolved relative to the source concept's type. Leave empty unless required. */
    oldType: string;
    /** When true, searches for connections in the reverse direction (toTheConceptId → ofTheConceptId). */
    reverse: boolean;
    /** When true, treats typeId as a composition ID and returns its internal connections. */
    isComposition: boolean;
    /** Populated by the backend after the request — the matching connection IDs. */
    connectionIds: number[];
}

/**
 * Input-only shape for building a FetchConnection query.
 * Omits `connectionIds` since that is an output field populated by the backend.
 */
export type FetchConnectionQuery = Omit<FetchConnection, 'connectionIds'>;

/**
 * Builds a complete FetchConnection request object from a partial query,
 * filling unspecified fields with their zero/empty defaults.
 *
 * Use this instead of constructing FetchConnection manually so you only
 * need to specify the fields relevant to your query permutation.
 *
 * @param query - Partial query with only the fields you need.
 * @returns A fully initialised FetchConnection ready to send to the API.
 *
 * @example
 * // Between two concepts
 * buildFetchConnection({ ofTheConceptId: 1, toTheConceptId: 2, type: "the_project_s_page" })
 *
 * @example
 * // All connections from a concept
 * buildFetchConnection({ ofTheConceptId: 1, type: "the_project_s_page" })
 *
 * @example
 * // All internal connections of a composition
 * buildFetchConnection({ typeId: 101490186, isComposition: true })
 *
 * @see {@link GetConnectionsBetweenApi} to send the built query to the backend
 */
export function buildFetchConnection(query: Partial<FetchConnectionQuery>): FetchConnection {
    return {
        ofTheConceptId: query.ofTheConceptId ?? 0,
        toTheConceptId: query.toTheConceptId ?? 0,
        typeId: query.typeId ?? 0,
        type: query.type ?? '',
        oldType: query.oldType ?? '',
        reverse: query.reverse ?? false,
        isComposition: query.isComposition ?? false,
        connectionIds: [],
    };
}
