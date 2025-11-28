"use client"
import {Link, useNavigate} from "react-router-dom"
import {LoginUser} from "../../services/AuthServices"
import { toast } from "sonner";
import {saveUserDataFromToken} from "../../util/authenticationUtils"
import { useState } from "react"

function Login() {
  const navigator=useNavigate()
  const [data,setData]=useState({
    email:"",
    password:""
  })
  const handleChange=(e)=>{
    setData({
      ...data,
      [e.target.name]:e.target.value
    })
  }
  const handleSubmit=async(e)=>{
    e.preventDefault(); // ✨ bắt buộc phần nây
    try {
      const res=await LoginUser(data);
      await saveUserDataFromToken(res.data);
        if(res.data.role==="student"){
          navigator("/dashboard")
          toast.success("Login successfully");
        }
        else{
          // navigator("/admin")
        Arlert("admin")
        }
    } catch (error) {
      toast.error("Login failed");
      console.log(error);
    }
  }
  return (
    <div className="min-h-[calc(100vh-60px)] bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 font-sans ">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg border border-gray-400 shadow-sm relative">
        <div className="text-center">
          {/* Logo Placeholder */}
          <div className="mx-auto h-16 w-16 bg-white border-2 border-gray-400 relative mb-4">
            <div className="absolute inset-0 border border-gray-300 m-1 flex items-center justify-center">
              <div className="w-12 h-12 border border-gray-400 transform rotate-45"></div>
            </div>
          </div>
          <h2 className="mt-2 text-2xl font-bold text-gray-700">Đăng nhập vào DormSpace</h2>
          <p className="mt-2 text-sm text-gray-500">Truy cập vào hệ thống để đặt phòng ký túc xá</p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="space-y-4">
            <div>
              <label htmlFor="email-address" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                onChange={handleChange}
                className="appearance-none relative block w-full px-3 py-2 border border-gray-800 placeholder-gray-400 text-gray-900 rounded-sm focus:outline-none focus:ring-black focus:border-black sm:text-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,0.1)]"
                placeholder="Nhập Địa Chỉ Email"
              />
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Mật Khẩu
                </label>
                <a href="#" className="text-sm font-medium text-blue-600 hover:underline">
                  Quên mật khẩu ?
                </a>
              </div>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                onChange={handleChange}
                className="appearance-none relative block w-full px-3 py-2 border border-gray-800 placeholder-gray-400 text-gray-900 rounded-sm focus:outline-none focus:ring-black focus:border-black sm:text-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,0.1)]"
                placeholder="Nhập Mật Khẩu"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-bold rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none shadow-[2px_4px_4px_0px_rgba(0,0,0,0.25)]"
            >
              Đăng Nhập
            </button>
          </div>

          <div className="text-center text-sm">
            <span className="text-gray-600">Chưa Đăng Nhập? </span>
            <Link to="/register" className="font-medium text-blue-600 hover:underline decoration-blue-600">
              Đăng Ký Ngay
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login