"use client"
import { useState } from "react"
import { MapPin, ArrowLeft } from "lucide-react"
import { toast } from "sonner"

const BUILDINGS = [
  {
    id: 1,
    name: "Tòa nhà A",
    description: "Khu dành cho nam, gần sân vận động",
    image: "/placeholder.svg?height=300&width=400&text=Tòa+nhà+A",
  },
  {
    id: 2,
    name: "Tòa nhà B",
    description: "Khu dành cho nữ, gần thư viện",
    image: "/placeholder.svg?height=300&width=400&text=Tòa+nhà+B",
  },
  {
    id: 3,
    name: "Tòa nhà C",
    description: "Khu dịch vụ và phòng chất lượng cao",
    image: "/placeholder.svg?height=300&width=400&text=Tòa+nhà+C",
  },
  {
    id: 4,
    name: "Tòa nhà D",
    description: "Khu mới xây dựng, đầy đủ tiện nghi",
    image: "/placeholder.svg?height=300&width=400&text=Tòa+nhà+D",
  },
]

const ROOMS_DATA = [
  { id: 101, buildingId: 1, name: "Phòng 101", type: "4 Giường", price: "500.000đ", status: "Còn trống" },
  { id: 102, buildingId: 1, name: "Phòng 102", type: "6 Giường", price: "400.000đ", status: "Đã đầy" },
  { id: 103, buildingId: 1, name: "Phòng 103", type: "8 Giường", price: "300.000đ", status: "Còn trống" },
  { id: 201, buildingId: 2, name: "Phòng 201", type: "4 Giường", price: "500.000đ", status: "Còn trống" },
  { id: 202, buildingId: 2, name: "Phòng 202", type: "6 Giường", price: "400.000đ", status: "Còn trống" },
  { id: 301, buildingId: 3, name: "Phòng 301", type: "2 Giường", price: "1.500.000đ", status: "Còn trống" },
]

