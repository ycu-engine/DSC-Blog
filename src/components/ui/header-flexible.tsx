import Link from 'next/link'
import { useState } from 'react'

/**
 * Header
 * @returns Header
 */
export const Header = () => {
  const [isOpen, setOpen] = useState<boolean>(false)
  type PageLink = { name: string; link: string }
  const pageLinks: PageLink[] = [
    { name: 'Articles', link: '/' },
    { name: 'About', link: '/' },
    { name: 'Contact', link: '/' },
  ]
  const handleMenuClick = () => {
    setOpen(!isOpen)
  }
  return (
    <header className="w-full bg-orange-400">
      <nav className="mx-auto h-full max-w-7xl px-5 md:flex md:items-center">
        <div className="flex flex-row justify-between">
          <div>
            <Link href="/">DSC Blog</Link>
          </div>
          <div className="md:hidden">
            <button type="button" onClick={handleMenuClick}>
              Menu Icon
            </button>
          </div>
        </div>
        <div
          className={`${isOpen ? 'block' : 'hidden'} w-full md:flex md:flex-row md:justify-between`}
        >
          <ul className="flex flex-col gap-2 md:flex-row md:bg-transparent">
            {pageLinks.map((pageLink) => (
              <li key={pageLink.name}>
                <Link href={pageLink.link}>{pageLink.name}</Link>
              </li>
            ))}
          </ul>
          <div className="">Search Icon</div>
        </div>
      </nav>
    </header>
  )
}
