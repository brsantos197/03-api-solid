import { PrismaUsersRepository } from '@/repositories/prisma/prisma-users-repository'
import { GetUserProfileUseCase } from '../get-user-profile'

/**
 * Creates an instance of GetUserProfileUseCase with a PrismaUsersRepository.
 *
 * This function initializes a PrismaUsersRepository to manage user data and
 * constructs a GetUserProfileUseCase using it. The resulting use case can be
 * used to retrieve user profile data.
 *
 * @returns {GetUserProfileUseCase} An instance of GetUserProfileUseCase configured with a
 *          PrismaUsersRepository.
 */
export function makeGetUserProfileUseCase(): GetUserProfileUseCase {
  const usersRepository = new PrismaUsersRepository()
  const getUserProfileUseCase = new GetUserProfileUseCase(usersRepository)

  return getUserProfileUseCase
}
