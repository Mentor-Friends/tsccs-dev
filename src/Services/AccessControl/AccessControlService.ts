import { Concept, GetConceptBulk, GetTheConcept } from "../../app";
import { AccessControlCacheService } from "./AccessControlCacheService";
import { PermissionSet } from "./PermissionSet";

const accessCache = new AccessControlCacheService();

export async function CheckAccessOfConcept(
  userId: number,
  access: PermissionSet,
  conceptId: number,
  entityId?: number
): Promise<boolean> {
  const concept = await GetTheConcept(conceptId);
  if (concept.userId === 999 || concept.userId === userId) {
    return true;
  }
  const accessId = concept.accessId ?? 0;
  entityId = entityId ? entityId : getEntityIdConceptByUserId(userId);
  return await accessCache.hasAccess(entityId, accessId, access);
}

export async function CheckAccessOfConceptList(
  userId: number,
  access: PermissionSet,
  conceptIdList: number[],
  entityId?: number
): Promise<boolean> {
  const conceptList = await GetConceptBulk(conceptIdList);

  const accessIdMap = Array.from(conceptList.values())
    .filter((c: Concept) => c.userId !== userId && c.userId !== 999)
    .map((c) => c.accessId ?? 0)
    .filter((value, index, self) => self.indexOf(value) === index); // Distinct values

  entityId = entityId ? entityId : getEntityIdConceptByUserId(userId);
  const accessList = await accessCache.getAccessibleConcepts(
    entityId,
    accessIdMap,
    access
  );
  return accessList.length === conceptIdList.length;
}

export async function FilterConceptListByAccess(
  userId: number,
  access: PermissionSet,
  conceptIdList: number[],
  entityId?: number
): Promise<number[]> {
  const conceptList = await GetConceptBulk(conceptIdList);

  const accessIdMap = Array.from(conceptList.values())
    .filter((c) => c.userId !== userId && c.userId !== 999)
    .map((c) => c.accessId ?? 0)
    .filter((value, index, self) => self.indexOf(value) === index); // Distinct values

  entityId = entityId ? entityId : getEntityIdConceptByUserId(userId);
  const accessibleAccessIds = new Set(
    await accessCache.getAccessibleConcepts(entityId, accessIdMap, access)
  );

  const filteredList: number[] = [];
  for (const concept of conceptList.values()) {
    if (
      concept.userId === userId ||
      concept.userId === 999 ||
      accessibleAccessIds.has(concept.accessId ?? 0)
    ) {
      filteredList.push(concept.id);
    }
  }

  return filteredList;
}

function getEntityIdConceptByUserId(userId: number): number {
  // Implement logic to retrieve entity ID based on user ID

  return userId; // Placeholder logic
}

// function mapToPermissionSet(access: string): PermissionSet {
//   // Map access string to PermissionSet
//   switch (access.toLowerCase()) {
//     case 'read':
//       return PermissionSet.Read
//     case 'write':
//       return PermissionSet.Write
//     case 'execute':
//       return PermissionSet.Execute
//     case 'delete':
//       return PermissionSet.Delete
//     default:
//       throw new Error(`Unknown access type: ${access}`)
//   }
// }
