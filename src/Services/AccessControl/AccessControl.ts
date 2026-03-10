/**
 * AccessControlService
 *
 * This service provides access control functionality including:
 * - 5-phase bulk access check with BFS inheritance graph traversal
 * - Assign and revoke access permissions
 * - Bulk operations for access management
 * - Super admin checks
 * - Access inheritance management (including parent access inheritance)
 *
 * This is the TypeScript equivalent of the C# AccessControlService class (v3.4.0).
 */

import GetTheConcept from '../GetTheConcept';
import {
  AccessResult,
  BulkCheckAccessRequest,
  BulkConceptAccessRequest,
  BulkParentAccessInheritanceResult,
} from '../../DataStructures/AccessControl/AccessControlModels';
import { APIClientService, IAPIClientService } from './APIClientService';
import { ConceptsData } from '../../DataStructures/ConceptData';
import { GetAllLinkerConnectionsFromTheConcept, GetConceptBulk } from '../../app';

/** Maximum BFS depth for inheritance graph traversal */
const MAX_BFS_DEPTH = 10;

/** Concept needing API-based access check */
interface NeedsCheckEntry {
  conceptId: number;
  accessId: number;
  typeAccessId: number;
}

/**
 * Interface for the Access Control Service
 */
export interface IAccessControlService {
  // Check Access
  checkAccess(conceptId: number, permission: string, entityId?: number | null): Promise<boolean>;
  checkAccessBulk(conceptIds: number[], permission: string, entityId?: number | null): Promise<Map<number, boolean>>;
  getConceptIdsWithPermission(permission: string, conceptIdsFilter: number[], entityId?: number | null): Promise<number[]>;

  // Assign Access
  assignAccess(request: BulkConceptAccessRequest): Promise<AccessResult[]>;

  // Revoke Access
  revokeAccess(conceptId: number, permission: string, entityId?: number | null): Promise<boolean>;
  revokeAccessBulk(request: BulkConceptAccessRequest): Promise<AccessResult[]>;

  // Access Inheritance
  setAccessInheritance(conceptId: number): Promise<boolean>;
  getAccessInheritanceStatus(conceptId: number, connectionTypeId?: number): Promise<boolean>;
  setAccessInheritanceStatus(conceptId: number, isEnabled: boolean, connectionTypeId?: number): Promise<boolean>;

  // Parent Access Inheritance
  setParentAccessInheritance(conceptId: number, parentConceptId: number): Promise<number>;
  setParentAccessInheritanceBulk(childConceptIds: number[], parentConceptId: number): Promise<BulkParentAccessInheritanceResult[]>;
  removeParentAccessInheritance(conceptId: number, parentConceptId?: number): Promise<string>;
  removeParentAccessInheritanceBulk(childConceptIds: number[], parentConceptId?: number): Promise<BulkParentAccessInheritanceResult[]>;
  hasParentAccessInheritance(conceptId: number, parentConceptId?: number): Promise<boolean>;
  getParentAccessId(conceptId: number): Promise<number | null>;

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

  // #region Check Access (5-Phase Bulk Algorithm)

  /**
   * Check whether a user/entity has the specified permission on a single concept.
   * Delegates to checkAccessBulk for full inheritance + group resolution.
   */
  async checkAccess(conceptId: number, permission: string, entityId?: number | null): Promise<boolean> {
    if (!permission || permission.trim() === '') {
      throw new Error('Permission is required');
    }

    const results = await this.checkAccessBulk([conceptId], permission.toLowerCase(), entityId);
    return results.get(conceptId) ?? false;
  }

