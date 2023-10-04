import React from "react";
import Typewriter from "typewriter-effect";
import { useState, useEffect } from "react";
import useTheme from "../context/ThemeContext";

function TypeWriter() {
  const {theme, setTheme} = useTheme()
  

  function typingText(typewriter) {
 
      typewriter
      .typeString("Welcome To U Solution")
      .pauseFor(1000)
      .deleteAll()
      .typeString("Find What U Want")
      .pauseFor(1000)
      .start().
      deleteAll()
      .start()
  }
  
 
   
  return (
    <>
      <div className={`w-1/2 m-auto h-40 flex justify-center items-center sm:text-[50px] text-[25px] ${theme === 'light' ? 'text-black' : 'text-white'} text-justify`}>
        <Typewriter onInit={typingText} options={{loop : true , autoStart : true}} />
      </div>
    </>
  );
}

export default TypeWriter;
