// Create a WeakMap instance
export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
// Check if the endpoint has been called before
  if (weakMap.has(endpoint)) {
    const count = weakMap.get(endpoint);
    if (count >= 5) {
      throw new Error('Endpoint load is high');
    }
    weakMap.set(endpoint, count + 1);
  } else {
    weakMap.set(endpoint, 1);
  }
}