  /**
   * 5-phase bulk access check algorithm.
   * Matches the C# AccessControlService.CheckAccessBulk implementation.
   *
   * Phase 1: Super-admin short-circuit
   * Phase 2: Fast-path classification (owner, public, type concepts)
   * Phase 3: BFS inheritance graph resolution (3 sources)
   * Phase 4: Bulk access decision resolution (API)
   * Phase 5: Grant-only merge per concept
   */
  async checkAccessBulk(
    conceptIds: number[],
    permission: string,
    entityId?: number | null
  ): Promise<Map<number, boolean>> {
    if (!permission || permission.trim() === '') {
      throw new Error('Permission is required');
    }

    permission = permission.toLowerCase();
    const results = new Map<number, boolean>();

    if (!conceptIds || conceptIds.length === 0) return results;

    // ── Phase 1: Super-admin short-circuit ──
    if (entityId !== null && entityId !== undefined && entityId > 0) {
      try {
        if (await this.isSuperAdmin(entityId)) {
          for (const id of conceptIds) results.set(id, true);
          return results;
        }
      } catch {
        // Not super admin, continue
      }
    }

    // ── Phase 2: Fast-path classification ──
    const needsCheck: NeedsCheckEntry[] = [];
    const seedAccessIds = new Set<number>();
    const accessIdToConceptId = new Map<number, number>();

    let entityConcept: any = null;
    if (entityId !== null && entityId !== undefined && entityId > 0) {
      try { entityConcept = await GetTheConcept(entityId); } catch { /* continue */ }
    }

    let inheritTypeId = 0;

    // Bulk-fetch concepts
    const concepts = await GetConceptBulk(conceptIds);
    const conceptMap = new Map<number, any>();
    for (const c of concepts) conceptMap.set(c.id, c);

    const typeConceptCache = new Map<number, any>();

    for (const conceptId of conceptIds) {
      const concept = conceptMap.get(conceptId) ?? await GetTheConcept(conceptId);

      if (!concept || concept.id === 0) { results.set(conceptId, false); continue; }

      const accessId = concept.accessId ?? 0;
      const typeId = concept.typeId ?? 0;

      // Owner check
      if (entityConcept && entityConcept.userId && entityConcept.userId === concept.userId) {
        results.set(conceptId, true); continue;
      }

      // Type concept check
      if (concept.referentId === null || concept.referentId === undefined || concept.referentId === 0) {
        results.set(conceptId, true); continue;
      }

      // Public concept check
      if (accessId < 10000) { results.set(conceptId, true); continue; }

      // Get type concept's accessId
      let typeAccessId = 0;
      if (typeId > 0) {
        let typeConcept = typeConceptCache.get(typeId);
        if (!typeConcept) {
          try { typeConcept = await GetTheConcept(typeId); typeConceptCache.set(typeId, typeConcept); } catch { /* skip */ }
        }
        if (typeConcept) typeAccessId = typeConcept.accessId ?? 0;
      }

      needsCheck.push({ conceptId, accessId, typeAccessId });
      if (accessId > 0) { seedAccessIds.add(accessId); accessIdToConceptId.set(accessId, conceptId); }
      if (typeAccessId > 0) seedAccessIds.add(typeAccessId);
    }

    if (needsCheck.length === 0) return results;

    // ── Phase 3: BFS inheritance graph resolution ──
    const ancestorMap = await this.resolveBulkInheritanceGraph(seedAccessIds, inheritTypeId, accessIdToConceptId);

    const allUniqueAccessIds: number[] = [];
    const uniqueSet = new Set<number>();
    for (const chain of ancestorMap.values()) {
      for (const aid of chain) {
        if (!uniqueSet.has(aid)) { uniqueSet.add(aid); allUniqueAccessIds.push(aid); }
      }
    }

    // ── Phase 4: Resolve subjects and bulk decisions ──
    const subjects = await this.resolveSubjects(entityId);
    const decisions = await this.resolveBulkDecisions(allUniqueAccessIds, permission, subjects);

    // ── Phase 5: Grant-only merge per concept ──
    for (const entry of needsCheck) {
      const ownChain = ancestorMap.get(entry.accessId) ?? [entry.accessId];
      const typeChain = entry.typeAccessId > 0
        ? (ancestorMap.get(entry.typeAccessId) ?? [entry.typeAccessId])
        : [];
      results.set(entry.conceptId, this.hasAnyGrant(ownChain, typeChain, subjects, decisions));
    }

    return results;
  }

