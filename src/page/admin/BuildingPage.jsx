// src/page/admin/BuildingPage.jsx
import { useEffect, useState } from "react";
import { fetchBuildings, fetchBuildingRooms, createBuilding } from "../../api/adminApi";

function BuildingCard({ b, onOpen }) {
  return (
    <div
      className="p-4 bg-white rounded shadow cursor-pointer hover:shadow-lg transition"
      onClick={() => onOpen(b)}
    >
      <h3 className="font-semibold text-gray-800">{b.name}</h3>
      <p className="text-sm text-gray-500">Tổng phòng: {b.totalRooms}</p>
    </div>
  );
}

export default function BuildingPage() {
  const [buildings, setBuildings] = useState([]);
  const [selected, setSelected] = useState(null);
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [creating, setCreating] = useState(false);
  const [newName, setNewName] = useState("");
  const [searchText, setSearchText] = useState("");

  // Mock data
  const mockBuildings = [
    { id: 1, name: "Tòa nhà A", totalRooms: 12 },
    { id: 2, name: "Tòa nhà B", totalRooms: 8 },
    { id: 3, name: "Tòa nhà C", totalRooms: 20 },
  ];

  const mockRooms = {
    1: [
      { id: 1, name: "Phòng 101", description: "VIP", rented: true },
      { id: 2, name: "Phòng 102", description: "Standard", rented: false },
    ],
    2: [
      { id: 3, name: "Phòng 201", description: "Suite", rented: false },
    ],
    3: [],
  };

  useEffect(() => {
    loadBuildings();
  }, []);

  async function loadBuildings() {
    setLoading(true);
    try {
      const data = await fetchBuildings();
      setBuildings(data);
    } catch (e) {
      console.error(e);
      setBuildings(mockBuildings);
    } finally {
      setLoading(false);
    }
  }

  async function openBuilding(b) {
    setSelected(b);
    try {
      const r = await fetchBuildingRooms(b.id);
      setRooms(r);
    } catch (e) {
      console.error(e);
      setRooms(mockRooms[b.id] || []);
    }
  }

  async function handleCreate() {
    if (!newName.trim()) return alert("Nhập tên tòa nhà");
    setCreating(true);
    try {
      await createBuilding({ name: newName });
      setNewName("");
      loadBuildings();
    } catch (e) {
      console.error(e);
      alert("Tạo thất bại");
    } finally {
      setCreating(false);
    }
  }

  // Filter theo search text
  const filteredBuildings = buildings.filter((b) =>
    b.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6 gap-3 md:gap-0">
        <h1 className="text-3xl font-bold text-black">Quản lý tòa nhà</h1>

        <div className="flex flex-col md:flex-row gap-2 md:gap-3">
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Tìm tòa nhà..."
            className="px-3 py-2 border rounded w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            placeholder="Tên tòa nhà mới"
            className="px-3 py-2 border rounded w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            onClick={handleCreate}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            {creating ? "Đang tạo..." : "Tạo"}
          </button>
        </div>
      </div>

      {loading ? (
      <div className="flex justify-center items-center h-screen">
        <p className="text-gray-500">Đang tải dữ liệu tòa nhà...</p>
      </div>
 
      ) : filteredBuildings.length === 0 ? (
        <p className="text-gray-500">Không tìm thấy tòa nhà phù hợp.</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-4">
          {filteredBuildings.map((b) => (
            <BuildingCard key={b.id} b={b} onOpen={openBuilding} />
          ))}
        </div>
      )}

      {/* Modal chi tiết phòng */}
      {selected && (
        <div className="fixed inset-0 bg-black/40 flex items-start justify-center p-6 z-50">
          <div className="bg-white w-full max-w-3xl rounded shadow-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-black">Phòng của {selected.name}</h3>
              <button
                className="text-red-500 font-bold text-lg"
                onClick={() => setSelected(null)}
              >
                ✕
              </button>
            </div>

            <div className="grid gap-3 max-h-[400px] overflow-y-auto">
              {rooms.length === 0 ? (
                <div className="text-gray-500">Không có phòng</div>
              ) : (
                rooms.map((r) => (
                  <div
                    key={r.id}
                    className="flex justify-between items-center p-3 border rounded hover:shadow-sm transition"
                  >
                    <div>
                      <div className="font-medium text-gray-800">{r.name}</div>
                      <div className="text-sm text-gray-500">{r.description || ""}</div>
                    </div>

                    <div
                      className={`px-3 py-1 rounded font-semibold text-sm ${
                        r.rented
                          ? "bg-red-200 text-red-700"
                          : "bg-green-200 text-green-700"
                      }`}
                    >
                      {r.rented ? "Đã thuê" : "Chưa thuê"}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
