import type { MemberUserResolvers } from '../../types.generated'

export const MemberUser: MemberUserResolvers = {
  /* Implement MemberUser resolver logic here */
  fullName: (parent) => `${parent.firstName} ${parent.lastName}`,
}
