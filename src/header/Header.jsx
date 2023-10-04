import React, { useState } from "react";
import { Link } from "react-router-dom";
import useTheme from "../context/ThemeContext";

function Header() {

  const {theme, setTheme} = useTheme()

  function changeTheme(){
      if(theme === 'dark')
      {
        setTheme('light')
        console.log(theme)
      }
      else
      {
        setTheme('dark')
        console.log(theme)
      }
  }

  const [click, setClick] = useState(false)
  return (
    <>
      <div className={`relative w-full m-auto sm:w-11/12 sm:m-auto ${theme === 'light' ? 'bg-white text-black' : 'bg-slate-900 text-white'} md:w-10/12 md:m-auto lg:w-10/12 lg:m-auto`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
          <div className="inline-flex items-center space-x-2">
            <span>
              <svg
                width="30"
                height="30"
                viewBox="0 0 50 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z"
                  fill={`${theme === 'light' ? 'black' : 'white'}`}
                ></path>
              </svg>
              {/* <img className="w-[40px] rounded-full" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAA51BMVEX////9+Pz9+vv8//v9/Pz8+fj++/f+//38///9/f/+/fXtwMPSio/OdnLPenzYoKTXlZ/LfYDXj5DszdD28+zr5NLt2dvMkZPMeX7YlJbQhYbKfHrbqqz47u/15O7Uqa6mAACzLzb15OXeqaW0KyWtHSnZnI3JuIvi2r728uWjAAC1NjLsyMG7SUWwGBvita6gAADCTVbgtbiyQkSvOCLFtIjoyMjBZGbjoqG/VVP06OPTcHS5PEP7/f74//++WUywPx/AfGXdzLSlLArBiWTp2LjFem3IYmqzZVOpAAC8LzXlqbXSf4m/CYAPAAABTUlEQVR4Ae2PVYLCMBCGp02aTnBoCZrd4u7WZlvc4f7nWeQKPPK9jMsPXz6FphOqGcyEBzoDyp6urplUR5MbIQbhSDQWTyRTlp02RCabzOVjYWblC4WipD+/sQTYeackypVqrd5otlLtjtXt9Qd2fljqEkrFaAxQaU8kkoozbczSFadXxnl/YbhtT3FE9Wc9GhxfBku5Wm+2rDL01bLceTQMPRs5VzEL0G37ktjpzW5vLyvtnoRx34Xc0FP4GIuJd4PdPOzXRwPj7c5gcIpI0300AOHvBsdXrfT23M4TLF6ut7kIEYxfemWgqJJlgGeDanX7NQuw6PTkEgO+DA87c+RLEdHAyDu1uS1O1zkS9pApAi0gRHqXxVxakfASBllvlHQTCYGEiIh3chVwypaiMBpl72OdgHxQLksTwKRSMkMyRNPkwJQQkgCFLx/iH8EDK992YnGfAAAAAElFTkSuQmCC" alt="logo" /> */}
            </span>
            <span className={`font-bold text-lg text-center ${theme === 'light' ? 'text-black' : 'text-white'}`}>
              <Link to={'/'}>USolution</Link>
            </span>

          </div>
          <div className="hidden lg:block">
            <ul className="inline-flex space-x-8">
              <li>
                <a
                  href="#"
                  className={`text-sm font-semibold  hover:text-orange-400 ${theme === 'light' ? 'text-black' : 'text-white'}`}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`text-sm font-semibold hover:text-orange-400 ${theme === 'light' ? 'text-black' : 'text-white'}`}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`text-sm font-semibold hover:text-orange-400 ${theme === 'light' ? 'text-black' : 'text-white'}`}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="hidden lg:block">
            <button
              type="button"
              className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Join Us
            </button>
            <button 
              onClick={changeTheme}
              className={`${theme === 'light' ? 'text-black' : 'text-white'} p-2 ml-4`}
            >   
            <i className="fa-solid fa-moon"></i>
            </button>
          </div>
          <div className={`lg:hidden ${theme === 'light' ? 'text-black' : 'text-white'}`}>
            <svg
              onClick={()=>{
                setClick((prev)=> !prev)
              }}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 cursor-pointer"
            >
              <line x1="4" y1="12" x2="20" y2="12"></line>
              <line x1="4" y1="6" x2="20" y2="6"></line>
              <line x1="4" y1="18" x2="20" y2="18"></line>
            </svg>
          </div>
        </div>
      </div>

      {/* responsive menu jsx  */}
      <div className={`responsive-navigation ${click ? 'flex' : 'hidden'} lg:hidden flex items-center justify-center`}>
        <ul className="w-full text-center">
          <li
            className={`${theme === 'light' ? 'text-black' : 'text-white'} w-full hover:bg-slate-500 pt-2 pb-2"`}
            
            >
            <Link to='/'>Home</Link>
          </li>
          <li className= {`${theme === 'light' ? 'text-black' : 'text-white'} w-full hover:bg-slate-500 pt-2 pb-2"`}>
            <Link to='/contact'>Contact</Link>
          </li>
          <li className={`${theme === 'light' ? 'text-black' : 'text-white'} w-full hover:bg-slate-500 pt-2 pb-2"`} >
            <Link to='/about'>About</Link>
          </li>
          <li>
          <button
              type="button"
              className=" mt-2 rounded-md bg-cyan-400 px-4 py-1 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black border border-gray-300"
            >
              <Link to='/contribution'>
                Join Us
              </Link>
            </button>
          </li>
          <li>
          <button 
              onClick={changeTheme}
              className={`${theme === 'light' ? 'text-black' : 'text-white'} p-2 ml-4`}
            >   
            <i className="fa-solid fa-moon text-lg border-none outline-none"></i>
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Header;
