import { useState } from 'react'
import Dashboard from './page/customer/dashboard.jsx'
import About from './page/customer/about.jsx'
import Contact from './page/customer/contact.jsx'
import Profile from './page/customer/profile.jsx'
import Login from './page/auth/Login.jsx'
import Register from './page/auth/Register.jsx'
import LayoutCustomer from './layout/LayoutCustomer.jsx'
import LayoutAuth from './layout/LayoutAuth.jsx'
import {Routes, Route} from 'react-router-dom'

import './App.css'

function App() {

  return (
<div>
  <Routes>
    <Route path='/' element={<LayoutAuth />}>
    <Route path="/register" element={<Register />} />
    <Route path="/login" element={<Login />} />
    </Route>
    <Route path="/" element={<LayoutCustomer />}>
      <Route index element={<Dashboard />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/profile" element={<Profile />} />
      
    </Route>
  </Routes>
</div>
  )
}

export default App
