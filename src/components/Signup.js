import React, { useState,useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
  const Navigate = useNavigate()
  const [details,setDetails] = useState({firstname:'',lastname:'',email:'',company:'',contact:'',password:''})
  const [disable,setDisable] = useState(true)

  const handleChanger = (e)=>{
    setDetails({...details,[e.target.name]:e.target.value})
  }

  const handleSignup = async (e)=>{
    e.preventDefault()
    const {data} = await axios.post(`${process.env.REACT_APP_API_URL}/api/user/signup`,{
      "firstname":details.firstname,
      "lastname":details.lastname,
      "email":details.email,
      "company":details.company,
      "contact":details.contact,
      "password":details.password
    })

    if(data.Success){
      Navigate('/login')
    }

  }

  useEffect(() => {
    const isFormValid =
      details.firstname.trim() !== '' &&
      details.lastname.trim() !== '' &&
      details.contact.trim().length === 10 &&
      details.email.trim() !== '' &&
      details.company.trim() !== '' &&
      details.password.trim() !== '';
  
    setDisable(!isFormValid); 
  }, [details.firstname, details.lastname, details.email, details.company, details.contact, details.password]);
  

  return (
    <div>
      <div className="flex min-h-full  flex-col justify-center px-6 py-12 lg:px-8">
  <div className="sm:mx-auto sm:w-full sm:max-w-sm">
    <div className='flex w-full justify-center items-center'>
  <i className="ri-user-fill text-2xl text-black  cursor-pointer"></i>

    </div>
    <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in for an account</h2>
    <p className="mt-2 text-center text-sm text-gray-500">
      or 
      <Link to='/login' className="font-semibold leading-6 text-purple-600 hover:text-purple-500 mx-1">login</Link>
    </p>
  </div>
 
  <div className="w-full my-14 flex items-center justify-center">
    <form className="space-y-4 flex items-center justify-center flex-col  w-full " action="#" method="POST">
      <div className='w-[60%] gap-5 flex flex-wrap items-center justify-center'>
      <div>
        <label htmlFor="firstname" className="block text-sm font-medium leading-6 text-gray-900">First Name</label>
        <div className="mt-2">
          <input id="firstname" name="firstname" value={details.firstname} onChange={handleChanger} type="text" autoComplete="email" requipurple className="block w-[300px] rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>
      <div>
        <label htmlFor="lastname" className="block text-sm font-medium leading-6 text-gray-900">Last Name</label>
        <div className="mt-2">
          <input id="lastname" name="lastname" value={details.lastname} onChange={handleChanger} type="text" autoComplete="email" requipurple className="block w-[300px] rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
        <div className="mt-2">
          <input id="email" name="email" type="email" value={details.email} onChange={handleChanger} autoComplete="email" requipurple className="block w-[300px] rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>
      <div>
        <label htmlFor="company" className="block text-sm font-medium leading-6 text-gray-900">Company</label>
        <div className="mt-2">
          <input id="company" name="company" type="text" value={details.company}  onChange={handleChanger} autoComplete="email" requipurple className="block w-[300px] rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>

      <div>
        <label htmlFor="contact" className="block text-sm font-medium leading-6 text-gray-900">Contact</label>
        <div className="mt-2">
          <input id="contact" name="contact" type="Number" value={details.contact} onChange={handleChanger} autoComplete="email" requipurple className="block w-[300px] rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label htmlFor="password" className="block text-sm font-bold leading-6 text-green-600">Password</label>
          
        </div>
        <div className="mt-2">
          <input id="password" name="password" type="password" value={details.password} onChange={handleChanger} autoComplete="current-password" requipurple className="block w-[300px] rounded-md px-3 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>
      </div>
     

      <div>
        <button disabled={disable} type="submit" onClick={handleSignup} className="flex w-full disabled:bg-purple-200 justify-center rounded-md bg-purple-600 px-3 py-1.5 text-sm my-3 font-semibold leading-6 text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600">Sign up</button>
      </div>
    </form>

   
  </div>
</div>
    </div>
  )
}

export default Signup
