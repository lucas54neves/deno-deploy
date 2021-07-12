import { Router } from 'https://deno.land/x/oak/mod.ts'
import { v4 } from 'https://deno.land/std@0.100.0/uuid/mod.ts'

type RequestDTO = {
  request: any
  response: any
}

const users: any = []

const channel = new BroadcastChannel('users')

channel.onmessage = (event) => {
  messages.push(event.data)
}

const usersRouter = new Router()

usersRouter.get('/', (context) => {
  context.response.body = users
})

usersRouter.post('/', async ({ request, response }: RequestDTO) => {
  const body = await request.body()

  const value = await body.value

  const user = {
    id: v4.generate(),
    name: value.name,
    email: value.email
  }

  users.push(user)

  channel.postMessage(user)

  response.status = 201
})

export default usersRouter
