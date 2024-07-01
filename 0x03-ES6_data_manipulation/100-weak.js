/**
 * @param {number[]} arr
 * @returns {number}
 */

const weakMap = new WeakMap();

export function queryAPI(endpoint) {
    if (!weakMap.has(endpoint)) {
        weakMap.set(endpoint, 0);
    }

    const queryCount = weakMap.get(endpoint) + 1;
    weakMap.set(endpoint, queryCount);

    if (queryCount >= 5) {
        throw new Error('Endpoint load is high');
    }

    console.log(`Calling API endpoint: ${endpoint.name}`);
    return `Query successful for ${endpoint.name}`;
}
