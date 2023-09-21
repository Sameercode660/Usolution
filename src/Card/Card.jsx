import React from "react";
import { Link } from "react-router-dom";
import useTheme from "../context/ThemeContext";

function Card({page, title, tag1, tag2, tag3, image, description}) {

  const {theme, setTheme} = useTheme()
  
  return (
    <>
   
      <div className={`w-[250px] rounded-md border ${ theme === 'light' ? 'bg-white text-black border-gray-300 = gray-border-gray-300.bind(this)' : 'bg-slate-900 text-white'} mt-[30px]`}>
        <img
          // src=""
          src={image}
          alt="Laptop"
          className="h-[200px] w-full rounded-t-md object-cover"
        />
        <div className="p-4">
          <h1 className="inline-flex items-center text-lg font-semibold">
            {title}  {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </h1>
          <p className={`mt-3 text-sm ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
             {description}
          </p>
          <div className="mt-4">
            <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
              #{tag1}
            </span>
            <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
              #{tag2}
            </span>
            <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
              #{tag3}
            </span>
          </div>
          <button
            type="button"
            className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          ><Link to={page}>
             <span className="w-full block">Read More</span>
          </Link>
          </button>
        </div>
      </div>
    </>
  );
}
export default Card;
