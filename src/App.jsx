import { Routes, Route } from 'react-router-dom'

// AUTH
import Login from './page/auth/Login.jsx'
import Register from './page/auth/Register.jsx'
import LayoutAuth from './layout/LayoutAuth.jsx'

// CUSTOMER
import Dashboard from './page/customer/dashboard.jsx'
import About from './page/customer/about.jsx'
import Contact from './page/customer/contact.jsx'
import Profile from './page/customer/profile.jsx'
import LayoutCustomer from './layout/LayoutCustomer.jsx'

import './App.css'

// ADMIN
import LayoutAdmin from "./layout/LayoutAdmin.jsx";
import AdminDashboard from "./page/admin/AdminDashboard.jsx";
import BuildingPage from "./page/admin/BuildingPage.jsx";
import RoomListPage from "./page/admin/RoomListPage.jsx";
import UsersPage from "./page/admin/UsersPage.jsx";
import ReviewsPage from "./page/admin/ReviewsPage.jsx";
import BookingsPage from "./page/admin/BookingsPage.jsx";
import ReportsPage from "./page/admin/ReportsPage.jsx";
import PaymentsPage from "./page/admin/PaymentsPage.jsx";

function App() {
  return (
    <Routes>

      {/* AUTH */}
      <Route element={<LayoutAuth />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>

      {/* CUSTOMER */}
      <Route path="/*" element={<LayoutCustomer />}>
        <Route index element={<Dashboard />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="profile" element={<Profile />} />
      </Route>

      {/* ADMIN */}
      <Route path="/admin" element={<LayoutAdmin />}>
        <Route index element={<AdminDashboard />} />
        <Route path="buildings" element={<BuildingPage />} />
        <Route path="rooms" element={<RoomListPage />} />
        <Route path="users" element={<UsersPage />} />
        <Route path="reviews" element={<ReviewsPage />} />
        <Route path="bookings" element={<BookingsPage />} />
        <Route path="reports" element={<ReportsPage />} />
        <Route path="payments" element={<PaymentsPage />} />
      </Route>

    </Routes>
  )
}

export default App
