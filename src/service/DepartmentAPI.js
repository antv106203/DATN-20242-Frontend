import axiosInstance from "./axiosInstance";


export const fetchListDepartment = async (search, order, floor) => {
    const response = await axiosInstance.post("/department/ListDepartment.json",{search, order, floor})

    return response.data
}