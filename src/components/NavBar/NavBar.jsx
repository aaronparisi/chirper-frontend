import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = props => {

  return (
    <nav>
      <ul className="nav-links">
        <li className="nav-link">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-link">
          <Link to="/about">About</Link>
        </li>
        <li className="nav-link">
          <Link to="/help">Help</Link>
        </li>
        <li className="nav-link">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar