import Fastify from 'fastify'
import routes from './routes'
const fastify = Fastify({ logger: true })

fastify.register(routes)

const start = async () => {
  try {
    await fastify.listen(process.env.PORT || 8080)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()
