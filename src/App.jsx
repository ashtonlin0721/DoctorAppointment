
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
import Footer from './components/Footer'
import Cardiology from './pages/Cardiology'
import Dermatology from './pages/Dermatology'
import FamilyDoctor from './pages/FamilyDoctor'
import Neurology from './pages/Neurology'
import Orthopedic from './pages/Orthopedic'
import Pediatrics from './pages/Pediatrics'
import RegisterPage from './pages/Register'
import PasswordResetPage from './pages/PasswordResetPage'

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
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/resetpassword" element={<PasswordResetPage />} />
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

          <Route
            path="/cardiologist"
            element={isLoggedIn ? <Cardiology /> : <Navigate to="/" />
            }
          />

          <Route
            path="/dermatology"
            element={isLoggedIn ? <Dermatology /> : <Navigate to="/" />
            }
          />

          <Route
            path="/familydoctor"
            element={isLoggedIn ? <FamilyDoctor /> : <Navigate to="/" />
            }
          />

          <Route
            path="/neurology"
            element={isLoggedIn ? <Neurology /> : <Navigate to="/" />
            }
          />

          <Route
            path="/orthopedic"
            element={isLoggedIn ? <Orthopedic /> : <Navigate to="/" />
            }
          />

          <Route
            path="/pediatrics"
            element={isLoggedIn ? <Pediatrics /> : <Navigate to="/" />
            }
          />

        </Routes>
        <Footer />

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
