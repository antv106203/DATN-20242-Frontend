/* eslint-disable no-unused-vars */
import axiosInstance from "./axiosInstance";

export const getListAccessLog = async (page, limit, order, department_id, result, fromDate, toDate ) =>{
    const response = await axiosInstance.post("/accessLog/listAccessLog.json",{page, limit, order, department_id, result, fromDate, toDate});
    return response.data
}