import React from 'react'
import { Animated } from 'react-animated-css'

const Services = () => (
  <>
    <div class='photo-header'>
      <Animated animationIn='fadeInDown' isVisibile={true}> Why Choose Us </Animated>
    </div>

    <div class='section'>
      <div class='section-content'>
        <p class='home-header'> Superior Health and Balance </p>
        <p class='text-block'>
          When it comes to your health, our office delivers a range of services designed to restore your body to balance.
              While we do perform adjustments at Salt City Chiropractic Wellness Center, we also couple this with additional services that target your well-being as a whole. During his career, Dr. Vance has had the opportunity to work with a variety of cases and understands the importance that comprehensive care has for better quality of life.
      </p>
        <p class='text-block'> We offer a free initial exam and consultation, so do not hesitate to contact Salt City Chiropractic Wellness Center today at <b> 801-312-9991</b>. </p>

        <p class='home-header' style={{ paddingBottom: '3rem' }}> We offer the following services: </p>

{/* <div style={{ justifyContent: 'center'}}> */}
        <div class='grid' style={{ textAlign: 'center', gap: '3rem'}}>
          <div>
            <img class='page-icon' src="https://www.flaticon.com/svg/static/icons/svg/822/822222.svg" alt="" />
            <p class='home-header'> Injury Treatment </p>
            <p class='text-block'> If you are active in any way, it can end up leaving you with an injury. Rather than reducing your activity time, work with a Draper chiropractor who can help restore your body and allow you to remain mobile. Many injuries are directly related to alignment issues and we are able to evaluate and correct many of these problems. </p>
          </div>
          <div>
            <img class='page-icon' src="https://www.flaticon.com/svg/static/icons/svg/890/890806.svg" alt="" />
            <p class='home-header'> Medsonix Therapy System </p>
            <p class='text-block'>The Medsonix low-frequency acoustic methodology has helped patients who experience a wide-range of symptons and pain. </p>
          </div>
          <div>
            <img class='page-icon' src="https://www.flaticon.com/svg/static/icons/svg/2817/2817872.svg" alt="" />
            <p class='home-header'> Athletic Therapy </p>
            <p class='text-block'> Dr. Vance has worked extensively with athletic individuals who require a different form of therapy to keep them on the go. At our office we take the time to assess your health and your lifestyle in order to develop a treatment plan that is completely based around you. </p>
          </div>
          
            </div>
            <div class='grid' id='grid-helper'  style={{ textAlign: 'center'}}>
            <div>
            <img class='page-icon' src="https://www.flaticon.com/svg/static/icons/svg/2222/2222477.svg" alt="" />
            <p class='home-header'> Manipulation and Adjustments </p>
            <p class='text-block'> When your spine is not properly aligned it can end up irritating your nerves and causing a range of health concerns. We enlist various techniques to realign your spine, address your specific concerns and promote your overall well-being through manipulation and adjustments. </p>
          </div>

          <div>
            <img class='page-icon' src="https://www.flaticon.com/svg/static/icons/svg/2966/2966334.svg" alt="" />
            <p class='home-header'> Personal Treatment Plans </p>
            <p class='text-block'> In addition to our chiropractic services, we take an all-inclusive stance on your health. The variety of services that we provide enables us to make our treatment plans more specific and to address a wide range of concerns. Our focus is your well-being and we use our treatment plans to improve your quality of life. </p>
          </div>
        </div>
        {/* </div> */}

      </div>
    </div>
  </>
)

export default Services