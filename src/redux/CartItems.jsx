import React from 'react'
import { useSelector } from 'react-redux'
import ChangeItems from './ChangeItems'
import Student from './Student'
import StudentForm from './StudentForm'

const CartItems = () => {

  const data = useSelector(store => store.cart)

  return (
    <>
      <h1 className="text-center">The number of product present in a cart is {data.cartData}</h1>
      <ChangeItems />
      <Student />
      <StudentForm />
    </>
  )
}

export default CartItems