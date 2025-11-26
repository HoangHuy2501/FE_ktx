import ApiRoutes from '../config/ApiRoutes.js';
import axiosInstance from '../config/axios.js';
import  errorsString from "../util/errorsString";

export const InfoUser=async(userid) => {
    try {
        const reponse=await axiosInstance.get(ApiRoutes.InforUser+"/"+userid);
        return reponse.data
    } catch (error) {
         return {
            success: false,
            message: errorsString(error.response.data),
        }
    }
}

export const UpdateUser=async(userid,data) => {
    try {
        const reponse=await axiosInstance.put(ApiRoutes.UpdateUser+"/"+userid,data);
        return reponse.data
    } catch (error) {
         return {
            success: false,
            message: errorsString(error.response.data.errors),
        }
    }
}