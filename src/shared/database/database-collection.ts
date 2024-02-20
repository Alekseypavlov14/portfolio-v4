export abstract class DatabaseCollection<T> {
  constructor(protected readonly key: string) {}

  abstract getItems(): Promise<T[]> 
}