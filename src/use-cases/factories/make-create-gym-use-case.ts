import { PrismaGymsRepository } from '@/repositories/prisma/prisma-gyms-repository'
import { CreateGymUseCase } from './../create-gym'

/**
 * Creates an instance of CreateGymUseCase with a PrismaGymsRepository.
 *
 * This function initializes a PrismaGymsRepository to manage gym data
 * and constructs a CreateGymUseCase using it. The resulting
 * CreateGymUseCase can be used to handle gym creation logic.
 *
 * @returns {CreateGymUseCase} An instance of CreateGymUseCase configured with a
 *          PrismaGymsRepository.
 */
export function makeCreateGymUseCase(): CreateGymUseCase {
  const gymsRepository = new PrismaGymsRepository()
  const createGymUseCase = new CreateGymUseCase(gymsRepository)

  return createGymUseCase
}
