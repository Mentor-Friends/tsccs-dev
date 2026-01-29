/**
 * AccessControlService
 *
 * This service provides access control functionality including:
 * - Check access for concepts with complex permission logic
 * - Assign and revoke access permissions
 * - Bulk operations for access management
 * - Super admin checks
 * - Access inheritance management
 *
 * This is the TypeScript equivalent of the C# AccessControlService class.
 */

import GetTheConcept from '../GetTheConcept';
import {
  AccessResult,
  BulkAccessRequest,
  AccessInheritanceRequest,
  SuperAdminRequest,
  BulkConceptAccessRequest
} from '../../DataStructures/AccessControl/AccessControlModels';
import { APIClientService, IAPIClientService } from './APIClientService';
import { ConceptsData } from '../../DataStructures/ConceptData';

/**
 * Interface for the Access Control Service
 */
export interface IAccessControlService {
  // Check Access
  checkAccess(conceptId: number, permission: string, entityId?: number | null): Promise<boolean>;
  getConceptIdsWithPermission(permission: string, conceptIdsFilter: number[], entityId?: number | null): Promise<number[]>;

  // Assign Access
  // assignAccess(conceptId: number, permission: string, entityId?: number | null): Promise<boolean>;
  assignAccess(request: BulkConceptAccessRequest): Promise<AccessResult[]>;

  // Revoke Access
  revokeAccess(conceptId: number, permission: string, entityId?: number | null): Promise<boolean>;
  revokeAccessBulk(request: BulkConceptAccessRequest): Promise<AccessResult[]>;

  // Access Inheritance
  setAccessInheritance(conceptId: number): Promise<boolean>;
  getAccessInheritanceStatus(conceptId: number, connectionTypeId?: number): Promise<boolean>;
  setAccessInheritanceStatus(conceptId: number, isEnabled: boolean, connectionTypeId?: number): Promise<boolean>;

  // Super Admin
  isSuperAdmin(entityId: number): Promise<boolean>;
  assignSuperAdmin(entityId: number): Promise<number>;
  revokeSuperAdmin(entityId: number): Promise<string>;
}

export class AccessControlService implements IAccessControlService {
  private readonly apiClient: IAPIClientService;

  constructor(
    apiClient?: IAPIClientService
  ) {
    this.apiClient = apiClient || new APIClientService();
  }

  // #region Check Access

  /**
   * Check whether a user/entity has the specified permission.
   * Returns true if allowed, false otherwise.
   *
   * @param conceptId - The ID of the concept to check access for
   * @param permission - The permission to check (read, write, execute, delete)
   * @param entityId - Optional entity ID to check access for
   * @returns Promise<boolean> - True if access is granted, false otherwise
   */
  async checkAccess(conceptId: number, permission: string, entityId?: number | null): Promise<boolean> {
    if (!permission || permission.trim() === '') {
      throw new Error('Permission is required');
    }

    permission = permission.toLowerCase();

    const concept = await GetTheConcept(conceptId);
    const accessId = concept.accessId ?? 0;

    const typeConcept = await GetTheConcept(concept.typeId);
    const typeAccessId = typeConcept.accessId ?? 0;

    // If own concept → allow
    const entityConcept = await GetTheConcept(entityId ?? 0);
    if (entityConcept.userId === concept.userId) return true;

    // Type concept → allow
    if (concept.referentId === null || concept.referentId === undefined || concept.referentId === 0) return true;

    // Public concept → allow
    if (concept.userId === 999 && (concept.accessId ?? 0) < 10000) return true;

    // Super-admin check
    if (await this.isSuperAdmin(entityId ?? 0)) return true;

    // Private concepts → deny
    if (concept.userId > 999 && (concept.accessId ?? 0) < 10000) return false;

    // Public concepts or private with assigned accessId
    if (await this.checkAccessInternal(typeAccessId, permission, null)) return true;
    if (await this.checkAccessInternal(accessId, permission, null)) return true;

    // Check with entityId
    if (await this.checkAccessInternal(typeAccessId, permission, entityId)) return true;
    return await this.checkAccessInternal(accessId, permission, entityId);
  }

  /**
   * Get all accessIds which have a certain permission for an entity.
   * Optional filter by a list of accessIds.
   *
   * @param permission - The permission to check
   * @param conceptIdsFilter - List of concept IDs to filter
   * @param entityId - Optional entity ID
   * @returns Promise<number[]> - Array of concept IDs that have the permission
   */
  async getConceptIdsWithPermission(
    permission: string,
    conceptIdsFilter: number[],
    entityId?: number | null
  ): Promise<number[]> {
    if (!permission || permission.trim() === '') {
      throw new Error('Permission is required');
    }

    permission = permission.toLowerCase();
    const results: number[] = [];

    for (const conceptId of conceptIdsFilter) {
      if (await this.checkAccess(conceptId, permission, entityId)) {
        results.push(conceptId);
      }
    }

    return results;
  }

