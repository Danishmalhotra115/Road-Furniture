import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import "./Navbar.css"
import logo from './logo.png'
import { FaRegBell } from 'react-icons/fa'
import About from "./About us/About"

const menuItems = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'About',
    href: './About us/About',
  },
  {
    name: 'Products',
    href: '#',
  },
]

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  let logopng="logopng"

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 90) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className={`fixed z-10 w-full ${isScrolled ? 'bg-gray-100 bg-opacity-20 backdrop-blur-md' : 'bg-gray-100'} transition duration-300`}>
      <div className=" navbar mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <div className="inline-flex items-center space-x-2">
          <span>
            <img
              src={logo}
              alt="Logo"
              style={{ width: 'auto', height: "50px"}}
            />
          </span>
        </div>
        <div className="navbar-links hidden lg:block">
          <ul className="inline-flex space-x-8">
            {menuItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className={`text-xl font-semibold text-black hover-grow`}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden lg:block">
          <button
            type="button"
            className="rounded-md font-semibold text-black text-xl  py-2 px-4 shadow transform transition duration-200 ease-in-out hover:scale-105 active:scale-95"
            style={{
              backgroundColor: 'rgb(233, 212, 5)'
            }}
          >
            Contact Us
          </button>
        </div>
        <div className="lg:hidden">
          <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
        </div>
        {isMenuOpen && (
          <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pb-6 pt-5">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center space-x-2">
                    <span>
                      <img
                        src={logo}
                        alt="Logo"
                        style={{ width: 'auto', height: "3em"}}
                      />
                    </span>
                  </div>
                  <div className="-mr-2">
                    <button
                      type="button"
                      onClick={toggleMenu}
                      className="inline-flex items-center justify-center rounded-lg p-2 text-gray-400 hover:bg-gray-400 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      <span className="sr-only">Close menu</span>
                      <X className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-4">
                    {menuItems.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-m-3 flex items-center rounded-md p-3 text-lg font-semibold anchor"
                      >
                        <span className="ml-3 text-base font-medium text-gray-900">
                          {item.name}
                        </span>
                      </a>
                    ))}
                  </nav>
                </div>
                <button
                  type="button"
                  className="mt-4 w-full rounded-md bg-green-400 font-semibold text-black text-xl  py-2 px-4 shadow transform transition duration-200 ease-in-out hover:scale-105 active:scale-95"
                  style={{
                    backgroundColor: 'rgb(233, 212, 5)'
                  }}
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        )}
      
      </div>
    </div>
  )
}
export default Navbar
