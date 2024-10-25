import express, { Request, Response } from 'express'
import { HttpServer, RequestCallback, RequestInput } from './Http'
import { ZodError } from 'zod'

const app = express()

export class ExpressAdapter implements HttpServer {
    private instance: ExpressAdapter = null
    
    constructor() {
        this.#use()
        if (!this.instance) this.instance = this
        return this.instance
    }

    #use(): never {
        app.use(express.json())
    }

    connect(): void {
        const port = parseInt(process.env.PORT) ?? 3000
        app.listen(port, () => console.log(`Server running at: http://localhost:${port}`))
    }

    on(method: string, endpoint: string, callback: RequestCallback) {
        app[method](endpoint, async (req: Request, res: Response) => {
            try {
                const input: RequestInput = {
                    query: req.query,
                    params: req.params,
                    body: req.body
                }
                const { status, output } = await callback(input)
                res.status(status).json(output)
            } catch (err) {
                if (err instanceof ZodError) {
                    const error = err.errors.at(-1)
                    res.json({
                        error: error?.message
                    })
                } else {
                    res.json({
                        error: err.message
                    })
                }
            }
        })
    }
}