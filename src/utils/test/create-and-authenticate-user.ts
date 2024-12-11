import { FastifyInstance } from 'fastify'
import request from 'supertest'

/**
 * Creates a user and authenticates it, returning the auth token.
 *
 * If user is not provided, a default one will be created with the following
 * properties:
 *
 * - name: John Doe
 * - email: johndoe@example.com
 * - password: 123456
 *
 * @param app The Fastify app instance
 * @param user The user to be created and authenticated
 * @returns The authentication token
 */
export async function createAndAuthenticateUser(
  app: FastifyInstance,
  user?: { name: string; email: string; password: string },
): Promise<{ token: string }> {
  if (!user) {
    user = {
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '123456',
    }
  }

  await request(app.server).post('/users').send(user)

  const authResponse = await request(app.server).post('/sessions').send({
    email: user.email,
    password: user.password,
  })

  const { token } = authResponse.body

  return { token }
}
