/**
 * Static key-value store for runtime configuration values.
 *
 * Used throughout the package for feature flags and settings that need to be
 * readable anywhere without passing parameters down the call stack.
 *
 * **Built-in keys:**
 * - `'enableCache'` — controls widget and query caching (default `true`).
 *   Set via `init()` parameters or toggled at runtime. Checked on every
 *   cache read/write in `QueryCacheManager` and `WidgetCacheManager`.
 *
 * @example
 * // Disable cache at runtime
 * Environments.setValue('enableCache', false)
 *
 * @example
 * // Read with a default value (returned when key has never been set)
 * const cacheOn = Environments.getValue('enableCache', true)
 */
export  class Environments{
    public static environments: Record<string, any> = {};

    /**
     * Retrieves a stored value by key.
     *
     * @param key - The key to look up.
     * @param defaultValue - Value returned when the key has never been set. Defaults to `null`.
     * @returns The stored value, or `defaultValue` if the key is absent.
     *
     * @example
     * Environments.getValue('enableCache', true)   // true if never set
     * Environments.getValue('myFlag', false)        // false if never set
     */
    public static getValue(key: string, defaultValue: any = null): any {
        if(key in this.environments){
            let output: any = this.environments[key];
            return output;
        }
        else{
            return defaultValue;
        }
    }

    /**
     * Stores a value under the given key. Overwrites any existing value.
     * Takes effect immediately — the next call to `getValue` with the same key
     * returns the new value.
     *
     * @param key - The key to store under.
     * @param value - The value to store.
     * @returns The `Environments` class itself for chaining.
     *
     * @example
     * Environments.setValue('enableCache', false)
     * Environments.setValue('myFlag', true).setValue('otherFlag', 42)
     */
    public static setValue(key:string, value:any){
        this.environments[key] = value;
        return this;
    }
}