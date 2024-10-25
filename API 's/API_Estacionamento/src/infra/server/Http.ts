import { Request, Response } from "express"

export type RequestInput = {
    params: unknown,
    query: unknown,
    body: unknown
}

export type RequestCallback = (input: RequestInput) => { status: number, output: any }

export interface HttpServer {
    connect(): void
    on(method: string, endpoint: string, callback: RequestCallback)
}