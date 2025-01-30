import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup';
import { Helmet } from "react-helmet";


const Register = () => {
  return (
    <>

      <Helmet>
        <title>Estore|RegisterPage</title>
        <meta name="description" content="Helmet application" />
      </Helmet>

      <h1 className="text-center font-bold text-3xl my-5">Registration Form</h1>
      <Formik
        initialValues={{ fname: "", lname: "", email: "", password: "", cpwd: "" }}
        validationSchema={Yup.object({

          fname: Yup.string()
            .matches(/^([a-zA-Z])+$/, "Only contain alphabets")
            .max(20, "Not more than twenty characters")
            .required("First name is mandatory"),


          lname: Yup.string()
            .matches(/^([a-zA-Z])+$/, "Only contain alphabets")
            .max(20, "Not more than twenty characters")
            .required("Last name is mandatory"),


          email: Yup.string()
            .email("Invalid email")
            .required("Email is mandatory"),


          password: Yup.string()
            .matches(/^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%*!]).{8,30}$/, "Weak Password,must contain uppercase,lowercase,number and specialcharacter")
            .required("Password is mandatory"),



          cpwd: Yup.string()
            .required("Conform your password")
            .oneOf([Yup.ref('password'), null], "Must match with password")


        })}
      >



        <div className="flex justify-center items-center flex-col">
          <Form className=' mb-5 p-4 space-y-5 w-[60%] border shadow-md' >
            <div className="mb-2">
              <label htmlFor="fname" className="block mb-2 text-sm font-medium">First Name:</label>
              <Field className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="fname" name="fname" placeholder="Enter your first name" type="text" />
              <ErrorMessage name='fname'>
                {mgs => (<div style={{ color: 'red' }}>{mgs}</div>)}
              </ErrorMessage>
            </div>


            <div className="mb-2">
              <label htmlFor="lname" className="block mb-2 text-sm font-medium">Last Name:</label>
              <Field className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="lname" name="lname" placeholder="Enter your last name" type="text" />
              <ErrorMessage name='lname'>
                {mgs => (<div style={{ color: 'red' }}>{mgs}</div>)}
              </ErrorMessage>
            </div>


            <div className="mb-2">
              <label htmlFor="email" className="block mb-2 text-sm font-medium">Email:</label>
              <Field className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="email" name="email" placeholder="xyz@gmail.com" type="email" />
              <ErrorMessage name='email'>
                {mgs => (<div style={{ color: 'red' }}>{mgs}</div>)}
              </ErrorMessage>
            </div>


            <div className="mb-2">
              <label htmlFor="password" className="block mb-2 text-sm font-medium">Password:</label>
              <Field className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="password" name="password"
                placeholder="******"
                type="password" />
              <ErrorMessage name='password'>
                {mgs => (<div style={{ color: 'red' }}>{mgs}</div>)}
              </ErrorMessage>
            </div>



            <div className="mb-2">
              <label htmlFor="cpwd" className="block mb-2 text-sm font-medium">ConfirmPassword:</label>
              <Field className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="cpwd" name="cpwd"
                placeholder="******"
                type="password" />
              <ErrorMessage name='cpwd'>
                {mgs => (<div style={{ color: 'red' }}>{mgs}</div>)}
              </ErrorMessage>
            </div>


            <div className="mb-5">
              <button className="bg-blue-500 py-2 px-10 rounded-lg text-white font-semibold ">Submit</button>
            </div>


          </Form>
        </div>
      </Formik>
    </>
  )
}

export default Register