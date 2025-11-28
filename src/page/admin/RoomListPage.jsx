// src/page/admin/RoomListPage.jsx
import { useEffect, useState } from "react";
import { fetchBuildings, fetchBuildingRooms } from "../../api/adminApi";

export default function RoomListPage() {
    const [buildings, setBuildings] = useState([]);
    const [rooms, setRooms] = useState([]);
    const [filter, setFilter] = useState("all");
    const [searchText, setSearchText] = useState("");
    const [loading, setLoading] = useState(true);

    // Mock data
    const mockBuildings = [
        { id: 1, name: "Tòa nhà A" },
        { id: 2, name: "Tòa nhà B" },
    ];

    const mockRooms = [
        { id: 1, name: "Phòng 101", buildingName: "Tòa nhà A", rented: true },
        { id: 2, name: "Phòng 102", buildingName: "Tòa nhà A", rented: false },
        { id: 3, name: "Phòng 201", buildingName: "Tòa nhà B", rented: false },
        { id: 4, name: "Phòng 202", buildingName: "Tòa nhà B", rented: true },
    ];

    useEffect(() => {
        loadAll();
    }, []);

    async function loadAll() {
        setLoading(true);
        try {
            const bl = await fetchBuildings();
            setBuildings(bl);
            if (bl.length) {
                const r = await fetchBuildingRooms(bl[0].id);
                setRooms(r);
            }
        } catch (e) {
            console.error(e);
            setBuildings(mockBuildings);
            setRooms(mockRooms);
        } finally {
            setLoading(false);
        }
    }

    const filtered = rooms.filter((r) => {
        const matchesFilter =
            filter === "all"
                ? true
                : filter === "available"
                    ? !r.rented
                    : r.rented;

        const matchesSearch =
            r.name.toLowerCase().includes(searchText.toLowerCase()) ||
            r.buildingName.toLowerCase().includes(searchText.toLowerCase());

        return matchesFilter && matchesSearch;
    });

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold mb-6 text-black">Quản lý phòng</h1>

            <div className="flex flex-col md:flex-row gap-3 md:gap-4 mb-6 items-center">
                <input
                    type="text"
                    placeholder="Tìm theo tên phòng hoặc tòa nhà..."
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    className="px-3 py-2 border rounded w-full md:w-1/2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />

                <select
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    className="px-3 py-2 border rounded w-full md:w-1/4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                    <option value="all">Tất cả</option>
                    <option value="available">Chưa thuê</option>
                    <option value="rented">Đã thuê</option>
                </select>
            </div>

            {loading ? (

                <div className="flex justify-center items-center h-screen">
                    <p className="text-gray-500">Đang tải dữ liệu phòng...</p>
                </div>
            ) : filtered.length === 0 ? (
                <p className="text-gray-500">Không tìm thấy phòng phù hợp.</p>
            ) : (
                <div className="grid md:grid-cols-2 gap-4">
                    {filtered.map((r) => (
                        <div
                            key={r.id}
                            className="p-4 bg-white rounded shadow flex justify-between items-center hover:shadow-md transition"
                        >
                            <div>
                                <div className="font-medium text-gray-800">{r.name}</div>
                                <div className="text-sm text-gray-500">{r.buildingName}</div>
                            </div>
                            <div
                                className={`px-3 py-1 rounded font-semibold text-sm ${r.rented
                                        ? "bg-red-200 text-red-700"
                                        : "bg-green-200 text-green-700"
                                    }`}
                            >
                                {r.rented ? "Đã thuê" : "Chưa thuê"}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
