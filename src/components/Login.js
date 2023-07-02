import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [details, setDetails] = useState({ email: '', password: '' })
  const Navigate = useNavigate()

  const handleChanger = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value })
  }

  const handleLogin = async (e) => {
    e.preventDefault()
    const { data } = await axios.post(`${process.env.REACT_APP_API_URL}/api/user/login`, {
      "email": details.email,
      "password": details.password
    })
    if (data.Success === true) {
      localStorage.setItem('recruitToken', data.Token)
      
      Navigate('/')
    }
    else{
      toast.error('Invalid Credentials!', {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }

  }


  return (
    <div>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="flex min-h-[80vh] flex-col justify-center items-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <div className='flex w-full justify-center items-center'>
            <i className="ri-user-fill text-2xl text-black  cursor-pointer"></i>

          </div>
          <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
          <p className="mt-2 text-center text-sm text-gray-500">
            or
            <Link to='/signup' className="font-semibold leading-6 text-purple-600 hover:text-purple-500 mx-1">signup</Link>
          </p>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm  ">
          <form className="space-y-4  w-full" action="#" method="POST">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
              <div className="mt-2">
                <input id="email" name="email" type="email" value={details.email} onChange={handleChanger} autoComplete="email" requipurple className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6" />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                <div className="text-sm">
                  <Link to='/forgot' className="font-semibold text-purple-600 hover:text-purple-500">Forgot password?</Link>
                </div>
              </div>
              <div className="mt-2">
                <input id="password" name="password" type="password" value={details.password} onChange={handleChanger} autoComplete="current-password" requipurple className="block w-full px-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6" />
              </div>
            </div>

            <div>
              <button disabled={details.email && details.password ? false :true} type="submit" onClick={handleLogin} className="flex w-full justify-center disabled:bg-purple-200 rounded-md bg-purple-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600">Sign in</button>
            </div>
          </form>


        </div>
      </div>
    </div>
  )
}

export default Login
