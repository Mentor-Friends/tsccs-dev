// src/services/AccessControlService.ts

import { BaseUrl } from "../../app";


export class AccessControlService { 
  static async assignAccessToEntity(request: {
    conceptId: number;
    access: string;
    entityId: number;
    makePublic: boolean;
  }): Promise<any> {
    // Backend expects POST /api/access-control/access
    const url = `${BaseUrl.ACCESS_CONTROL_BASE_URL}/api/access-control/access`;

    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(request),
    });

    if (!response.ok) {
      throw new Error('Failed to assign access to entity');
    }

    return response.json();
  }

  static async assignPublicAccess(request: {
    conceptId: number;
    accessList: string[];
    nestedAccessLevel?: number;
    conceptIdList?: number[];
  }): Promise<any> {
    // Backend expects POST /api/access-control/public-access
    const url = `${BaseUrl.ACCESS_CONTROL_BASE_URL}/api/access-control/public-access`;

    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...request,
        nestedAccessLevel: request.nestedAccessLevel ?? 0,
        conceptIdList: request.conceptIdList ?? [],
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to assign public access');
    }

    return response.json();
  }

  static async assignPublicAccessBlukConcept(request: {
    conceptIdList: number[];
    accessList: string[];
    nestedAccessLevel?: number;
    conceptId?: number;
  }): Promise<any> {
    // Use the same endpoint as assignPublicAccess
    const url = `${BaseUrl.ACCESS_CONTROL_BASE_URL}/api/access-control/public-access`;

    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...request,
        nestedAccessLevel: request.nestedAccessLevel ?? 0,
        conceptId: request.conceptId ?? 0,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to assign public access');
    }

    return response.json();
  }

  static async assignAccessToEntityBulk(request: {
    conceptId: number;
    conceptIdList: number[];
    entityIdList: number[];
    accessList: string[];
    nestedAccessLevel?: number;
  }): Promise<any> {
    // Backend expects POST /api/access-control/access/bulk
    const url = `${BaseUrl.ACCESS_CONTROL_BASE_URL}/api/access-control/access/bulk`;

    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...request,
        nestedAccessLevel: request.nestedAccessLevel ?? 0,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to assign access in bulk');
    }

    return response.json();
  }

  static async assignAccessByUser(request: {
    conceptId: number;
    access: string;
    userId: number;
    makePublic: boolean;
  }): Promise<any> {
    // Backend expects POST /api/access-control/user-access
    const url = `${BaseUrl.ACCESS_CONTROL_BASE_URL}/api/access-control/user-access`;

    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(request),
    });

    if (!response.ok) {
      throw new Error('Failed to assign access by user');
    }

    return response.json();
  }

  static async revokeAccess(params: {
    conceptId: number;
    access: string;
    entityId: number;
  }): Promise<any> {
    // Backend expects DELETE /api/access-control/access?conceptId=...&access=...&entityId=...
    const { conceptId, access, entityId } = params;
    const url = `${BaseUrl.ACCESS_CONTROL_BASE_URL}/api/access-control/access?conceptId=${conceptId}&access=${encodeURIComponent(access)}&entityId=${entityId}`;

    const response = await fetch(url, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error('Failed to revoke access');
    }

    return response.json();
  }

  static async revokeAccessBulk(request: {
    conceptId: number;
    entityIdList: number[];
    accessList: string[];
  }): Promise<any> {
    // Backend expects DELETE /api/access-control/access/bulk with body
    const url = `${BaseUrl.ACCESS_CONTROL_BASE_URL}/api/access-control/access/bulk`;

    const response = await fetch(url, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(request),
    });

    if (!response.ok) {
      throw new Error('Failed to revoke access in bulk');
    }

    return response.json();
  }

  static async getAccessList(conceptId: number, userId: number): Promise<any> {
    // Backend expects GET /api/access-control/access-list?conceptId=...&userId=...
    const url = `${BaseUrl.ACCESS_CONTROL_BASE_URL}/api/access-control/access-list?conceptId=${conceptId}&userId=${userId}`;

    const response = await fetch(url, {
      method: 'GET',
    });

    if (!response.ok) {
      throw new Error('Failed to get access list');
    }

    return response.json();
  }

  static async getPublicAccessList(conceptIdList: number[]): Promise<any> {
    // Backend expects POST /api/access-control/public-access/by-concept-ids
    const url = `${BaseUrl.ACCESS_CONTROL_BASE_URL}/api/access-control/public-access/by-concept-ids`;

    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(conceptIdList),
    });

    if (!response.ok) {
      throw new Error('Failed to get public access list');
    }
    return response.json();
  }

  static async revokePublicAccess(request: {
    conceptId: number;
    accessList: string[];
    nestedAccessLevel?: number;
  }): Promise<any> {
    // Backend expects DELETE /api/access-control/public-access with body
    const url = `${BaseUrl.ACCESS_CONTROL_BASE_URL}/api/access-control/public-access`;

    const response = await fetch(url, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...request,
        nestedAccessLevel: request.nestedAccessLevel ?? 0,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to revoke public access');
    }

    return response.json();
  }

  static async checkAccess(params: {
    conceptId: number;
    permission: string;
    entityId: number;
  }): Promise<any> {
    const url = `${BaseUrl.ACCESS_CONTROL_BASE_URL}/api/access-control/access/check?conceptId=${params.conceptId}&permission=${encodeURIComponent(params.permission)}&entityId=${params.entityId}`;
    const response = await fetch(url, { method: 'GET' });
    if (!response.ok) throw new Error('Failed to check access');
    return response.json();
  }

  static async checkAccessByUser(request: {
    conceptId: number;
    access: string;
    userId: number;
  }): Promise<any> {
    const url = `${BaseUrl.ACCESS_CONTROL_BASE_URL}/api/access-control/user-access/check`;
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(request),
    });
    if (!response.ok) throw new Error('Failed to check access by user');
    return response.json();
  }

  static async filterConceptsByAccess(request: {
    userId: number;
    access: string;
    conceptIdList?: number[];
    connectionIdList?: number[];
  }): Promise<any> {
    const url = `${BaseUrl.ACCESS_CONTROL_BASE_URL}/api/access-control/concepts/filter-by-access`;
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(request),
    });
    if (!response.ok) throw new Error('Failed to filter concepts by access');
    return response.json();
  }

  static async checkAccessOfConceptBulk(request: {
    userId: number;
    access: string;
    conceptIdList: number[];
  }): Promise<any> {
    const url = `${BaseUrl.ACCESS_CONTROL_BASE_URL}/api/access-control/concepts/check-access-bulk`;
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(request),
    });
    if (!response.ok) throw new Error('Failed to check access of concept bulk');
    return response.json();
  }

  static async getEntitiesByAccess(conceptId: number, access: string): Promise<any> {
    const url = `${BaseUrl.ACCESS_CONTROL_BASE_URL}/api/access-control/entities/by-access?conceptId=${conceptId}&access=${encodeURIComponent(access)}`;
    const response = await fetch(url, { method: 'GET' });
    if (!response.ok) throw new Error('Failed to get entities by access');
    return response.json();
  }

  static async getEntitiesWithAccess(conceptId: number): Promise<any> {
    const url = `${BaseUrl.ACCESS_CONTROL_BASE_URL}/api/access-control/entities/with-access?conceptId=${conceptId}`;
    const response = await fetch(url, { method: 'GET' });
    if (!response.ok) throw new Error('Failed to get entities with access');
    return response.json();
  }

  static async getAccessGroupByEntity(entityId?: number): Promise<any> {
    const url = `${BaseUrl.ACCESS_CONTROL_BASE_URL}/api/access-control/access-group/by-entity${entityId !== undefined ? `?entityId=${entityId}` : ''}`;
    const response = await fetch(url, { method: 'GET' });
    if (!response.ok) throw new Error('Failed to get access group by entity');
    return response.json();
  }

  static async getAccessGroupByUser(userId?: number): Promise<any> {
    const url = `${BaseUrl.ACCESS_CONTROL_BASE_URL}/api/access-control/access-group/by-user${userId !== undefined ? `?userId=${userId}` : ''}`;
    const response = await fetch(url, { method: 'GET' });
    if (!response.ok) throw new Error('Failed to get access group by user');
    return response.json();
  }

  static async getPublicAccessByAccessIds(accessIdList: number[]): Promise<any> {
    const url = `${BaseUrl.ACCESS_CONTROL_BASE_URL}/api/access-control/public-access/by-access-ids`;
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(accessIdList),
    });
    if (!response.ok) throw new Error('Failed to get public access by access ids');
    return response.json();
  }

  static async getFullAccessMappingForPublic(): Promise<any> {
    const url = `${BaseUrl.ACCESS_CONTROL_BASE_URL}/api/access-control/concepts/by-public-access`;
    const response = await fetch(url, { method: 'GET' });
    if (!response.ok) throw new Error('Failed to get full access mapping for public');
    return response.json();
  }

  static async assignPublicAccessForAllUser(): Promise<any> {
    const url = `${BaseUrl.ACCESS_CONTROL_BASE_URL}/api/access-control/public-access/assign-for-all-users`;
    const response = await fetch(url, { method: 'POST' });
    if (!response.ok) throw new Error('Failed to assign public access for all user');
    return response.json();
  }

  static async assignAccessByConncetionTypeOfUser(): Promise<any> {
    const url = `${BaseUrl.ACCESS_CONTROL_BASE_URL}/api/access-control/access/by-connection-type`;
    const response = await fetch(url, { method: 'POST' });
    if (!response.ok) throw new Error('Failed to assign access by connection type of user');
    return response.json();
  }

  static async setAccessInheritance(request: {
    mainConceptId: number;
    enable: boolean;
    connectionTypeId?: number;
  }): Promise<any> {
    const url = `${BaseUrl.ACCESS_CONTROL_BASE_URL}/api/access-control/access-inheritance`;
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(request),
    });
    if (!response.ok) throw new Error('Failed to set access inheritance');
    return response.json();
  }

  static async getAccessInheritanceStatus(mainConceptId: number, connectionTypeId: number = 999): Promise<any> {
    const url = `${BaseUrl.ACCESS_CONTROL_BASE_URL}/api/access-control/access-inheritance/status?mainConceptId=${mainConceptId}&connectionTypeId=${connectionTypeId}`;
    const response = await fetch(url, { method: 'GET' });
    if (!response.ok) throw new Error('Failed to get access inheritance status');
    return response.json();
  }
}