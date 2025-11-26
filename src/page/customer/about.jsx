"use client"
import { Shield, Zap, Eye } from "lucide-react"
import Suites from "../../../public/image/suites.jpg"
import Nv1 from "../../../public/image/nv1.jpg"
import Nv2 from "../../../public/image/nv2.jpg"
import Nv3 from "../../../public/image/nv3.jpg"
import Nv4 from "../../../public/image/nv4.webp"

const employee=[
  {
    id: 1,
    name: "Nguyễn Văn A",
    image: Nv1,
  },
  {
    id: 2,
    name: "Nguyễn Văn B",
    image: Nv2,
  },
  {
    id: 3,
    name: "Nguyễn Văn C",
    image: Nv3,
  },
  {
    id: 4,
    name: "Nguyễn Văn D",
    image: Nv4,
  }
]
function About() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Banner */}
      <div className="bg-blue-700 text-white py-12 text-center">
        <div className="text-sm text-blue-200 mb-2">Trang chủ &gt; Giới thiệu</div>
        <h1 className="text-4xl font-bold mb-2">Giới thiệu về DormSpace</h1>
        <p className="text-blue-100">Nền tảng đặt phòng ký túc xá hàng đầu tại Đà Nẵng</p>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Introduction Section */}
        <div className="bg-white p-6 rounded-lg border border-gray-300 shadow-sm mb-8">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-1/3">
              <img src={Suites} alt="" />
            </div>
            <div className="flex-1">
              <p className="text-gray-600 leading-relaxed italic font-serif">
                "DormSpace ra đời với mục tiêu giải quyết bài toán tìm kiếm chỗ ở cho sinh viên tại Đà Nẵng. Chúng tôi
                hiểu rằng môi trường sống đóng vai trò quan trọng trong việc học tập và phát triển của mỗi cá nhân. Vì
                vậy, DormSpace không chỉ là nơi kết nối sinh viên với các ký túc xá, mà còn là người bạn đồng hành đáng
                tin cậy, mang đến sự an tâm tuyệt đối cho phụ huynh và sinh viên."
              </p>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg border border-gray-300 shadow-sm">
            <h3 className="text-xl font-bold mb-4 text-blue-700">Sứ Mệnh</h3>
            <p className="text-gray-600 text-sm leading-loose italic">
              Kiến tạo môi trường sống văn minh, hiện đại và an toàn cho sinh viên. Chúng tôi nỗ lực không ngừng để nâng
              cao chất lượng dịch vụ, mang lại trải nghiệm tốt nhất cho người dùng thông qua công nghệ và sự tận tâm.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-300 shadow-sm">
            <h3 className="text-xl font-bold mb-4 text-blue-700">Tầm Nhìn</h3>
            <p className="text-gray-600 text-sm leading-loose italic">
              Trở thành hệ sinh thái nhà ở sinh viên số 1 Việt Nam vào năm 2030. Mở rộng mạng lưới liên kết với tất cả
              các trường đại học, cao đẳng và các khu ký túc xá tư nhân chất lượng cao trên toàn quốc.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <h3 className="text-center text-xl font-bold mb-6">Giá Trị Cốt Lõi</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white p-6 rounded-lg border border-gray-300 shadow-sm text-center">
            <div className="mx-auto w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-blue-600">
              <Eye size={24} />
            </div>
            <h4 className="font-bold text-lg mb-2">Minh Bạch</h4>
            <p className="text-gray-500 text-xs italic">
              Thông tin rõ ràng, chính xác về giá cả, tiện ích và quy định. Không có chi phí ẩn.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-300 shadow-sm text-center">
            <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4 text-green-600">
              <Shield size={24} />
            </div>
            <h4 className="font-bold text-lg mb-2">An Toàn</h4>
            <p className="text-gray-500 text-xs italic">
              Đặt sự an toàn của sinh viên lên hàng đầu. Các đối tác đều được xác minh kỹ lưỡng.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-300 shadow-sm text-center">
            <div className="mx-auto w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4 text-orange-600">
              <Zap size={24} />
            </div>
            <h4 className="font-bold text-lg mb-2">Hiệu Quả</h4>
            <p className="text-gray-500 text-xs italic">
              Quy trình đặt phòng nhanh chóng, đơn giản, tiết kiệm thời gian và công sức.
            </p>
          </div>
        </div>

        {/* Team */}
        <h3 className="text-center text-xl font-bold mb-6">Đội Ngũ Của Chúng Tôi</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {employee.map((item) => (
            <div key={item} className="bg-white p-4 rounded-lg border border-gray-300 shadow-sm text-center">
              <div className="w-full aspect-square bg-gray-200 rounded mb-3 border border-gray-300 relative overflow-hidden">
                {/* <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  <div className="w-12 h-12 border-2 border-gray-400 border-dashed transform rotate-45"></div>
                </div> */}
                <img src={item.image} alt="" />
              </div>
              <div className="space-y-2">
                <div className="text-center">{item.name}</div>
                {/* <div className="h-2 w-16 bg-gray-200 mx-auto rounded"></div>
                <div className="h-10 w-full bg-gray-100 mx-auto rounded mt-2"></div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default About