import React from 'react'
import logo from './images/chiro-logo.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

class Navbar extends React.Component {

  openBurger() {
    var x = document.getElementById('nav')
    if (x.className === 'nav') {
      x.className += 'responsive'
    } else {
      x.className = 'nav'
    }
  }

  render() {
    return (
      <>
        <nav class='nav' id='nav'>
          <a href='/' >
            <img alt='logo' class='logo' src={logo} />
          </a>
          <a className='nav-link' href='/about'> About </a>
          <a className='nav-link' href='/services'> Services </a>
          <a className='nav-link' href='/contact'> Contact </a>
          <span class='nav-block'> 801-312-9991 </span>
          <FontAwesomeIcon icon={faBars} class='icon' onClick={() => this.openBurger()} />
        </nav>
      </>
    )
  }
}

export default Navbar