import { Router } from 'https://deno.land/x/oak/mod.ts'

import usersRouter from './users.routes.ts'

const router = new Router()

router.get('/', (context) => {
  context.response.body = {
    author: 'Lucas Neves',
    email: 'lucas54neves@gmail.com',
    repository: 'deno-deploy',
    url: 'https://github.com/lucas54neves/deno-deploy',
    description: 'Repository for Deno Deploy studies'
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

export default router
