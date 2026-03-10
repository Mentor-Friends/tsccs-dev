export class QueryCacheManager {

    private static prefix = "FREESCHEMA_CACHE_";

    static async getHash(query: any): Promise<string> {
        return await hashJsonObject(query);
    }

    static get(hash: string): any | null {
        const value = localStorage.getItem(this.prefix + hash);
        return value ? JSON.parse(value) : null;
    }

    static set(hash: string, data: any) {
        const existing = localStorage.getItem(this.prefix + hash);
        const serialized = JSON.stringify(data);

        // Skip if data hasn't changed — prevents infinite revalidation loops
        if (existing === serialized) return;

        localStorage.setItem(this.prefix + hash, serialized);

        // Notify listeners
        window.dispatchEvent(
            new CustomEvent(this.prefix + hash, {
                detail: data
            })
        );
    }

    static subscribe(hash: string, callback: (data:any)=>void) {
        const handler = (event: Event) => {
            const e = event as CustomEvent;
            callback(e.detail);
        };

        window.addEventListener(this.prefix + hash, handler);

        return () => {
            window.removeEventListener(this.prefix + hash, handler);
        };
    }

    static remove(hash: string) {
        localStorage.removeItem(this.prefix + hash);
    }

    static clearAll() {
        Object.keys(localStorage)
            .filter(k => k.startsWith(this.prefix))
            .forEach(k => localStorage.removeItem(k));
    }
}


export async function hashJsonObject(obj: any) {
  // Canonicalize by recursively sorting object keys at every level
  const sortedJsonString = JSON.stringify(obj, (_key, value) => {
    if (value && typeof value === 'object' && !Array.isArray(value)) {
      return Object.keys(value).sort().reduce((sorted: any, k) => {
        sorted[k] = value[k];
        return sorted;
      }, {});
    }
    return value;
  });

  const encoder = new TextEncoder();
  const data = encoder.encode(sortedJsonString);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');

  return hashHex;
}