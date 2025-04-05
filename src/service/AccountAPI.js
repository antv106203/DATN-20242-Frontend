/* eslint-disable no-unused-vars */
import axiosInstance from "./axiosInstance";

export const loginAccount = async (email, password) =>{
        const response = await axiosInstance.post(`/account/login`, {
            email,
            password
        });
        return response.data;
}