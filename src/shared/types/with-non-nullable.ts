export type WithNonNullable<T, K extends keyof T> = T & {
  [P in K]: NonNullable<T[K]>
}