import React from 'react'
import Header from '../../../header/Header'
import Button from '../../Button'
import { Outlet } from 'react-router-dom'
import Footer from '../../../footer/Footer'

function CMainPage() {
  return (
    <>
     <Header/>
     <div className="navigator flex justify-center items-center gap-2 pb-[40px]">
        <Button assignment="assignment1" text={1}/>
        <Button assignment="assignment2" text={2}/>
        <Button text={3}/>
        <Button text={4}/>
        <Button text={5}/>
        <Button text={6}/>
        <Button text={7}/>
        <Button text={8}/>
     </div>
     <div className="outlet ">
        <Outlet/>
     </div>
     <Footer/>
     </>
  )
}

export default CMainPage