  /**
   * Get all conceptIds which have a certain permission for an entity.
   * Delegates to checkAccessBulk for full inheritance support.
   */
  async getConceptIdsWithPermission(
    permission: string,
    conceptIdsFilter: number[],
    entityId?: number | null
  ): Promise<number[]> {
    if (!permission || permission.trim() === '') throw new Error('Permission is required');
    if (!conceptIdsFilter || conceptIdsFilter.length === 0) return [];

    const results = await this.checkAccessBulk(conceptIdsFilter, permission.toLowerCase(), entityId);
    return conceptIdsFilter.filter(id => results.get(id) === true);
  }

  // #endregion

  // #region BFS Inheritance Graph Resolution

  /**
   * Resolve inheritance graph via 3-source BFS, depth-limited to MAX_BFS_DEPTH.
   *
   * Source 1: FreeSchema internal connections ("the_parent_access_inheritance")
   * Source 2: Explicit parent access links (via Access API)
   * Source 3: Concept-connection access inheritance
   */
  private async resolveBulkInheritanceGraph(
    seedAccessIds: Set<number>,
    inheritTypeId: number,
    accessIdToConceptId: Map<number, number>
  ): Promise<Map<number, number[]>> {
    const parentEdges = new Map<number, number[]>();
    const visited = new Set<number>();
    let frontier = new Set(seedAccessIds);
    let bfsDepth = 0;

    while (frontier.size > 0) {
      if (bfsDepth >= MAX_BFS_DEPTH) {
        console.warn(`[AccessControl] BFS depth limit (${MAX_BFS_DEPTH}) reached.`);
        break;
      }
      bfsDepth++;

      const nextFrontier = new Set<number>();
      for (const id of frontier) visited.add(id);
      const frontierArray = Array.from(frontier);

      // ── Source 1: FreeSchema internal connections ──
      for (const accessId of frontierArray) {
        try {
          const connections: any[] = (await GetAllLinkerConnectionsFromTheConcept(accessId)) ?? [];
          for (const conn of connections) {
            const typeName = (conn.connectionTypeName ?? conn.typeName ?? conn.type?.characterValue ?? '').toString().toLowerCase();
            if (typeName !== 'the_parent_access_inheritance') continue;
            const parentId = conn.toTheConceptId ?? conn.toConceptId ?? 0;
            if (parentId > 0 && !visited.has(parentId)) {
              if (!parentEdges.has(accessId)) parentEdges.set(accessId, []);
              parentEdges.get(accessId)!.push(parentId);
              nextFrontier.add(parentId);
            }
          }
        } catch { /* Source 1 failed, continue */ }
      }

      // ── Source 2: Explicit parent access links (via API) ──
      for (const accessId of frontierArray) {
        try {
          const response = await this.apiClient.getParentAccessIdAsync(accessId);
          if (response?.status === true && response.data !== undefined && response.data !== null) {
            const parentId = AccessControlService.parseIntData(response);
            if (parentId !== null && parentId > 0 && !visited.has(parentId)) {
              if (!parentEdges.has(accessId)) parentEdges.set(accessId, []);
              parentEdges.get(accessId)!.push(parentId);
              nextFrontier.add(parentId);
            }
          }
        } catch { /* Source 2 failed, continue */ }
      }

      // ── Source 3: Concept-connection access inheritance ──
      for (const accessId of frontierArray) {
        try {
          const inheritResponse = await this.apiClient.getAccessInheritanceStatusAsync(accessId);
          if (!AccessControlService.parseBoolData(inheritResponse)) continue;

          const conceptId = accessIdToConceptId.get(accessId);
          if (!conceptId || conceptId === 0) continue;

          const connections: any[] = (await GetAllLinkerConnectionsFromTheConcept(conceptId)) ?? [];
          for (const conn of connections) {
            const ofId = conn.ofTheConceptId ?? conn.ofConceptId ?? 0;
            if (ofId !== conceptId) continue;
            if (inheritTypeId > 0 && (conn.typeId ?? 0) !== inheritTypeId) continue;

            const parentConceptId = conn.toTheConceptId ?? conn.toConceptId ?? 0;
            if (!parentConceptId) continue;

            try {
              const parentConcept = await GetTheConcept(parentConceptId);
              const parentAccessId = parentConcept?.accessId ?? 0;
              if (parentAccessId > 0 && !visited.has(parentAccessId)) {
                if (!parentEdges.has(accessId)) parentEdges.set(accessId, []);
                parentEdges.get(accessId)!.push(parentAccessId);
                accessIdToConceptId.set(parentAccessId, parentConceptId);
                nextFrontier.add(parentAccessId);
              }
            } catch { /* skip */ }
          }
        } catch { /* Source 3 failed, continue */ }
      }

      for (const id of visited) nextFrontier.delete(id);
      frontier = nextFrontier;
    }

    // Build ancestor chains per seed
    const ancestorMap = new Map<number, number[]>();
    const maxAncestors = MAX_BFS_DEPTH * 10;

    for (const seed of seedAccessIds) {
      const chain: number[] = [seed];
      const seen = new Set<number>([seed]);
      const queue = [seed];

      while (queue.length > 0 && chain.length < maxAncestors) {
        const current = queue.shift()!;
        const parents = parentEdges.get(current);
        if (!parents) continue;
        for (const parent of parents) {
          if (seen.has(parent)) continue;
          seen.add(parent);
          chain.push(parent);
          queue.push(parent);
        }
      }

      ancestorMap.set(seed, chain);
    }

    return ancestorMap;
  }

