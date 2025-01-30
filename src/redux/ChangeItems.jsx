
import React from 'react'
import { useDispatch } from 'react-redux'

const ChangeItems = () => {

  const dispatch = useDispatch()

  const add = () => {
    dispatch({ type: "ADD_TO_CART" })
  }

  return (
    <>
      <div className="flex justify-center px-10 py-5 mt-5">
        <button className="bg-green-500 text-white  px-3 py-2 w-[100px]" onClick={add}>Add</button>
        <button className="bg-red-500 text-white ml-5 px-3 py-2 w-[100px]">Remove</button>
      </div>
    </>
  )
}

export default ChangeItems