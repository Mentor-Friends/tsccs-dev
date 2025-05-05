import { PermissionSet, getPermissionSetFromStrings } from './PermissionSet' // adjust import to your actual PermissionSet file

export class AccessControlCacheService {
  private readonly userAccessCache: Map<number, Map<number, PermissionSet>> =
    new Map()
  private readonly publicAccessCache: Map<number, PermissionSet> = new Map()

  constructor() {
    const baseUrl = process.env.ACCESS_CONTROL_BASE_URL || 'defaultBaseUrl' // Replace 'defaultBaseUrl' with your fallback URL if needed
    if (!baseUrl)
      throw new Error('AccessControlBaseUrl is not defined in config')
  }

  async loadCacheFromApi(entityId?: number): Promise<void> {
    let url = 'get-access-group-by-entity'
    if (entityId !== undefined) {
      url += `?userId=${entityId}`
    }

    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.statusText}`)
    }
    const data = await response.json()
    this.loadCacheFromJson(data)
  }

  loadCacheFromJson(jsonData: any): void {
    const data = jsonData?.data
    if (!data || typeof data !== 'object') return

    const typedData = data as Record<string, Record<string, string[]>>
    for (const [entityKey, userPermissionsMap] of Object.entries(typedData)) {
      const entityId = parseInt(entityKey)
      if (!this.userAccessCache.has(entityId)) {
        this.userAccessCache.set(entityId, new Map())
      }

      for (const [conceptIdStr, permissionsList] of Object.entries(
        userPermissionsMap,
      )) {
        const conceptId = parseInt(conceptIdStr)
        const permissionSet = getPermissionSetFromStrings(permissionsList)
        this.userAccessCache.get(entityId)!.set(conceptId, permissionSet)
      }
    }
  }

  hasAccess(
    entityId: number,
    conceptId: number,
    required: PermissionSet,
  ): boolean {
    if (this.hasPublicAccess(conceptId, required)) return true

    if (!this.userAccessCache.has(entityId)) {
      this.loadCacheFromApi(entityId)
    }

    const conceptMap = this.userAccessCache.get(entityId)
    const permissions = conceptMap?.get(conceptId)
    return permissions !== undefined && (permissions & required) === required
  }

  getAccessibleConcepts(
    entityId: number,
    conceptIds: number[],
    required: PermissionSet,
  ): number[] {
    const accessible: number[] = []
    const remaining: number[] = []

    for (const id of conceptIds) {
      if (this.hasPublicAccess(id, required)) {
        accessible.push(id)
      } else {
        remaining.push(id)
      }
    }

    if (remaining.length > 0 && !this.userAccessCache.has(entityId)) {
      this.loadCacheFromApi(entityId)
    }

    const conceptMap = this.userAccessCache.get(entityId)
    for (const id of remaining) {
      if (
        conceptMap?.get(id) &&
        (conceptMap.get(id)! & required) === required
      ) {
        accessible.push(id)
      }
    }

    return accessible
  }

  getAccessByUser(entityId: number): Map<number, PermissionSet> {
    if (!this.userAccessCache.has(entityId)) {
      this.loadCacheFromApi(entityId)
    }
    return new Map(this.userAccessCache.get(entityId) ?? [])
  }

  getAccessByConcept(conceptId: number): Map<number, PermissionSet> {
    const result = new Map<number, PermissionSet>()
    for (const [entityId, conceptMap] of this.userAccessCache) {
      const permission = conceptMap.get(conceptId)
      if (permission !== undefined) {
        result.set(entityId, permission)
      }
    }
    return result
  }

  deleteRecordByUserId(entityId: number): void {
    this.userAccessCache.delete(entityId)
  }

  clearCache(): void {
    this.userAccessCache.clear()
    this.publicAccessCache.clear()
  }

  async getConceptsByPublicAccess(conceptIds: number[]): Promise<void> {
    const url = 'get-concepts-by-public-access'
    const response = await fetch(url, {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json',
      },
      body: JSON.stringify(conceptIds),
    })
    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.statusText}`)
    }
    const data = (await response.json())?.data

    if (data) {
      for (const [conceptIdStr, permissionsList] of Object.entries(data)) {
        const conceptId = parseInt(conceptIdStr)
        const permissionSet = getPermissionSetFromStrings(
          permissionsList as string[],
        )
        this.publicAccessCache.set(conceptId, permissionSet)
      }
    }
  }

  hasPublicAccess(conceptId: number, required: PermissionSet): boolean {
    const permissions = this.publicAccessCache.get(conceptId)
    if (permissions === undefined) {
      this.getConceptsByPublicAccess([conceptId])
    }
    const updated = this.publicAccessCache.get(conceptId)
    return updated !== undefined && (updated & required) === required
  }

  async getConceptsWithPublicAccess(
    conceptIds: number[],
    required: PermissionSet,
  ): Promise<number[]> {
    const accessible: number[] = []
    const missing: number[] = []

    for (const id of conceptIds) {
      const permissions = this.publicAccessCache.get(id)
      if (permissions !== undefined) {
        if ((permissions & required) === required) {
          accessible.push(id)
        }
      } else {
        missing.push(id)
      }
    }

    if (missing.length > 0) {
      await this.getConceptsByPublicAccess(missing)
      for (const id of missing) {
        const updated = this.publicAccessCache.get(id)
        if (updated !== undefined && (updated & required) === required) {
          accessible.push(id)
        }
      }
    }

    return accessible
  }
}
