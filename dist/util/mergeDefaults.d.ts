type DefaultProps<T> = {
    [K in keyof T]?: T[K] extends Record<string, unknown> ? DefaultProps<T[K]> : T[K];
};
export declare function mergeDefault<T extends Record<string, unknown>>(def: DefaultProps<T>, given?: T): T;
export {};
