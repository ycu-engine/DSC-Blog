import Link from 'next/link'
import { useState } from 'react'
import { Menu, Search, X } from 'lucide-react'

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
    <header className="h-height-header w-full bg-orange-200">
      <div className="mx-auto h-full max-w-7xl md:flex">
        <div className="flex h-full flex-row justify-between px-5">
          <div className="self-center">
            <Link href="/">
              <p className="text-xl italic">DSC Blog</p>
            </Link>
          </div>
          <div className="self-center md:hidden">
            <button type="button" onClick={handleMenuClick}>
              <div className="flex">
                {isOpen ? <X /> : <Menu />}
                Menu
              </div>
            </button>
          </div>
        </div>
        <nav
          className={`${
            isOpen ? 'flex' : 'hidden'
          } w-full flex-col items-center gap-4 bg-orange-50 p-2 md:flex md:flex-row md:justify-between md:bg-transparent`}
        >
          <ul className="flex flex-col gap-2 md:flex-row md:self-end">
            {pageLinks.map((pageLink) => (
              <li key={pageLink.name}>
                <Link href={pageLink.link}>{pageLink.name}</Link>
              </li>
            ))}
          </ul>
          <div className="flex">
            <Search />
            Search
          </div>
        </nav>
      </div>
    </header>
  )
}
