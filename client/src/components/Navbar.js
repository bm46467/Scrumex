import { MenuIcon, XIcon } from '@heroicons/react/solid'
import { useEffect, useState } from 'react'

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  // Prevent from scrolling when mobile menu is shown
  useEffect(() => {
    showMobileMenu
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'auto')
  }, [showMobileMenu])

  const toggleMenu = () => setShowMobileMenu((prev) => !prev)

  return (
    <>
      <div className="sticky top-0 bg-slate-900 shadow-lg">
        <nav
          className="container mx-auto flex items-center justify-between 
      px-6 py-4"
        >
          <h1 className="text-gray-200 text-2xl font-bold cursor-pointer">
            <a href="/"> Scrumex</a>
          </h1>

          {showMobileMenu ? (
            <XIcon
              className="flex md:hidden h-7 w-7 cursor-pointer"
              onClick={toggleMenu}
            />
          ) : (
            <MenuIcon
              className="flex md:hidden h-7 w-7 cursor-pointer"
              onClick={toggleMenu}
            />
          )}

          <ul className="hidden md:flex gap-10">
            {['Home', 'About', 'Features', 'Contact'].map((section) => (
              <li key={section}>
                <a
                  href={`#${section.toLowerCase()}`}
                  className="text-gray-300 text-md font-light hover:text-gray-400 
              transition duration-200 ease-out"
                >
                  {section}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex gap-3">
            <button className="btn-primary--outlined">Sign in</button>
            <button className="btn-primary--filled">Sign up</button>
          </div>
        </nav>
      </div>

      {/* Mobile menu */}
      {showMobileMenu && (
        <div className="fixed w-full top-[64px] bottom-0 z-10 bg-slate-900">
          <ul className="flex flex-col items-center gap-10 pt-10">
            {['Home', 'About', 'Features', 'Contact'].map((section) => (
              <li key={section} onClick={() => setShowMobileMenu(false)}>
                <a
                  href={`#${section.toLowerCase()}`}
                  className="text-gray-300 text-xl font-medium hover:text-gray-400 
                  transition duration-500 ease-out"
                >
                  {section}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  )
}

export default Navbar