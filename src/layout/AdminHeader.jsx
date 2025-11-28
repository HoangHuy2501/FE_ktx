// src/layout/AdminHeader.jsx
export default function AdminHeader() {
  return (
    <header className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div>
          <h2 className="text-lg font-semibold"></h2>
        </div>
        <div className="text-sm text-gray-600 justify-content-end">Xin chào, Admin</div>
      </div>
    </header>
  );
}
