import { Exception } from '@/shared/exceptions'

export class SessionStorage<T> {
  constructor(
    private readonly key: string,
    private defaultValue?: T
  ) {}

  getItem(): T {
    const savedValue = sessionStorage.getItem(this.key)
    if (!savedValue) return this.returnDefaultValueOrThrowException()

    try {
      return JSON.parse(savedValue)
    } catch(e) {
      return this.returnDefaultValueOrThrowException()
    }
  }

  setItem(value: T) {
    const stringifiedValue = JSON.stringify(value)
    sessionStorage.setItem(this.key, stringifiedValue)
  }

  private isDefaultValueDefined(defaultValue: T | undefined): defaultValue is T {
    return this.defaultValue !== undefined
  }

  private returnDefaultValueOrThrowException() {
    if (this.isDefaultValueDefined(this.defaultValue)) return this.defaultValue
    throw new Exception(404)
  }
}