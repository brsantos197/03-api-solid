import { PrismaGymsRepository } from '@/repositories/prisma/prisma-gyms-repository'
import { FetchNearbyUseCase } from '../fetch-nearby-gyms'

/**
 * Creates an instance of FetchNearbyUseCase with a PrismaGymsRepository.
 *
 * This function initializes a PrismaGymsRepository to manage gym data
 * and constructs a FetchNearbyUseCase using it. The resulting
 * FetchNearbyUseCase can be used to fetch gyms near a given location.
 *
 * @returns {FetchNearbyUseCase} An instance of FetchNearbyUseCase configured with a
 *          PrismaGymsRepository.
 */
export function makeFetchNearbyGymsUseCase(): FetchNearbyUseCase {
  const gymsRepository = new PrismaGymsRepository()
  const fetchNearbyUseCase = new FetchNearbyUseCase(gymsRepository)

  return fetchNearbyUseCase
}
