import React from 'react'
import { Link } from 'react-router-dom'
import { Animated } from 'react-animated-css'

const Home = () => (
  <>
    <div class='home-bg' />
    
    <div class='title'>
      <Animated animationIn='fadeInDown' animationInDelay={300} isVisibile={true}>
        Salt City Chiropractic
      </Animated>
      <Animated animationIn='fadeInUp' animationInDelay={300} isVisible={true}>
        <p class='subtitle'> Comprehensive approach to chiropractic care </p>
      </Animated>
    </div>

    <div class='container' style={{ textAlign: 'center', padding: '2rem' }}>
      <p class='home-header' style={{ fontSize: '2rem', margin: '0.5rem' }}> Draper Chiropractor </p>
      <p class='text-block'>
        It may be the result of an injury or the everyday wear and tear of being active, but when your spine is out of alignment it can have a significant impact on your overall health.
        At Salt City Chiropractic Wellness Center, Dr. Vance takes his time with patients, focusing on alignments, restoring proper muscle balance and tailoring his service to your specific needs. To schedule your initial appointment, call our office at 801-312-9991.
      </p>
    </div>

    <div class='grid'>
      <div
        class='grid-item'
        style={{ backgroundImage: "url(" + "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1526&q=80" + ")" }}
      >
        <div class='overlay'>
          <Link class='link-text' to='/about'> About </Link>
        </div>
      </div>

      <div
        class='grid-item'
        style={{ backgroundImage: "url(" + "https://images.unsplash.com/photo-1519824145371-296894a0daa9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80" + ")" }}
      >
        <div class='overlay'>
          <Link class='link-text' to='/services'>
            Services
          </Link>
        </div>

      </div>
      <div
        class='grid-item'
        style={{ backgroundImage: "url(" + "https://images.unsplash.com/photo-1552196527-bffef41ef674?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1526&q=80" + ")" }}
      >
        <div class='overlay'>
          <Link class='link-text' to='/contact'>
            Contact
          </Link>
        </div>
      </div>
      
    </div>

    <div class='container' style={{ paddingBottom: '3rem' }}>
      <p class='home-header'> Serving Salt Lake City, Lehi and American Fork </p>
        <p class='text-block' style={{ marginBottom: '3rem' }}> We work with individuals who face all types of ailments and we provide a range of services to keep you moving.
          Our Draper chiropractor also works specifically with the "weekend warriors" — individuals who spend their weekends staying active.
          Being active is an important part of life, but for many people, sports and exercise can take a serious toll.
          Through our services, we can help you recover or remain in peak shape by implementing sports-specific conditioning and chiropractic services designed around you.
          Every person is unique and that is why we take our time during appointments. While many chiropractors simply adjust their clients and send them on your way, at Salt City Chiropractic Wellness Center we offer a more comprehensive and holistic form of care.
          Our approach includes focusing on exercise and nutrition so that your total health is addressed as a whole.
        </p>
      <Link class='button' to='/services' style={{ textDecoration: 'none' }}> See our services </Link>

      <p class='home-header' style={{ marginTop: '4rem' }}> Free Initial Exam and Consultation Available </p>
        <p class='text-block' style={{ marginBottom: '3rem' }}>
          During his career, Dr. Vance had the opportunity to work with a variety of cases and to gain valuable skills that he brings to our company today.
          At our office, you will be greeted by our friendly staff and we offer a welcoming environment where you will immediately feel at ease.
          To visit Salt City Chiropractic Wellness Center, contact our office at 801-312-9991 and schedule your free exam and consultation!
        </p>
      <Link class='button' to='/contact' style={{ textDecoration: 'none' }}> Contact us </Link>
    </div>
  </>
)

export default Home