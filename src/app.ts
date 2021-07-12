import { Application } from 'https://deno.land/x/oak/mod.ts'
import { oakCors } from 'https://deno.land/x/cors/mod.ts'

import { router } from './routes'

const app = new Application()

app.use(oakCors())

app.use(router.routes())

app.use(router.allowMethods())

export { app }