  // #endregion

  // #region Bulk Decision Resolution

  private async resolveBulkDecisions(
    accessIds: number[],
    permission: string,
    subjects: (number | null)[]
  ): Promise<Map<string, boolean>> {
    const decisions = new Map<string, boolean>();

    for (const subject of subjects) {
      try {
        const request: BulkCheckAccessRequest = { accessIds, permission, entityId: subject };
        const response = await this.apiClient.checkAccessBulkAsync(request);

        if (response?.status === true && response.data && Array.isArray(response.data)) {
          const resultsByAccessId = new Map<number, boolean>();
          for (const result of response.data) resultsByAccessId.set(result.accessId, result.hasAccess);
          for (const accessId of accessIds) {
            decisions.set(`${accessId}:${subject ?? 0}`, resultsByAccessId.get(accessId) ?? false);
          }
        } else {
          for (const accessId of accessIds) decisions.set(`${accessId}:${subject ?? 0}`, false);
        }
      } catch {
        for (const accessId of accessIds) decisions.set(`${accessId}:${subject ?? 0}`, false);
      }
    }

    return decisions;
  }

  // #endregion

  // #region Subject Resolution

  private async resolveSubjects(entityId?: number | null): Promise<(number | null)[]> {
    const subjects: (number | null)[] = [null];

    if (entityId !== null && entityId !== undefined && entityId > 0) {
      subjects.push(entityId);

      try {
        const allConnections: any[] = (await GetAllLinkerConnectionsFromTheConcept(entityId)) ?? [];
        for (const conn of allConnections) {
          const typeName = (conn.connectionTypeName ?? conn.typeName ?? conn.type?.characterValue ?? '').toString().toLowerCase();
          if (typeName !== 'the_entity_s_group') continue;
          const toId = conn.toTheConceptId ?? conn.toConceptId ?? 0;
          if (toId > 0) subjects.push(toId);
        }
      } catch { /* Group resolution failed, continue */ }
    }

    return subjects;
  }

  // #endregion

  // #region Grant-Only Merge

  private hasAnyGrant(
    ownChain: number[],
    typeChain: number[],
    subjects: (number | null)[],
    decisions: Map<string, boolean>
  ): boolean {
    for (const accessId of ownChain) {
      for (const subject of subjects) {
        if (decisions.get(`${accessId}:${subject ?? 0}`) === true) return true;
      }
    }
    for (const accessId of typeChain) {
      for (const subject of subjects) {
        if (decisions.get(`${accessId}:${subject ?? 0}`) === true) return true;
      }
    }
    return false;
  }

  // #endregion

  // #region Assign Access

