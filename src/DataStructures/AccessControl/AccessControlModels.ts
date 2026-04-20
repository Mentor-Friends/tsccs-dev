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
  accessIds: number[];
  permission: string;
  entityId?: number | null;
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

// #region Parent Access Inheritance Types

/**
 * Request model for parent access inheritance operations
 * Mirrors C# ParentAccessInheritanceRequest
 */
export interface ParentAccessInheritanceRequest {
  parentAccessId: number;
  childAccessId?: number | null;
}

// #endregion

// #region Concept-Based Request Types (for server-side conceptId → accessId resolution)

export interface ParentAccessInheritanceWithConceptRequest {
  parentConceptId: number;
  childConceptId?: number | null;
}

export interface BulkParentAccessInheritanceWithConceptRequest {
  parentConceptId: number;
  childConceptIds: number[];
}

export interface BulkParentAccessInheritanceResult {
  childConceptId: number;
  accessId: number;
  success: boolean;
  message?: string;
}

export interface SuperAdminWithConceptRequest {
  conceptId: number;
}

export interface AccessInheritanceWithConceptRequest {
  conceptId: number;
  connectionTypeId?: number;
  enable?: boolean;
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
