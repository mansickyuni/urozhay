import React from 'react'
import { SlSocialVkontakte } from 'react-icons/sl'
import { AiFillInstagram } from 'react-icons/ai'
const Footer = () => {
  return (
    <div className="footer-container">
      <p>2023 Urozhay | Все права защищены | Mansour & Roman prod.</p>
      <p className="icons">
        <AiFillInstagram />
        <SlSocialVkontakte />
      </p>
    </div>
  )
}

export default Footer
