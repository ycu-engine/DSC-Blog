import type { NormalUserResolvers } from '../../types.generated'

export const NormalUser: NormalUserResolvers = {
  fullName: (parent) => `${parent.firstName} ${parent.lastName}`,
}
