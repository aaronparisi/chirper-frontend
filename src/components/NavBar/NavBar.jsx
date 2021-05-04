import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = props => {

  const SessionLinks = () => {
    if (props.currentUser !== undefined) {
      return (
        <React.Fragment >
          <li className="nav-link">
            <button onClick={() => console.log('logout clicked')}>
              Logout
            </button>
          </li>
          <li className="nav-link">
            <Link to={`/users/${props.currentUser.id}`} >Profile</Link>
          </li>
        </React.Fragment>
      )
    } else {
      return (
        <React.Fragment >
          <li className="nav-link">
            <Link to="/signup" >Sign Up</Link>
          </li>
          <li className="nav-link">
            <Link to="login" >Log In</Link>
          </li>
        </React.Fragment>
      )
    }
  }

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

        <SessionLinks />
      </ul>
    </nav>
  )
}

export default NavBar