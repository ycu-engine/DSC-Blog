import * as React from 'react'

const alartStatus = ['error', 'success', 'warning', 'info']
type AlartStatus = (typeof alartStatus)[number]

const Alart = ({ children, icon }: { children: React.ReactNode; icon: React.ReactElement }) => (
  <div className="m-2 flex gap-2 text-sm">
    <div className="w-20 flex-shrink-0 self-center">{icon}</div>
    <div>{children}</div>
  </div>
)
/**
 * Alart Error
 * @param props props
 * @param props.children children
 * @returns Element
 */
const AlartError = ({ children }: { children: React.ReactNode }) => (
  <div className="rounded-md border border-red-200 bg-red-50 text-red-700">
    <Alart icon={<p className="text-center font-bold">Error</p>}>{children}</Alart>
  </div>
)
/**
 * Alart Success
 * @param props props
 * @param props.children children
 * @returns Element
 */
const AlartSuccess = ({ children }: { children: React.ReactNode }) => (
  <div className="rounded-md border border-green-200 bg-green-50 text-green-700">
    <Alart icon={<p className="text-center font-bold">Success</p>}>{children}</Alart>
  </div>
)
/**
 * Alart Warning
 * @param props props
 * @param props.children children
 * @returns Element
 */
const AlartWarning = ({ children }: { children: React.ReactNode }) => (
  <div className="rounded-md border border-yellow-200 bg-yellow-50 text-yellow-700">
    <Alart icon={<p className="text-center font-bold">Warning</p>}>{children}</Alart>
  </div>
)
/**
 * Alart Info
 * @param props props
 * @param props.children children
 * @returns Element
 */
const AlartInfo = ({ children }: { children: React.ReactNode }) => (
  <div className="rounded-md border border-blue-200 bg-blue-50 text-blue-700">
    <Alart icon={<p className="text-center font-bold">Info</p>}>{children}</Alart>
  </div>
)
export { AlartError, AlartSuccess, AlartWarning, AlartInfo }
export { alartStatus }
export type { AlartStatus }
