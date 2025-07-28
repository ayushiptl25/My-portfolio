import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar() {
  return (
     <nav className="bg-gray-900 text-white py-4 px-6 sticky top-0 z-50 flex justify-center gap-8">
      <Link to="/" className="hover:text-cyan-400 font-semibold">HOME</Link>
      <Link to="/Projects" className="hover:text-cyan-400 font-semibold">PROJECTS</Link>
      <Link to="/Skills" className="hover:text-cyan-400 font-semibold">SKILLS</Link>
      <Link to="/About" className="hover:text-cyan-400 font-semibold">ABOUT</Link>
      <Link to="/Contact" className="hover:text-cyan-400 font-semibold">CONTACT</Link>
    </nav>
  )
}
