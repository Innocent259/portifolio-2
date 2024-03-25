'use client'
import { useState } from "react";
import Link from "next/link";
import { MdOutlineMenu, MdClose } from "react-icons/md";

const Navbar: React.FC = () => {

  const [menu, setMenu] = useState(false)
  const toggleMenu = () => {
    setMenu(!menu);
  }

  return (
    <nav className="pt-6">
      <div className="md:hidden p-2 text-3xl">
        {menu ? (
          <button
            className="cursor-pointer"
            onClick={toggleMenu}
          >
            <MdClose />
          </button>
        ) : (
          <button
            className="cursor-pointer"
            onClick={toggleMenu}
          >
            <MdOutlineMenu />
          </button>
        )}
        {
          menu && (
            <div className="flex flex-col gap-4 bg-[#ddd] p-4 rounded-sm">
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/skills">Skills</Link>
              <Link href="/experience">Experience</Link>
              <Link href="/contact">Contact</Link>
            </div>
          )
        }
      </div>
      <div className="hidden md:flex gap-4 justify-center bg-[#ddd] w-fit mx-auto p-4 rounded-full">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/skills">Skills</Link>
        <Link href="/experience">Experience</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  )
}

export default Navbar;