  // #endregion

  // #region Assign Access

  // /**
  //  * Assign access permission to an entity
  //  *
  //  * @param conceptId - The concept ID to assign access for
  //  * @param permission - The permission to assign
  //  * @param entityId - Optional entity ID
  //  * @returns Promise<boolean> - True if successful, false otherwise
  //  */
  // async assignAccess(conceptId: number, permission: string, entityId?: number | null): Promise<boolean> {
  //   if (!permission || permission.trim() === '') {
  //     throw new Error('Permission is required');
  //   }

  //   try {
  //     const apiResponse = await this.apiClient.assignConceptAccessAsync({
  //       conceptId,
  //       permission,
  //       entityId
  //     });

  //     return apiResponse?.status === true;
  //   } catch (error) {
  //     throw new Error(`Error assigning access for conceptId ${conceptId}, permission '${permission}', entityId ${entityId}: ${error}`);
  //   }
  // }

  /**
   * Assign access permissions to multiple targets in bulk
   *
   * @param request - Bulk access request containing targets
   * @returns Promise<AccessResult[]> - Array of access results
   */
  async assignAccess(request: BulkConceptAccessRequest): Promise<AccessResult[]> {
    if (!request || !request.conceptIds || request.conceptIds.length === 0) {
      throw new Error('Request must contain at least one conceptId');
    }

    try {
      const apiResponse = await this.apiClient.assignConceptAccessBulkAsync(request);

      if (apiResponse?.status !== true) {
        throw new Error(apiResponse?.message || 'Failed to assign bulk access');
      }

      // If API returned explicit results, return them
      if (apiResponse?.data && Array.isArray(apiResponse.data)) {
        return apiResponse.data as AccessResult[];
      }
      return [];
    } catch (error) {
      console.error('Failed to assign bulk access:', error);
      throw error;
    }
  }

  // #endregion

  // #region Revoke Access

  /**
   * Revoke access permission from an entity
   *
   * @param conceptId - The concept ID to revoke access for
   * @param permission - The permission to revoke
   * @param entityId - Optional entity ID
   * @returns Promise<boolean> - True if successfully revoked, false otherwise
   */
  async revokeAccess(conceptId: number, permission: string, entityId?: number | null): Promise<boolean> {
    try {
      const concept = await GetTheConcept(conceptId);
      const accessId = concept.accessId ?? 0;

      if (accessId === 0) {
        throw new Error(`Concept with ID ${conceptId} does not have a valid accessId`);
      }

      const apiResponse = await this.apiClient.revokeAccessAsync({
        accessId,
        permission,
        entityId
      });

      return apiResponse?.status === true;
    } catch (error) {
      throw new Error(`Error revoking access for concept ${conceptId}, permission '${permission}', entityId ${entityId}: ${error}`);
    }
  }

  async revokeAccessBulk(request: BulkConceptAccessRequest): Promise<AccessResult[]> {
    if (!request || !request.conceptIds || request.conceptIds.length === 0) {
      throw new Error('Request must contain at least one conceptId');
    }

    try {
      const apiResponse = await this.apiClient.revokeConceptAccessBulkAsync(request);

      if (apiResponse?.status !== true) {
        throw new Error(apiResponse?.message || 'Failed to revoke bulk concept access');
      }

      if (apiResponse?.data && Array.isArray(apiResponse.data)) {
        return apiResponse.data as AccessResult[];
      }
      return [];
    } catch (error) {
      console.error('Failed to revoke bulk concept access:', error);
      throw error;
    }
  }

  // #endregion

  // #region Access Inheritance

  /**
   * Set access inheritance for a concept
   *
   * @param conceptId - The concept ID to set inheritance for
   * @returns Promise<boolean> - True if successful, false otherwise
   */
  async setAccessInheritance(conceptId: number): Promise<boolean> {
    try {
      const concept = await GetTheConcept(conceptId);
      if (!concept || concept.id === 0) {
        throw new Error(`Concept with ID ${conceptId} not found`);
      }

      const request: AccessInheritanceRequest = {
        accessId: concept.accessId,
        connectionTypeId: 999 // Default connection type ID
      };

      const response = await this.apiClient.setAccessInheritanceAsync(request);
      return response?.status ?? false;
    } catch (error) {
      throw new Error(`Error setting access inheritance for conceptId ${conceptId}: ${error}`);
    }
  }

