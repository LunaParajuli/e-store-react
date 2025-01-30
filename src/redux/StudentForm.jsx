import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

const StudentForm = () => {


  const [name, setName] = useState('')
  const dispatch = useDispatch()


  const submit = () => {
    dispatch({ type: "CHANGE_NAME", payload: name })
  }

  return (
    <>

      <div className="flex justify-center my-5">

        <div className="mb-2">

          <input type="text" name="name" id="name" placeholder="Enter a name" className="border-gray-300 block p-4 my-3" onChange={e => setName(e.target.value)} />
          <button className="bg-green-500 text-white px-3 py-2 " onClick={submit}>Submit</button>

        </div>
      </div>
    </>
  )
}

export default StudentForm