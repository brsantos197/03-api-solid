import { PrismaCheckInsRepository } from '@/repositories/prisma/prisma-check-ins-repository'
import { ValidateCheckInUseCase } from '../validate-check-in'

/**
 * Creates an instance of ValidateCheckInUseCase with a PrismaCheckInsRepository.
 *
 * This function initializes a PrismaCheckInsRepository to manage check-ins data
 * and constructs a ValidateCheckInUseCase using it. The resulting ValidateCheckInUseCase
 * can be used to validate check-ins.
 *
 * @returns {ValidateCheckInUseCase} An instance of ValidateCheckInUseCase configured with a
 *          PrismaCheckInsRepository.
 */
export function makeValidateCheckInUseCase(): ValidateCheckInUseCase {
  const checkInsRepository = new PrismaCheckInsRepository()
  const validateCheckInUseCase = new ValidateCheckInUseCase(checkInsRepository)
  return validateCheckInUseCase
}
