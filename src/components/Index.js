import React, { useEffect, useRef } from 'react'
import mainImg from '../images/main.png'
import officeImg from '../images/office.jpg'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Index = () => {
  gsap.registerPlugin(ScrollTrigger)
  const homeRef = useRef(null)
  const tl = useRef(null)
  const infoPara = document.getElementsByClassName('infoPara')
  const cards = document.getElementsByClassName('card')

  useEffect(()=>{
    const ctx1 = gsap.context(()=>{
      tl.current = gsap.timeline()
      .from(".head1",{
        y:20,
        duration:1,
        opacity:0
      })
      .from(".head2",{
        y:30,
        opacity:0
      })
      .from(".head3",{
        y:30,
        opacity:0
      })
      .from(".headbtn",{
        y:30,
        opacity:0
      })
      .from(".headimg",{
        opacity:0
      })

      gsap.from(".page2Head",{
        scrollTrigger:{
          trigger:".indexPage2",
          start:"90% bottom",
          end:"90% bottom",
          scrub:2
        },
        y:200,
        opacity:0
      })
      gsap.from(cards,{
        scrollTrigger:{
          trigger:".indexPage2",
          start:"90% bottom",
          end:"90% bottom",
          scrub:2
        },
        y:300,
        opacity:0,
        stagger:0.2
      })
      gsap.from(".officeImg",{
        scrollTrigger:{
          trigger:".indexPage3",
          start:"35% bottom",
          end:"35% bottom",
          scrub:2,
          
        },
        opacity:0
      })
      gsap.from(infoPara,{
        scrollTrigger:{
          trigger:".indexPage3",
          start:"35% bottom",
          end:"35% bottom",
          scrub:3,
          
        },
        y:400,
        opacity:0,
        stagger:0.2
      })
    },homeRef)

    return ()=>ctx1.revert()
  },[])

  return (
    <>
    <div ref={homeRef}>

      <div className='Main relative flex min-h-[90vh] items-center -z-0 justify-around bg-purple-300'>
        <div className="bgDesign bg-purple-50 z-10">
        </div>
        <div className="txtContent w-[45%] " >
          <h1 style={{fontFamily:"'Dancing Script', cursive"}} className='text-9xl font-bold text-purple-500 head1 '>Recruit.com</h1>
          <h2 className='text-xl my-1 text-gray-800  font-semibold head2'>Transform Your Hiring Experience with Our Innovative App</h2>
          <p className='font-medium my-2 text-gray-600 head3'>Welcome to our digital recruitment solution app, a game-changer in the world of hiring. Designed with the aim of providing a seamless experience for multiple multinational corporations (MNCs)</p>
          <button className='px-5 bg-purple-500 py-1 text-white font-semibold rounded my-2 headbtn'>Know more</button>
        </div>
        <div className='headimg' >
          <img src={mainImg} alt="" />
        </div>
        <div>
        </div>
      </div>
      <div >
        <section className="text-gray-600 body-font indexPage2">
          <div className="container px-5 pt-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
              <h2 className="text-lg text-purple-500 tracking-widest font-semibold title-font mb-1">Recruit.com</h2>
              <h1 className="sm:text-3xl lg:text-2xl font-medium title-font text-gray-700 page2Head">Transform Your Hiring Experience with Our Innovative App</h1>
            </div>
            <div className="flex flex-wrap -m-4">
              <div className="p-4 md:w-1/3 card">
                <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-purple-500 text-white flex-shrink-0">
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                      </svg>
                    </div>
                    <h2 className="text-gray-900 text-lg title-font font-medium">Business Solutions</h2>
                  </div>
                  <div className="flex-grow">
                    <p className="leading-relaxed text-base">Introducing Our Revolutionary Digital Recruitment Solution App</p>
                    <a className="mt-3 text-purple-500 inline-flex items-center">Learn More
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-4 md:w-1/3 card">
                <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-purple-500 text-white flex-shrink-0">
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                    </div>
                    <h2 className="text-gray-900 text-lg title-font font-medium">Services</h2>
                  </div>
                  <div className="flex-grow">
                    <p className="leading-relaxed text-base">Enhance Your Hiring Process with Our Seamless App. Efficient and Effective Recruitment Made Easy</p>
                    <a className="mt-3 text-purple-500 inline-flex items-center">Learn More
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-4 md:w-1/3 card">
                <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-purple-500 text-white flex-shrink-0">
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                        <circle cx="6" cy="6" r="3"></circle>
                        <circle cx="6" cy="18" r="3"></circle>
                        <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                      </svg>
                    </div>
                    <h2 className="text-gray-900 text-lg title-font font-medium">Cutting Edge Solutions</h2>
                  </div>
                  <div className="flex-grow">
                    <p className="leading-relaxed text-base">Streamline Hiring for MNCs with Our Cutting-Edge Solution</p>
                    <a className="mt-3 text-purple-500 inline-flex items-center">Learn More
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div>
        <section className="text-gray-600 body-font indexPage3">
          <div className="container px-5 py-24 mx-auto flex flex-wrap">
            <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
              <img alt="feature" className="object-cover object-center h-full w-full officeImg" src={officeImg} />
            </div>
            <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
              <div className="flex flex-col mb-10 lg:items-start items-center infoPara">
                <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-purple-100 text-purple-500 mb-5">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <div className="flex-grow">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Seemless Experience</h2>
                  <p className="leading-relaxed text-base">Welcome to our digital recruitment solution app, a game-changer in the world of hiring. Designed with the aim of providing a seamless experience for multiple multinational corporations (MNCs), our app revolutionizes the way organizations find and hire top talent. Say goodbye to the complexities and time-consuming processes traditionally associated with recruitment, and embrace a new era of efficiency and effectiveness.</p>
                  <a className="mt-3 text-purple-500 inline-flex items-center">Learn More
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="flex flex-col mb-10 lg:items-start items-center infoPara">
                <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-purple-100 text-purple-500 mb-5">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                    <circle cx="6" cy="6" r="3"></circle>
                    <circle cx="6" cy="18" r="3"></circle>
                    <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                  </svg>
                </div>
                <div className="flex-grow">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Smooth Searching</h2>
                  <p className="leading-relaxed text-base">Our app is built on the foundation of advanced technology and deep industry knowledge, ensuring that it meets the unique needs of MNCs across various sectors. Whether you are a global conglomerate or a rapidly growing multinational enterprise, our solution caters to organizations of all sizes and complexities. We understand the challenges faced by MNCs when it comes to talent acquisition, and we have developed a comprehensive suite of features to address those challenges head-on.</p>
                  <a className="mt-3 text-purple-500 inline-flex items-center">Learn More
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="flex flex-col mb-10 lg:items-start items-center infoPara">
                <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-purple-100 text-purple-500 mb-5">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <div className="flex-grow">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Buisness Solutions</h2>
                  <p className="leading-relaxed text-base">With our app, you can streamline your hiring process from start to finish. From creating compelling job postings to managing applicant profiles, scheduling interviews, and making data-driven decisions, our app empowers you with the tools and insights you need to make informed hiring choices. Our intuitive interface and user-friendly design ensure that you can navigate through the app effortlessly, saving you time and effort while maximizing your chances of finding the perfect candidates.</p>
                  <a className="mt-3 text-purple-500 inline-flex items-center">Learn More
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      </div>
    </>
  )
}

export default Index
