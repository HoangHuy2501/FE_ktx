"use client"
import { useEffect, useState } from "react"
import { User, CreditCard, History, Save,Check, CheckCircle } from "lucide-react"
import { getUserId, getUserName } from "../../util/authenticationUtils"
import {InfoUser,UpdateUser} from "../../services/UserServices"
import {HistoryBooking,CancelBooking} from "../../services/BookingServices"
import fmt from "../../util/fmtDate"
import { toast } from "sonner";
const userid=getUserId()
const username=getUserName()
function Profile() {
  const [activeTab, setActiveTab] = useState("info")
  const [info, setInfo] = useState([])
  useEffect(() => {
    const fetchInfo = async () => {
      try {
        const response = await InfoUser(userid);
        setInfo(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchInfo();
  }, [userid])
  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      {/* Profile Header */}
      <div className="bg-blue-600 text-white pt-12 pb-24">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center text-3xl font-bold">
              SV
            </div>
            <div>
              <h1 className="text-2xl font-bold">{username}</h1>
              <p className="text-blue-100">Mã SV: {info?.mssv || "chưa cập nhập"} | Ký túc xá {info?.bookings?.[0]?.room?.suite?.type || "chưa cập nhật"} - Phòng {info?.bookings?.[0]?.room?.numberroom || "chưa cập nhật"}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-12">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="flex border-b overflow-x-auto">
            <button
              onClick={() => setActiveTab("info")}
              className={`flex items-center gap-2 px-6 py-4 font-medium whitespace-nowrap ${
                activeTab === "info" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <User size={18} /> Thông tin cá nhân
            </button>
            <button
              onClick={() => setActiveTab("bookings")}
              className={`flex items-center gap-2 px-6 py-4 font-medium whitespace-nowrap ${
                activeTab === "bookings" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <History size={18} /> Đặt phòng & Lịch sử
            </button>
            <button
              onClick={() => setActiveTab("payments")}
              className={`flex items-center gap-2 px-6 py-4 font-medium whitespace-nowrap ${
                activeTab === "payments" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <CreditCard size={18} /> Thanh toán tiền thuê
            </button>
            {/* <button
              onClick={() => setActiveTab("reviews")}
              className={`flex items-center gap-2 px-6 py-4 font-medium whitespace-nowrap ${
                activeTab === "reviews" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <Star size={18} /> Đánh giá của tôi
            </button> */}
          </div>

          <div className="p-6">
            {activeTab === "info" && <ProfileInfo info={info} />}
            {activeTab === "bookings" && <BookingHistory />}
            {activeTab === "payments" && <PaymentHistory />}
          </div>
        </div>
      </div>
    </div>
  )
}

function ProfileInfo({info}) {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    mssv: "",
    sex: null,
  })
  useEffect(() => {
  if (info) {
    setData({
      name: info.name || "",
      email: info.email || "",
      phone: info.phone || "",
      mssv: info.mssv || "",
      sex: info.sex !== undefined ? info.sex : null,
    });
  }
}, [info]);
  const handleChange = (e) => {
  let { name, value } = e.target;

  if (name === "sex") {
    if (value === "true") value = true;
    else if (value === "false") value = false;
    else value = null; // other
  }

  setData((prev) => ({ ...prev, [name]: value }));
};

const handleUpdate=async(e)=>{
  e.preventDefault();
  try {
    if(data.sex===null){
      return toast.error("Chon gioi tinh");
    }
    const res=await UpdateUser(userid,data);
    if(res.success){
      toast.success("Cap nhat thanh cong");
    }else{
      toast.error(res.message);
    }
  } catch (error) {
    toast.error("Cap nhat that bai");
    console.log(error);
  }
}
  return (
    <div className="max-w-2xl">
      <h3 className="text-lg font-bold mb-6">Cập nhật thông tin cá nhân</h3>
      <form onSubmit={handleUpdate} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Họ và tên</label>
            <input
              type="text"
              onChange={handleChange}
              name="name"
              required
              value={data.name}
              className="w-full border border-gray-300 rounded-md p-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Mã Sinh Viên</label>
            <input
              type="text"
              onChange={handleChange}
              required
              name="mssv"
              value={data.mssv || "không có dữ liệu"}
              className="w-full border border-gray-300 rounded-md p-2 text-sm bg-gray-50 text-gray-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              onChange={handleChange}
              required
              name="email"
              value={data.email}
              className="w-full border border-gray-300 rounded-md p-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Số điện thoại</label>
            <input
              type="number"
              onChange={handleChange}
              name="phone"
              required
              value={data.phone || "không có dữ liệu"}
              className="w-full border border-gray-300 rounded-md p-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Giới tính</label>
          <select name="sex" value={data.sex === true? "true": data.sex === false? "false": "other"} onChange={handleChange} className="w-full border border-gray-300 rounded-md p-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none">
            <option value="true">Nam</option>
            <option value="false">Nữ</option>
            <option value="other">không có dữ liệu</option>
          </select>
        </div>

        <div className="pt-4">
          <button type="submit" className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 font-medium shadow-sm">
            <Save size={18} /> Lưu thay đổi
          </button>
        </div>
      </form>
    </div>
  )
}

function BookingHistory() {
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await HistoryBooking(userid);
        // console.log("API Response:", response);
        // Sắp xếp theo ngày tạo, mới nhất trước
      const sortedBookings = response.data.sort((a, b) => new Date(b.createat) - new Date(a.createat));
        setBookings(sortedBookings);
      } catch (error) {
        console.log(error);
      }
    }
    fetchBookings();
  }, [userid])
  console.log("id", bookings);
  
  // trả phòng
  const handleRetrunRoom = async (bookingId) => {
    try {
      const res=await CancelBooking(bookingId);
      if(res.success){
        toast.success("Trả phòng thanh cong");
        setTimeout(() => {
          window.location.reload();
        },2000)
      }else{
        toast.error(res.message);
      }
    } catch (error) {
      toast.error("Trả phòng that bai");
      console.log(error);
      
    }
  }
  return (
    <div>
      <h3 className="text-lg font-bold mb-4">Lịch sử đặt phòng</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 border-b">
            <tr>
              <th className="px-4 py-3">Mã Đặt Phòng</th>
              <th className="px-4 py-3">Phòng</th>
              <th className="px-4 py-3">Thời gian</th>
              <th className="px-4 py-3">Ngày đặt</th>
              <th className="px-4 py-3">Trạng thái</th>
              <th className="px-4 py-3">Hành động</th>
            </tr>
          </thead>
          <tbody>
          {bookings.map((booking, index) => (
            <tr key={booking.id} className={`border-b hover:bg-gray-50 ${booking.status===true ? "" : "opacity-60"}`}>
              <td className="px-4 py-4 font-medium">{booking.id}</td>
              <td className="px-4 py-4">
                <div>{booking.room?.suite?.type} - Phòng {booking.room?.numberroom}</div>
                <div className="text-xs text-gray-500">{booking.room?.numberpeople} Giường</div>
              </td>
              <td className="px-4 py-4"> Tháng {booking.bookingmonth}</td>
              <td className="px-4 py-4">{fmt(booking.createat).date}</td>
              <td className="px-4 py-4">
              {booking.status === true ?
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Đã duyệt</span>
              :
                <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">Đã trả phòng</span>
             }
              </td>
              <td className="px-4 py-4">
              {booking.status === true ?
                <button
                onClick={() => handleRetrunRoom(booking.id)} className="text-red-600 hover:underline">Trả phòng</button> 
                :
                <span>
                <CheckCircle size={24} color="green" className="ml-7"/> 
                </span>
              }
                
              </td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

function PaymentHistory() {
  return (
    <div>
      <h3 className="text-lg font-bold mb-4">Thanh toán tiền thuê & Hóa đơn</h3>

      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6 flex items-start justify-between">
        <div>
          <h4 className="font-bold text-yellow-800 mb-1">Hóa đơn tháng 11/2025</h4>
          <p className="text-sm text-yellow-700 mb-2">Tiền phòng + Tiền điện nước</p>
          <div className="text-2xl font-bold text-red-600">750.000đ</div>
          <p className="text-xs text-gray-500 mt-1">Hạn thanh toán: 05/12/2025</p>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 font-bold shadow-sm">
          Thanh toán ngay
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 border-b">
            <tr>
              <th className="px-4 py-3">Tháng</th>
              <th className="px-4 py-3">Dịch vụ</th>
              <th className="px-4 py-3">Số tiền</th>
              <th className="px-4 py-3">Ngày thanh toán</th>
              <th className="px-4 py-3">Trạng thái</th>
              <th className="px-4 py-3">Hóa đơn</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b hover:bg-gray-50">
              <td className="px-4 py-4 font-medium">Tháng 10/2025</td>
              <td className="px-4 py-4">Tiền phòng + Điện nước</td>
              <td className="px-4 py-4 font-bold text-gray-800">720.000đ</td>
              <td className="px-4 py-4">03/11/2025</td>
              <td className="px-4 py-4">
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Đã thanh toán</span>
              </td>
              <td className="px-4 py-4">
                <button className="text-blue-600 hover:underline">Xem</button>
              </td>
            </tr>
            <tr className="border-b hover:bg-gray-50">
              <td className="px-4 py-4 font-medium">Tháng 09/2025</td>
              <td className="px-4 py-4">Tiền phòng + Điện nước</td>
              <td className="px-4 py-4 font-bold text-gray-800">700.000đ</td>
              <td className="px-4 py-4">05/10/2025</td>
              <td className="px-4 py-4">
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Đã thanh toán</span>
              </td>
              <td className="px-4 py-4">
                <button className="text-blue-600 hover:underline">Xem</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}


export default Profile