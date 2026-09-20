export function lookup<T extends { readonly id: PropertyKey }>(
  id: T['id'],
  collection: ReadonlyMap<T['id'], T>,
  targetDescriptor = 'lookup-target',
): T {
  const target = collection.get(id);

  if (!target) {
    throw new Error(`Unknown ${targetDescriptor}: ${String(id)}`);
  }

  return target;
}

export function createLookup<T extends { readonly id: PropertyKey }>(
  collection: readonly T[],
): ReadonlyMap<T['id'], T> {
  return new Map(collection.map((item) => [item.id, item]));
}
