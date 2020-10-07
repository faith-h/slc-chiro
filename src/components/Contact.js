import React from 'react'
import Map from './MapContainer'
import ContactForm from './ContactForm'
import { Animated } from 'react-animated-css'

const Contact = () => (
  <>
    <div class='photo-header'>
      <Animated animationIn='fadeInDown' isVisibile={true}> Contact Us </Animated>
    </div>
    <div class='section'>
      <div class='section-content'>
        <div class='row'>
          <div class='column'>
            <p class='home-header'> Send us a message </p>
            <ContactForm />
          </div>

          <div class='column'>
            <div class='map-helper'>
              <p class='home-header'> Hours + Info </p>
              <div style={{ position: 'relative' }}>
                <Map />
              </div>
              <a
                target='_blank'
                rel="noopener noreferrer"
                href='https://www.google.com/maps/place/11762+State+St+%23320,+Draper,+UT+84020/@40.5376469,-111.894545,17z/data=!4m5!3m4!1s0x875287087c29e8ad:0x11bad10717c4d6d4!8m2!3d40.5376554!4d-111.8923508'
                className='con-link'
              >
                <p style={{ paddingTop: '22rem' }}> 11762 South State, Suite #320</p>
                <p> Draper, UT 84020 </p>
              </a>
              <p> Monday - Friday: 7:30am - 6:30pm </p>
              <p> Saturdays: By appointment </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
)

export default Contact