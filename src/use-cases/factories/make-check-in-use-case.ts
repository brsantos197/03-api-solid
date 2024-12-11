import { PrismaCheckInsRepository } from '@/repositories/prisma/prisma-check-ins-repository'
import { CheckInUseCase } from '../check-in'
import { PrismaGymsRepository } from '@/repositories/prisma/prisma-gyms-repository'

/**
 * Creates an instance of CheckInUseCase with a PrismaCheckInsRepository and a PrismaGymsRepository.
 *
 * This function initializes a PrismaCheckInsRepository to manage check-in data
 * and a PrismaGymsRepository to manage gym data. It constructs a CheckInUseCase
 * using these repositories. The resulting CheckInUseCase can be used to handle
 * check-in logic for users at gyms.
 *
 * @returns {CheckInUseCase} An instance of CheckInUseCase configured with a
 *          PrismaCheckInsRepository and a PrismaGymsRepository.
 */
export function makeCheckInUseCase(): CheckInUseCase {
  const checkInsRepository = new PrismaCheckInsRepository()
  const gymsRepository = new PrismaGymsRepository()
  const checkInUseCase = new CheckInUseCase(checkInsRepository, gymsRepository)

  return checkInUseCase
}
