import ApiRoutes from '../config/ApiRoutes.js';
import axiosInstance from '../config/axios.js';
import  errorsString from "../util/errorsString";

export const ListTopic = async() => {
    try {
        const reponse=await axiosInstance.get(ApiRoutes.ListTopic);
        return reponse.data
    } catch (error) {
         return {
            success: false,
            message: errorsString(error.response.data),
        }
    }
}

export const SendContact = async(data, userid) => {
    try {
        const reponse=await axiosInstance.post(ApiRoutes.SendContact+"?userid="+userid,data);
        return reponse.data
    } catch (error) {
         return {
            success: false,
            message: errorsString(error.response.data.errors),
        }
    }
}