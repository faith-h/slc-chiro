import React, { useState } from 'react'
import emailjs from 'emailjs-com'

const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICEID
const USER_ID = process.env.REACT_APP_EMAILJS_USERID
const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATEID

export default function CommentForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })

  const updateFormData = event =>
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })

  function sendEmail(e) {
    e.preventDefault()
    emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, USER_ID)
      .then((result) => {
        console.log(result)
        // set sent div to visible
      }, (error) => {
        console.log(error.text)
      })
  }

  // change to labels to be more accessible and add margin
  const { name, email, message } = formData
  return (
    <form className="contact-form" onSubmit={sendEmail}>
      <p class='header'>Name</p>
      <input value={name} type="text" name="name" onChange={e => updateFormData(e)} />
      <p class='header'>Email</p>
      <input value={email} type="email" name="email" onChange={e => updateFormData(e)} />
      <p class='header'>Message</p>
      <textarea value={message} type="text" name="message" onChange={e => updateFormData(e)} />
      <br />
      <input class='submit' type="submit" value="Send" />
    </form>
  )
}