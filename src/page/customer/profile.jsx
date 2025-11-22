"use client"
import { useState } from "react"
import { User, CreditCard, History, Star, Save } from "lucide-react"

function Profile() {
  const [activeTab, setActiveTab] = useState("info")

  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      {/* Profile Header */}
      <div className="bg-blue-600 text-white pt-12 pb-24">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center text-3xl font-bold">
              SV
            </div>
            <div>
              <h1 className="text-2xl font-bold">Nguyễn Văn A</h1>
              <p className="text-blue-100">Mã SV: 20230001 | Ký túc xá Tòa A - Phòng 302</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-12">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="flex border-b overflow-x-auto">
            <button
              onClick={() => setActiveTab("info")}
              className={`flex items-center gap-2 px-6 py-4 font-medium whitespace-nowrap ${
                activeTab === "info" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <User size={18} /> Thông tin cá nhân
            </button>
            <button
              onClick={() => setActiveTab("bookings")}
              className={`flex items-center gap-2 px-6 py-4 font-medium whitespace-nowrap ${
                activeTab === "bookings" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <History size={18} /> Đặt phòng & Lịch sử
            </button>
            <button
              onClick={() => setActiveTab("payments")}
              className={`flex items-center gap-2 px-6 py-4 font-medium whitespace-nowrap ${
                activeTab === "payments" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <CreditCard size={18} /> Thanh toán tiền thuê
            </button>
            {/* <button
              onClick={() => setActiveTab("reviews")}
              className={`flex items-center gap-2 px-6 py-4 font-medium whitespace-nowrap ${
                activeTab === "reviews" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <Star size={18} /> Đánh giá của tôi
            </button> */}
          </div>

          <div className="p-6">
            {activeTab === "info" && <ProfileInfo />}
            {activeTab === "bookings" && <BookingHistory />}
            {activeTab === "payments" && <PaymentHistory />}
          </div>
        </div>
      </div>
    </div>
  )
}

function ProfileInfo() {
  return (
    <div className="max-w-2xl">
      <h3 className="text-lg font-bold mb-6">Cập nhật thông tin cá nhân</h3>
      <form className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Họ và tên</label>
            <input
              type="text"
              defaultValue="Nguyễn Văn A"
              className="w-full border border-gray-300 rounded-md p-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Mã Sinh Viên</label>
            <input
              type="text"
              defaultValue="20230001"
              readOnly
              className="w-full border border-gray-300 rounded-md p-2 text-sm bg-gray-50 text-gray-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              defaultValue="student@university.edu.vn"
              className="w-full border border-gray-300 rounded-md p-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Số điện thoại</label>
            <input
              type="tel"
              defaultValue="0901234567"
              className="w-full border border-gray-300 rounded-md p-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Địa chỉ thường trú</label>
          <input
            type="text"
            defaultValue="123 Đường ABC, Quận XYZ, TP.HCM"
            className="w-full border border-gray-300 rounded-md p-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        <div className="pt-4">
          <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 font-medium shadow-sm">
            <Save size={18} /> Lưu thay đổi
          </button>
        </div>
      </form>
    </div>
  )
}

function BookingHistory() {
  return (
    <div>
      <h3 className="text-lg font-bold mb-4">Lịch sử đặt phòng</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 border-b">
            <tr>
              <th className="px-4 py-3">Mã Đặt Phòng</th>
              <th className="px-4 py-3">Phòng</th>
              <th className="px-4 py-3">Thời gian</th>
              <th className="px-4 py-3">Ngày đặt</th>
              <th className="px-4 py-3">Trạng thái</th>
              <th className="px-4 py-3">Hành động</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b hover:bg-gray-50">
              <td className="px-4 py-4 font-medium">#BK-2023-001</td>
              <td className="px-4 py-4">
                <div>Tòa A - Phòng 302</div>
                <div className="text-xs text-gray-500">4 Giường - Máy lạnh</div>
              </td>
              <td className="px-4 py-4">HK1 2023-2024</td>
              <td className="px-4 py-4">15/08/2023</td>
              <td className="px-4 py-4">
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Đã duyệt</span>
              </td>
              <td className="px-4 py-4">
                <button className="text-blue-600 hover:underline">Chi tiết</button>
                <button className="text-red-600 hover:underline">Trả phòng</button>
              </td>
            </tr>
            <tr className="border-b hover:bg-gray-50 opacity-60">
              <td className="px-4 py-4 font-medium">#BK-2022-089</td>
              <td className="px-4 py-4">
                <div>Tòa B - Phòng 105</div>
                <div className="text-xs text-gray-500">6 Giường - Quạt</div>
              </td>
              <td className="px-4 py-4">HK2 2022-2023</td>
              <td className="px-4 py-4">10/01/2023</td>
              <td className="px-4 py-4">
                <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">Đã trả phòng</span>
              </td>
              <td className="px-4 py-4">
                <button className="text-blue-600 hover:underline">Chi tiết</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

function PaymentHistory() {
  return (
    <div>
      <h3 className="text-lg font-bold mb-4">Thanh toán tiền thuê & Hóa đơn</h3>

      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6 flex items-start justify-between">
        <div>
          <h4 className="font-bold text-yellow-800 mb-1">Hóa đơn tháng 11/2025</h4>
          <p className="text-sm text-yellow-700 mb-2">Tiền phòng + Tiền điện nước</p>
          <div className="text-2xl font-bold text-red-600">750.000đ</div>
          <p className="text-xs text-gray-500 mt-1">Hạn thanh toán: 05/12/2025</p>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 font-bold shadow-sm">
          Thanh toán ngay
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 border-b">
            <tr>
              <th className="px-4 py-3">Tháng</th>
              <th className="px-4 py-3">Dịch vụ</th>
              <th className="px-4 py-3">Số tiền</th>
              <th className="px-4 py-3">Ngày thanh toán</th>
              <th className="px-4 py-3">Trạng thái</th>
              <th className="px-4 py-3">Hóa đơn</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b hover:bg-gray-50">
              <td className="px-4 py-4 font-medium">Tháng 10/2025</td>
              <td className="px-4 py-4">Tiền phòng + Điện nước</td>
              <td className="px-4 py-4 font-bold text-gray-800">720.000đ</td>
              <td className="px-4 py-4">03/11/2025</td>
              <td className="px-4 py-4">
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Đã thanh toán</span>
              </td>
              <td className="px-4 py-4">
                <button className="text-blue-600 hover:underline">Xem</button>
              </td>
            </tr>
            <tr className="border-b hover:bg-gray-50">
              <td className="px-4 py-4 font-medium">Tháng 09/2025</td>
              <td className="px-4 py-4">Tiền phòng + Điện nước</td>
              <td className="px-4 py-4 font-bold text-gray-800">700.000đ</td>
              <td className="px-4 py-4">05/10/2025</td>
              <td className="px-4 py-4">
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Đã thanh toán</span>
              </td>
              <td className="px-4 py-4">
                <button className="text-blue-600 hover:underline">Xem</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}


export default Profile