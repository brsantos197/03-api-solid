import type { Environment } from 'vitest'

export default <Environment>{
  name: 'prisma',
  transformMode: 'ssr',
  setup() {
    console.log('Setup Prisma Test Environment')
    return {
      teardown() {
        console.log('Teardown Prisma Test Environment')
      },
    }
  },
}
