import { useState } from 'react'
import './App.css'
import CreateDoctor from './pages/CreateDoctor'
import { useRoutes } from 'react-router-dom'
import DoctorListPage from './pages/DoctorListPage'

function App() {
  let element = useRoutes([
    {path:'/createdoctor', element: <CreateDoctor />},
    {path: '/doctorlist', element: <DoctorListPage />}
  ])

  return (
    <>
      {element}
    </>
  )
}

export default App
