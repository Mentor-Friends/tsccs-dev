export class WidgetCacheManager {

    private static WIDGET_PREFIX = "WIDGET_CACHE_";
    private static LATEST_PREFIX = "WIDGET_LATEST_CACHE_";
    private static RECENT_PREFIX = "WIDGET_RECENT_CACHE_";

    static getWidget(id: number): any | null {
        return this._get(this.WIDGET_PREFIX + id);
    }

    static setWidget(id: number, data: any) {
        this._set(this.WIDGET_PREFIX + id, data);
    }

    static getLatest(id: number): any | null {
        return this._get(this.LATEST_PREFIX + id);
    }

    static setLatest(id: number, data: any) {
        this._set(this.LATEST_PREFIX + id, data);
    }

    static getRecent(id: number): any | null {
        return this._get(this.RECENT_PREFIX + id);
    }

    static setRecent(id: number, data: any) {
        this._set(this.RECENT_PREFIX + id, data);
    }

    static removeWidget(id: number) {
        localStorage.removeItem(this.WIDGET_PREFIX + id);
    }

    static removeLatest(id: number) {
        localStorage.removeItem(this.LATEST_PREFIX + id);
    }

    static removeRecent(id: number) {
        localStorage.removeItem(this.RECENT_PREFIX + id);
    }

    static clearAll() {
        const prefixes = [this.WIDGET_PREFIX, this.LATEST_PREFIX, this.RECENT_PREFIX];
        Object.keys(localStorage)
            .filter(k => prefixes.some(p => k.startsWith(p)))
            .forEach(k => localStorage.removeItem(k));
    }

    private static _get(key: string): any | null {
        const value = localStorage.getItem(key);
        return value ? JSON.parse(value) : null;
    }

    private static _set(key: string, data: any) {
        const serialized = JSON.stringify(data);
        const existing = localStorage.getItem(key);
        // Skip if data hasn't changed
        if (existing === serialized) return;
        localStorage.setItem(key, serialized);
    }
}
