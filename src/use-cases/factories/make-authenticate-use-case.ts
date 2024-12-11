import { PrismaUsersRepository } from '@/repositories/prisma/prisma-users-repository'
import { AuthenticateUseCase } from '../authenticate'

/**
 * Creates an instance of AuthenticateUseCase with a PrismaUsersRepository.
 *
 * This function initializes a PrismaUsersRepository to manage user data
 * and constructs an AuthenticateUseCase using it. The resulting
 * AuthenticateUseCase can be used to handle authentication logic.
 *
 * @returns {AuthenticateUseCase} An instance of AuthenticateUseCase configured with a
 *          PrismaUsersRepository.
 */
export function makeAuthenticateUseCase(): AuthenticateUseCase {
  const usersRepository = new PrismaUsersRepository()
  const authenticateUseCasee = new AuthenticateUseCase(usersRepository)

  return authenticateUseCasee
}
