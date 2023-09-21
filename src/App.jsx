import './App.css'
import Header from './header/Header'
import Footer from './footer/Footer'
import Card from './Card/Card'
import { Outlet } from 'react-router-dom'
import TypeWriter from './typeWriter/TypeWriter'
import useTheme from './context/ThemeContext'

function App() {

  const {theme, setTheme} = useTheme()
  return (
    <div className={`${theme === 'light' ? 'bg-white' : 'bg-slate-900'}`}>
      <Header/>
            <TypeWriter/> 
      <div className="w-full flex justify-center gap-5 flex-wrap">
         <div>
            <Card page='/page1' title="FY.BBA(C.A)" tag1={'Clang'} tag2={'DBMS'} tag3={'WTech'} image={'https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60'}
               description={'This Particular Section Contains all the important Solution Of Lab book For Practice.'}
            />
         </div>
         <div>
            <Card page='/page2'  title="SY.BBA(C.A)" tag1={'PHP'} tag2={'BigData'} tag3={'DSA'} image={'https://images.pexels.com/photos/5553050/pexels-photo-5553050.jpeg?auto=compress&cs=tinysrgb&w=1600'}
               description={"This is the Section where you will find the assignment's solution for the S.Y lab book."}
            />
         </div>
         <div>
            <Card page='/page3'  title="TY.BBA(C.A)" tag1={'Android'} tag2={'Java'} tag3={'MongoDB'} image={'https://images.pexels.com/photos/5965526/pexels-photo-5965526.jpeg?auto=compress&cs=tinysrgb&w=1600'} 
               description={'Here You will find the Third year practical lab book solutions for practice.'}
            />
         </div>
      </div>
       
      <Footer />
    </div>
  )
}

export default App
