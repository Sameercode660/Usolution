
import React from 'react'
import AssignmentComponent from '../../../../AssignmentComponent/AssignmentComponent'
import useTheme from '../../../../context/ThemeContext'
import useFetchData from '../../../../context/FetchData'

function Assignment2() {

  const {theme} = useTheme()
  const {cLangAsn2} = useFetchData()
  console.log(cLangAsn2)
  return (
    <>
        <div className={`text-center font-bold text-lg mb-[12px] ${theme === 'light' ? 'text-black' : 'text-white'}`}>Assignment Based on input and output functions</div>

        {
            cLangAsn2.length === 0 ? <p>loading...</p> : cLangAsn2.map((asn)=>(
                <AssignmentComponent key={asn.answer} question={asn.question} answer={asn.answer}></AssignmentComponent>
            ))
        }
 

    </>    
    
  )
}


export default Assignment2