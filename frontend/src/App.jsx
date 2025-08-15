import React, { useContext } from 'react'
import "./App.css"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from './pages/Home';
import NoPage from './pages/NoPage';
import SignUp from './pages/signUp';
import Login from './pages/Login';
import Profile from './pages/Profile';
import CreatorProfile from './pages/CreatorProfile';
import { UserProvider, useUser } from './components/UserContext'; // Import the useUser hook
import ProtectedComp from './components/ProtectedComp';
import { CommentsContext } from './contexts/CommentsContext';

const PrivateRoute = ({ element, ...rest }) => {
  const { user } = useUser();}

const App = () => {
  console.log("okk: ", useContext(CommentsContext))
  let isLoggedIn = localStorage.getItem("isLoggedIn");
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ProtectedComp> <Home /></ProtectedComp>} />
          <Route path='/signUp' element={<SignUp />} />
          <Route path='/login' element={<Login />} />
          <Route path='/profile' element={isLoggedIn ? <Profile /> : <Navigate to="/login"/>} />
          <Route path='/creatorProfile/:id' element={isLoggedIn ? <CreatorProfile /> : <Navigate to="/login"/>} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App