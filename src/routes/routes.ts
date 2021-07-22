import { Router } from 'https://deno.land/x/oak/mod.ts'
import usersRouter from './users.routes.ts'

const router = new Router()

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}

type RequestDTO = {
  request: any
  response: any
}

router.get('/', (context) => {
  context.response.body = {
    author: 'Lucas Neves',
    email: 'lucas54neves@gmail.com',
    repository: 'deno-deploy',
    url: 'https://github.com/lucas54neves/deno-deploy',
    description: 'Repository for Deno Deploy studies',
    routes: [
      {
        route: '/',
        method: 'GET'
      },
      {
        route: '/date-now',
        method: 'GET'
      },
      {
        route: '/users',
        method: 'GET'
      },
      {
        route: '/users',
        method: 'POST'
      }
    ]
  }
})

router.get('/date-now', (context) => {
  const dateNow = new Date()

  const year = dateNow.getFullYear()

  const month = dateNow.getMonth()

  const day = dateNow.getDay()

  const hour = dateNow.getHours()

  const minute = dateNow.getMinutes()

  const seconds = dateNow.getSeconds()

  const milliseconds = dateNow.getMilliseconds()

  context.response.body = {
    complete: dateNow,
    year,
    month,
    day,
    hour,
    minute,
    seconds,
    milliseconds
  }
})

router.use('/users', usersRouter.routes())

router.get('/timeout', async ({ request, response }: RequestDTO) => {
  const start = Date.now()

  await sleep(8 * 1000)

  const end = Date.now()

  response.body = {
    time: end - start,
    date: new Date(),
    url: request.url
  }

  response.headers = {
    'cache-control': 'no-cache, no-store, must-revalidate'
  }
})

export default router
