import axiosInstance from "./axiosInstance";


export const fetchListDepartment = async (search, order, floor) => {
    const response = await axiosInstance.post("/department/ListDepartment.json",{search, order, floor})

    return response.data
}

export const createNewDepartment = async (department) => {
    const response = await axiosInstance.post("/department/createNewDepartment.json", department);
    return response.data
} 