// src/page/admin/PaymentsPage.jsx
import { useEffect, useState } from "react";
import { fetchPayments } from "../../api/adminApi";

export default function PaymentsPage() {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState("");
  const [statusFilter, setStatusFilter] = useState("Tất cả");

  // Mock data
  const mockPayments = [
    { id: 101, userName: "Nguyen Van A", date: "2025-11-20", amount: 1500000, status: "Đã thanh toán" },
    { id: 102, userName: "Tran Thi B", date: "2025-11-21", amount: 800000, status: "Chờ thanh toán" },
    { id: 103, userName: "Le Van C", date: "2025-11-22", amount: 1200000, status: "Đã hủy" },
  ];

  useEffect(() => {
    fetchPayments()
      .then((data) => setPayments(data))
      .catch((err) => {
        console.error(err);
        setPayments(mockPayments);
      })
      .finally(() => setLoading(false));

    // Nếu muốn chỉ test mock data:
    // setPayments(mockPayments); setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-gray-500">Đang tải dữ liệu thanh toán...</p>
      </div>
    );
  }

  // Lọc theo search text & status
  const filteredPayments = payments.filter((p) => {
    const matchesText =
      p.userName.toLowerCase().includes(searchText.toLowerCase()) ||
      String(p.id).includes(searchText);

    const matchesStatus =
      statusFilter === "Tất cả" ? true : p.status === statusFilter;

    return matchesText && matchesStatus;
  });

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-black">Quản lý thanh toán</h1>

      {/* Filter & Search */}
      <div className="flex flex-col md:flex-row md:items-center md:space-x-4 mb-6 space-y-3 md:space-y-0">
        <input
          type="text"
          placeholder="Tìm theo tên người dùng hoặc hóa đơn..."
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
          <option value="Đã thanh toán">Đã thanh toán</option>
          <option value="Chờ thanh toán">Chờ thanh toán</option>
          <option value="Đã hủy">Đã hủy</option>
        </select>
      </div>

      {/* Payment list */}
      {filteredPayments.length === 0 ? (
        <p className="text-gray-500">Không tìm thấy hóa đơn phù hợp.</p>
      ) : (
        <div className="space-y-4">
          {filteredPayments.map((p) => (
            <div
              key={p.id}
              className="p-4 bg-white rounded shadow flex justify-between items-center hover:shadow-md transition"
            >
              <div>
                <div className="font-medium text-gray-800">Hóa đơn #{p.id} — {p.userName}</div>
                <div className="text-sm text-gray-500">{new Date(p.date).toLocaleDateString()}</div>
              </div>
              <div className="text-right">
                <div className="font-semibold text-gray-900">{p.amount.toLocaleString()} đ</div>
                <div
                  className={`text-sm font-semibold px-2 py-1 rounded ${
                    p.status === "Đã thanh toán"
                      ? "bg-green-100 text-green-800"
                      : p.status === "Chờ thanh toán"
                      ? "bg-yellow-100 text-yellow-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {p.status}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
