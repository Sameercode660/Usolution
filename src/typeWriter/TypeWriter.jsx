import React from "react";
import Typewriter from "typewriter-effect";
import { useState, useEffect } from "react";

function TypeWriter() {
  const [again, setAgain] = useState(0);

  function typingText(typewriter) {
    typewriter
      .typeString("WelCome To U Solution")
      .pauseFor(1000)
      .deleteAll()
      .typeString("Find What U Want")
      .start()     
  }
  
   
  return (
    <>
      <div className="w-1/2 m-auto h-40 flex justify-center items-center sm:text-[50px] text-[25px] text-white">
        <Typewriter onInit={typingText} />
      </div>
    </>
  );
}

export default TypeWriter;
