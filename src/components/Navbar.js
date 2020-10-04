import React from 'react'
import logo from './images/chiro-logo.jpg'

class Navbar extends React.Component {

  openBurger() {
    const burger = document.querySelector('.burger')
    const navLinks = document.querySelector('.nav-links')
    const links = document.querySelectorAll('.nav-links li')
    console.log(links)
    navLinks.classList.toggle('open')
    links.forEach(l => {
      l.classList.toggle('fade')
    })
    burger.classList.toggle('toggle')
  }

  render() {
    return (
      <>
        <nav>
          <a href='/'> <img src={logo} class='logo' alt='Logo Image' /> </a>
          <div class='burger' onClick={() => this.openBurger()}>
            <div class='line1'></div>
            <div class='line2'></div>
            <div class='line3'></div>
          </div>
          <ul class='nav-links' style={{ listStyle: 'none' }}>
            <li><a href='/about'>About</a></li>
            <li><a href='/services'>Services</a></li>
            <li><a href='/contact'>Contact</a></li>
            <li><span class='nav-block'>801-312-9991</span></li>
          </ul>
        </nav>
      </>
    )
  }
}

export default Navbar