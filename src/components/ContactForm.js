import React, { useState } from 'react'
import emailjs from 'emailjs-com'

// need to style form

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
      }, (error) => {
          console.log(error.text)
      })
  }

  const { name, email, message } = formData
  return (
    <form className="contact-form" onSubmit={sendEmail}>
      <label>Name</label>
      <input value={name} type="text" name="name" onChange={e => updateFormData(e)} />
      <label>Email</label>
      <input value={email} type="email" name="email" onChange={e => updateFormData(e)} />
      <label>Message</label>
      <textarea value={message} type="text" name="message" onChange={e => updateFormData(e)} />
      <input type="submit" value="Send" />
    </form>
  )
}