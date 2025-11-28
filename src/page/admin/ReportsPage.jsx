// src/page/admin/ReportsPage.jsx
import { useEffect, useState } from "react";
import { fetchReports } from "../../api/adminApi";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

export default function ReportsPage() {
  const [reports, setReports] = useState(null);
  const [loading, setLoading] = useState(true);

  // Mock data
  const mockReports = {
    bookings: 124,
    users: 58,
    revenue: 10500,
    recentActivities: [
      { id: 1, user: "Nguyen Van A", action: "Đặt chỗ", date: "2025-11-25" },
      { id: 2, user: "Tran Thi B", action: "Hủy chỗ", date: "2025-11-24" },
      { id: 3, user: "Le Van C", action: "Đặt chỗ", date: "2025-11-23" },
    ],
    revenueHistory: [
      { date: "20/11", revenue: 1200 },
      { date: "21/11", revenue: 1500 },
      { date: "22/11", revenue: 1800 },
      { date: "23/11", revenue: 2000 },
      { date: "24/11", revenue: 1500 },
      { date: "25/11", revenue: 1500 },
    ],
  };

  useEffect(() => {
    fetchReports()
      .then((data) => setReports(data))
      .catch((err) => {
        console.error(err);
        setReports(mockReports);
      })
      .finally(() => setLoading(false));

    // Nếu muốn chỉ dùng mock data tạm thời:
    // setReports(mockReports); setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-gray-500">Đang tải dữ liệu...</p>
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-black">Thống kê & Báo cáo</h1>

      {/* Cards hiển thị số liệu nhanh */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white p-4 rounded shadow">
          <p className="text-gray-500">Tổng đặt chỗ</p>
          <p className="text-2xl font-bold text-black">{reports.bookings}</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <p className="text-gray-500">Tổng người dùng</p>
          <p className="text-2xl font-bold text-black">{reports.users}</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <p className="text-gray-500">Doanh thu</p>
          <p className="text-2xl font-bold text-black">{reports.revenue.toLocaleString()} ₫</p>
        </div>
      </div>

      {/* Biểu đồ doanh thu */}
      <div className="bg-white p-4 rounded shadow mb-6">
        <p className="text-gray-600 mb-2">Doanh thu theo ngày</p>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={reports.revenueHistory}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="revenue" fill="#4F46E5" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Bảng recent activities */}
      <div className="bg-white p-4 rounded shadow">
        <p className="text-gray-600 mb-2">Hoạt động gần đây</p>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="border-b p-2">ID</th>
              <th className="border-b p-2">Người dùng</th>
              <th className="border-b p-2">Hành động</th>
              <th className="border-b p-2">Ngày</th>
            </tr>
          </thead>
          <tbody>
            {reports.recentActivities.map((act) => (
              <tr key={act.id} className="hover:bg-gray-50">
                <td className="border-b p-2">{act.id}</td>
                <td className="border-b p-2">{act.user}</td>
                <td className="border-b p-2">{act.action}</td>
                <td className="border-b p-2">{act.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
