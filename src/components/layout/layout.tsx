import { ReactNode } from 'react'

import { Header } from './header'

/**
 * Layout
 * @param props props
 * @param props.children children
 * @returns Layout
 */
export const Layout = ({ children }: { children: ReactNode }) => (
  <>
    <Header />
    {children}
  </>
)
