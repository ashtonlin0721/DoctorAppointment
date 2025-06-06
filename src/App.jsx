import { useState } from 'react'
import './App.css'
import CreateDoctor from './pages/CreateDoctor'
import { useRoutes } from 'react-router-dom'
import DoctorListPage from './pages/DoctorListPage'
import BookAppointment from './pages/BookAppointment'
import AppointmentPage from './pages/AppointmentPage'

function App() {
  let element = useRoutes([
    {path:'/createdoctor', element: <CreateDoctor />},
    {path: '/doctorlist', element: <DoctorListPage />},
    {path: '/book-appointment/:id', element: <BookAppointment />},
    {path: '/appointment/:id', element: <AppointmentPage />}
  ])

  return (
    <>
      {element}
    </>
  )
}

export default App
