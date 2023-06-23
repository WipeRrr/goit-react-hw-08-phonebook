// import { useAuth } from 'hooks';
import Home from 'pages/Home';
import { AppBar } from './AppBar/AppBar';
import { Route, Routes } from 'react-router-dom';
import Register from 'pages/Register';
import Login from 'pages/Login';
import Contacts from 'pages/Contacts';
import { refreshUser } from 'Redux/auth/operations';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

export function App() {
  const dispatch = useDispatch();
  // const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      <AppBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/contacts" element={<Contacts />}></Route>
      </Routes>
    </>
  );
}
