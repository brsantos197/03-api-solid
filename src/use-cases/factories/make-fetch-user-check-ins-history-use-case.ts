import { PrismaCheckInsRepository } from '@/repositories/prisma/prisma-check-ins-repository'
import { FetchUserCheckInsHistoryUseCase } from '../fetch-user-check-ins-history'

/**
 * Creates an instance of FetchUserCheckInsHistoryUseCase with a PrismaCheckInsRepository.
 *
 * This function initializes a PrismaCheckInsRepository to manage check-ins data
 * and constructs a FetchUserCheckInsHistoryUseCase using it. The resulting
 * FetchUserCheckInsHistoryUseCase can be used to handle user check-in history
 * fetching logic.
 *
 * @returns {FetchUserCheckInsHistoryUseCase} An instance of FetchUserCheckInsHistoryUseCase configured with a
 *          PrismaCheckInsRepository.
 */
export function makeFetchUserCheckInsHistoryUseCase(): FetchUserCheckInsHistoryUseCase {
  const checkInsRepository = new PrismaCheckInsRepository()
  const fetchUserCheckInsHistoryUseCase = new FetchUserCheckInsHistoryUseCase(
    checkInsRepository,
  )

  return fetchUserCheckInsHistoryUseCase
}
