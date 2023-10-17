
import React from 'react'
import { useState } from 'react'
import AssignmentComponent from '../../../../AssignmentComponent/AssignmentComponent'
import useTheme from '../../../../context/ThemeContext'
import useFetchData from '../../../../context/FetchData'

function Assignment1() {

  const {theme} = useTheme()
  const {cLangAsn1} = useFetchData()
  return (
    <>
        <div className={`text-center font-bold text-lg mb-[12px] ${theme === 'light' ? 'text-black' : 'text-white'}`}>Assignments based on Data Types and Operators</div>
        {/*Question 1*/}
        {/* <div className="question1 w-5/6 m-auto sm:w-2/3 sm:m-auto md:w-1/2 md:m-auto">
            <h1 className='font-bold text-center text-md'>1.Write a C Program to demonstrate the working of arithmetic operators (Associativity and precedence of arithmetic operators is expected)</h1>
            <div className='overflow-auto bg-black text-white rounded-lg mt-2 p-5'>
                <pre>
                    <code>
                        {'#include<stdio.h>\n'}
                        {'#include<conio.h> \n\n'}
                        {'void main(void){\n'}
                        {'\t int a = 10, b = 20, temp;\n'}
                        {'\t clrscr();\n'}
                        {'\t temp = a, a = b , b = temp;\n'}
                        {'\t printf("a=%d, b=%d", a, b);\n'}
                        {'\t getch();\n'}
                        {'}'}
                    </code>
                </pre>
            </div>
        </div> */}

        {
            cLangAsn1 &&  cLangAsn1.map((asn)=>(
                <AssignmentComponent question={asn.question} answer={asn.answer}></AssignmentComponent>
            ))
        }
 

    </>    
    
  )
}


export default Assignment1