  /**
   * Get access inheritance status for a concept
   *
   * @param conceptId - The concept ID to check
   * @param connectionTypeId - The connection type ID (default: 999)
   * @returns Promise<boolean> - True if inheritance is enabled, false otherwise
   */
  async getAccessInheritanceStatus(conceptId: number, connectionTypeId: number = 999): Promise<boolean> {
    try {
      const concept = await GetTheConcept(conceptId);
      if (!concept || concept.id === 0) {
        throw new Error(`Concept with ID ${conceptId} not found`);
      }

      const accessId = concept.accessId ?? 0;
      if (accessId === 0) {
        throw new Error(`Concept with ID ${conceptId} does not have a valid accessId`);
      }

      const response = await this.apiClient.getAccessInheritanceStatusAsync(accessId, connectionTypeId);

      if (response?.status === true && response.data !== undefined) {
        if (typeof response.data === 'boolean') {
          return response.data;
        }
        if (typeof response.data === 'string') {
          return response.data.toLowerCase() === 'true';
        }
      }

      return false;
    } catch (error) {
      throw new Error(`Error getting access inheritance status for conceptId ${conceptId}, connectionTypeId ${connectionTypeId}: ${error}`);
    }
  }

  /**
   * Set access inheritance status for a concept
   *
   * @param conceptId - The concept ID to set inheritance status for
   * @param isEnabled - Whether to enable or disable inheritance
   * @param connectionTypeId - The connection type ID (default: 999)
   * @returns Promise<boolean> - True if successful, false otherwise
   */
  async setAccessInheritanceStatus(conceptId: number, isEnabled: boolean, connectionTypeId: number = 999): Promise<boolean> {
    try {
      const concept = await GetTheConcept(conceptId);
      if (!concept || concept.id === 0) {
        throw new Error(`Concept with ID ${conceptId} not found`);
      }

      const request: AccessInheritanceRequest = {
        accessId: concept.accessId,
        enable: isEnabled,
        connectionTypeId
      };

      const response = await this.apiClient.setAccessInheritanceAsync(request);

      if (response?.status === true) {
        if (typeof response.data === 'number') {
          concept.accessId = response.data;
          // Update concept in cache
          ConceptsData.AddConcept(concept);
        }
        return true;
      }

      return response?.status ?? false;
    } catch (error) {
      throw new Error(`Error setting access inheritance status for conceptId ${conceptId}: ${error}`);
    }
  }

  // #endregion

  // #region Super Admin

  /**
   * Check if an entity is a super admin
   *
   * @param entityId - The entity ID to check
   * @returns Promise<boolean> - True if super admin, false otherwise
   */
  async isSuperAdmin(entityId: number): Promise<boolean> {
    try {
      if (entityId === 0) return false;

      const entityConcept = await GetTheConcept(entityId);
      if (!entityConcept || entityConcept.id === 0) {
        throw new Error(`Entity with ID ${entityId} not found`);
      }

      const accessId = entityConcept.accessId ?? 0;
      const response = await this.apiClient.checkSuperAdminStatusAsync(accessId);

      if (response?.status === true && response.data !== undefined) {
        if (typeof response.data === 'boolean') {
          return response.data;
        }
        if (typeof response.data === 'string') {
          return response.data.toLowerCase() === 'true';
        }
      }

      return false;
    } catch (error) {
      throw new Error(`Error checking super admin status for entityId ${entityId}: ${error}`);
    }
  }

  /**
   * Assign super admin access to an entity
   *
   * @param entityId - The entity ID to grant super admin access to
   * @returns Promise<number> - The entity ID if successful, 0 otherwise
   */
  async assignSuperAdmin(entityId: number): Promise<number> {
    try {
      const entityConcept = await GetTheConcept(entityId);
      if (!entityConcept || entityConcept.id === 0) {
        throw new Error(`Entity with ID ${entityId} not found`);
      }

      const request: SuperAdminRequest = {
        accessId: entityConcept.accessId
      };

      const response = await this.apiClient.assignSuperAdminAccessAsync(request);

      if (response?.status === true && response.data !== undefined) {
        if (typeof response.data === 'number') {
          entityConcept.accessId = response.data;
          // Update concept in cache
          ConceptsData.AddConcept(entityConcept);
          return entityId;
        }
      }

      return 0;
    } catch (error) {
      throw new Error(`Failed to assign super admin for entityId ${entityId}: ${error}`);
    }
  }

