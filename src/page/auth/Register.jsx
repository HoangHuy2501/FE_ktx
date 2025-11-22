"use client"
import {Link} from "react-router-dom";

function Register() {
  return (
    <div className="min-h-[calc(100vh-60px)] bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg border border-gray-400 shadow-sm relative">
        <div className="text-center">
          <div className="mx-auto h-16 w-16 bg-white border-2 border-gray-400 relative mb-4">
            <div className="absolute inset-0 border border-gray-300 m-1 flex items-center justify-center">
              <div className="w-12 h-12 border border-gray-400 transform rotate-45"></div>
            </div>
          </div>
          <h2 className="mt-2 text-2xl font-bold text-gray-700">Đăng Ký Vào Tài Khoản Mới</h2>
          <p className="mt-2 text-sm text-gray-500">Tạo tài khoản để sử dụng đầy đủ tính năng của DormSpace</p>
        </div>

        <form className="mt-8 space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Họ và tên</label>
            <input
              type="text"
              className="appearance-none block w-full px-3 py-2 border border-gray-800 placeholder-gray-400 text-gray-900 rounded-sm focus:outline-none focus:ring-black focus:border-black sm:text-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,0.1)]"
              placeholder="Họ Và Tên Của Bạn"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              className="appearance-none block w-full px-3 py-2 border border-gray-800 placeholder-gray-400 text-gray-900 rounded-sm focus:outline-none focus:ring-black focus:border-black sm:text-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,0.1)]"
              placeholder="Email Của Bạn"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Số Điện Thoại</label>
            <input
              type="tel"
              className="appearance-none block w-full px-3 py-2 border border-gray-800 placeholder-gray-400 text-gray-900 rounded-sm focus:outline-none focus:ring-black focus:border-black sm:text-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,0.1)]"
              placeholder="Số Điện Thoại Của Bạn"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Mật Khẩu</label>
            <input
              type="password"
              className="appearance-none block w-full px-3 py-2 border border-gray-800 placeholder-gray-400 text-gray-900 rounded-sm focus:outline-none focus:ring-black focus:border-black sm:text-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,0.1)]"
              placeholder="Tạo Mật Khẩu (Ít nhất 8 ký tự)"
            />
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-bold rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none shadow-[2px_4px_4px_0px_rgba(0,0,0,0.25)]"
            >
              Đăng Ký
            </button>
          </div>

          <div className="text-center text-sm">
            <span className="text-gray-600">Đã Có Tài Khoản ? </span>
            <Link to="/login" className="font-medium text-blue-600 hover:underline decoration-blue-600">
              Đăng Nhập Ngay
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}
export default Register