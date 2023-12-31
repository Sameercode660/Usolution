import { useState } from "react";
import useTheme from "../context/ThemeContext"
import { VscFile } from "react-icons/vsc";
import { VscFiles } from "react-icons/vsc";

export default function AssignmentComponent({question, answer}){
    const {theme} = useTheme()
    const [clicked, setClicked] = useState(false)

    const handleClick = ()=>{
        setClicked(true)
        navigator.clipboard.writeText(answer)
        setTimeout(()=>{
            setClicked(false)
        }, 2000)
    }
    return(
        <>
            <div className="question1 w-5/6 m-auto sm:w-2/3 sm:m-auto md:w-1/2 md:m-auto">
            <h1 className={`text-center text-md ${theme === 'light' ? 'text-black' : 'text-white'}`}>{question}</h1>
            <div className='overflow-auto bg-gray-950 text-white rounded-lg mt-2 p-5 mb-5'>
                <div className="flex items-center my-1" onClick={handleClick} >
                    {
                        clicked ? <VscFiles></VscFiles> : <VscFile></VscFile>
                    }
                </div>
                <pre>
                    <code>
                         {answer}
                    </code>
                </pre>
            </div>
        </div>
        </>
    )
}
