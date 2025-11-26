import axios from 'axios';

// Lấy BASE_URL từ biến môi trường hoặc dùng URL dev
const BASE_URL = import.meta.env.HTTP_API || 'http://localhost:5000/api/';
const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000, // 10 giây
  headers: {
    'Content-Type': 'application/json'
  }
});

export default axiosInstance;