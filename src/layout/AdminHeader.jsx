// src/layout/AdminHeader.jsx
import { removeAuthToken } from "../util/authenticationUtils.js";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
export default function AdminHeader() {
  const navigator = useNavigate();
  const handleLogout=async()=>{
    try {
      await removeAuthToken();
      toast.success("Đăng xuat thanh cong");
      navigator("/login")
    } catch (error) {
      toast.error("Đăng xuat that bai");
      console.log(error);
    }
  }
  return (
    <header className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-end">
        <div>
          <h2 className="text-lg font-semibold"></h2>
        </div>
        <div className="text-sm text-gray-600 justify-content-end p-2">Xin chào, Admin</div>
        <div>
          <button
            onClick={handleLogout}
            className="text-gray-600 hover:text-blue-600 font-medium text-sm"
          >
            Đăng Xuất
          </button>
        </div>
      </div>
    </header>
  );
}
