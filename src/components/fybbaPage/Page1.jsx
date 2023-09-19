import React from 'react'
import Header from '../../header/Header'
import Footer from '../../footer/Footer'
import Button from '../Button'
import { Outlet } from 'react-router-dom'
import Card from '../../Card/Card'

function Page1() {
  return (
    <>
    <Header/>
    <div className="w-1/2 m-auto flex justify-center items-center gap-1 flex-wrap bg-slate-900">
      <div className="container1">
        <Card title={'Clanguage'} page={'/CMainPage'} tag1={'Asgn..1'} tag2={'Asgn..2'} tag3={'Asgn..3'}></Card>
      </div>
      <div className="container2">
        <Card title={'DBMS'} page={'/DBMSMainPage'} tag1={'Asgn..1'} tag2={'Asgn..2'} tag3={'Asgn..3'}></Card>
      </div>
      <div className="container3">
        <Card title={'WEBTECH'} page={'/WebTechMainPage'} tag1={'Asgn..1'} tag2={'Asgn..2'} tag3={'Asgn..3'}></Card>
      </div>
      <div className="container4">
        <Card title={'RDBMS'} page={'/RDBMSmainPage'} tag1={'Asgn..1'} tag2={'Asgn..2'} tag3={'Asgn..3'}></Card>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Page1
