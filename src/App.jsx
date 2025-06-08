import { useState } from 'react'
import './App.css'
import CreateDoctor from './pages/CreateDoctor'
import { useRoutes } from 'react-router-dom'
import DoctorListPage from './pages/DoctorListPage'
import BookAppointment from './pages/BookAppointment'
import AppointmentPage from './pages/AppointmentPage'
import SignInPage from './pages/Signin'
import Home from './pages/Home'
import MyAppointmentPage from './pages/MyAppointmentPage'
import Header from './components/Header'

function App() {

  let element = useRoutes([
    {path: '/', element: <Home /> },
    {path:'/createdoctor', element: <CreateDoctor />},
    {path: '/doctorlist', element: <DoctorListPage />},
    {path: '/book-appointment/:id', element: <BookAppointment />},
    {path: '/appointment/:id', element: <AppointmentPage />},
    {path: '/signin', element: <SignInPage />},
    {path: '/myappointments', element: <MyAppointmentPage />},
  ])

  return (
    <>

      {element}
    </>
  )
}

export default App
