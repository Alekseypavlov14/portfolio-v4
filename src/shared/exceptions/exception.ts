export interface IException {
  readonly code: number
  readonly message?: string
}

export class Exception implements IException {
  constructor(
    readonly code: number,
    readonly message?: string
  ) {}
}