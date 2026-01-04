import { useState } from 'react';
import './assets/css/style.css';
import Main from './components/main.jsx';
import Register from './components/Register.jsx';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';
import Login from './components/Login.jsx';
import AuthProvider from './AuthProvider.jsx';



function App() {
  

  return (
    <>
    <AuthProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
    </>
  )
}

export default App
