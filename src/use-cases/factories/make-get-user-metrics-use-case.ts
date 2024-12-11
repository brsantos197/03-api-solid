import { PrismaCheckInsRepository } from '@/repositories/prisma/prisma-check-ins-repository'
import { GetUserMetricsHistoryUseCase } from '../get-user-metrics'

/**
 * Creates an instance of GetUserMetricsHistoryUseCase with a PrismaCheckInsRepository.
 *
 * This function initializes a PrismaCheckInsRepository to handle check-in data
 * and constructs a GetUserMetricsHistoryUseCase using it. The resulting
 * use case can be used to retrieve user metrics related to check-ins.
 *
 * @returns {GetUserMetricsHistoryUseCase} An instance of GetUserMetricsHistoryUseCase configured with a
 *          PrismaCheckInsRepository.
 */
export function makeGetUserMetricsUseCase(): GetUserMetricsHistoryUseCase {
  const checkInsRepository = new PrismaCheckInsRepository()
  const getUserMetricsHistoryUseCase = new GetUserMetricsHistoryUseCase(
    checkInsRepository,
  )

  return getUserMetricsHistoryUseCase
}
