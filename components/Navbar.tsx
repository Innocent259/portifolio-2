'use client'
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion"
import { MdOutlineMenu, MdClose } from "react-icons/md";
import { links } from "@/lib/data";

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
            <motion.div
              className="flex flex-col gap-4 bg-[#ddd] p-4 rounded-sm"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.1
              }}
            >{
                links.map(link => <Link key={link.hash} href={link.hash}>{link.name}</Link>)
              }
            </motion.div>
          )
        }
      </div>
      <motion.div
        className="hidden md:flex gap-4 bg-[#ddd] w-fit mx-auto p-4 rounded-full"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >{
          links.map(link => <Link key={link.hash} href={link.hash}>{link.name}</Link>)
        }
      </motion.div>
    </nav>
  )
}

export default Navbar;
