import { useState } from 'react'
import './App.css'
import CreateDoctor from './pages/CreateDoctor'
import { Route, useLocation, Routes } from 'react-router-dom'
import DoctorListPage from './pages/DoctorListPage'
import BookAppointment from './pages/BookAppointment'
import AppointmentPage from './pages/AppointmentPage'
import SignInPage from './pages/Signin'
import Home from './pages/Home'
import MyAppointmentPage from './pages/MyAppointmentPage'
import Header from './components/Header'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { adminAccountId } from './config/config'
import { Navigate } from 'react-router-dom'

function App() {
  const userInfo = JSON.parse(localStorage.getItem('user'));
  const isLoggedIn = userInfo !== null;
  const isAdmin = isLoggedIn && userInfo.uid === adminAccountId;


  const AppWrapper = ()=> {
    const location = useLocation();
    const shouldDisplayHeader = location.pathname !== '/signin' && location.pathname !== '/register' && location.pathname !== '/resetpassword';
    const navigate = useNavigate();

    useEffect(()=>{
      navigate('/');
    }, []);

    return(
    <>
      {shouldDisplayHeader && <Header />}
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/signin" element={<SignInPage />} />
          <Route
            path="/createdoctor"
            element={isAdmin ? <CreateDoctor /> : <Navigate to="/" />}
          />
          <Route
            path="doctorlist"
            element={isLoggedIn ? <DoctorListPage /> : <Navigate to="/" />}
            
          />

          <Route
            path='alldoctors'
            element={isLoggedIn ? <DoctorListPage /> : <Navigate to="/" />}

          />
          
          <Route
            path="/book-appointment/:id"
            element={isLoggedIn ? <BookAppointment /> : <Navigate to="/" />
            }
          />
          
          <Route
            path="/appointment/:id"
            element={isLoggedIn ? <AppointmentPage /> : <Navigate to="/" />
            }
          />

          <Route
            path="/myappointments"
            element={isLoggedIn ? <MyAppointmentPage /> : <Navigate to="/" />
            }
          />



        </Routes>



    </>

  
    )
  }

  

  return (
    <>
      <AppWrapper />
    </>
  )
}

export default App
