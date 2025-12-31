import { useState } from 'react';
import './assets/css/style.css';
import Main from './components/main.jsx';
import Register from './components/Register.jsx';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';
import Login from './components/Login.jsx';



function App() {
  

  return (
    <>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
