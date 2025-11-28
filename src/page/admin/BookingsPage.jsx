// src/page/admin/BookingsPage.jsx
import { useEffect, useState } from "react";
import { fetchBookings } from "../../api/adminApi";

export default function BookingsPage() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  const [searchText, setSearchText] = useState("");
  const [statusFilter, setStatusFilter] = useState("Tất cả");

  // Mock data dễ test UI
  const mockBookings = [
    {
      id: 1,
      roomName: "Phòng VIP 1",
      userName: "Nguyen Van A",
      from: "2025-11-20",
      to: "2025-11-22",
      status: "Đã xác nhận",
    },
    {
      id: 2,
      roomName: "Phòng Standard 2",
      userName: "Tran Thi B",
      from: "2025-11-21",
      to: "2025-11-23",
      status: "Chờ xác nhận",
    },
    {
      id: 3,
      roomName: "Phòng Suite 3",
      userName: "Le Van C",
      from: "2025-11-25",
      to: "2025-11-27",
      status: "Đã hủy",
    },
  ];

  useEffect(() => {
    fetchBookings()
      .then((data) => setBookings(data))
      .catch((err) => {
        console.error(err);
        setBookings(mockBookings);
      })
      .finally(() => setLoading(false));

    // Nếu muốn test nhanh chỉ dùng mock data:
    // setBookings(mockBookings); setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-gray-500">Đang tải đơn đặt phòng...</p>
      </div>
    );
  }

  // Lọc dữ liệu theo search text và status
  const filteredBookings = bookings.filter((b) => {
    const matchesText =
      b.userName.toLowerCase().includes(searchText.toLowerCase()) ||
      b.roomName.toLowerCase().includes(searchText.toLowerCase());

    const matchesStatus =
      statusFilter === "Tất cả" ? true : b.status === statusFilter;

    return matchesText && matchesStatus;
  });

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-black">Đơn đặt phòng</h1>

      {/* Filter & Search */}
      <div className="flex flex-col md:flex-row md:items-center md:space-x-4 mb-6 space-y-3 md:space-y-0">
        <input
          type="text"
          placeholder="Tìm theo tên người dùng hoặc phòng..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="p-2 rounded border w-full md:w-1/2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="p-2 rounded border w-full md:w-1/4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="Tất cả">Tất cả</option>
          <option value="Đã xác nhận">Đã xác nhận</option>
          <option value="Chờ xác nhận">Chờ xác nhận</option>
          <option value="Đã hủy">Đã hủy</option>
        </select>
      </div>

      {/* Booking list */}
      {filteredBookings.length === 0 ? (
        <p className="text-gray-500">Không tìm thấy đơn đặt phòng phù hợp.</p>
      ) : (
        <div className="space-y-4">
          {filteredBookings.map((b) => (
            <div
              key={b.id}
              className="p-4 bg-white rounded shadow flex justify-between items-center hover:shadow-md transition"
            >
              <div>
                <div className="font-medium text-gray-800">
                  {b.roomName} — {b.userName}
                </div>
                <div className="text-sm text-gray-500">
                  {new Date(b.from).toLocaleDateString()} →{" "}
                  {new Date(b.to).toLocaleDateString()}
                </div>
              </div>
              <div
                className={`text-sm font-semibold px-2 py-1 rounded ${
                  b.status === "Đã xác nhận"
                    ? "bg-green-100 text-green-800"
                    : b.status === "Chờ xác nhận"
                    ? "bg-yellow-100 text-yellow-800"
                    : "bg-red-100 text-red-800"
                }`}
              >
                {b.status}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
