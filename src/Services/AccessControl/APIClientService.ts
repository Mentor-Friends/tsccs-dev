/**
 * APIClientService
 *
 * API client service for Access Control endpoints.
 * Provides typed HTTP methods for all access control API operations.
 *
 * This is the TypeScript equivalent of the C# APIClientService class.
 */

import { BaseUrl } from "../../app";
import {
  AccessRequest,
  AccessResult,
  AccessControlAPIResponse,
  BulkAccessRequest,
  BulkCheckAccessRequest,
  AccessInheritanceRequest,
  SuperAdminRequest,
  BulkConceptAccessRequest,
  ConceptAccessRequest
} from '../../DataStructures/AccessControl/AccessControlModels';

export interface IAPIClientService {
  // Single access operations
  assignAccessAsync(request: AccessRequest): Promise<AccessControlAPIResponse<AccessResult>>;
  checkAccessAsync(request: AccessRequest): Promise<AccessControlAPIResponse<AccessResult>>;
  revokeAccessAsync(request: AccessRequest): Promise<AccessControlAPIResponse<AccessResult>>;

  // Bulk access operations
  assignAccessBulkAsync(request: BulkAccessRequest): Promise<AccessControlAPIResponse<AccessResult[]>>;
  assignConceptAccessBulkAsync(request: BulkConceptAccessRequest): Promise<AccessControlAPIResponse<AccessResult[]>>;
  revokeAccessBulkAsync(request: BulkAccessRequest): Promise<AccessControlAPIResponse<AccessResult[]>>;
  revokeConceptAccessBulkAsync(request: BulkConceptAccessRequest): Promise<AccessControlAPIResponse<AccessResult[]>>;
  checkAccessBulkAsync(request: BulkCheckAccessRequest): Promise<AccessControlAPIResponse<AccessResult[]>>;

  // Get access by ID
  getAccessByIdAsync(accessId: number): Promise<AccessControlAPIResponse<AccessResult[]>>;

  // Access Inheritance
  setAccessInheritanceAsync(request: AccessInheritanceRequest): Promise<AccessControlAPIResponse>;
  getAccessInheritanceStatusAsync(accessId: number, connectionTypeId?: number): Promise<AccessControlAPIResponse>;

  // Super Admin
  assignSuperAdminAccessAsync(request: SuperAdminRequest): Promise<AccessControlAPIResponse>;
  revokeSuperAdminAccessAsync(request: SuperAdminRequest): Promise<AccessControlAPIResponse>;
  checkSuperAdminStatusAsync(accessId: number): Promise<AccessControlAPIResponse>;
}

export class APIClientService implements IAPIClientService {

  // #region Private Helper Methods

  private static get baseUrl() {
    return BaseUrl.ACCESS_CONTROL_BASE_URL;
  }

  private static async getAsync<T>(url: string): Promise<T> {
    const response = await fetch(`${this.baseUrl}${url}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`GET '${url}' failed with status ${response.status}`);
    }

    const result = await response.json() as T;
    if (result === null || result === undefined) {
      throw new Error(`The response for GET '${url}' returned null.`);
    }

    return result;
  }

  private static async postAsync<T>(url: string, body: unknown): Promise<T> {
    const response = await fetch(`${this.baseUrl}${url}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });

    if (!response.ok) {
      throw new Error(`POST '${url}' failed with status ${response.status}`);
    }

    const result = await response.json() as T;
    if (result === null || result === undefined) {
      throw new Error(`The response for POST '${url}' returned null.`);
    }

