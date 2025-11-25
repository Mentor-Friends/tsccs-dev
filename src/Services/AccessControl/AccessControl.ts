// src/services/AccessControlService.ts

import { BaseUrl } from "../../app";

/**
 * Service for managing access control operations.
 * Provides methods to assign, revoke, and query access for concepts, entities, and users.
 */
export class AccessControlService {
  /**
   * Assigns access to a specific entity for a concept.
   * @param request - AddAccessByEntityRequest
   */
  static async assignAccessToEntity(request: {
    conceptId: number;
    access: string;
    entityId: number;
    makePublic: boolean;
    nestedAccessLevel?: number;
  }): Promise<any> {
    return this._post('/api/access-control/access', request, 'Failed to assign access to entity');
  }

  /**
   * Assigns public access to a concept or list of concepts.
   * @param request - AddPublicAccessToConcept
   */
  static async assignPublicAccess(request: {
    conceptId: number;
    conceptIdList?: number[];
    accessList: string[];
    nestedAccessLevel?: number;
  }): Promise<any> {
    return this._post('/api/access-control/public-access', {
      ...request,
      conceptIdList: request.conceptIdList ?? [],
      accessList: request.accessList ?? [],
      nestedAccessLevel: request.nestedAccessLevel ?? 0,
    }, 'Failed to assign public access');
  }

  /**
   * Assigns public access to multiple concepts in bulk.
   * @param request - AddPublicAccessToConcept
   */
  static async assignPublicAccessBlukConcept(request: {
    conceptId: number;
    conceptIdList?: number[];
    accessList: string[];
    nestedAccessLevel?: number;
  }): Promise<any> {
    return this._post('/api/access-control/public-access', {
      ...request,
      conceptIdList: request.conceptIdList ?? [],
      accessList: request.accessList ?? [],
      nestedAccessLevel: request.nestedAccessLevel ?? 0,
    }, 'Failed to assign public access');
  }

  /**
   * Assigns access to multiple entities and concepts in bulk.
   * @param request - AddAccessByEntityBulkRequest
   */
  static async assignAccessToEntityBulk(request: {
    conceptId: number;
    conceptIdList?: number[];
    entityIdList?: number[];
    accessList?: string[];
    nestedAccessLevel?: number;
  }): Promise<any> {
    return this._post('/api/access-control/access/bulk', {
      ...request,
      conceptIdList: request.conceptIdList ?? [],
      entityIdList: request.entityIdList ?? [],
      accessList: request.accessList ?? [],
      nestedAccessLevel: request.nestedAccessLevel ?? 0,
    }, 'Failed to assign access in bulk');
  }

  /**
   * Assigns access to a user for a concept.
   * @param request - AddAccessByUserRequest
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
   * @param params - conceptId, access, entityId
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
   * @param request - AddAccessByEntityBulkRequest
   */
  static async revokeAccessBulk(request: {
    conceptId: number;
    conceptIdList?: number[];
    entityIdList?: number[];
    accessList?: string[];
    nestedAccessLevel?: number;
  }): Promise<any> {
    return this._delete('/api/access-control/access/bulk', {
      ...request,
      conceptIdList: request.conceptIdList ?? [],
      entityIdList: request.entityIdList ?? [],
      accessList: request.accessList ?? [],
      nestedAccessLevel: request.nestedAccessLevel ?? 0,
    }, 'Failed to revoke access in bulk');
  }

  /**
   * Gets the access list for a concept and user.
   */
  static async getAccessList(conceptId: number, userId: number): Promise<any> {
    const url = `/api/access-control/access-list?conceptId=${conceptId}&userId=${userId}`;
    return this._get(url, 'Failed to get access list');
  }

  /**
   * Gets the public access list for a list of concept IDs.
   */
  static async getPublicAccessList(conceptIdList: number[]): Promise<any> {
    return this._post('/api/access-control/public-access/by-concept-ids', conceptIdList, 'Failed to get public access list');
  }

  /**
   * Revokes public access for a concept.
   * @param request - AddPublicAccessToConcept
   */
  static async revokePublicAccess(request: {
    conceptId: number;
    conceptIdList?: number[];
    accessList: string[];
    nestedAccessLevel?: number;
  }): Promise<any> {
    return this._delete('/api/access-control/public-access', {
      ...request,
      conceptIdList: request.conceptIdList ?? [],
      accessList: request.accessList ?? [],
      nestedAccessLevel: request.nestedAccessLevel ?? 0,
    }, 'Failed to revoke public access');
  }

  /**
   * Checks if an entity has a specific permission for a concept.
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
   * @param request - AddAccessByUserRequest
   */
  static async checkAccessByUser(request: {
    conceptId: number;
    access: string;
    userId: number;
    makePublic?: boolean;
  }): Promise<any> {
    return this._post('/api/access-control/user-access/check', request, 'Failed to check access by user');
  }

  /**
   * Filters concepts by access for a user.
   * @param request - CheckAccessBulk
   */
  static async filterConceptsByAccess(request: {
    conceptIdList?: number[];
    connectionIdList?: number[];
    access: string;
    userId: number;
  }): Promise<any> {
    return this._post('/api/access-control/concepts/filter-by-access', request, 'Failed to filter concepts by access');
  }

  /**
   * Checks access for a user on multiple concepts in bulk.
   * @param request - CheckAccessBulk
   */
  static async checkAccessOfConceptBulk(request: {
    conceptIdList?: number[];
    connectionIdList?: number[];
    access: string;
    userId: number;
  }): Promise<any> {
    return this._post('/api/access-control/concepts/check-access-bulk', request, 'Failed to check access of concept bulk');
  }

