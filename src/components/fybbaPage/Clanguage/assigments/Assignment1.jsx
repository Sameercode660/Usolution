
import React from 'react'
import { useState } from 'react'
import AssignmentComponent from '../../../../AssignmentComponent/AssignmentComponent'

function Assignment1() {

  
  return (
    <>
        <div className="text-center font-bold text-lg mb-[12px] text-white">Assignments based on Data Types and Operators</div>
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

        <AssignmentComponent 
            question = {'1.Write a C Program to demonstrate the working of arithmetic operators (Associativity and precedence of arithmetic operators is expected)'}
            answer={'#include<stdio.h>\n#include<conio.h>\n\nvoid main(void){\n\tint a = 10, b = 20, temp;\n\t clrscr();\n\t temp = a, a = b , b = temp;\n\t printf("a=%d, b=%d", a, b);\n\t getch();\n}'}
        ></AssignmentComponent>

        <AssignmentComponent 
            question = {'1.Write a C Program to demonstrate the working of arithmetic operators (Associativity and precedence of arithmetic operators is expected)'}
            answer={'#include<stdio.h>\n#include<conio.h>\n\nvoid main(void){\n\tint a = 10, b = 20, temp;\n\t clrscr();\n\t temp = a, a = b , b = temp;\n\t printf("a=%d, b=%d", a, b);\n\t getch();\n}'}
        ></AssignmentComponent>

        <AssignmentComponent 
            question = {'1.Write a C Program to demonstrate the working of arithmetic operators (Associativity and precedence of arithmetic operators is expected)'}
            answer={'#include<stdio.h>\n#include<conio.h>\n\nvoid main(void){\n\tint a = 10, b = 20, temp;\n\t clrscr();\n\t temp = a, a = b , b = temp;\n\t printf("a=%d, b=%d", a, b);\n\t getch();\n}'}
        ></AssignmentComponent>
        
        <AssignmentComponent 
            question = {'1.Write a C Program to demonstrate the working of arithmetic operators (Associativity and precedence of arithmetic operators is expected)'}
            answer={'#include<stdio.h>\n#include<conio.h>\n\nvoid main(void){\n\tint a = 10, b = 20, temp;\n\t clrscr();\n\t temp = a, a = b , b = temp;\n\t printf("a=%d, b=%d", a, b);\n\t getch();\n}'}
        ></AssignmentComponent>
        

    </>    
    
  )
}


export default Assignment1
