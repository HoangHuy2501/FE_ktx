import ApiRoutes from '../config/ApiRoutes.js';
import axiosInstance from '../config/axios.js';
import  errorsString from "../util/errorsString";

export const ListSuites = async() => {
    try {
        const reponse=await axiosInstance.get(ApiRoutes.ListSuites);
        return reponse.data
    } catch (error) {
         return {
            success: false,
            message: errorsString(error.response.data),
        }
    }
}

export const ListRoomBySuites = async(id) => {
    try {
        const reponse=await axiosInstance.get(ApiRoutes.ListRoomBySuites+"/"+id);
        return reponse.data
    } catch (error) {
         return {
            success: false,
            message: errorsString(error.response.data),
        }
    }
}

export const CountRoom = async(id) => {
    try {
        const reponse=await axiosInstance.get(ApiRoutes.CountRoomBySuites+"/"+id);
        return reponse.data
    } catch (error) {
         return {
            success: false,
            message: errorsString(error.response.data),
        }
    }
}