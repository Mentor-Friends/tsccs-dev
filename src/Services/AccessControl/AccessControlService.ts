/**
 * AccessControlService
 * 
 * This class provides a static API for managing access control in the application.
 * It wraps all backend access control endpoints, allowing you to:
 *   - Assign, revoke, and query access for concepts, entities, and users.
 *   - Check and filter access permissions for concepts and entities.
 *   - Manage public access, access inheritance, and access groups.
 *   - Interact with access control cache for efficient permission checks.
 * 
 * Usage:
 *   All methods are static and can be called directly on the class.
 *   Example:
 *     await AccessControlService.assignAccessToEntity({ ... });
 *     const hasAccess = await AccessControlService.checkAccessOfConcept(...);
 * 
 * Environment:
 *   The service uses ACCESS_CONTROL_BASE_URL from environment variables, or defaults to 'http://localhost:3000/api/access-control'.
 * 
 * Note:
 *   This class is stateless and should be used as a singleton utility.
 */
import { BaseUrl, Concept, GetConceptBulk, GetTheConcept } from "../../app";
import { AccessControlCacheService } from "./AccessControlCacheService";
import { PermissionSet } from "./PermissionSet";

export class AccessControlService {
  private static accessCache = new AccessControlCacheService();
  private static baseUrl: string;

  // Static constructor
  private static initialize() {
    this.baseUrl =
      process.env.ACCESS_CONTROL_BASE_URL ||
      'http://localhost:3000/api/access-control';
    if (!this.baseUrl)
      throw new Error('ACCESS_CONTROL_BASE_URL is not defined in environment');
    console.log('AccessControlService initialized.');
  }

  // Ensure static initialization
  static {
    AccessControlService.initialize();
  }

  /**
   * Checks if a user or entity has the specified access for a single concept.
   * @param userId - The user's ID.
   * @param access - The required PermissionSet.
   * @param conceptId - The concept ID to check.
   * @param entityId - Optional entity ID (defaults to userId).
   * @returns Promise<boolean> - True if access is granted, false otherwise.
   */
  static async checkAccessOfConcept(
    userId: number,
    access: PermissionSet,
    conceptId: number,
    entityId?: number
  ): Promise<boolean> {
    const concept = await GetTheConcept(conceptId);
    if (concept.userId === 999 || concept.userId === userId) {
      return true;
    }
    const accessId = concept.accessId ?? 0;
    entityId = entityId ? entityId : this.getEntityIdConceptByUserId(userId);
    return await this.accessCache.hasAccess(entityId, accessId, access);
  }

  /**
   * Checks if a user or entity has the specified access for all concepts in a list.
   * @param userId - The user's ID.
   * @param access - The required PermissionSet.
   * @param conceptIdList - Array of concept IDs to check.
   * @param entityId - Optional entity ID (defaults to userId).
   * @returns Promise<boolean> - True if access is granted for all, false otherwise.
   */
  static async checkAccessOfConceptList(
    userId: number,
    access: PermissionSet,
    conceptIdList: number[],
    entityId?: number
  ): Promise<boolean> {
    const conceptList = await GetConceptBulk(conceptIdList);

    const accessIdMap = Array.from(conceptList.values())
      .filter((c: Concept) => c.userId !== userId && c.userId !== 999)
      .map((c) => c.accessId ?? 0)
      .filter((value, index, self) => self.indexOf(value) === index); // Distinct values

    entityId = entityId ? entityId : this.getEntityIdConceptByUserId(userId);
    const accessList = await this.accessCache.getAccessibleConcepts(
      entityId,
      accessIdMap,
      access
    );
    return accessList.length === conceptIdList.length;
  }

  /**
   * Filters a list of concept IDs, returning only those for which the user or entity has the specified access.
   * @param userId - The user's ID.
   * @param access - The required PermissionSet.
   * @param conceptIdList - Array of concept IDs to filter.
   * @param entityId - Optional entity ID (defaults to userId).
   * @returns Promise<number[]> - Array of concept IDs with access.
   */
  static async filterConceptListByAccess(
    userId: number,
    access: PermissionSet,
    conceptIdList: number[],
    entityId?: number
  ): Promise<number[]> {
    const conceptList = await GetConceptBulk(conceptIdList);

    const accessIdMap = Array.from(conceptList.values())
      .filter((c) => c.userId !== userId && c.userId !== 999)
      .map((c) => c.accessId ?? 0)
      .filter((value, index, self) => self.indexOf(value) === index); // Distinct values

    entityId = entityId ? entityId : this.getEntityIdConceptByUserId(userId);
    const accessibleAccessIds = new Set(
      await this.accessCache.getAccessibleConcepts(entityId, accessIdMap, access)
    );

    const filteredList: number[] = [];
    for (const concept of conceptList.values()) {
      if (
        concept.userId === userId ||
        concept.userId === 999 ||
        accessibleAccessIds.has(concept.accessId ?? 0)
      ) {
        filteredList.push(concept.id);
      }
    }

    return filteredList;
  }

