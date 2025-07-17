import { PermissionSet, getPermissionSetFromStrings } from './PermissionSet'

export class AccessControlCacheService {
  private readonly userAccessCache: Map<number, Map<number, PermissionSet>> = new Map()
  private readonly publicAccessCache: Map<number, PermissionSet> = new Map()
  private readonly baseUrl: string

  constructor() {
    this.baseUrl = process.env.ACCESS_CONTROL_BASE_URL || 'http://localhost:3000/api/access-control'
    if (!this.baseUrl) throw new Error('ACCESS_CONTROL_BASE_URL is not defined in environment')
    console.log('AccessControlCacheService initialized.')
  }

  async loadCacheFromApi(entityId?: number): Promise<void> {
    try {
      let url = `${this.baseUrl}/access-group/by-entity`
      if (entityId !== undefined) {
        url += `?entityId=${entityId}`
      }

      const response = await fetch(url)
      if (!response.ok) throw new Error(`Failed to fetch data: ${response.statusText}`)

      const data = await response.json()
      this.loadCacheFromJson(data)
    } catch (err) {
      console.error('[ERROR] loadCacheFromApi failed:', err)
    }
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

      for (const [conceptIdStr, permissionsList] of Object.entries(userPermissionsMap)) {
        const conceptId = parseInt(conceptIdStr)
        const permissionSet = getPermissionSetFromStrings(permissionsList)
        this.userAccessCache.get(entityId)!.set(conceptId, permissionSet)
      }
    }
  }

  async hasAccess(entityId: number, conceptId: number, required: PermissionSet): Promise<boolean> {
    if (await this.hasPublicAccess(conceptId, required)) return true
    console.log("length of userAccessCache:", this.userAccessCache.size)
    if (!this.userAccessCache.has(entityId)) {
      await this.loadCacheFromApi(entityId)
    }

    const conceptMap = this.userAccessCache.get(entityId)
    const permissions = conceptMap?.get(conceptId)
    return permissions !== undefined && (permissions & required) === required
  }

  async getAccessibleConcepts(
    entityId: number,
    conceptIds: number[],
    required: PermissionSet
  ): Promise<number[]> {
    const result: number[] = []
    const remaining: number[] = []

    for (const id of conceptIds) {
      if (await this.hasPublicAccess(id, required)) {
        result.push(id)
      } else {
        remaining.push(id)
      }
    }
    console.log("length of userAccessCache:", this.userAccessCache.size)
    if (remaining.length > 0 && !this.userAccessCache.has(entityId)) {
      await this.loadCacheFromApi(entityId)
    }

    const conceptMap = this.userAccessCache.get(entityId)
    for (const id of remaining) {
      const permissions = conceptMap?.get(id)
      if (permissions !== undefined && (permissions & required) === required) {
        result.push(id)
      }
    }

    return result
  }

  async getAccessByUser(entityId: number): Promise<Map<number, PermissionSet>> {
    if (!this.userAccessCache.has(entityId)) {
      await this.loadCacheFromApi(entityId)
    }
    return new Map(this.userAccessCache.get(entityId) ?? [])
  }

  async getAccessByConcept(conceptId: number): Promise<Map<number, PermissionSet>> {
    const result = new Map<number, PermissionSet>()

    if (this.userAccessCache.size === 0) {
      await this.loadCacheFromApi()
    }

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

  deletePublicAccessRecordById(conceptId: number): void {
    console.log(`Deleting public access for concept ${conceptId}`)
    this.publicAccessCache.delete(conceptId)
  }

  clearCache(): void {
    console.log('Clearing access control cache...')
    this.userAccessCache.clear()
    this.publicAccessCache.clear()
  }

  async getConceptsByPublicAccess(): Promise<Record<number, string[]>> {
    const result: Record<number, string[]> = {}

    try {
      const response = await fetch(`${this.baseUrl}/concepts/by-public-access`)
      if (!response.ok) {
        throw new Error(`Failed to fetch public access: ${response.statusText}`)
      }

      const apiData = await response.json()
      const data = apiData?.data
      if (!data || typeof data !== 'object') return result

      for (const [conceptIdStr, perms] of Object.entries(data)) {
        const conceptId = parseInt(conceptIdStr)
        const permissionSet = getPermissionSetFromStrings(perms as string[])

        this.publicAccessCache.set(conceptId, permissionSet)
        result[conceptId] = perms as string[]
      }
    } catch (err) {
      console.error('[ERROR] Failed to fetch public access data:', err)
    }

    return result
  }

  async hasPublicAccess(conceptId: number, required: PermissionSet): Promise<boolean> {
    console.log("length of publicAccessCache:", this.publicAccessCache.size)
    if (!this.publicAccessCache.has(conceptId)) {
      await this.getConceptsByPublicAccess()
    }

    const permissions = this.publicAccessCache.get(conceptId)
    return permissions !== undefined && (permissions & required) === required
  }

  async getConceptsWithPublicAccess(
    conceptIds: number[],
    required: PermissionSet
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
      await this.getConceptsByPublicAccess()
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
