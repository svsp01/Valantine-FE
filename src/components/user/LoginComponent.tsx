"use client"
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useParams } from 'next/navigation';



function LoginComponent() {
  const {id} = useParams()
  const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string()
      .matches(
        /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[A-Z]).{6,}$/,
        'Password must contain at least one number, one symbol, one uppercase letter, and be at least 6 characters long'
      )
      .required('Password is required'),
  });
  const handleLogin = (values: any) => {
    console.log('Form values:', values);
    console.log(id, "userID");
    
  };

  return (
    <div className="bg-black min-h-screen px-2 flex items-center justify-center">
      <div className="bg-black w-full border-pink-800 border-t-2 shadow-pink-500 p-8 rounded-lg shadow-2xl md:w-full max-w-md">
        <h2 className="text-white text-2xl font-bold mb-6">Spread the Love - Login</h2>
        <Formik
          initialValues={{  email: '', password: '' }}
          validationSchema={LoginSchema}
          onSubmit={handleLogin}
        >
          <Form>
           
            <div className="mb-4">
              <label htmlFor="email" className="block text-white text-sm font-semibold mb-2">
                Email Address
              </label>
              <Field
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email address"
                className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-pink-500"
              />
              <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-white text-sm font-semibold mb-2">
                Password
              </label>
              <Field
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-pink-500"
              />
              <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
            </div>
            <button
              type="submit"
              className='bg-gradient-to-br hover:scale-105  from-black w-full to-pink-800 text-wrap shadow-pink-500 shadow-md hover:bg-pink-600 text-white text-lg md:text-xl py-2 md:py-4 rounded-lg px-4 mb-4 font-bold'>
              Log In
            </button>
          </Form> 
        </Formik>
      </div>
    </div>
  );
}

export default LoginComponent;