  /**
   * Gets the entity ID for a given user ID.
   * @param userId - The user's ID.
   * @returns number - The entity ID (default: userId).
   */
  private static getEntityIdConceptByUserId(userId: number): number {
    // TODO: Implement logic to get entity ID based on user ID
    return userId; // Placeholder logic
  }

  /**
   * Assigns access to a specific entity for a concept.
   * @param request - Object containing conceptId, access, entityId, makePublic.
   * @returns Promise<any> - API response.
   */
  static async assignAccessToEntity(request: {
    conceptId: number;
    access: string;
    entityId: number;
    makePublic: boolean;
  }): Promise<any> {
    return this._post('/api/access-control/access', request, 'Failed to assign access to entity');
  }

  /**
   * Assigns public access to a concept or list of concepts.
   * @param request - Object containing conceptId, accessList, connectionTypeList, nestedAccessLevel, conceptIdList.
   * @returns Promise<any> - API response.
   */
  static async assignPublicAccess(request: {
    conceptId: number;
    accessList: string[];
    connectionTypeList?: string[];
    nestedAccessLevel?: number;
    conceptIdList?: number[];
  }): Promise<any> {
    return this._post(
      '/api/access-control/public-access',
      {
        ...request,
        nestedAccessLevel: request.nestedAccessLevel ?? 0,
        conceptIdList: request.conceptIdList ?? [],
      },
      'Failed to assign public access'
    );
  }

  /**
   * Assigns public access to multiple concepts in bulk.
   * @param request - Object containing conceptIdList, accessList, connectionTypeList, nestedAccessLevel, conceptId.
   * @returns Promise<any> - API response.
   */
  static async assignPublicAccessBlukConcept(request: {
    conceptIdList: number[];
    accessList: string[];
    connectionTypeList?: string[];
    nestedAccessLevel?: number;
    conceptId?: number;
  }): Promise<any> {
    return this._post(
      '/api/access-control/public-access',
      {
        ...request,
        nestedAccessLevel: request.nestedAccessLevel ?? 0,
        conceptId: request.conceptId ?? 0,
      },
      'Failed to assign public access'
    );
  }

  /**
   * Assigns access to multiple entities and concepts in bulk.
   * @param request - Object containing conceptId, conceptIdList, entityIdList, accessList, connectionTypeList, nestedAccessLevel.
   * @returns Promise<any> - API response.
   */
  static async assignAccessToEntityBulk(request: {
    conceptId: number;
    conceptIdList?: number[];
    entityIdList: number[];
    accessList: string[];
    connectionTypeList?: string[];
    nestedAccessLevel?: number;
  }): Promise<any> {
    return this._post(
      '/api/access-control/access/bulk',
      {
        ...request,
        nestedAccessLevel: request.nestedAccessLevel ?? 0,
      },
      'Failed to assign access in bulk'
    );
  }

  /**
   * Assigns access to a user for a concept.
   * @param request - Object containing conceptId, access, userId, makePublic.
   * @returns Promise<any> - API response.
   */
  static async assignAccessByUser(request: {
    conceptId: number;
    access: string;
    userId: number;
    makePublic: boolean;
  }): Promise<any> {
    return this._post('/api/access-control/user-access', request, 'Failed to assign access by user');
  }

  /**
   * Revokes access for an entity from a concept.
   * @param params - Object containing conceptId, access, entityId.
   * @returns Promise<any> - API response.
   */
  static async revokeAccess(params: {
    conceptId: number;
    access: string;
    entityId: number;
  }): Promise<any> {
    const { conceptId, access, entityId } = params;
    const url = `/api/access-control/access?conceptId=${conceptId}&access=${encodeURIComponent(access)}&entityId=${entityId}`;
    return this._delete(url, undefined, 'Failed to revoke access');
  }

