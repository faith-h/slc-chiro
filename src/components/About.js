import React from 'react'
import { Animated } from 'react-animated-css'

const About = () => (
  <>
    <div class='photo-header'>
      <Animated animationIn='fadeInDown' isVisibile={true}> About Us </Animated>
    </div>
    <div class='section' style={{ minHeight: '62vh' }}>
      <div class='section-content'>
        <p class='home-header'> We are easy to find in Draper, Utah </p>
        <p class='text-block'> Located on State Street at 11762 South State in Draper, Utah. We are upstairs in Suite #320. We look forward to your visit to our office! </p>
        <p class='home-header'> Meet Dr. Jason Vance </p>
        <p class='text-block' >
          Dr. Jason Vance Graduated cum laude from Palmer College in 2013 with a Doctor of Chiropractic degree.
          His undergraduate was completed at University of Utah in 2009 with a Bachelor of Science in Exercise and Sport Science and a minor in Nutrition.
          While at Palmer College, Dr. Vance also completed an internship in the Rehabilitation and Sports Injury Department.
      </p>
        <p class='text-block'>
          In 2014 Dr. Vance launched Salt City Chiropractic Wellness Center in Draper, Utah.
          He is a member of the Utah Chiropractic Physicians Association, Sandy Chamber of Commerce and Draper Chamber of Commerce. Along with his extensive education and experience, Dr. Vance understands the importance of having an active lifestyle.
          In his free time, he enjoys spending time with his family and friends, playing tennis, hiking and camping.
      </p>
      </div>
    </div>
  </>
)

export default About