"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isActive = (path: string) => pathname === path

  return (
    <header
      className={`fixed top-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-7xl bg-white/95 backdrop-blur-xl border border-gray-200 rounded-2xl z-50 px-8 py-4 transition-all duration-300 ${isScrolled ? "shadow-xl bg-white/98" : "shadow-md"}`}
    >
      <nav className="flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold text-blue-500">
          <i className="fas fa-globe-americas text-2xl"></i>
          <span>Chandni Overseas Agency</span>
        </Link>

        <ul className="hidden lg:flex items-center gap-8">
          <li>
            <a
              href="/#home"
              className={`font-medium transition-colors hover:text-blue-500 ${isActive("/") ? "text-blue-500" : "text-gray-700"}`}
            >
              Home
            </a>
          </li>
          <li>
            <a href="/#services" className="font-medium text-gray-700 transition-colors hover:text-blue-500">
              Services
            </a>
          </li>
          <li>
            <a href="/#countries" className="font-medium text-gray-700 transition-colors hover:text-blue-500">
              Countries
            </a>
          </li>
          <li>
            <a href="/#about" className="font-medium text-gray-700 transition-colors hover:text-blue-500">
              About
            </a>
          </li>
          <li>
          <Link href="/blog" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
            Blog
          </Link>
          </li>
          
          <li>
            <a href="/#contact" className="font-medium text-gray-700 transition-colors hover:text-blue-500">
              Contact
            </a>
          </li>
          <li>
            <Link href="/apply-now" className="btn-primary text-sm">
              Apply Now
            </Link>
          </li>
        </ul>

        <button className="lg:hidden text-gray-700 text-2xl" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <i className={`fas ${isMobileMenuOpen ? "fa-times" : "fa-bars"}`}></i>
        </button>
      </nav>

      {isMobileMenuOpen && (
        <ul className="lg:hidden flex flex-col gap-4 mt-6 pb-4">
          <li>
            <a href="/#home" className="font-medium text-gray-700 hover:text-blue-500">
              Home
            </a>
          </li>
          <li>
            <a href="/#services" className="font-medium text-gray-700 hover:text-blue-500">
              Services
            </a>
          </li>
          <li>
            <a href="/#countries" className="font-medium text-gray-700 hover:text-blue-500">
              Countries
            </a>
          </li>
          <li>
            <a href="/#about" className="font-medium text-gray-700 hover:text-blue-500">
              About
            </a>
          </li>
          <li>
            <Link href="/blog" className="font-medium text-gray-700 hover:text-blue-500">
              Blog
            </Link>
          </li>
          <li>
            <a href="/#contact" className="font-medium text-gray-700 hover:text-blue-500">
              Contact
            </a>
          </li>
          <li>
            <Link href="/apply-now" className="btn-primary text-sm justify-center">
              Apply Now
            </Link>
          </li>
        </ul>
      )}
    </header>
  )
}