  /**
   * Gets entities with a specific access for a concept.
   */
  static async getEntitiesByAccess(conceptId: number, access: string): Promise<any> {
    const url = `/api/access-control/entities/by-access?conceptId=${conceptId}&access=${encodeURIComponent(access)}`;
    return this._get(url, 'Failed to get entities by access');
  }

  /**
   * Gets all entities with any access for a concept.
   */
  static async getEntitiesWithAccess(conceptId: number): Promise<any> {
    const url = `/api/access-control/entities/with-access?conceptId=${conceptId}`;
    return this._get(url, 'Failed to get entities with access');
  }

  /**
   * Gets access groups by entity.
   */
  static async getAccessGroupByEntity(entityId?: number): Promise<any> {
    const url = `/api/access-control/access-group/by-entity${entityId !== undefined ? `?entityId=${entityId}` : ''}`;
    return this._get(url, 'Failed to get access group by entity');
  }

  /**
   * Gets access groups by user.
   */
  static async getAccessGroupByUser(userId?: number): Promise<any> {
    const url = `/api/access-control/access-group/by-user${userId !== undefined ? `?userId=${userId}` : ''}`;
    return this._get(url, 'Failed to get access group by user');
  }

  /**
   * Gets public access by access IDs.
   */
  static async getPublicAccessByAccessIds(accessIdList: number[]): Promise<any> {
    return this._post('/api/access-control/public-access/by-access-ids', accessIdList, 'Failed to get public access by access ids');
  }

  /**
   * Gets the full access mapping for public users.
   */
  static async getFullAccessMappingForPublic(): Promise<any> {
    return this._get('/api/access-control/concepts/by-public-access', 'Failed to get full access mapping for public');
  }

  /**
   * Assigns public access for all users.
   */
  static async assignPublicAccessForAllUser(): Promise<any> {
    return this._post('/api/access-control/public-access/assign-for-all-users', undefined, 'Failed to assign public access for all user');
  }

  /**
   * Assigns access by connection type for users.
   */
  static async assignAccessByConncetionTypeOfUser(): Promise<any> {
    return this._post('/api/access-control/access/by-connection-type', undefined, 'Failed to assign access by connection type of user');
  }

  /**
   * Sets access inheritance for a concept.
   * @param request - AccessInheritanceRequest
   */
  static async setAccessInheritance(request: {
    mainConceptId: number;
    connectionTypeId: number;
    enable: boolean;
  }): Promise<any> {
    return this._post('/api/access-control/access-inheritance', request, 'Failed to set access inheritance');
  }

  /**
   * Sets access inheritance for multiple concepts in bulk.
   * @param request - BulkAccessInheritanceRequest
   */
  static async setAccessInheritanceBulk(request: {
    items: Array<{
      mainConceptId: number;
      connectionTypeIds: number[];
    }>;
    enable: boolean;
  }): Promise<any> {
    return this._post('/api/access-control/access-inheritance/bulk', request, 'Failed to set access inheritance in bulk');
  }

  /**
   * Gets the status of access inheritance for a concept.
   */
  static async getAccessInheritanceStatus(mainConceptId: number, connectionTypeId: number = 999): Promise<any> {
    const url = `/api/access-control/access-inheritance/status?mainConceptId=${mainConceptId}&connectionTypeId=${connectionTypeId}`;
    return this._get(url, 'Failed to get access inheritance status');
  }

  /**
   * Gets the access matrix for a given access ID.
   */
  static async getAccessMatrix(accessId: number): Promise<any> {
    const url = `/api/access-control/access-matrix?AccessId=${accessId}`;
    return this._get(url, 'Failed to get access matrix');
  }

  /**
   * Assigns super admin access.
   * @param request - SuperAdminRequest
   */
  static async assignSuperAdminAccess(request: {
    entityConceptId: number;
  }): Promise<any> {
    return this._post('/api/access-control/super-admin-access', request, 'Failed to assign super admin access');
  }

  /**
   * Revokes super admin access.
   * @param request - SuperAdminRequest
   */
  static async revokeSuperAdminAccess(request: {
    entityConceptId: number;
  }): Promise<any> {
    return this._delete('/api/access-control/super-admin-access', request, 'Failed to revoke super admin access');
  }

  /**
   * Gets super admin access info for an entity concept.
   */
  static async getSuperAdminAccess(entityConceptId: number): Promise<any> {
    const url = `/api/access-control/super-admin-access?entityConceptId=${entityConceptId}`;
    return this._get(url, 'Failed to get super admin access');
  }

  static async isSuperAdmin(entityConceptId: number): Promise<any> {
    const superAdminInfo = await this.getSuperAdminAccess(entityConceptId);
    return superAdminInfo?.data ?? false;
  }

  // --- Private helper methods ---

  private static get baseUrl() {
    return BaseUrl.ACCESS_CONTROL_BASE_URL;
  }

  private static async _get(path: string, errorMsg: string): Promise<any> {
    const response = await fetch(`${this.baseUrl}${path}`, { method: 'GET' });
    if (!response.ok) throw new Error(errorMsg);
    return response.json();
  }

  private static async _post(path: string, body?: any, errorMsg?: string): Promise<any> {
    const response = await fetch(`${this.baseUrl}${path}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      ...(body !== undefined ? { body: JSON.stringify(body) } : {}),
    });
    if (!response.ok) throw new Error(errorMsg || 'Request failed');
    return response.json();
  }

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

export default AccessControlService;