  /**
   * Revoke super admin access from an entity
   *
   * @param entityId - The entity ID to revoke super admin access from
   * @returns Promise<string> - Success message or error message
   */
  async revokeSuperAdmin(entityId: number): Promise<string> {
    try {
      const entityConcept = await GetTheConcept(entityId);
      if (!entityConcept || entityConcept.id === 0) {
        throw new Error(`Entity with ID ${entityId} not found`);
      }

      const accessId = entityConcept.accessId ?? 0;
      if (accessId === 0) {
        throw new Error(`Entity with ID ${entityId} does not have a valid accessId`);
      }

      const request: SuperAdminRequest = {
        accessId
      };

      const response = await this.apiClient.revokeSuperAdminAccessAsync(request);

      if (response?.status === true && response.message) {
        return response.message;
      }

      return 'Super admin access deletion failed';
    } catch (error) {
      throw new Error(`Failed to revoke super admin for entityId ${entityId}: ${error}`);
    }
  }

  // #endregion

  // #region Private Methods

  /**
   * Internal method to check access via API
   *
   * @param accessId - The access ID to check
   * @param permission - The permission to check
   * @param entityId - Optional entity ID
   * @returns Promise<boolean> - True if access is granted, false otherwise
   */
  private async checkAccessInternal(
    accessId: number,
    permission: string,
    entityId?: number | null
  ): Promise<boolean> {
    try {
      const apiResponse = await this.apiClient.checkAccessAsync({
        accessId,
        permission,
        entityId
      });

      return apiResponse?.status === true;
    } catch (error) {
      throw new Error(`Error checking internal access for accessId ${accessId}, permission '${permission}', entityId ${entityId}: ${error}`);
    }
  }

  // #endregion

  // #region Static Methods (for backwards compatibility)

  /**
   * Static method to check if an entity is a super admin
   * Uses the default singleton instance
   *
   * @param entityId - The entity ID to check
   * @returns Promise<boolean> - True if super admin, false otherwise
   */
  static async isSuperAdmin(entityId: number): Promise<boolean> {
    return getAccessControlService().isSuperAdmin(entityId);
  }

  /**
   * Static method to assign super admin access
   * Uses the default singleton instance
   *
   * @param entityId - The entity ID to grant super admin access to
   * @returns Promise<number> - The entity ID if successful, 0 otherwise
   */
  static async assignSuperAdmin(entityId: number): Promise<number> {
    return getAccessControlService().assignSuperAdmin(entityId);
  }

  /**
   * Static method to revoke super admin access
   * Uses the default singleton instance
   *
   * @param entityId - The entity ID to revoke super admin access from
   * @returns Promise<string> - Success message or error message
   */
  static async revokeSuperAdmin(entityId: number): Promise<string> {
    return getAccessControlService().revokeSuperAdmin(entityId);
  }

  /**
   * Static method to check access
   * Uses the default singleton instance
   *
   * @param conceptId - The concept ID to check access for
   * @param permission - The permission to check
   * @param entityId - Optional entity ID
   * @returns Promise<boolean> - True if access is granted, false otherwise
   */
  static async checkAccess(conceptId: number, permission: string, entityId?: number | null): Promise<boolean> {
    return getAccessControlService().checkAccess(conceptId, permission, entityId);
  }

  /**
   * Static method to assign access in bulk
   * Uses the default singleton instance
   *
   * @param request - BulkConceptAccessRequest containing conceptIds and permissions
   * @returns Promise<AccessResult[]> - Array of access results
   */
  static async assignAccess(request: BulkConceptAccessRequest): Promise<AccessResult[]> {
    return getAccessControlService().assignAccess(request);
  }

  /**
   * Static method to revoke access
   * Uses the default singleton instance
   *
   * @param conceptId - The concept ID to revoke access for
   * @param permission - The permission to revoke
   * @param entityId - Optional entity ID
   * @returns Promise<boolean> - True if successfully revoked, false otherwise
   */
  static async revokeAccess(conceptId: number, permission: string, entityId?: number | null): Promise<boolean> {
    return getAccessControlService().revokeAccess(conceptId, permission, entityId);
  }

  /**
   * Static method to revoke concept access in bulk
   * Uses the default singleton instance
   *
   * @param request - BulkConceptAccessRequest containing conceptIds and permissions
   * @returns Promise<AccessResult[]> - Array of access results
   */
  static async revokeAccessBulk(request: BulkConceptAccessRequest): Promise<AccessResult[]> {
    return getAccessControlService().revokeAccessBulk(request);
  }

  // #endregion
}

// Singleton instance for convenience (optional usage pattern)
let defaultInstance: AccessControlService | null = null;

/**
 * Get the default singleton instance of AccessControlService
 */
export function getAccessControlService(): AccessControlService {
  if (!defaultInstance) {
    defaultInstance = new AccessControlService();
  }
  return defaultInstance;
}

/**
 * Initialize the default singleton instance with custom configuration
 */
export function initializeAccessControlService(
  apiClient?: IAPIClientService
): AccessControlService {
  defaultInstance = new AccessControlService(apiClient);
  return defaultInstance;
}

export default AccessControlService;
