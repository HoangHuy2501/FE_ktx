"use client";
import { NavLink } from "react-router-dom";
import { Menu } from "lucide-react";

function Header() {
  // Header chính cho các trang public (như hình 1, 5, 6, 7)
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <NavLink href="/" className="flex items-center gap-2">
          <div className="font-bold text-2xl text-blue-600">DormSpace</div>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 font-medium text-gray-600">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `hover:text-blue-600 ${isActive ? "text-blue-600" : ""}`
            }
          >
            Danh Sách Ktx
          </NavLink>

          <div className="h-4 w-[1px] bg-gray-300"></div>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `hover:text-blue-600 ${isActive ? "text-blue-600" : ""}`
            }
          >
            Giới Thiệu
          </NavLink>

          <div className="h-4 w-[1px] bg-gray-300"></div>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `hover:text-blue-600 ${isActive ? "text-blue-600" : ""}`
            }
          >
            Liên Hệ
          </NavLink>

          <div className="h-4 w-[1px] bg-gray-300"></div>

          {/* <NavLink
            to="/news"
            className={({ isActive }) =>
              `hover:text-blue-600 ${isActive ? "text-blue-600" : ""}`
            }
          >
            Bài viết
          </NavLink> */}
        </nav>
        {/* Auth Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <NavLink
            to="/profile"
            className="text-blue-600 hover:text-blue-800 font-bold text-sm mr-2"
          >
            Chào, Sinh Viên A
          </NavLink>
          <div className="h-6 w-[1px] bg-gray-300"></div>
          <NavLink
            to="/login"
            className="text-gray-600 hover:text-blue-600 font-medium text-sm"
          >
            Đăng Xuất
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2">
          <Menu className="w-6 h-6 text-gray-600" />
        </button>
      </div>
    </header>
  );
}
export default Header;
