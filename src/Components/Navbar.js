import { NavLink } from 'react-router-dom'
// import { ReactComponent as Brand } from '../../assets/icons/logo.svg'
import './navbar.css'
import Hamburger from 'hamburger-react'
import {useState} from 'react'
import title from '../images/title.png'

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
        <div className="child1">
        <img src={title} alt="Logo" style={{ width: '60px', height: 'auto', marginRight: '10px' }} />
        </div>
          <div className="child2">
          Jatothu Hussain
          </div>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <Hamburger />
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/journey">Journey</NavLink>
            </li>
            <li>
              <NavLink to="/gallery">Gallery</NavLink>
            </li>
            <li>
              <NavLink to="/press">Press</NavLink>
            </li>
            <li>
              <NavLink to="/contact us">Contact us</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar