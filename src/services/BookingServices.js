import ApiRoutes from '../config/ApiRoutes.js';
import axiosInstance from '../config/axios.js';
import  errorsString from "../util/errorsString";

export const BookingRoom = async(userid,roomid) => {
    try {
        const reponse=await axiosInstance.post(ApiRoutes.Booking+"?userid="+userid+"&roomid="+roomid);
        return reponse.data
    } catch (error) {
         return {
            success: false,
            message: errorsString(error.response.data.errors),
        }
    }
}

export const HistoryBooking = async(userid) => {
    try {
        const reponse=await axiosInstance.get(ApiRoutes.HistoryByUserID+"/"+userid);
        return reponse.data
    } catch (error) {
         return {
            success: false,
            message: errorsString(error.response.data.errors),
        }
    }
}

export const CancelBooking = async(bookingid) => {
    try {
        const reponse=await axiosInstance.put(ApiRoutes.ReturnRoom+"/"+bookingid);
        return reponse.data
    } catch (error) {
         return {
            success: false,
            message: errorsString(error.response.data.errors),
        }
    }
}