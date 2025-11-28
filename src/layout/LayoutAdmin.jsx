import { Outlet, NavLink } from "react-router-dom";
import AdminHeader from "./AdminHeader.jsx"; // import header

export default function LayoutAdmin() {
  const linkClasses = ({ isActive }) =>
    `block px-3 py-2 rounded ${
      isActive
        ? "bg-blue-100 text-blue-700 font-semibold"
        : "text-gray-700 hover:text-blue-500"
    }`;

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* SIDEBAR */}
      <aside className="w-64 bg-white shadow-lg p-4">
        <h2 className="text-xl text-black font-bold mb-6">Admin Panel</h2>

        <nav className="flex flex-col gap-2">
          <NavLink to="/admin" end className={linkClasses}>
            Dashboard
          </NavLink>
          <NavLink to="/admin/buildings" className={linkClasses}>
            Quản lí tòa nhà
          </NavLink>
          <NavLink to="/admin/rooms" className={linkClasses}>
            Quản lí phòng
          </NavLink>
          <NavLink to="/admin/users" className={linkClasses}>
            Quản lí người dùng
          </NavLink>
          <NavLink to="/admin/reviews" className={linkClasses}>
            Quản lí đánh giá
          </NavLink>
          <NavLink to="/admin/bookings" className={linkClasses}>
            Quản lí đơn đặt
          </NavLink>
          <NavLink to="/admin/reports" className={linkClasses}>
            Thống kê & báo cáo
          </NavLink>
          <NavLink to="/admin/payments" className={linkClasses}>
            Quản lí thanh toán
          </NavLink>
        </nav>
      </aside>

      {/* MAIN CONTENT */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <AdminHeader />

        {/* Page content */}
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
