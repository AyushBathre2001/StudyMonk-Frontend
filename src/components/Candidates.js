import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import loader from '../images/loading.gif'

const Candidates = () => {

  const [candidates,setCandidates] = useState([])
  const [location, setLocation] = useState('')
  const [role,setRole] = useState('')
  const [loading, setLoading] = useState(false)


  const handleOnChange = (e)=>{
    if(e.target.name === "location"){
      setLocation(e.target.value)
    }
    if(e.target.name === "role"){
      setRole(e.target.value)
    }
  }


  const handleSearch = async ()=>{
    setLoading(true)
    if(location && role){
      const txt1 = location.charAt(0).toUpperCase() + location.slice(1);
      const txt2 = role.charAt(0).toUpperCase() + role.slice(1);
      const {data} = await axios.post(`${process.env.REACT_APP_API_URL}/api/search/candidates`,{
        "location":txt1,
        "role":txt2
      })
      setCandidates(data.items)
    }

    else if(location && !role){
      const txt = location.charAt(0).toUpperCase() + location.slice(1);
      const {data} =await  axios.post(`${process.env.REACT_APP_API_URL}/api/search/candidates`,{
        "location":txt
      })
      setCandidates(data.items)
    }
    else if(!location && role){
      const txt = role.charAt(0).toUpperCase() + role.slice(1);
      const {data} = await axios.post(`${process.env.REACT_APP_API_URL}/api/search/candidates`,{
        "role":txt
      })
      setCandidates(data.items)
      
      
    }
   setLoading(false)
    
  }


  useEffect(()=>{
    const fetchCandidates = async ()=>{
      setLoading(true)
      const {data} = await axios.get(`${process.env.REACT_APP_API_URL}/api/fetch/candidates`)
      setCandidates(data.candidates)
      setLoading(false)

    }
    fetchCandidates()
  },[])


  return (
    <>
    <div className='min-h-screen flex items-center justify-start p-10 flex-col'>
      <h1 className='text-xl font-bold text-gray-600'>Search based on Location & Role</h1>
      <div className='flex w-full items-center justify-center flex-col'>
      <div className='w-full flex items-center justify-center py-10 gap-5 flex-wrap'>
        <input className='bg-gray-200 w-[400px] px-3 py-2 rounded' type="Search" placeholder='Location Ex:-Bhopal' id='location' name='location' value={location} onChange={handleOnChange} />
        <input className='bg-gray-200 w-[400px] px-3 py-2 rounded' type="Search" placeholder='Role Ex:-Frontend' id='role' name='role' value={role} onChange={handleOnChange} />
      </div>
      <button onClick={handleSearch} className='px-3 py-1 rounded bg-purple-500 text-white font-bold'>Search</button>
      </div>

      <div>
        {loading ? <img className='w-[70px] my-52' src={loader}></img> :  <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex items-center justify-center flex-col">
      <h1 className='text-gray-500 font-bold mb-6 '>Results</h1>
    <div className="flex flex-wrap -m-4 items-center justify-center">
    { candidates && candidates.map((item)=>{
      const isSingleElement = candidates.length === 1;
      const containerClasses = isSingleElement ? "w-full" : "lg:w-1/4";
      const marginClasses = isSingleElement ? "" : "mx-8 my-6";
      return   <div key={item._id} className={`lg:mb-0 mb-6 py-8 px-20 shadow-md ${containerClasses} ${marginClasses}`}>
      <div className="h-full w-full text-center">
        <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQNvWDvQb_rCtRL-p_w329CtzHmfzfWP0FIw&usqp=CAU"/>
        <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">{item.name}</h2>
        <p className="text-gray-500">{item.role}</p>
        <p className="leading-relaxed">{item.location}</p>
        <span className="inline-block h-1 w-10 rounded bg-purple-500 mt-4 mb-4"></span>
        
        <p className="text-gray-500">{item.email}</p>
      
      </div>
    </div>
    })}
    {candidates.length<1 && <p>Results are not available!</p>}
  
    </div>
  </div>
</section> }
     
      </div>
    
    </div>
        </>
  )
}

export default Candidates
