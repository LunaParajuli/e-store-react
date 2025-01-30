import React from 'react'
import { useSelector } from 'react-redux'

const Student = () => {

  const data = useSelector(store => store.student)

  return (
    <>

      <h1 className="text-center my-10 text-2xl">The student name is {data.name}</h1>

    </>
  )
}

export default Student