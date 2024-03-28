import { HTTPService } from './http.service'

export const httpService = new HTTPService()

export * from './constants'
export type { HTTPHeaders } from './types/http-headers'