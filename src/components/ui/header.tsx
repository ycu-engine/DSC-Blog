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
    <header className="h-10 w-full bg-orange-50">
      <nav className="m-auto flex h-full max-w-7xl flex-row px-8">
        <div className="mr-8 self-center">
          <p className="text-xl italic">DSC Blog</p>
        </div>
        <ul className="flex flex-1 flex-row gap-4 self-end">
          {pageLinks.map((pageLink) => (
            <li key={pageLink.name}>
              <Link href={pageLink.link}>{pageLink.name}</Link>
            </li>
          ))}
        </ul>
        {/* <div className="flex-1" /> */}
        <div className="flex flex-row gap-4 self-center">
          <div>Search Icon</div>
          <div>Menu Icon</div>
        </div>
      </nav>
    </header>
  )
}
