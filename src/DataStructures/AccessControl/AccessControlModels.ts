/**
 * AccessControlModels
 *
 * Data structures for Access Control operations.
 * Contains all request/response types for the access control API.
 */

// #region Access Request/Response Types

export interface AccessRequest {
  accessId: number;
  permission: string;
  entityId?: number | null;
}

export interface AccessResult {
  accessId: number;
  permission: string;
  entityId?: number | null;
  hasAccess: boolean;
}

export interface AccessControlAPIResponse<T = any> {
  status: boolean;
  data?: T;
  message?: string;
  errorCode?: string;
}

// #endregion

// #region Bulk Access Types

export interface BulkAccessTarget {
  entityId: number;
  permissions: string[];
}

export interface BulkAccessRequest {
  accessId?: number;
  targets: BulkAccessTarget[];
}

export interface BulkCheckAccessRequest {
  accessId: number;
  permissions: string[];
  entityIds: number[];
}

// #endregion

// #region Access Inheritance Types

export interface AccessInheritanceRequest {
  accessId?: number;
  connectionTypeId?: number;
  enable?: boolean;
}

// #endregion

// #region Super Admin Types

export interface SuperAdminRequest {
  accessId?: number;
}

// #endregion


// #region Concept Access Types
export interface ConceptAccessRequest {
  conceptIds: number;
  permission: string;
  entityId?: number | null;
}

export interface BulkConceptAccessRequest {
  conceptIds: number[];
  permissions: string[];
  entityId?: number | null;
}
// #endregion