  /**
   * Revokes access for multiple entities in bulk.
   * @param request - Object containing conceptId, entityIdList, accessList.
   * @returns Promise<any> - API response.
   */
  static async revokeAccessBulk(request: {
    conceptId: number;
    entityIdList: number[];
    accessList: string[];
  }): Promise<any> {
    return this._delete('/api/access-control/access/bulk', request, 'Failed to revoke access in bulk');
  }

  /**
   * Gets the access list for a concept and user.
   * @param conceptId - The concept ID.
   * @param userId - The user ID.
   * @returns Promise<any> - API response.
   */
  static async getAccessList(conceptId: number, userId: number): Promise<any> {
    const url = `/api/access-control/access-list?conceptId=${conceptId}&userId=${userId}`;
    return this._get(url, 'Failed to get access list');
  }

  /**
   * Gets the public access list for a list of concept IDs.
   * @param conceptIdList - Array of concept IDs.
   * @returns Promise<any> - API response.
   */
  static async getPublicAccessList(conceptIdList: number[]): Promise<any> {
    return this._post('/api/access-control/public-access/by-concept-ids', conceptIdList, 'Failed to get public access list');
  }

  /**
   * Revokes public access for a concept.
   * @param request - Object containing conceptId, accessList.
   * @returns Promise<any> - API response.
   */
  static async revokePublicAccess(request: {
    conceptId: number;
    accessList: string[];
  }): Promise<any> {
    return this._delete('/api/access-control/public-access', request, 'Failed to revoke public access');
  }

  /**
   * Checks if an entity has a specific permission for a concept.
   * @param params - Object containing conceptId, permission, entityId.
   * @returns Promise<any> - API response.
   */
  static async checkAccess(params: {
    conceptId: number;
    permission: string;
    entityId: number;
  }): Promise<any> {
    const url = `/api/access-control/access/check?conceptId=${params.conceptId}&permission=${encodeURIComponent(params.permission)}&entityId=${params.entityId}`;
    return this._get(url, 'Failed to check access');
  }

  /**
   * Checks if a user has a specific access for a concept.
   * @param request - Object containing conceptId, access, userId.
   * @returns Promise<any> - API response.
   */
  static async checkAccessByUser(request: {
    conceptId: number;
    access: string;
    userId: number;
  }): Promise<any> {
    return this._post('/api/access-control/user-access/check', request, 'Failed to check access by user');
  }

  /**
   * Filters concepts by access for a user.
   * @param request - Object containing userId, access, conceptIdList, connectionIdList.
   * @returns Promise<any> - API response.
   */
  static async filterConceptsByAccess(request: {
    userId: number;
    access: string;
    conceptIdList?: number[];
    connectionIdList?: number[];
  }): Promise<any> {
    return this._post('/api/access-control/concepts/filter-by-access', request, 'Failed to filter concepts by access');
  }

  /**
   * Checks access for a user on multiple concepts in bulk.
   * @param request - Object containing userId, access, conceptIdList.
   * @returns Promise<any> - API response.
   */
  static async checkAccessOfConceptBulk(request: {
    userId: number;
    access: string;
    conceptIdList: number[];
  }): Promise<any> {
    return this._post('/api/access-control/concepts/check-access-bulk', request, 'Failed to check access of concept bulk');
  }

  /**
   * Gets entities with a specific access for a concept.
   * @param conceptId - The concept ID.
   * @param access - The access type.
   * @returns Promise<any> - API response.
   */
  static async getEntitiesByAccess(conceptId: number, access: string): Promise<any> {
    const url = `/api/access-control/entities/by-access?conceptId=${conceptId}&access=${encodeURIComponent(access)}`;
    return this._get(url, 'Failed to get entities by access');
  }

  /**
   * Gets all entities with any access for a concept.
   * @param conceptId - The concept ID.
   * @returns Promise<any> - API response.
   */
  static async getEntitiesWithAccess(conceptId: number): Promise<any> {
    const url = `/api/access-control/entities/with-access?conceptId=${conceptId}`;
    return this._get(url, 'Failed to get entities with access');
  }

  /**
   * Gets access groups by entity.
   * @param entityId - Optional entity ID.
   * @returns Promise<any> - API response.
   */
  static async getAccessGroupByEntity(entityId?: number): Promise<any> {
    const url = `/api/access-control/access-group/by-entity${entityId !== undefined ? `?entityId=${entityId}` : ''}`;
    return this._get(url, 'Failed to get access group by entity');
  }

