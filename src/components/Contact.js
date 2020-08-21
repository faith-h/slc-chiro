import React from 'react'
import Map from './MapContainer'
import ContactForm from './ContactForm'

class Contact extends React.Component {

  render() {
    return (
      <>
        <div class='container' style={{ minHeight: '100vh' }}>
          <p class='page-header'> Contact Us </p>
          <hr class='underline' /> <br /> <br />
          <div class='column-text'>
            <p class='header'> Hours + Info </p>
            <div style={{ position: 'relative' }}>
              <Map />
            </div>
            <a
              target='_blank'
              rel="noopener noreferrer"
              href='https://www.google.com/maps/place/11762+State+St+%23320,+Draper,+UT+84020/@40.5376469,-111.894545,17z/data=!4m5!3m4!1s0x875287087c29e8ad:0x11bad10717c4d6d4!8m2!3d40.5376554!4d-111.8923508'
              className='con-link'
            >
              <p style={{ paddingTop: '14rem' }}> 11762 South State, Suite #320</p>
              <p> Draper, UT 84020 </p>
            </a>
            <p> 801-312-9991 </p>
            <p> Monday - Friday: 7:30am - 6:30pm </p>
            <p> Saturdays: By appointment </p>
          </div>
          <ContactForm />
        </div>
      </>
    )
  }
}

export default Contact