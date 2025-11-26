"use client";
import { NavLink, useNavigate } from "react-router-dom";
import { Menu } from "lucide-react";
import {removeAuthToken, getUserRole, getUserName} from "../util/authenticationUtils";
import { toast } from "sonner";
import { useEffect } from "react";
function Header() {
  const navigator=useNavigate();
  const username=getUserName();
  useEffect(() => {
    const checkRole = async () => {
      try {
        const role = await getUserRole();
        console.log("role:",role);
        
        if(!role){
          navigator("/login")
        }
      } catch (error) {
        console.log(error);
        
      }
    }
    checkRole();
  },[navigator])
  // đăng xuất
  const handleLogout=async()=>{
    try {
      await removeAuthToken();
      toast.success("Đăng xuat thanh cong");
      navigator("/login")
    } catch (error) {
      toast.error("Đăng xuat that bai");
      console.log(error);
    }
  }
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
        </nav>
        {/* Auth Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <NavLink
            to="/profile"
            className="text-blue-600 hover:text-blue-800 font-bold text-sm mr-2"
          >
            Chào,<span className="capitalize ml-2">{username}</span> 
          </NavLink>
          <div className="h-6 w-[1px] bg-gray-300"></div>
          <button
            onClick={handleLogout}
            className="text-gray-600 hover:text-blue-600 font-medium text-sm"
          >
            Đăng Xuất
          </button>
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
