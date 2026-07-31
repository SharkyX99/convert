export function saveToStorage(key: string, value: unknown) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function loadFromStorage<T>(key: string, fallback: T): T {
  const stored = localStorage.getItem(key);
  return stored ? (JSON.parse(stored) as T) : fallback;
}
