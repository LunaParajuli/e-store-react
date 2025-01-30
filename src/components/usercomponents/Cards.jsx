import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from "react-helmet";

const Cards = (props) => {
  const { id, title, image, price } = props.data
  return (
    <>

      <Helmet>
        <title>Estore|Card</title>
        <meta name="description" content="Helmet application" />
      </Helmet>


      <div className=" w-full sm:w-1/2 md:w-1/4 p-1 shadow shadow-lg shadow-blue-800 hover:shadow-gray-600 m-1 mb-5 border-black rounded-lg hover:translate-y-2 ">

        <div className="  h-[350px] bg-white border border-gray-200 rounded-lg  dark:bg-gray-800 dark:border-gray-700 ">

          <div className="card-img w-full h-[50%] ">
            <Link to="#">
              <img className="h-full w-full rounded-t-lg shadow-md shadow-blue-400 hover:shadow-cyan-500/50   hover:animate-pulse" src={image} alt="" />
            </Link>
          </div>

          <div className="p-5 w-full">
            <Link to="#">
              <h5 className="mb-1 font-semibold text-lg tracking-tight text-gray-900 dark:text-white ">{title}</h5>
            </Link>
            <div className="flex justify-between w-full mt-7">
              <p className="mb-3 font-normal text-gray-800 dark:text-gray-400 text-xl  font-semibold text-indigo-700">$ {price}</p>
              <Link to={`/productdetail/${id}`} className="inline-flex items-center px-5 py-2 text-sm font-medium  text-white bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 shadow-md hover:shadow-cyan-400 hover:translate-x-2 ">
                View Detail
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </Link>
            </div>

          </div>
        </div>

      </div>


    </>
  )
}

export default Cards