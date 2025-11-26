"use client"
import { MapPin, Mail, Phone, Clock, Facebook, Instagram, Chrome } from "lucide-react"
import {getUserName,getUserPhone,getUserEmail,getUserId} from "../../util/authenticationUtils"
import {ListTopic,SendContact} from "../../services/ContactServices"
import { useEffect, useState } from "react"
import { toast } from "sonner";

function Contact() {
  const userid=getUserId()
  const username=getUserName()
  const phone=getUserPhone()
  const email=getUserEmail()
  const [topic,setTopic]=useState([])
  const [data,setData]=useState({
    topicid:"",
    content:""
  })
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await ListTopic();
        setTopic(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  },[])
  const handleChange=(e)=>{
    setData({
      ...data,
      [e.target.name]:e.target.value
    })
  }
  const handlesubmit=async(e)=>{
    e.preventDefault();
    try {
      const res=await SendContact(data,userid);
      if(res.success){
        toast.success("Gửi thành công");
      }else{
        toast.error(res.message);
      }
    } catch (error) {
      toast.error("Gửi thất bại");
      console.log(error);
    }
  }
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Banner */}
      <div className="bg-blue-700 text-white py-12 text-center">
        <div className="text-sm text-blue-200 mb-2">Trang chủ &gt; Liên hệ</div>
        <h1 className="text-4xl font-bold mb-2">Liên hệ với chúng tôi</h1>
        <p className="text-blue-100">Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn</p>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">
          {/* Left Sidebar - Info */}
          <div className="lg:w-1/3 space-y-8">
            <div className="bg-white p-8 rounded-lg border border-gray-300 shadow-sm h-full">
              <h2 className="text-xl font-bold mb-6 border-b pb-2">Thông tin liên hệ</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-gray-800 p-2 rounded-full text-white">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Địa Chỉ</h4>
                    <p className="text-gray-600 text-sm">123 Đường Nguyễn Văn Linh, Quận Hải Châu, TP. Đà Nẵng</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-gray-800 p-2 rounded-full text-white">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Email</h4>
                    <p className="text-gray-600 text-sm">
                      contact@dormspace.vn
                      <br />
                      support@dormspace.vn
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-gray-800 p-2 rounded-full text-white">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Điện Thoại</h4>
                    <p className="text-gray-600 text-sm">
                      0905 123 456
                      <br />
                      0236 3123 456
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-gray-800 p-2 rounded-full text-white">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Giờ Làm Việc</h4>
                    <p className="text-gray-600 text-sm">
                      Thứ 2 - Thứ 6: 08:00 - 17:00
                      <br />
                      Thứ 7: 08:00 - 12:00
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <h4 className="font-medium text-gray-800 mb-3 text-sm">Kết nối với chúng tôi</h4>
                <div className="flex gap-4">
                  <a href="#" className="text-gray-800 hover:text-blue-600">
                    <Facebook size={32} />
                  </a>
                  <a href="#" className="text-gray-800 hover:text-pink-600">
                    <Instagram size={32} />
                  </a>
                  <a href="#" className="text-gray-800 hover:text-red-600">
                    <Chrome size={32} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="lg:w-2/3">
            <div className="bg-white p-8 rounded-lg border border-gray-300 shadow-sm">
              <h2 className="text-xl font-bold mb-6 border-b pb-2">Gửi tin nhắn cho chúng tôi</h2>

              <form onSubmit={handlesubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Họ và tên</label>
                    <input
                      type="text"
                      value={username}
                      readOnly
                      placeholder="huy"
                      className="w-full border-b-2 border-gray-300 focus:border-blue-600 outline-none py-2 px-1 bg-gray-50 capitalize"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      value={email}
                      readOnly
                      className="w-full border-b-2 border-gray-300 focus:border-blue-600 outline-none py-2 px-1 bg-gray-50"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Số điện thoại</label>
                    <input
                      type="text"
                      value={phone || "không có dữ liệu"}
                      readOnly
                      className="w-full border-b-2 border-gray-300 focus:border-blue-600 outline-none py-2 px-1 bg-gray-50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Chủ đề</label>
                    <select name="topicid" onChange={handleChange} className="w-full border-b-2 border-gray-300 focus:border-blue-600 outline-none py-2 px-1 bg-gray-50">
                      <option value="">-- Chọn chủ đề --</option>
                      {topic.map((item) => (
                        <option key={item.id} value={item.id}>{item.name}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Nội dung tin nhắn</label>
                  <textarea
                    rows={6}
                    onChange={handleChange}
                    name="content"
                    className="w-full border border-gray-300 rounded p-3 focus:ring-2 focus:ring-blue-500 outline-none bg-gray-50"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded shadow-md transition-colors flex items-center justify-center gap-2"
                >
                  Gửi tin nhắn
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Contact