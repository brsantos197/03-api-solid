import { PrismaGymsRepository } from '@/repositories/prisma/prisma-gyms-repository'
import { SearchGymsUseCase } from '../search-gyms'

/**
 * Creates an instance of SearchGymsUseCase with a PrismaGymsRepository.
 *
 * This function initializes a PrismaGymsRepository to manage gym data and
 * constructs a SearchGymsUseCase using it. The resulting use case can be
 * used to search for gyms.
 *
 * @returns {SearchGymsUseCase} An instance of SearchGymsUseCase configured with a
 *          PrismaGymsRepository.
 */
export function makeSearchGymsUseCase(): SearchGymsUseCase {
  const gymsRepository = new PrismaGymsRepository()
  const searchGymsUseCase = new SearchGymsUseCase(gymsRepository)

  return searchGymsUseCase
}
