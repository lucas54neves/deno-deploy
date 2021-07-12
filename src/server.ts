import app from './app.ts'

const host = '127.0.0.1'

const port = '3333'

console.log(`Deno running on port ${port}`)

await app.listen(`https://lucas-deno-deploy.deno.dev/`)
