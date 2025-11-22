"use client"
import {Link}from "react-router-dom"
import { Facebook, Instagram, Chrome } from "lucide-react"

function Footer() {
  return (
    <footer className="bg-gray-500 text-white pt-12 pb-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: Logo & Desc */}
          <div>
            <h3 className="font-bold text-xl mb-4 text-blue-200 underline decoration-blue-400">DormSpace</h3>
            <p className="text-gray-200 text-sm leading-relaxed">
              Hệ thống quản lý ký túc xá chính thức của Đại học X, hỗ trợ sinh viên đăng ký và quản lý chỗ ở thuận tiện
              nhất.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 border-b border-gray-400 inline-block pb-1">Liên Kết Nhanh</h3>
            <ul className="space-y-2 text-gray-200 text-sm">
              <li>
                <Link href="/" className="hover:text-white">
                  Tìm Ký Túc Xá
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white">
                  Về Chúng Tôi
                </Link>
              </li>
              <li>
                <Link href="/news" className="hover:text-white">
                  Tin Tức & Sự Kiện
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4 border-b border-gray-400 inline-block pb-1">Liên Hệ</h3>
            <ul className="space-y-2 text-gray-200 text-sm">
              <li>Hotline: 1900 1234</li>
              <li>Email: contact@dormspace.vn</li>
              <li>Địa chỉ: Ngũ Hành Sơn, Đà Nẵng</li>
            </ul>
          </div>

          {/* Column 4: Social */}
          <div>
            <h3 className="font-bold text-lg mb-4 border-b border-gray-400 inline-block pb-1">Theo Dõi Chúng Tôi</h3>
            <div className="flex gap-4 mt-2">
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-pink-600 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-red-600 transition-colors">
                <Chrome size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-400 mt-10 pt-6 text-center text-sm text-gray-300">
          © 2025 DormSpace. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
export default Footer