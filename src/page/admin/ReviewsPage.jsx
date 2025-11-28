// src/page/admin/ReviewsPage.jsx
import { useEffect, useState } from "react";
import { fetchReviews } from "../../api/adminApi";

export default function ReviewsPage() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState("");
  const [minRating, setMinRating] = useState(0);

  // Mock data
  const mockReviews = [
    { id: 1, userName: "Nguyen Van A", createdAt: "2025-11-20T10:30:00", content: "Phòng sạch sẽ, thoải mái!", rating: 5 },
    { id: 2, userName: "Tran Thi B", createdAt: "2025-11-21T14:20:00", content: "Dịch vụ tốt nhưng hơi ồn.", rating: 4 },
    { id: 3, userName: "Le Van C", createdAt: "2025-11-22T09:15:00", content: "Không hài lòng về phòng.", rating: 2 },
  ];

  useEffect(() => {
    fetchReviews()
      .then((data) => setReviews(data))
      .catch((err) => {
        console.error(err);
        setReviews(mockReviews);
      })
      .finally(() => setLoading(false));

    // Nếu muốn test nhanh chỉ dùng mock data:
    // setReviews(mockReviews); setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-gray-500">Đang tải đánh giá...</p>
      </div>
    );
  }

  // Filter theo search text & min rating
  const filteredReviews = reviews.filter((r) => {
    const matchesText = r.userName.toLowerCase().includes(searchText.toLowerCase()) || r.content.toLowerCase().includes(searchText.toLowerCase());
    const matchesRating = r.rating >= minRating;
    return matchesText && matchesRating;
  });

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-black">Quản lý đánh giá</h1>

      {/* Filter & Search */}
      <div className="flex flex-col md:flex-row md:items-center md:space-x-4 mb-6 space-y-3 md:space-y-0">
        <input
          type="text"
          placeholder="Tìm theo tên người dùng hoặc nội dung..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="p-2 rounded border w-full md:w-1/2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <select
          value={minRating}
          onChange={(e) => setMinRating(Number(e.target.value))}
          className="p-2 rounded border w-full md:w-1/4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value={0}>Tất cả rating</option>
          <option value={1}>1 sao trở lên</option>
          <option value={2}>2 sao trở lên</option>
          <option value={3}>3 sao trở lên</option>
          <option value={4}>4 sao trở lên</option>
          <option value={5}>5 sao</option>
        </select>
      </div>

      {/* Review list */}
      {filteredReviews.length === 0 ? (
        <p className="text-gray-500">Không tìm thấy đánh giá phù hợp.</p>
      ) : (
        <div className="space-y-4">
          {filteredReviews.map((r) => (
            <div key={r.id} className="p-4 bg-white rounded shadow hover:shadow-md transition">
              <div className="flex justify-between items-center">
                <div className="font-medium text-gray-800">{r.userName}</div>
                <div className="text-sm text-gray-500">{new Date(r.createdAt).toLocaleString()}</div>
              </div>
              <p className="mt-2 text-gray-700">{r.content}</p>
              <div className="mt-2 text-sm font-semibold text-black">
                Rating: <span className={`px-2 py-1 rounded ${r.rating >= 4 ? "bg-green-100 text-green-800" : r.rating >= 3 ? "bg-yellow-100 text-yellow-800" : "bg-red-100 text-red-800"}`}>{r.rating}/5</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
