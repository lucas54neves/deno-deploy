import app from './app.ts'

addEventListener('fetch', app.fetchEventHandler())
