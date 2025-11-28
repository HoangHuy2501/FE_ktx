// src/page/admin/AdminDashboard.jsx
import { useEffect, useState } from "react";
import { fetchOverview } from "../../api/adminApi";
import { FaBuilding, FaDoorOpen, FaCalendarCheck } from "react-icons/fa";

export default function AdminDashboard() {
  const [overview, setOverview] = useState(null);
  const [loading, setLoading] = useState(true);

  // Mock data
  const mockOverview = {
    buildings: 12,
    availableRooms: 34,
    monthlyBookings: 56,
  };

  useEffect(() => {
    let mounted = true;
    fetchOverview()
      .then((data) => {
        if (mounted) setOverview(data);
      })
      .catch((e) => {
        console.error("fetch overview", e);
        setOverview(mockOverview); // fallback mock
      })
      .finally(() => mounted && setLoading(false));
    return () => (mounted = false);
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-gray-500">Đang tải dữ liệu...</p>
      </div>
    );

  const stats = [
    {
      title: "Tổng tòa nhà",
      value: overview?.buildings || 0,
      icon: <FaBuilding className="text-3xl text-blue-500" />,
      bg: "bg-blue-50",
    },
    {
      title: "Phòng trống",
      value: overview?.availableRooms || 0,
      icon: <FaDoorOpen className="text-3xl text-green-500" />,
      bg: "bg-green-50",
    },
    {
      title: "Đơn đặt trong tháng",
      value: overview?.monthlyBookings || 0,
      icon: <FaCalendarCheck className="text-3xl text-yellow-500" />,
      bg: "bg-yellow-50",
    },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-black">Tổng quan</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((s, idx) => (
          <div
            key={idx}
            className={`flex items-center p-6 rounded-lg shadow hover:shadow-lg transition ${s.bg}`}
          >
            <div className="mr-4">{s.icon}</div>
            <div>
              <p className="text-gray-500 text-sm">{s.title}</p>
              <p className="text-2xl font-bold text-black">{s.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
