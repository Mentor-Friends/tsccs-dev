# Access Control Documentation

The `AccessControlService` provides comprehensive, scalable role-based and inheritance-based access control for concepts within your knowledge graph. It includes a sophisticated 5-phase bulk access check algorithm with Breadth-First Search (BFS) inheritance graph traversal, bulk assignments, super-admin checks, and parent access inheritance.

---

## 1. Initialization

To ensure backward compatibility with older systems, the Access Control module is **disabled by default**. To use it, you must explicitly enable it during the package initialization using the `flags` object and provide the base URL for your Access Control microservice.

If `accessControl` is omitted or set to `false`, all permission checks will instantly return `true` (granting access globally), completely bypassing network requests.

```typescript
import { init } from 'mftsccs-browser';

async function initializeApp() {
  await init(
    "https://main-backend-api.com",        // Backend URL
    "https://ai-api.com",                  // AI URL
    "your-bearer-token",                   // Auth Token
    "http://localhost:5001",               // Node Cache URL
    true,                                  // Enable AI
    "my_application",                      // Application Name
    undefined,                             // Service Worker Config
    { 
      accessControl: true                  // 👈 MUST BE TRUE to enforce permissions
    },
    { logserver: "https://logdev.example.com" }, // Log server params
    "https://your-access-control-api.com"  // 👈 URL to Access Control Microservice
  );
}
```

---

## 2. Importing the Service

You can import the `AccessControlService` class directly from the package and use its static methods.

```typescript
import { AccessControlService } from 'mftsccs-browser';
```

Standard permissions typically include: `'read'`, `'write'`, `'execute'`, and `'delete'`. 

---

## 3. Checking Access

The service provides optimized methods for checking single or bulk permissions. 

### `checkAccess`
Checks if a specific entity (user, group, or session) has permission for a single concept.

```typescript
const conceptId = 101;
const userId = 42;

const hasAccess = await AccessControlService.checkAccess(conceptId, 'read', userId);

if (!hasAccess) {
  throw new Error("You do not have permission to view this concept.");
}
console.log("Access granted!");
```

### `checkAccessBulk` (Recommended for Performance)
Checks access for multiple concepts simultaneously. This leverages the 5-phase resolution algorithm to minimize network requests.

```typescript
const conceptIds = [101, 102, 103, 104];

const results = await AccessControlService.checkAccessBulk(conceptIds, 'write', userId);

// results is a Map<number, boolean>
if (results.get(101)) {
  console.log("User can edit concept 101");
}
```

### `getConceptIdsWithPermission`
Filters an array of concepts, returning only the IDs that the user is permitted to access.

```typescript
const targetIds = [200, 201, 202, 203];

const allowedIds = await AccessControlService.getConceptIdsWithPermission('read', targetIds, userId);

console.log("User can only read these concepts:", allowedIds);
```

---

## 4. Managing Permissions

Assign or revoke standard permissions across the graph.

### `assignAccess`
Grants specific permissions on multiple concepts to a target entity.

```typescript
const assignmentResult = await AccessControlService.assignAccess({
  conceptIds: [301, 302],
  permissions: ['read', 'write'],
  entityId: 42 // Target user or group receiving access
});

console.log('Permissions granted successfully:', assignmentResult);
```

### `revokeAccess` & `revokeAccessBulk`
Removes previously granted permissions.

```typescript
// Single concept revocation
const isRevoked = await AccessControlService.revokeAccess(301, 'write', 42);

// Bulk revocation
const bulkRevokeResult = await AccessControlService.revokeAccessBulk({
  conceptIds: [301, 302],
  permissions: ['execute', 'delete'],
  entityId: 42
});
```

### `makeConceptPrivate`
A helper that restricts a concept exclusively to its owner. It forcefully assigns `read`, `write`, `execute`, and `delete` permissions to the current active logged-in entity, and updates the local concepts payload.

```typescript
try {
  await AccessControlService.makeConceptPrivate(505);
  console.log("Concept 505 is now private.");
} catch (error) {
  console.error("Only the owner can make a concept private:", error);
}
```

---

## 5. Inheritance Management

Access Control supports hierarchical inheritance. If a concept serves as a child in an inheritance graph, it will automatically share its parent's permissions.

### Parent Inheritance
Directly link a child concept's access rights to a parent concept.

```typescript
const childConceptId = 800;
const parentConceptId = 900;

 // 1. Link child to inherit from parent
await AccessControlService.setParentAccessInheritance(childConceptId, parentConceptId);

// 2. Check if a link exists
const isInheriting = await AccessControlService.hasParentAccessInheritance(childConceptId, parentConceptId);

// 3. Resolve the active Access ID belonging to a parent
const activeParentAccessId = await AccessControlService.getParentAccessId(childConceptId);

// 4. Remove the inheritance link
await AccessControlService.removeParentAccessInheritance(childConceptId, parentConceptId);
```

---

## 6. Super Admin Operations

Super-Admins automatically bypass all permission checks, meaning `checkAccess` algorithms instantly short-circuit and return `true` during Phase 1.

```typescript
const targetUserId = 99;

// 1. Check if a user is a super admin
const isAdmin = await AccessControlService.isSuperAdmin(targetUserId);

if (!isAdmin) {
  // 2. Promote to super admin
  await AccessControlService.assignSuperAdmin(targetUserId);
  console.log(`User ${targetUserId} is now a super admin.`);
}

// 3. Demote from super admin
await AccessControlService.revokeSuperAdmin(targetUserId);
```

---

## 7. Advanced: The 5-Phase Check Algorithm

When you call `checkAccessBulk`, the service executes a highly optimized pipeline:

1. **Super-Admin Short-Circuit**: Checks if the user is a super-admin. If yes, grants immediate access.
2. **Fast-Path Classification**: Auto-approves owners, public concepts (`accessId < 10000`), and static pure "Type" definitions.
3. **BFS Graph Resolution**: Crawls the concept graph (up to `MAX_BFS_DEPTH = 10`) looking for inherited permissions via internal connections or API-defined parent links.
4. **Subject & Group Resolution**: Queries the API combining the entity's direct IDs and associated Group IDs.
5. **Grant-Only Merge**: Merges all findings. If *any* inherited path grants the requested permission, the final result evaluates to `true`.