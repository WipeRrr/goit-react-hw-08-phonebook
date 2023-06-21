// import ContactForm from './ContactForm';
// import ContactList from './ContactList';
// import Filter from './Filter';
import Home from "pages/Home";
import { AppBar } from "./AppBar/AppBar";
import { Route, Routes } from 'react-router-dom';
import Register from "pages/Register";
import Login from "pages/Login";
import Contacts from 'pages/Contacts';


export function App() {
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
