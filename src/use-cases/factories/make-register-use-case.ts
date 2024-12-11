import { PrismaUsersRepository } from '@/repositories/prisma/prisma-users-repository'
import { RegisterUseCase } from '../register'

/**
 * Creates an instance of RegisterUseCase with a PrismaUsersRepository.
 *
 * This function initializes a PrismaUsersRepository to manage user data
 * and constructs a RegisterUseCase using it. The resulting
 * RegisterUseCase can be used to handle user registration logic.
 *
 * @returns {RegisterUseCase} An instance of RegisterUseCase configured with a
 *          PrismaUsersRepository.
 */
export function makeRegisterUseCase(): RegisterUseCase {
  const usersRepository = new PrismaUsersRepository()
  const registerUseCase = new RegisterUseCase(usersRepository)

  return registerUseCase
}
