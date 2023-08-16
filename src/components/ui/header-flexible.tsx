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
    <header className="h-height-header w-full bg-orange-50">
      <div className="mx-auto h-full max-w-7xl px-5 md:flex md:items-center">
        <div className="flex h-full flex-row justify-between">
          <div className="self-center">
            <Link href="/">
              <p className="text-xl italic">DSC Blog</p>
            </Link>
          </div>
          <div className="md:hidden">
            <button type="button" onClick={handleMenuClick}>
              Menu Icon
            </button>
          </div>
        </div>
        <nav
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
        </nav>
      </div>
    </header>
  )
}
