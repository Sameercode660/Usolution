import React from "react";
import { Link } from "react-router-dom";

function Button({ assignment, text }) {
  return (
    <>
      <button
        type="button"
        className="rounded-full bg-black px-3 py-[6px] mt-[6px] text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        <Link to={assignment}>
        {text}
        </Link>
      </button>
    </>
  );
}

export default Button;
 