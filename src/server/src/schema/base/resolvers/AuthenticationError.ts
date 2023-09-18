import type {
  AuthenticationError as TAuthenticationError,
  AuthenticationErrorResolvers,
} from '../../types.generated'

export const AuthenticationError: AuthenticationErrorResolvers = {
  /* Implement AuthenticationError resolver logic here */
}

export const authenticationError: TAuthenticationError = {
  __typename: 'AuthenticationError',
  message: 'Authentication Error',
}
