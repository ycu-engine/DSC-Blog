import Link from 'next/link'

/**
 * Header
 * @returns Header
 */
export const Header = () => {
  type PageLink = { name: string; link: string }
  const pageLinks: PageLink[] = [
    { name: 'Articles', link: '/' },
    { name: 'About', link: '/' },
    { name: 'Contact', link: '/' },
  ]
  return (
    <header className="h-height-header w-full bg-orange-50 p-4">
      <div className="m-auto flex h-full max-w-7xl flex-row px-8">
        <div className="mr-8 self-center">
          <Link href="/">
            <p className="text-xl italic">DSC Blog</p>
          </Link>
        </div>
        <nav className="flex-1 self-end">
          <ul className="flex flex-row gap-4">
            {pageLinks.map((pageLink) => (
              <li key={pageLink.name}>
                <Link href={pageLink.link}>{pageLink.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex flex-row gap-4 self-center">
          <div>Search Icon</div>
          <div>Menu Icon</div>
        </div>
      </div>
    </header>
  )
}
