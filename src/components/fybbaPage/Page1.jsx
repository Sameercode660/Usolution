import React from 'react'
import Header from '../../header/Header'
import Footer from '../../footer/Footer'
import Button from '../Button'
import { Outlet } from 'react-router-dom'
import Card from '../../Card/Card'
import useTheme from '../../context/ThemeContext'

function Page1() {

  const {theme, setTheme} = useTheme()
  if(theme === 'light')
  {
    document.querySelector('html').style.backgroundColor = 'white'
  }
  else
  {
    document.querySelector('html').style.backgroundColor = 'rgb(15, 23, 42)'
  }
  return (
    <>
    <Header/>
    <div className={`w-1/2 m-auto flex justify-center items-center gap-1 flex-wrap ${theme === 'light' ? 'bg-white' : 'bg-slate-900'}`}>
      <div className="container1">
        <Card title={'Clanguage'} page={'/CMainPage'} tag1={'Asgn..1'} tag2={'Asgn..2'} tag3={'Asgn..3'} image={'https://images.pexels.com/photos/1921326/pexels-photo-1921326.jpeg?auto=compress&cs=tinysrgb&w=1600'} description={'All the C language important lab book solution'}></Card>
      </div>
      <div className="container2">
        <Card title={'DBMS'} page={'/DBMSMainPage'} tag1={'Asgn..1'} tag2={'Asgn..2'} tag3={'Asgn..3'} image={'https://images.pexels.com/photos/117729/pexels-photo-117729.jpeg?auto=compress&cs=tinysrgb&w=1600'} description={'All the DBMS important Assignment of lab book'}></Card>
      </div>
      <div className="container3">
        <Card title={'WEBTECH'} page={'/WebTechMainPage'} tag1={'Asgn..1'} tag2={'Asgn..2'} tag3={'Asgn..3'} image={'https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=1600'} description={'The the Web Technology Related lab book solutions of assignment'}></Card>
      </div>
      <div className="container4">
        <Card title={'RDBMS'} page={'/RDBMSmainPage'} tag1={'Asgn..1'} tag2={'Asgn..2'} tag3={'Asgn..3'} image={'https://media.istockphoto.com/id/481100852/photo/rdbms-acronym-definition-speech-bubble-illustration.jpg?b=1&s=612x612&w=0&k=20&c=NTqpbzSZSX91FkWiLq8T17g8jiIFnCMz-fELNMZanzs='} description={"Relational Database Management System assignment's Solution"}></Card>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Page1
