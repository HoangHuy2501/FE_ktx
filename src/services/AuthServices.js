import ApiRoutes from '../config/ApiRoutes.js';
import axiosInstance from '../config/axios.js';
import  errorsString from "../util/errorsString";
export const LoginUser = async(data) => {
    try {
        const reponse=await axiosInstance.post(ApiRoutes.Login,data);
        return reponse.data
    } catch (error) {
         return {
            success: false,
            message: errorsString(error.response.data),
        }
    }
}

export const RegisterUser = async(data) => {
    try {
        const reponse=await axiosInstance.post(ApiRoutes.register,data);
        return reponse.data
    } catch (error) {
         return {
            success: false,
            message: errorsString(error.response.data),
        }
    }
}