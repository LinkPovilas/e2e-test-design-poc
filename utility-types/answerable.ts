export type Answerable<T> = {
  [K in keyof T]: T[K] extends (...args: any[]) => infer R
    ? R extends void
      ? never
      : R extends Promise<void>
        ? never
        : (...args: Parameters<T[K]>) => Promise<R> | R
    : never;
};
