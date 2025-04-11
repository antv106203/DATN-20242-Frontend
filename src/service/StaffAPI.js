import axiosInstance from "./axiosInstance";

export const fetchListStaff = async(id_department,page, limit, full_name, user_code, order, status) =>{
    const res = await axiosInstance.post("/user/listUser.json", {id_department,page, limit, full_name, user_code, order, status});
    return res.data
}

export const deletePreStaff = async(_idUser) => {
    const res  = await axiosInstance.post("/user/deletePre.json", {_idUser});
    return res.data
}

export const restoreStaff = async(_idUser) => {
    const res  = await axiosInstance.post("/user/restoreUser.json", {_idUser});
    return res.data
}