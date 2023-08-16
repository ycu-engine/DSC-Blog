import Link from 'next/link'
import { FC } from 'react'
import { Menu, Search, X } from 'lucide-react'
import { useToggle } from '@/hooks/useToggle'
import { PageLink } from '@/types/PageLink'
import { cn } from '@/lib/shadcn/utils'

/**
 * Header
 * @returns Header
 */
export const Header: FC = () => {
  const { isOpen, onToggle } = useToggle(false)

  const pageLinks: PageLink[] = [
    { name: 'Articles', link: '/' },
    { name: 'About', link: '/' },
    { name: 'Contact', link: '/' },
  ]

  return (
    <header className="h-height-header w-full bg-primary text-secondary">
      <div className="mx-auto h-full max-w-7xl md:flex">
        <div className="flex h-full flex-row justify-between px-5">
          <div className="self-center">
            <Link href="/">
              <p className="text-xl italic">DSC Blog</p>
            </Link>
          </div>
          <div className="self-center md:hidden">
            <button type="button" onClick={onToggle}>
              <div className="flex">
                {isOpen ? <X /> : <Menu />}
                Menu
              </div>
            </button>
          </div>
        </div>
        <nav
          className={cn(
            isOpen ? 'flex' : 'hidden',
            'w-full flex-col items-center gap-4 bg-primary p-2 text-secondary md:flex md:flex-row md:justify-between md:bg-transparent',
          )}
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
