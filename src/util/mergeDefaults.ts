type DefaultProps<T> = {
  [K in keyof T]?: T[K] extends Record<string, unknown> ? DefaultProps<T[K]> : T[K];
};

export function mergeDefault<T extends Record<string, unknown>>(
  def: DefaultProps<T>,
  given?: T
): T {
  if (!given) return def as T;

  // eslint-disable-next-line no-restricted-syntax
  for (const key in def) {
    if (!Object.hasOwnProperty.call(given, key) || given[key] === undefined) {
      given[key as keyof T] = def[key] as T[keyof T];
    } else if (typeof given[key as keyof T] === 'object') {
      given[key as keyof T] = mergeDefault(
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        def[key as keyof T],
        given[key as keyof T]
      ) as T[keyof T];
    }
  }

  return given;
}
