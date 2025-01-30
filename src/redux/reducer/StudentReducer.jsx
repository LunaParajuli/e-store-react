import React from 'react'


const initialData = {
  name: 'Hari Shrestha'
}


const StudentReducer = (state = initialData, action) => {

  switch (action.type) {

    case 'CHANGE_NAME':
      return {
        ...state,
        name: action.payload
      }

    default:
      return state
  }


}

export default StudentReducer