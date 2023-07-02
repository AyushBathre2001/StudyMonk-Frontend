import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

  const Navigate = useNavigate()

  const logout = ()=>{
    localStorage.removeItem('recruitToken')
    Navigate('/login')
  }
  return (
    <div className=' p-5 sticky top-0 z-40 Navbar w-full shadow-lg bg-purple-50 flex items-center justify-between'>
      <div className="logo">
        <Link to={'/'}><h2  className='text-xl font-bold text-gray-700'>Recruit.com</h2></Link>
      </div>
      <nav>
        <ul>
            <li className='text-purple-700 font-bold'><Link to = '/'>Home</Link></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Resources</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
      </nav>
      {localStorage.getItem('recruitToken') && <div className="search">
       <Link to='/candidates'><button className='border-purple-500 border px-2 py-1 rounded text-purple-600'>Search Candidates <i className="ri-search-2-line text-md"></i></button></Link>

      </div>}
      <div className="auth">
        {!localStorage.getItem('recruitToken') ? <Link to='/login' > <button className='px-5 bg-purple-500 py-1 text-white font-semibold rounded'>Login</button> </Link> : <button onClick={logout} className='px-5 bg-red-500 py-1 text-white font-semibold rounded'>Logout</button>
 }
      </div>
    </div>
  )
}

export default Navbar
