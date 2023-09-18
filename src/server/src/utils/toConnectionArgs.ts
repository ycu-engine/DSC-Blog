import { ConnectionArguments } from '@devoxa/prisma-relay-cursor-connection'
import { InputMaybe, Scalars } from '../schema/types.generated'

/**
 *hoge
 */
export const toConnectionArgs = (args?: {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
}): ConnectionArguments => ({
  after: args?.after || null,
  before: args?.before || null,
  first: args?.first || null,
  last: args?.last || null,
})