  async assignAccess(request: BulkConceptAccessRequest): Promise<AccessResult[]> {
    if (!request || !request.conceptIds || request.conceptIds.length === 0) {
      throw new Error('Request must contain at least one conceptId');
    }

    try {
      const apiResponse = await this.apiClient.assignConceptAccessBulkAsync(request);
      if (apiResponse?.status !== true) {
        throw new Error(apiResponse?.message || 'Failed to assign bulk access');
      }
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

  async revokeAccess(conceptId: number, permission: string, entityId?: number | null): Promise<boolean> {
    try {
      const concept = await GetTheConcept(conceptId);
      const accessId = concept.accessId ?? 0;
      if (accessId === 0) throw new Error(`Concept with ID ${conceptId} does not have a valid accessId`);

      const apiResponse = await this.apiClient.revokeAccessAsync({ accessId, permission, entityId });
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

  async setAccessInheritance(conceptId: number): Promise<boolean> {
    try {
      const response = await this.apiClient.setAccessInheritanceByConceptAsync({
        conceptId,
        connectionTypeId: 999
      });
      return response?.status ?? false;
    } catch (error) {
      throw new Error(`Error setting access inheritance for conceptId ${conceptId}: ${error}`);
    }
  }

  async getAccessInheritanceStatus(conceptId: number, connectionTypeId: number = 999): Promise<boolean> {
    try {
      const response = await this.apiClient.getAccessInheritanceStatusByConceptAsync(conceptId, connectionTypeId);
      return AccessControlService.parseBoolData(response);
    } catch (error) {
      throw new Error(`Error getting access inheritance status for conceptId ${conceptId}: ${error}`);
    }
  }

  async setAccessInheritanceStatus(conceptId: number, isEnabled: boolean, connectionTypeId: number = 999): Promise<boolean> {
    try {
      const response = await this.apiClient.setAccessInheritanceByConceptAsync({
        conceptId,
        enable: isEnabled,
        connectionTypeId
      });
      return response?.status ?? false;
    } catch (error) {
      throw new Error(`Error setting access inheritance status for conceptId ${conceptId}: ${error}`);
    }
  }

  // #endregion

  // #region Parent Access Inheritance

  async setParentAccessInheritance(conceptId: number, parentConceptId: number): Promise<number> {
    try {
      const response = await this.apiClient.setParentAccessInheritanceByConceptAsync({
        parentConceptId,
        childConceptId: conceptId
      });

      if (response?.status === true) {
        const newAccessId = AccessControlService.parseIntData(response);
        if (newAccessId !== null && newAccessId > 0) {
          return newAccessId;
        }
      }
      return 0;
    } catch (error) {
      throw new Error(`Error setting parent access inheritance for conceptId ${conceptId}: ${error}`);
    }
  }

  async setParentAccessInheritanceBulk(childConceptIds: number[], parentConceptId: number): Promise<BulkParentAccessInheritanceResult[]> {
    try {
      const response = await this.apiClient.setParentAccessInheritanceBulkByConceptAsync({
        parentConceptId,
        childConceptIds
      });

      if (response?.status === true && Array.isArray(response.data)) {
        return response.data;
      }
      return [];
    } catch (error) {
      throw new Error(`Error setting bulk parent access inheritance for parentConceptId ${parentConceptId}: ${error}`);
    }
  }

  async removeParentAccessInheritance(conceptId: number, parentConceptId?: number): Promise<string> {
    try {
      const response = await this.apiClient.removeParentAccessInheritanceByConceptAsync(conceptId, parentConceptId);
      return response?.message ?? 'Parent access inheritance removal failed';
    } catch (error) {
      throw new Error(`Error removing parent access inheritance for conceptId ${conceptId}: ${error}`);
    }
  }

  async removeParentAccessInheritanceBulk(childConceptIds: number[], parentConceptId?: number): Promise<BulkParentAccessInheritanceResult[]> {
    try {
      const response = await this.apiClient.removeParentAccessInheritanceBulkByConceptAsync({
        parentConceptId: parentConceptId ?? 0,
        childConceptIds
      });

      if (response?.status === true && Array.isArray(response.data)) {
        return response.data;
      }
      return [];
    } catch (error) {
      throw new Error(`Error removing bulk parent access inheritance: ${error}`);
    }
  }

  async hasParentAccessInheritance(conceptId: number, parentConceptId?: number): Promise<boolean> {
    try {
      const response = await this.apiClient.hasParentAccessInheritanceByConceptAsync(conceptId, parentConceptId);
      return AccessControlService.parseBoolData(response);
    } catch (error) {
      throw new Error(`Error checking parent access inheritance for conceptId ${conceptId}: ${error}`);
    }
  }

  async getParentAccessId(conceptId: number): Promise<number | null> {
    try {
      const response = await this.apiClient.getParentAccessIdByConceptAsync(conceptId);
      return AccessControlService.parseIntData(response);
    } catch (error) {
      throw new Error(`Error getting parent access ID for conceptId ${conceptId}: ${error}`);
    }
  }

  // #endregion

  // #region Super Admin

  async isSuperAdmin(entityId: number): Promise<boolean> {
    try {
      if (entityId === 0) return false;

      const response = await this.apiClient.checkSuperAdminByConceptAsync(entityId);
      return AccessControlService.parseBoolData(response);
    } catch (error) {
      throw new Error(`Error checking super admin status for entityId ${entityId}: ${error}`);
    }
  }

  async assignSuperAdmin(entityId: number): Promise<number> {
    try {
      const response = await this.apiClient.assignSuperAdminByConceptAsync({ conceptId: entityId });

      if (response?.status === true && response.data !== undefined) {
        return entityId;
      }
      return 0;
    } catch (error) {
      throw new Error(`Failed to assign super admin for entityId ${entityId}: ${error}`);
    }
  }

  async revokeSuperAdmin(entityId: number): Promise<string> {
    try {
      const response = await this.apiClient.revokeSuperAdminByConceptAsync({ conceptId: entityId });
      if (response?.status === true && response.message) return response.message;
      return 'Super admin access deletion failed';
    } catch (error) {
      throw new Error(`Failed to revoke super admin for entityId ${entityId}: ${error}`);
    }
  }

  // #endregion

  // #region Make Concept Private

  async makeConceptPrivate(conceptId: number): Promise<boolean> {
    try {
      if (!conceptId) throw new Error('conceptId is required');

      const concept = await GetTheConcept(conceptId);
      if (!concept || concept.id === 0) throw new Error(`Concept with ID ${conceptId} not found`);

      const userDetails =
        typeof (globalThis as any).getUserDetails === 'function'
          ? (globalThis as any).getUserDetails()
          : null;

      let loggedInEntityId = Number(
        userDetails?.entity ?? userDetails?.entityId ?? userDetails?.userConcept ?? userDetails?.userId ?? 0
      ) || 0;

      if (!loggedInEntityId) throw new Error('Logged-in entity id not found');
      if (concept.userId !== loggedInEntityId) throw new Error('Only the owner may make the concept private');

      const permissions = ['read', 'write', 'execute', 'delete'];
      let newAccessId = concept.accessId ?? 0;

      const bulkRequest: BulkConceptAccessRequest = {
        conceptIds: [conceptId],
        permissions,
        entityId: loggedInEntityId
      };

      const bulkResp = await this.apiClient.assignConceptAccessBulkAsync(bulkRequest);
      if (!bulkResp || bulkResp.status !== true) {
        throw new Error(`Failed to assign permissions for entity ${loggedInEntityId} via bulk API`);
      }

      if (Array.isArray(bulkResp.data)) {
        for (const r of bulkResp.data as AccessResult[]) {
          const maybeId = (r as any).accessId ?? (r as any).data ?? 0;
          if (typeof maybeId === 'number' && maybeId > newAccessId) newAccessId = maybeId;
        }
      } else if (typeof bulkResp.data === 'number' && bulkResp.data > newAccessId) {
        newAccessId = bulkResp.data;
      }

      if (newAccessId && newAccessId !== (concept.accessId ?? 0)) {
        concept.accessId = newAccessId;
        ConceptsData.AddConcept(concept);
      }
      return true;
    } catch (error) {
      throw new Error(`Error making concept ${conceptId} private: ${error}`);
    }
  }

  // #endregion

  // #region Response Parsing Helpers

  private static parseBoolData(response: any): boolean {
    if (!response?.status || response.data === undefined || response.data === null) return false;
    const data = response.data;
    if (typeof data === 'boolean') return data;
    if (typeof data === 'string') return data.toLowerCase() === 'true';
    if (typeof data === 'number') return data !== 0;
    if (typeof data === 'object') {
      for (const key of ['enabled', 'Enabled', 'isEnabled', 'IsEnabled', 'status', 'Status', 'hasAccess', 'HasAccess']) {
        if (key in data) {
          const val = data[key];
          if (typeof val === 'boolean') return val;
          if (typeof val === 'string') return val.toLowerCase() === 'true';
        }
      }
    }
    return false;
  }

  private static parseIntData(response: any): number | null {
    if (!response?.status || response.data === undefined || response.data === null) return null;
    const data = response.data;
    if (typeof data === 'number') return data;
    if (typeof data === 'string') { const p = parseInt(data, 10); return isNaN(p) ? null : p; }
    if (typeof data === 'object') {
      for (const key of ['id', 'Id', 'accessId', 'AccessId', 'parentAccessId', 'ParentAccessId']) {
        if (key in data) {
          const val = data[key];
          if (typeof val === 'number') return val;
          if (typeof val === 'string') { const p = parseInt(val, 10); if (!isNaN(p)) return p; }
        }
      }
    }
    return null;
  }

  // #endregion

  // #region Static Methods (for backwards compatibility)

  static async isSuperAdmin(entityId: number): Promise<boolean> {
    return getAccessControlService().isSuperAdmin(entityId);
  }

  static async assignSuperAdmin(entityId: number): Promise<number> {
    return getAccessControlService().assignSuperAdmin(entityId);
  }

  static async revokeSuperAdmin(entityId: number): Promise<string> {
    return getAccessControlService().revokeSuperAdmin(entityId);
  }

  static async checkAccess(conceptId: number, permission: string, entityId?: number | null): Promise<boolean> {
    return getAccessControlService().checkAccess(conceptId, permission, entityId);
  }

  static async checkAccessBulk(conceptIds: number[], permission: string, entityId?: number | null): Promise<Map<number, boolean>> {
    return getAccessControlService().checkAccessBulk(conceptIds, permission, entityId);
  }

  static async assignAccess(request: BulkConceptAccessRequest): Promise<AccessResult[]> {
    return getAccessControlService().assignAccess(request);
  }

  static async revokeAccess(conceptId: number, permission: string, entityId?: number | null): Promise<boolean> {
    return getAccessControlService().revokeAccess(conceptId, permission, entityId);
  }

  static async revokeAccessBulk(request: BulkConceptAccessRequest): Promise<AccessResult[]> {
    return getAccessControlService().revokeAccessBulk(request);
  }

  static async setParentAccessInheritance(conceptId: number, parentConceptId: number): Promise<number> {
    return getAccessControlService().setParentAccessInheritance(conceptId, parentConceptId);
  }

  static async setParentAccessInheritanceBulk(childConceptIds: number[], parentConceptId: number): Promise<BulkParentAccessInheritanceResult[]> {
    return getAccessControlService().setParentAccessInheritanceBulk(childConceptIds, parentConceptId);
  }

  static async removeParentAccessInheritance(conceptId: number, parentConceptId?: number): Promise<string> {
    return getAccessControlService().removeParentAccessInheritance(conceptId, parentConceptId);
  }

  static async removeParentAccessInheritanceBulk(childConceptIds: number[], parentConceptId?: number): Promise<BulkParentAccessInheritanceResult[]> {
    return getAccessControlService().removeParentAccessInheritanceBulk(childConceptIds, parentConceptId);
  }

  static async hasParentAccessInheritance(conceptId: number, parentConceptId?: number): Promise<boolean> {
    return getAccessControlService().hasParentAccessInheritance(conceptId, parentConceptId);
  }

  static async getParentAccessId(conceptId: number): Promise<number | null> {
    return getAccessControlService().getParentAccessId(conceptId);
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
