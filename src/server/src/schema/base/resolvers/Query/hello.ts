import type { QueryResolvers } from '../../../types.generated'

export const hello: NonNullable<QueryResolvers['hello']> = async () => 'Hello World!'
