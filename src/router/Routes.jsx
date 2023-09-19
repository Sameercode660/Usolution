
import App from '../App.jsx'
import Page1 from '../components/fybbaPage/Page1.jsx'
import CMainPage from '../components/fybbaPage/Clanguage/CMainPage.jsx'
import DBMSMainPage from '../components/fybbaPage/DBMS/DBMSMainPage.jsx'
import RDBMSmainPage from '../components/fybbaPage/RDBMS/RDBMSMainPage.jsx'
import WebTechMainPage from '../components/fybbaPage/webtech/WebTechMainPage.jsx'


import { BrowserRouter, Route, Link, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
// C language assignment imports
import Assignment1 from '../components/fybbaPage/Clanguage/assigments/assignment1.jsx'
import Assignment2 from '../components/fybbaPage/Clanguage/assigments/Assignment2.jsx'


 

 const router = createBrowserRouter([
  {
    path : '/', 
    element : <App></App>
  },
  {
    path : '/page1',
    element : <Page1/>,
  },
  {
    path : '/CMainPage',
    element : <CMainPage/>,
    children : [
      {
        path : "",
        element : <Assignment1/>
      },
      {
        path : 'assignment1',
        element : <Assignment1/>
      },
      {
        path : 'assignment2',
        element : <Assignment2/>
      }
    ]
  },
  {
    path : '/DBMSMainPage',
    element : <DBMSMainPage/>
  },
  {
    path : '/WebTechMainPage',
    element : <WebTechMainPage/>
  },
  {
    path : '/RDBMSmainPage',
    element : <RDBMSmainPage/>
    
  }
  
])

export default router;