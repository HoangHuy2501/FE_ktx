// src/page/admin/UsersPage.jsx
import { useEffect, useState } from "react";
import { fetchUsers } from "../../api/adminApi";

export default function UsersPage() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchText, setSearchText] = useState("");
    const [roleFilter, setRoleFilter] = useState("all");

    // Mock data
    const mockUsers = [
        { id: 1, name: "Nguyen Van A", email: "a@example.com", role: "admin" },
        { id: 2, name: "Tran Thi B", email: "b@example.com", role: "user" },
        { id: 3, name: "Le Van C", email: "c@example.com", role: "user" },
    ];

    useEffect(() => {
        fetchUsers()
            .then((data) => setUsers(data))
            .catch((err) => {
                console.error(err);
                setUsers(mockUsers);
            })
            .finally(() => setLoading(false));

        // Nếu muốn test nhanh: setUsers(mockUsers); setLoading(false);
    }, []);

    const filteredUsers = users.filter((u) => {
        const matchesSearch =
            u.name.toLowerCase().includes(searchText.toLowerCase()) ||
            u.email.toLowerCase().includes(searchText.toLowerCase());

        const matchesRole = roleFilter === "all" ? true : u.role === roleFilter;

        return matchesSearch && matchesRole;
    });

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold mb-6 text-black">Quản lý người dùng</h1>

            {/* Search & Filter */}
            <div className="flex flex-col md:flex-row gap-3 md:gap-4 mb-6 items-center">
                <input
                    type="text"
                    placeholder="Tìm theo tên hoặc email..."
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    className="px-3 py-2 border rounded w-full md:w-1/2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />

                <select
                    value={roleFilter}
                    onChange={(e) => setRoleFilter(e.target.value)}
                    className="px-3 py-2 border rounded w-full md:w-1/4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                    <option value="all">Tất cả role</option>
                    <option value="admin">Admin</option>
                    <option value="user">User</option>
                </select>
            </div>

            {loading ? (

                <div className="flex justify-center items-center h-screen">
                    <p className="text-gray-500">Đang tải dữ liệu người dùng...</p>
                </div>
            ) : filteredUsers.length === 0 ? (
                <p className="text-gray-500">Không tìm thấy người dùng phù hợp.</p>
            ) : (
                <div className="grid md:grid-cols-2 gap-4">
                    {filteredUsers.map((u) => (
                        <div
                            key={u.id}
                            className="p-4 bg-white rounded shadow flex justify-between items-center hover:shadow-md transition"
                        >
                            <div>
                                <div className="font-medium text-gray-800">{u.name}</div>
                                <div className="text-sm text-gray-500">{u.email}</div>
                            </div>
                            <div
                                className={`text-sm font-semibold px-2 py-1 rounded ${u.role === "admin"
                                        ? "bg-blue-100 text-blue-800"
                                        : "bg-green-100 text-green-800"
                                    }`}
                            >
                                {u.role || "user"}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
