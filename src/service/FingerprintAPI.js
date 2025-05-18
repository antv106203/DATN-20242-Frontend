import axiosInstance from "./axiosInstance";

export const requestCreateFingerprint = async (mac_address) => {
    const response = await axiosInstance.post("/fingerprint/requestCreateFingerprint.json", {
        mac_address
    });
    return response.data;
}

export const createFingerprint = async (fingerprint_id, fingerprint_name, expiry_at, user_id, device_id) => {
    const response = await axiosInstance.post("/fingerprint/createFingerprint.json", {
        fingerprint_id, fingerprint_name, expiry_at, user_id, device_id
    });
    return response.data;
}