    return result;
  }

  private static async deleteAsync<T>(url: string, body?: unknown): Promise<T> {
    const options: RequestInit = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    };

    if (body !== undefined && body !== null) {
      options.body = JSON.stringify(body);
    }

    const response = await fetch(`${this.baseUrl}${url}`, options);

    if (!response.ok) {
      throw new Error(`DELETE '${url}' failed with status ${response.status}`);
    }

    const result = await response.json() as T;
    if (result === null || result === undefined) {
      throw new Error(`The response for DELETE '${url}' returned null.`);
    }

    return result;
  }

  // #endregion

  // #region Single Access Operations

  /**
   * Assign access to an entity
   */
  async assignAccessAsync(request: AccessRequest): Promise<AccessControlAPIResponse<AccessResult>> {
    return APIClientService.postAsync<AccessControlAPIResponse<AccessResult>>(
      '/access/assign',
      request
    );
  }

  /**
   * Check if an entity has access
   */
  async checkAccessAsync(request: AccessRequest): Promise<AccessControlAPIResponse<AccessResult>> {
    return APIClientService.postAsync<AccessControlAPIResponse<AccessResult>>(
      '/access/check',
      request
    );
  }

  /**
   * Revoke access from an entity
   */
  async revokeAccessAsync(request: AccessRequest): Promise<AccessControlAPIResponse<AccessResult>> {
    return APIClientService.deleteAsync<AccessControlAPIResponse<AccessResult>>(
      '/access/revoke',
      request
    );
  }

  // #endregion

  // #region Bulk Access Operations

  /**
   * Assign access to multiple targets in bulk
   */
  async assignAccessBulkAsync(request: BulkAccessRequest): Promise<AccessControlAPIResponse<AccessResult[]>> {
    return APIClientService.postAsync<AccessControlAPIResponse<AccessResult[]>>(
      '/access/assign/bulk',
      request
    );
  }

  /**
   * Revoke access from multiple targets in bulk
   */
  async revokeAccessBulkAsync(request: BulkAccessRequest): Promise<AccessControlAPIResponse<AccessResult[]>> {
    return APIClientService.deleteAsync<AccessControlAPIResponse<AccessResult[]>>(
      '/access/revoke/bulk',
      request
    );
  }

  /**
   * Check access for multiple targets in bulk
   */
  async checkAccessBulkAsync(request: BulkCheckAccessRequest): Promise<AccessControlAPIResponse<AccessResult[]>> {
    return APIClientService.postAsync<AccessControlAPIResponse<AccessResult[]>>(
      '/access/check/bulk',
      request
    );
  }

  // #endregion

  // #region Get Access by ID

  /**
   * Get all access entries for a specific accessId
   */
  async getAccessByIdAsync(accessId: number): Promise<AccessControlAPIResponse<AccessResult[]>> {
    return APIClientService.getAsync<AccessControlAPIResponse<AccessResult[]>>(
      `/access/${accessId}`
    );
  }

  // #endregion

  // #region Access Inheritance

  /**
   * Set access inheritance for an access ID
   */
  async setAccessInheritanceAsync(request: AccessInheritanceRequest): Promise<AccessControlAPIResponse> {
    return APIClientService.postAsync<AccessControlAPIResponse>(
      '/access/inheritance',
      request
    );
  }

  /**
   * Get access inheritance status
   */
  async getAccessInheritanceStatusAsync(accessId: number, connectionTypeId: number = 999): Promise<AccessControlAPIResponse> {
    return APIClientService.getAsync<AccessControlAPIResponse>(
      `/access/inheritance/status?accessId=${accessId}&connectionTypeId=${connectionTypeId}`
    );
  }

  // #endregion

  // #region Super Admin

  /**
   * Assign super admin access
   */
  async assignSuperAdminAccessAsync(request: SuperAdminRequest): Promise<AccessControlAPIResponse> {
    return APIClientService.postAsync<AccessControlAPIResponse>(
      '/access/super-admin',
      request
    );
  }

  /**
   * Revoke super admin access
   */
  async revokeSuperAdminAccessAsync(request: SuperAdminRequest): Promise<AccessControlAPIResponse> {
    return APIClientService.deleteAsync<AccessControlAPIResponse>(
      '/access/super-admin',
      request
    );
  }

  /**
   * Check super admin status
   */
  async checkSuperAdminStatusAsync(accessId: number): Promise<AccessControlAPIResponse> {
    return APIClientService.getAsync<AccessControlAPIResponse>(
      `/access/super-admin?accessId=${accessId}`
    );
  }

  /**
   * Create a new standalone access record for a concept
   */
  async assignConceptAccessAsync(request: ConceptAccessRequest): Promise<AccessControlAPIResponse<AccessResult>> {
    return APIClientService.postAsync<AccessControlAPIResponse<AccessResult>>(
      '/access/concept/assign',
      request
    );
  }

  /**
   * Create new standalone access records for multiple concepts in bulk
   */
  async assignConceptAccessBulkAsync(request: BulkConceptAccessRequest): Promise<AccessControlAPIResponse<AccessResult[]>> {
    return APIClientService.postAsync<AccessControlAPIResponse<AccessResult[]>>(
      '/access/concept/assign/bulk',
      request
    );
  }

  /**
   * Revoke access records for multiple concepts in bulk
   */
  async revokeConceptAccessBulkAsync(request: BulkConceptAccessRequest): Promise<AccessControlAPIResponse<AccessResult[]>> {
    return APIClientService.postAsync<AccessControlAPIResponse<AccessResult[]>>(
      '/access/concept/revoke/bulk',
      request
    );
  }

  // #endregion
}

export default APIClientService;
