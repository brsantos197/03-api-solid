import { prisma } from '@/lib/prisma'
import { hash } from 'bcryptjs'
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
  user?: {
    name?: string
    email?: string
    password?: string
    isAdmin?: boolean
  },
): Promise<{ token: string }> {
  const data = {
    name: user?.name ?? 'John Doe',
    email: user?.email ?? 'johndoe@example.com',
    password: user?.password ?? '123456',
    isAdmin: user?.isAdmin ?? false,
  }

  user = await prisma.user.create({
    data: {
      name: data.name,
      email: data.email,
      password_hash: await hash(data.password, 6),
      role: data.isAdmin ? 'ADMIN' : 'MEMBER',
    },
  })
  const authResponse = await request(app.server).post('/sessions').send({
    email: user.email,
    password: data.password,
  })

  const { token } = authResponse.body

  return { token }
}
