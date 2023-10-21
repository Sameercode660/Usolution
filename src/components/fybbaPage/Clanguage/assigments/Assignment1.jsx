
import React from 'react'
import AssignmentComponent from '../../../../AssignmentComponent/AssignmentComponent'
import useTheme from '../../../../context/ThemeContext'
import useFetchData from '../../../../context/FetchData'

function Assignment1() {

  const {theme} = useTheme()
  const {cLangAsn1} = useFetchData()
  console.log(cLangAsn1)
  return (
    <>
        <div className={`text-center font-bold text-lg mb-[12px] ${theme === 'light' ? 'text-black' : 'text-white'}`}>Assignments based on Data Types and Operators</div>

        {
            cLangAsn1.length === 0 ? <p>loading...</p> : cLangAsn1.map((asn)=>(
                <AssignmentComponent key={asn.answer} question={asn.question} answer={asn.answer}></AssignmentComponent>
            ))
        }
 

    </>    
    
  )
}


export default Assignment1
