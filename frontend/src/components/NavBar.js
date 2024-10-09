import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import LoadingBar from 'react-top-loading-bar';
import { useRef } from 'react';

function NavBar(props) {

  const [isPressed,setIsPressed] = useState(false);
  const ref = useRef(null);

  const userData = props.data;


  const navigate = useNavigate();
  const logoutHandle = async ()=>{
    try {
      ref.current.staticStart();

      localStorage.removeItem('User');
      toast.success("Logout Successfully!!")
      ref.current.complete();

      navigate('/login');
    } catch (error) {
      console.log(error.message)
    }
  }


  return (
    <div>
            <LoadingBar color='orange' ref={ref}  ></LoadingBar>

         <div className=' flex flex-row  justify-between w-screen h-24 bg-neutral-950' >
          <div className='left text-red-500 font-bold font-Handjet tracking-wider text-6xl top-5 left-10 relative '>
            <p className='text-white'><span className='text-yellow-500' >Expense</span> Tracker</p>  
          </div>
        
        <div>

        </div>
        <div className='flex flex-row justify-end w-1/3'>
            
        <div className='pl-4 mr-16 pr-4 w-auto  rounded-xl mt-6 mb-6 '>

              <div className="relative z-50 inline-flex  group" onClick={()=>setIsPressed(!isPressed)} >
              <div
                  className="absolute transitiona-all duration-700 opacity-70 inset-16 bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:inset-1 group-hover:duration-200 animate-tilt">
              </div>
              <div  title=""
                  className="relative inline-flex items-center justify-center px-8 py-4 text-sm tracking-wider font-bold text-white transition-all duration-200 bg-neutral-950 font-pj rounded-xl focus:outline-none focus:ring-1  focus:ring-offset-1 focus:ring-gray-900"
                  role="button">Send Email
              </div>
            </div>
        </div>

            <div>
                  <a onClick={logoutHandle} href="#_" className=" text-xl mt-5 mb-5 right-10 relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group">
                  <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                  </span>
                  <span className="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">LogOut</span>
                  <span className="relative invisible">LogOut</span>
                  </a>
            </div>
        </div>
        </div>
    </div>
  )
}

export default NavBar