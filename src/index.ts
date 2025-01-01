import { Hono } from 'hono'
import { prettyJSON } from 'hono/pretty-json'
import { logger } from 'hono/logger'

const app = new Hono()

app.use('*', prettyJSON())
app.use('*', logger())

app.get('/', (c) => {
	return c.text('Hey anon!')
})

export default app