function Dashboard() {
  const [selectedBuilding, setSelectedBuilding] = useState(null)

  const handleBuildingClick = (building) => {
    setSelectedBuilding(building)
  }

  const handleBackToBuildings = () => {
    setSelectedBuilding(null)
  }

  const handleBooking = (room) => {
    // Giả lập quá trình xử lý đặt phòng
    const isSuccess = Math.random() > 0.3 // 70% cơ hội thành công để demo cả 2 trường hợp

    if (isSuccess) {
      toast.success(`Đặt phòng ${room.name} thành công!`, {
        description: "Vui lòng kiểm tra email để xác nhận thông tin.",
        duration: 4000,
      })
    } else {
      toast.error(`Đặt phòng ${room.name} thất bại!`, {
        description: "Đã có lỗi xảy ra hoặc phòng vừa được đặt bởi người khác.",
        duration: 4000,
      })
    }
  }

  const currentRooms = selectedBuilding ? ROOMS_DATA.filter((room) => room.buildingId === selectedBuilding.id) : []

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Banner */}
      <div className="bg-blue-700 text-white py-12 text-center">
        <div className="text-sm text-blue-200 mb-2">Trang chủ &gt; Ký túc xá</div>
        <h1 className="text-4xl font-bold mb-2">Ký túc xá Đại học X</h1>
        <p className="text-blue-100">Hệ thống quản lý lưu trú dành riêng cho sinh viên trường</p>
      </div>

      <div className="container mx-auto px-4 py-8">

        {!selectedBuilding ? (
          <div>
            <h2 className="text-2xl font-bold mb-6 text-gray-800 border-l-4 border-blue-600 pl-3">Danh sách Tòa nhà</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {BUILDINGS.map((building) => (
                <div
                  key={building.id}
                  onClick={() => handleBuildingClick(building)}
                  className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all cursor-pointer border border-gray-200 overflow-hidden group"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={building.image || "/placeholder.svg"}
                      alt={building.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-bold text-blue-700 mb-2">{building.name}</h3>
                    <p className="text-gray-600 text-sm">{building.description}</p>
                    <div className="mt-4 text-right">
                      <span className="text-blue-600 text-sm font-medium hover:underline">
                        Xem danh sách phòng &rarr;
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Left Sidebar - Search & Filter (Simplified) */}
            <div className="lg:col-span-1 space-y-6">
              <button
                onClick={handleBackToBuildings}
                className="flex items-center text-blue-600 font-medium mb-4 hover:underline"
              >
                <ArrowLeft size={16} className="mr-1" /> Quay lại danh sách tòa
              </button>

              <div className="bg-white p-6 rounded-lg border border-gray-300 shadow-sm">
                <h3 className="font-bold text-lg mb-4 border-b pb-2">Tìm Kiếm Và Lọc</h3>

                <div className="space-y-4">
                  {/* Search */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Tìm Kiếm</label>
                    <input
                      type="text"
                      placeholder="Số phòng..."
                      className="w-full border border-gray-300 rounded p-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                  </div>

                  {/* Price */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Mức Giá</label>
                    <select className="w-full border border-gray-300 rounded p-2 text-sm">
                      <option>Tất Cả Mức Giá</option>
                      <option>Dưới 500k</option>
                      <option>500k - 1tr</option>
                      <option>Trên 1tr</option>
                    </select>
                  </div>

                  {/* Type */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Loại phòng</label>
                    <select className="w-full border border-gray-300 rounded p-2 text-sm">
                      <option>Tất Cả Loại Phòng</option>
                      <option>4 Giường</option>
                      <option>6 Giường</option>
                      <option>8 Giường</option>
                    </select>
                  </div>

                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 shadow-sm transition-colors">
                    Áp Dụng Bộ Lọc
                  </button>
                </div>
              </div>
            </div>

            {/* Right Content - Room List */}
            <div className="lg:col-span-3">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Danh sách phòng - {selectedBuilding.name}</h2>
                <p className="text-gray-600">{selectedBuilding.description}</p>
              </div>

              <div className="flex justify-between items-center mb-4 bg-white p-3 rounded border border-gray-200">
                <span className="text-sm text-gray-600">Hiển thị {currentRooms.length} kết quả</span>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-700">Sắp xếp:</span>
                  <select className="border border-gray-300 rounded px-2 py-1 text-sm">
                    <option>Mặc Định</option>
                    <option>Giá thấp đến cao</option>
                    <option>Giá cao đến thấp</option>
                  </select>
                </div>
              </div>

              <div className="space-y-4">
                {currentRooms.map((room) => (
                  <div
                    key={room.id}
                    className="bg-white rounded-lg border border-gray-300 p-4 flex flex-col md:flex-row gap-4 shadow-sm hover:shadow-md transition-shadow"
                  >
                    {/* Image Placeholder */}
                    <div className="w-full md:w-1/3 h-40 bg-gray-100 rounded-md overflow-hidden border border-gray-200 relative">
                      <img
                        src="/placeholder.svg?height=200&width=300&text=Phòng"
                        alt={room.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">
                        {room.type}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start">
                          <h3 className="font-bold text-xl text-gray-800 mb-2">{room.name}</h3>
                          <span
                            className={`px-2 py-1 rounded text-xs font-medium ${room.status === "Còn trống" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}
                          >
                            {room.status}
                          </span>
                        </div>

                        <div className="flex items-start gap-1 text-gray-600 text-sm mb-3">
                          <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                          <span>
                            {selectedBuilding.name} - Tầng {Math.floor(room.id / 100)}
                          </span>
                        </div>
                        <p className="text-gray-500 text-sm">
                          Phòng tiêu chuẩn {room.type}, không gian thoáng mát, sạch sẽ.
                        </p>
                      </div>

                      <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                        <div className="text-red-500 font-bold text-lg">
                          Giá: {room.price} <span className="text-sm text-gray-500 font-normal">/ tháng</span>
                        </div>
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleBooking(room)}
                            disabled={room.status !== "Còn trống"}
                            className={`px-6 py-2 rounded text-sm font-bold shadow-sm flex items-center justify-center transition-colors ${
                              room.status === "Còn trống"
                                ? "bg-blue-600 text-white hover:bg-blue-700"
                                : "bg-gray-300 text-gray-500 cursor-not-allowed"
                            }`}
                          >
                            {room.status === "Còn trống" ? "Đặt phòng" : "Đã đầy"}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                {currentRooms.length === 0 && (
                  <div className="text-center py-12 text-gray-500">Chưa có dữ liệu phòng cho tòa nhà này.</div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Dashboard