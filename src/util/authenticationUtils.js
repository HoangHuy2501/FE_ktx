/**
 * Các tiện ích xử lý xác thực và quản lý token
 * File này chứa các hàm để quản lý token, xác thực người dùng và thông tin người dùng
 */
// Các khóa lưu trữ trong localStorage/sessionStorage
const USER_NAME_KEY = "user_name";
const USER_EMAIL_KEY = "user_email";
const USER_ID_KEY = "userId";
const ROLE = "role";
const PHONE="phone";


// export const saveRefreshToken = (refreshToken) => {
//    localStorage.setItem('refreshToken', refreshToken);
//    return refreshToken;
// };

// Lấy token đăng nhập từ localStorage
export const getAuthToken = () => {
  return localStorage.getItem(TOKEN_KEY);
};
export const getRefreshToken = () => {
  return localStorage.getItem("refreshToken");
};

// Kiểm tra người dùng đã đăng nhập hay chưa
// true nếu đã đăng nhập, false nếu chưa
export const isAuthenticated = () => {
  return !!getAuthToken();
};

// Xóa token và thông tin người dùng khi đăng xuất hoặc token hết hạn
// Hàm này xóa dữ liệu từ cả localStorage

export const removeAuthToken = () => {
  localStorage.removeItem(USER_NAME_KEY);
  localStorage.removeItem(USER_EMAIL_KEY);
  localStorage.removeItem(USER_ID_KEY);
  localStorage.removeItem(ROLE);
  localStorage.removeItem(PHONE);
};

// Lưu thông tin người dùng từ JWT token đã được giải mã
// Token JWT đã được giải mã
// Thông tin đã lưu hoặc null nếu có lỗi

export const saveUserDataFromToken = (decodedToken) => {
  try {
    const name = decodedToken.name;
    const email =decodedToken.email;
    const userId = decodedToken.id;
    const role = decodedToken.role;
    const phone=decodedToken.phone
    //   const storeId = decodedToken.StoreId;
    if (userId) {
      localStorage.setItem(USER_ID_KEY, userId);
    }
    if (name) {
      localStorage.setItem(USER_NAME_KEY, name);
    }

    if (email) {
      localStorage.setItem(USER_EMAIL_KEY, email);
    }
    if (role) {
      localStorage.setItem(ROLE, role);
    }
    if (phone) {
      localStorage.setItem(PHONE, phone);
    }
    return { name, userId, role, email,phone };
  } catch (error) {
    console.error("Lỗi khi lưu thông tin người dùng từ token:", error);
    return null;
  }
};
export const getUserId = () => {
  return localStorage.getItem(USER_ID_KEY);
};

/**
 * Lấy tên người dùng từ localStorage
 * @returns {string|null} Tên người dùng hoặc null nếu không tồn tại
 */
export const getUserName = () => {
  return localStorage.getItem(USER_NAME_KEY);
};

export const getUserRole = () => {
  return localStorage.getItem(ROLE);
};

export const getUserPhone = () => {
  return localStorage.getItem(PHONE);
}
/**
 * Lấy email người dùng từ localStorage
 * @returns {string|null} Email người dùng hoặc null nếu không tồn tại
 */
export const getUserEmail = () => {
  return localStorage.getItem(USER_EMAIL_KEY);
};

/**
 * Kiểm tra tính hợp lệ của token
 * @returns {boolean} true nếu token hợp lệ và chưa hết hạn, false nếu ngược lại
 */
export const checkTokenValidity = () => {
  const token = getAuthToken();

  if (!token) {
    return false;
  }

  try {
    const decodedToken = jwtDecode(token);
    const currentTime = Date.now() / 1000;

    // Kiểm tra xem token đã hết hạn chưa
    if (decodedToken.exp < currentTime) {
      // Token đã hết hạn, xóa token và trả về false
      removeAuthToken();
      return false;
    }

    return true;
  } catch (error) {
    // Nếu token không hợp lệ hoặc không thể decode
    console.error("Token không hợp lệ:", error);
    removeAuthToken();
    return false;
  }
};
