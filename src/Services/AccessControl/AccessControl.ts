// src/services/AccessControlService.ts

import { BaseUrl } from "../../app";

const accessControlUrl =  BaseUrl.ACCESS_CONTROL_BASE_URL; // Your Access Control API Base URL

export class AccessControlService {
  static async assignAccessToEntity(request: {
    conceptId: number;
    access: string;
    entityId: number;
    makePublic: boolean;
  }): Promise<any> {
    const url = `${accessControlUrl}/api/access-control/assign-access`;

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
    const url = `${accessControlUrl}/api/access-control/assign-public-access`;

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
    const url = `${accessControlUrl}/api/access-control/assign-public-access-bulk-concept`;

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
    entityIdList: number[];
    accessList: string[];
  }): Promise<any> {
    const url = `${accessControlUrl}/api/access-control/assign-access-bulk`;

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
    const url = `${accessControlUrl}/api/access-control/assign-access-by-user`;

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
    const url = `${accessControlUrl}/api/access-control/revoke-access?conceptId=${conceptId}&access=${encodeURIComponent(access)}&entityId=${entityId}`;

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
    const url = `${accessControlUrl}/api/access-control/revoke-access-bulk`;

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
}