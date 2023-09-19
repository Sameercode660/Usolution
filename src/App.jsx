import './App.css'
import Header from './header/Header'
import Footer from './footer/Footer'
import Card from './Card/Card'
import { Outlet } from 'react-router-dom'
import TypeWriter from './typeWriter/TypeWriter'

function App() {

  return (
    <div className='bg-slate-900'>
      <Header/>
            <TypeWriter/> 
      <div className="w-full flex justify-center gap-5 flex-wrap">
         <div>
            <Card page='/page1' title="FY.BBA(C.A)" tag1={'Clang'} tag2={'DBMS'} tag3={'WTech'}/>
         </div>
         <div>
            <Card page='/page2'  title="SY.BBA(C.A)" tag1={'PHP'} tag2={'BigData'} tag3={'DSA'}/>
         </div>
         <div>
            <Card page='/page3'  title="TY.BBA(C.A)" tag1={'Android'} tag2={'Java'} tag3={'MongoDB'} />
         </div>
      </div>
       
      <Footer />
    </div>
  )
}

export default App
