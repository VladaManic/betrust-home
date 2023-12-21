function isStorageSupported(
    webStorageType: 'localStorage' | 'sessionStorage' = 'localStorage'
): boolean {
    /**
     * Determines whether an error is a QuotaExceededError.
     *
     * Browsers love throwing slightly different variations of QuotaExceededError
     * (this is especially true for old browsers/versions), so we need to check
     * different fields and values to ensure we cover every edge-case.
     *
     * @param err - The error to check
     * @return Is the error a QuotaExceededError?
     */
    function isQuotaExceededError(err: unknown): boolean {
        return (
            err instanceof DOMException &&
            // everything except Firefox
            (err.code === 22 ||
                // Firefox
                err.code === 1014 ||
                // test name field too, because code might not be present
                // everything except Firefox
                err.name === 'QuotaExceededError' ||
                // Firefox
                err.name === 'NS_ERROR_DOM_QUOTA_REACHED' ||
                // Safari
                err.name === 'QuotaExceededError')
        )
    }

    /**
     * Determines whether a storage implementing the Web Storage API (localStorage
     * or sessionStorage) is supported.
     *
     * Browsers can make the storage not accessible in different ways, such as
     * not exposing it at all on the global object or throwing errors as soon as
     * you access/store an item.
     * To account for all these cases, we try to store a dummy item using a
     * try & catch to analyze the thrown error.
     *
     * @param webStorageType - The Web Storage API to check
     * @return Is the storage supported?
     */
    try {
        const storage: Storage | undefined = window[webStorageType]
        const testKey = '__test__'
        // Try to write to localStorage
        storage.setItem(testKey, testKey)
        // Remove the test key
        storage.removeItem(testKey)
        return true
    } catch (err) {
        // Check if the error is a QuotaExceededError
        return isQuotaExceededError(err)
    }
}

export default isStorageSupported
