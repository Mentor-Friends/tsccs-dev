// src/services/AccessControlService.ts

import { BaseUrl } from "../../app";


export class AccessControlService { 
  static async assignAccessToEntity(request: {
    conceptId: number;
    access: string;
    entityId: number;
    makePublic: boolean;
  }): Promise<any> {
    const url = `${BaseUrl.ACCESS_CONTROL_BASE_URL}/api/access-control/assign-access`;

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
  }): Promise<any> {
    const url = `${BaseUrl.ACCESS_CONTROL_BASE_URL}/api/access-control/assign-public-access`;

    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({...request, nestedAccessLevel: request.nestedAccessLevel ?? 0 }) // Destructure nestedAccessLevel from request  ),
    });

    if (!response.ok) {
      throw new Error('Failed to assign public access');
    }

    return response.json();
  }

  static async assignPublicAccessBlukConcept(request: {
    conceptIdList: number[];
    accessList: string[];
  }): Promise<any> {
    const url = `${BaseUrl.ACCESS_CONTROL_BASE_URL}/api/access-control/assign-public-access-bulk-concept`;

    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(request),
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
    nestedAccessLevel?: number; // Optional, defaults to 0 if not provided
  }): Promise<any> {
    const url = `${BaseUrl.ACCESS_CONTROL_BASE_URL}/api/access-control/assign-access-bulk`;

    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(request),
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
    const url = `${BaseUrl.ACCESS_CONTROL_BASE_URL}/api/access-control/assign-access-by-user`;

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
    const { conceptId, access, entityId } = params;
    const url = `${BaseUrl.ACCESS_CONTROL_BASE_URL}/api/access-control/revoke-access?conceptId=${conceptId}&access=${encodeURIComponent(access)}&entityId=${entityId}`;

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
    const url = `${BaseUrl.ACCESS_CONTROL_BASE_URL}/api/access-control/revoke-access-bulk`;

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

  static async getAccessList(conceptId: number): Promise<any> {
    const url = `${BaseUrl.ACCESS_CONTROL_BASE_URL}/api/access-control/get-entities-with-access?conceptId=${conceptId}`;

    const response = await fetch(url, {
      method: 'GET',
    });

    if (!response.ok) {
      throw new Error('Failed to get access list');
    }

    return response.json();
  }

  static async getPublicAccessList(conceptIdList: number[]): Promise<any> {
    const url = `${BaseUrl.ACCESS_CONTROL_BASE_URL}/api/access-control/get-public-access-by-concept-ids`;

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
    nestedAccessLevel?: number; // Optional, defaults to 0 if not provided
  }): Promise<any> {
    const url = `${BaseUrl.ACCESS_CONTROL_BASE_URL}/api/access-control/revoke-public-access`;

    const response = await fetch(url, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({...request, nestedAccessLevel: request.nestedAccessLevel ?? 0 }),
    });

    if (!response.ok) {
      throw new Error('Failed to revoke public access');
    }

    return response.json();
  }
}