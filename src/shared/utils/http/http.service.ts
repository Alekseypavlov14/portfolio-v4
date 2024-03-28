import { HTTPHeaders } from './types/http-headers'

export interface HTTPServiceInterface {
  get<Result>(url: string): Promise<Result>
  post<Body, Result>(url: string, body: Body): Promise<Result>
  put<Body, Result>(url: string, body: Body): Promise<Result>
  delete<Result>(url: string): Promise<Result>
}

export class HTTPService implements HTTPServiceInterface {
  async get<Result>(url: string, headers?: HTTPHeaders): Promise<Result> {
    return await fetch(url, { method: 'GET', headers }).then(res => res.json())
  }

  async post<Body, Result>(url: string, body: Body, headers?: HTTPHeaders): Promise<Result> {
    return await fetch(url, { method: 'POST', headers, body: JSON.stringify(body) }).then(res => res.json())
  }

  async put<Body, Result>(url: string, body: Body, headers?: HTTPHeaders): Promise<Result> {
    return await fetch(url, { method: 'PUT', headers, body: JSON.stringify(body) }).then(res => res.json())
  }

  async delete<Result>(url: string, headers?: HTTPHeaders): Promise<Result> {
    return await fetch(url, { method: 'DELETE', headers }).then(res => res.json())
  }
}