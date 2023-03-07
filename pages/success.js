import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { BsBagCheckFill } from 'react-icons/bs'

import { useStateContext } from '../context/StateContext'
import { runFireworks } from '../lib/utils'

const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext()

  useEffect(() => {
    localStorage.clear()
    setCartItems([])
    setTotalPrice(0)
    setTotalQuantities(0)
    runFireworks()
  }, [])

  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon">
          <BsBagCheckFill />
        </p>
        <h3>Спасибо за вашу покупку!</h3>
        <p>Мы свяжемся с Вами в ближайшее время.</p>
        <p className="email-msg">
          Проверьте вашу почту, что бы получить Ваш чек.
        </p>
        <p className="description">
          Если у Вас остались какие то вопросы, свяжитесь с нами по почте:
          <a className="email" href="mailto:urozhay@orders.com">
            urozhay@orders.com
          </a>
        </p>
        <Link href="/">
          <button className="btn" type="button" width="300px">
            Продолжить покупки
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Success
