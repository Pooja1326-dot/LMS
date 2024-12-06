import React from 'react'
import './App.css'
import Login from './pages/Login'
import Profile from './pages/student/Profile'
import HeroSection from './pages/student/HeroSection'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './Layout/MainLayout'
import Courses from './pages/student/Courses'
import Mylearning from './pages/student/Mylearning'
import Dashboard from './pages/admin/Dashboard'
import Sidebar from './pages/admin/lecture/Sidebar'
import CourseTable from './pages/admin/CourseTable'



const appRouter=createBrowserRouter([
  {
    path:'/',
    element:<MainLayout/>,
    children:[
      {
        path:"/",
        element:
        <>
        <HeroSection/>
        <Courses/>
        </>
      },
      {
        path:"login",
        element:<Login/>
      },
      {
        path:"Mylearning",
        element:<Mylearning/>
      },
      {
        path:"Profile",
        element:<Profile/>
      },
   
      {
        path:"admin",
        element:<Sidebar/>,
        children:[
          {
            path:"dashboard",
            element:<Dashboard/>
          },
          {
          path:"course",
          element:<CourseTable/>
          }
        ]
      }

    ]
  }
])
const App = () => {
  return (
    <div>
    <RouterProvider router={appRouter}/>
    </div>
  )
}

export default App