  /**
   * Gets access groups by user.
   * @param userId - Optional user ID.
   * @returns Promise<any> - API response.
   */
  static async getAccessGroupByUser(userId?: number): Promise<any> {
    const url = `/api/access-control/access-group/by-user${userId !== undefined ? `?userId=${userId}` : ''}`;
    return this._get(url, 'Failed to get access group by user');
  }

  /**
   * Gets public access by access IDs.
   * @param accessIdList - Array of access IDs.
   * @returns Promise<any> - API response.
   */
  static async getPublicAccessByAccessIds(accessIdList: number[]): Promise<any> {
    return this._post('/api/access-control/public-access/by-access-ids', accessIdList, 'Failed to get public access by access ids');
  }

  /**
   * Gets the full access mapping for public users.
   * @returns Promise<any> - API response.
   */
  static async getFullAccessMappingForPublic(): Promise<any> {
    return this._get('/api/access-control/concepts/by-public-access', 'Failed to get full access mapping for public');
  }

  /**
   * Assigns public access for all users.
   * @returns Promise<any> - API response.
   */
  static async assignPublicAccessForAllUser(): Promise<any> {
    return this._post('/api/access-control/public-access/assign-for-all-users', undefined, 'Failed to assign public access for all user');
  }

  /**
   * Assigns access by connection type for users.
   * @returns Promise<any> - API response.
   */
  static async assignAccessByConncetionTypeOfUser(): Promise<any> {
    return this._post('/api/access-control/access/by-connection-type', undefined, 'Failed to assign access by connection type of user');
  }

  /**
   * Sets access inheritance for a concept.
   * @param request - Object containing mainConceptId, enable, connectionTypeId.
   * @returns Promise<any> - API response.
   */
  static async setAccessInheritance(request: {
    mainConceptId: number;
    enable: boolean;
    connectionTypeId?: number;
  }): Promise<any> {
    return this._post('/api/access-control/access-inheritance', request, 'Failed to set access inheritance');
  }

  /**
   * Gets the status of access inheritance for a concept.
   * @param mainConceptId - The main concept ID.
   * @param connectionTypeId - The connection type ID (default: 999).
   * @returns Promise<any> - API response.
   */
  static async getAccessInheritanceStatus(mainConceptId: number, connectionTypeId: number = 999): Promise<any> {
    const url = `/api/access-control/access-inheritance/status?mainConceptId=${mainConceptId}&connectionTypeId=${connectionTypeId}`;
    return this._get(url, 'Failed to get access inheritance status');
  }

  // --- Private helper methods ---
  /**
   * Performs a GET request to the backend API.
   * @param path - The API path.
   * @param errorMsg - Error message to throw if request fails.
   * @returns Promise<any> - API response.
   */
  private static async _get(path: string, errorMsg: string): Promise<any> {
    const response = await fetch(`${this.baseUrl}${path}`, { method: 'GET' });
    if (!response.ok) throw new Error(errorMsg);
    return response.json();
  }

  /**
   * Performs a POST request to the backend API.
   * @param path - The API path.
   * @param body - Request body.
   * @param errorMsg - Error message to throw if request fails.
   * @returns Promise<any> - API response.
   */
  private static async _post(path: string, body?: any, errorMsg?: string): Promise<any> {
    const response = await fetch(`${this.baseUrl}${path}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      ...(body !== undefined ? { body: JSON.stringify(body) } : {}),
    });
    if (!response.ok) throw new Error(errorMsg || 'Request failed');
    return response.json();
  }

  /**
   * Performs a DELETE request to the backend API.
   * @param path - The API path.
   * @param body - Optional request body.
   * @param errorMsg - Error message to throw if request fails.
   * @returns Promise<any> - API response.
   */
  private static async _delete(path: string, body?: any, errorMsg?: string): Promise<any> {
    const response = await fetch(`${this.baseUrl}${path}`, {
      method: 'DELETE',
      headers: body ? { 'Content-Type': 'application/json' } : undefined,
      ...(body ? { body: JSON.stringify(body) } : {}),
    });
    if (!response.ok) throw new Error(errorMsg || 'Request failed');
    return response.json();
  }
}
// function mapToPermissionSet(access: string): PermissionSet {
//   // Map access string to PermissionSet
//   switch (access.toLowerCase()) {
//     case 'read':
//       return PermissionSet.Read
//     case 'write':
//       return PermissionSet.Write
//     case 'execute':
//       return PermissionSet.Execute
//     case 'delete':
//       return PermissionSet.Delete
//     default:
//       throw new Error(`Unknown access type: ${access}`)
//   }
// }
