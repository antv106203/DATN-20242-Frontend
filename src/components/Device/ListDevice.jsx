import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Title from "../Header/Title";
import "./ListDevice.css";
import { faArrowsRotate, faCircleInfo, faCircleUser, faFingerprint, faLock, faPlus, faSearch, faTrash, faWifi } from "@fortawesome/free-solid-svg-icons";
import { use, useEffect, useState } from "react";
import PopupSearchingDevice from "./PopupSearchingDevice";
import { deleteDevice, getListDevice, getUnregisteredDevices, updateDevice } from "../../service/DeviceAPI";
import PopupCreateDevice from "./PopupCreateDevice";
import Loading from "../Loading/Loading";
import { fetchListDepartment } from "../../service/DepartmentAPI";
import Pagination from "../Pagination/Pagination";
import PopupDeviceDetail from "./PopupDeviceDetail";
import { toast } from "react-toastify";
import PopupConfirmDeleteDevice from "./PopupConfirmDeleteDevice";

const device1 = [
        {
            "_id": "67d03e49ac671fe5d506f9f1",
            "device_name": "AS608-jjdghggh",
            "mac_address": "00:1A:2B:3C:4D:5E",
            "department_id": {
                "_id": "67cf07c32739a672b5291121",
                "department_name": "Giám đôc",
                "total_member": -5,
                "department_code": "DRT",
                "status": "ACTIVE",
                "created_at": "2025-03-10T15:39:47.177Z",
                "updated_at": "2025-03-10T15:39:47.178Z",
                "createdAt": "2025-03-10T15:39:47.183Z",
                "updatedAt": "2025-04-11T18:24:39.179Z",
                "department_id": 1,
                "__v": 0,
                "floor": "Tầng 1"
            },
            "device_id": 1,
            "__v": 0,
            "status": "OFFLINE"
        },
        {
            "_id": "682a349370f93c393a31680b",
            "device_name": "AS608",
            "mac_address": "A0:B7:65:21:82:BC",
            "department_id": {
                "_id": "67cf088f2739a672b529112c",
                "department_name": "Kế toán",
                "total_member": 12,
                "department_code": "MKT-02",
                "status": "ACTIVE",
                "created_at": "2025-03-10T15:43:11.454Z",
                "updated_at": "2025-03-10T15:43:11.454Z",
                "createdAt": "2025-03-10T15:43:11.454Z",
                "updatedAt": "2025-05-12T07:43:51.407Z",
                "department_id": 2,
                "__v": 0,
                "floor": "Tầng 2"
            },
            "device_id": 2,
            "__v": 0,
            "status": "ONLINE"
        },
        {
            "_id": "682b4d0f1d88c43055f21987",
            "device_name": "esp32 - phát triển",
            "mac_address": "F8:B3:B7:7A:97:44",
            "department_id": {
                "_id": "67fc0cbc56b9bf088c4f2b75",
                "department_name": "Phát triển",
                "total_member": 1,
                "department_code": "DVL-01",
                "status": "ACTIVE",
                "floor": "Tầng 5",
                "created_at": "2025-04-13T19:13:00.696Z",
                "updated_at": "2025-04-13T19:13:00.697Z",
                "createdAt": "2025-04-13T19:13:00.703Z",
                "updatedAt": "2025-05-12T02:46:24.959Z",
                "department_id": 4,
                "__v": 0
            },
            "device_id": 3,
            "__v": 0,
            "status": "OFFLINE"
        },
        {
            "_id": "682b4d0f1d88c43055f21987",
            "device_name": "esp32 - phát triển",
            "mac_address": "F8:B3:B7:7A:97:44",
            "department_id": {
                "_id": "67fc0cbc56b9bf088c4f2b75",
                "department_name": "Phát triển",
                "total_member": 1,
                "department_code": "DVL-01",
                "status": "ACTIVE",
                "floor": "Tầng 5",
                "created_at": "2025-04-13T19:13:00.696Z",
                "updated_at": "2025-04-13T19:13:00.697Z",
                "createdAt": "2025-04-13T19:13:00.703Z",
                "updatedAt": "2025-05-12T02:46:24.959Z",
                "department_id": 4,
                "__v": 0
            },
            "device_id": 3,
            "__v": 0,
            "status": "OFFLINE"
        },
        {
            "_id": "682b4d0f1d88c43055f21987",
            "device_name": "esp32 - phát triển",
            "mac_address": "F8:B3:B7:7A:97:44",
            "department_id": {
                "_id": "67fc0cbc56b9bf088c4f2b75",
                "department_name": "Phát triển",
                "total_member": 1,
                "department_code": "DVL-01",
                "status": "ACTIVE",
                "floor": "Tầng 5",
                "created_at": "2025-04-13T19:13:00.696Z",
                "updated_at": "2025-04-13T19:13:00.697Z",
                "createdAt": "2025-04-13T19:13:00.703Z",
                "updatedAt": "2025-05-12T02:46:24.959Z",
                "department_id": 4,
                "__v": 0
            },
            "device_id": 3,
            "__v": 0,
            "status": "OFFLINE"
        },
        {
            "_id": "682b4d0f1d88c43055f21987",
            "device_name": "esp32 - phát triển",
            "mac_address": "F8:B3:B7:7A:97:44",
            "department_id": {
                "_id": "67fc0cbc56b9bf088c4f2b75",
                "department_name": "Phát triển",
                "total_member": 1,
                "department_code": "DVL-01",
                "status": "ACTIVE",
                "floor": "Tầng 5",
                "created_at": "2025-04-13T19:13:00.696Z",
                "updated_at": "2025-04-13T19:13:00.697Z",
                "createdAt": "2025-04-13T19:13:00.703Z",
                "updatedAt": "2025-05-12T02:46:24.959Z",
                "department_id": 4,
                "__v": 0
            },
            "device_id": 3,
            "__v": 0,
            "status": "OFFLINE"
        }
        
        
    ]

const ListDevice = () => {
    const [popupSearchingDevice, setPopupSearchingDevice] = useState(false);
    const [loadingPopupFindDevice, setLoadingPopupFindDevice] = useState(false);
    const [devices, setDevices] = useState([]);
    const [showConnectPopup,setShowConnectPopup] = useState(false);
    const [selectedDevice, setSelectedDevice] = useState(null);
    const [loading, setLoading] = useState(false);
    const [listDepartment, setListDepartment] = useState([]);


    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(6);
    const [totalPage, setTotalPage] = useState(null);
    const [currenPage, setCurrentPage] = useState(null);
    const [listDevice, setListDevice] = useState([]);
    const [search, setSearch] = useState("");
    const [department_id, setDepartmentId] = useState(null);
    const [popupDetail, setPopupDetail] = useState(false);
    const [_id, setId] = useState(null);
    const [popupDeleteDevice, setPopupDeleteDevice] = useState(false);
    const [device_id, setDeviceId] = useState(null);

    const handleFindDevice = async () => {
        setLoadingPopupFindDevice(true);
        try {
            const res = await getUnregisteredDevices();
            if (res.status_code === 200) {
                setDevices(res.data);
            }
            else{
                setLoadingPopupFindDevice(false);
                toast.error(res.message);
            }
        } catch (error) {
            setLoadingPopupFindDevice(false);
            toast.error(res.message);
        }
        finally{
            setLoadingPopupFindDevice(false);
        }
    }
    const handleSearchClick = () => {
        setPopupSearchingDevice(true);
        handleFindDevice();
    };

    const handleConnectClick = (device) => {
        setPopupSearchingDevice(false);
        setSelectedDevice(device);
        setShowConnectPopup(true);
    };
    const handleClickInfo = (id) => {
        setId(id);
        setPopupDetail(true);
    }

    const handleFetchListDepartment = async () => {
        setLoading(true);
        try {
            const res = await fetchListDepartment(null, "asc", null);
            if (res.status_code === 200) {
                setListDepartment(res.data);
            }
            else{
                setLoading(false);
                toast.error(res.message);
            }
        } catch (error) {
            setLoading(false);
            toast.error("Có lỗi xảy ra khi lấy danh sách phòng ban");
        }
        finally{
            setLoading(false);
        }
    }

    const handleFetchListDevice = async () => {
        setLoading(true);
        try {
            const res = await getListDevice(page, limit, search, "asc", department_id);
            if (res.status_code === 200) {
                setListDevice(res.data);
                setTotalPage(res.pagination.totalPages);
                setCurrentPage(res.pagination.page);
            }
            else{
                setLoading(false);
                toast.error(res.message);
            }
        } catch (error) {
            setLoading(false);
            toast.error("Có lỗi xảy ra khi lấy danh sách thiết bị");
        }
        finally{
            setLoading(false);
        }
    }

    const handlePageChange = (page) => {
        setPage(page);
    }

    const handleClickSearch = () => {
        setLoading(true);
        handleFetchListDevice();
    }

    const handleClickDelete = (id) => {
        setDeviceId(id);
        setPopupDeleteDevice(true);
    }

    const handleUpdateDevice = async (id, device_name) => {
        setLoading(true);
        try {
            const res = await updateDevice(id, device_name);
            if (res.status_code === 200) {
                toast.success(res.message);
                handleFetchListDevice();
            }
            else{
                setLoading(false);
                toast.error(res.message);
            }
        } catch (error) {
            setLoading(false);
            toast.error("Có lỗi xảy ra khi thêm thiết bị");
        }
        finally{
            setLoading(false);
        }
    }

    const handleDeleteDevice = async (id) => {
        setLoading(true);
        try {
            const res = await deleteDevice(id);
            if (res.status_code === 200) {
                toast.success(res.message);
                handleFetchListDevice();
            }
            else{
                setLoading(false);
                toast.error(res.message);
            }
        } catch (error) {
            setLoading(false);
            toast.error("Có lỗi xảy ra khi xóa thiết bị");
        }
        finally{
            setLoading(false);
        }
    }

    useEffect(() => {
        handleFetchListDepartment();
    }, []);

    useEffect(() => {
        handleFetchListDevice();
    }, [page]);

    return (
        <>
            {popupSearchingDevice && 
            <PopupSearchingDevice 
                onClose={() => setPopupSearchingDevice(false)}
                loading={loadingPopupFindDevice}
                devices={devices}
                onConnectClick={handleConnectClick}
            
            />
            }

            {
                showConnectPopup && 
                <PopupCreateDevice 
                    onClose={() => setShowConnectPopup(false)}
                    device={selectedDevice}
                />
            }
            {
                popupDetail && 
                <PopupDeviceDetail 
                    onClose={() => setPopupDetail(false)}
                    isVisible={popupDetail}
                    id={_id}
                    onUpdate={handleUpdateDevice}
                />
            }
            
            {
                loading && <Loading />
            }

            {
                popupDeleteDevice && 
                <PopupConfirmDeleteDevice 
                    onClose={() => setPopupDeleteDevice(false)}
                    onDelete={handleDeleteDevice} 
                    device_id = {device_id}
                />
            }
            <div className="list-device-container">
                <Title name={"Danh sách thiết bị"}/>
                <div className="list-device-container-content">
                    <div className="list-device-toolbar">
                        <div className="list-device-toolbar-create" onClick={handleSearchClick}>
                            <div className="list-device-toolbar-create-icon">
                                <FontAwesomeIcon icon={faWifi} />
                            </div>
                            <div className="list-device-toolbar-create-label" >
                                Tìm thiết bị
                            </div>
                        </div>
                        <div className="list-device-toolbar-search">
                            <input
                                type="text"
                                className="device-search-input"
                                placeholder="Tìm theo tên thiết bị..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />

                            <select
                                className="device-room-select"
                                value={department_id}
                                onChange={(e) => setDepartmentId(e.target.value)}
                            >
                                <option value="">Tất cả phòng</option>
                                {listDepartment.map((department) => (
                                    <option key={department._id} value={department._id}>
                                        {department.department_name}
                                    </option>
                                ))}
                            </select>

                             <button className="device-search-button" onClick={handleClickSearch}>
                                <FontAwesomeIcon icon={faSearch} />
                            </button>
                        </div>
                    </div>
                    <div className="list-device-table">
                        <table className="list-device">
                            <thead>
                                <tr>
                                    <th>Thiết bị</th>
                                    <th>Tên thiết bị</th>
                                    <th>Trạng thái</th>
                                    <th>Địa chỉ</th>
                                    <th>Phòng ban</th>
                                    <th>Thao tác</th>
                                </tr>
                            </thead>
                            <tbody>
                                {listDevice.map((device, index) => (
                                    <tr key={index}>
                                        <td>
                                            <div className="list-device-icon">
                                                <FontAwesomeIcon icon={faFingerprint} />
                                            </div>
                                        </td>
                                        <td>{device.device_name}</td>
                                        <td style={{ textAlign: "center" }}>
                                            <div className={`list-device-status ${device.status === "ONLINE" ? "online" : "offline"}`}>
                                                {device.status}
                                            </div>
                                        </td>
                                        <td>{device.mac_address}</td>
                                        <td>{device.department_id.department_name}</td>
                                        <td>
                                            <div className="list-device-btn">
                                                <div className="list-device-btn-delete" onClick={() => handleClickDelete(device._id)}>
                                                    <FontAwesomeIcon icon={faTrash} />
                                                </div>
                                                <div className="list-device-btn-info" onClick={() => handleClickInfo(device._id)}>
                                                    <FontAwesomeIcon icon={faCircleInfo} />
                                                </div>
                                            </div>
                                        </td>
                                           
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="list-device-pagination">
                        <div className="list-device-pagination-left">
                            <div>
                                Trang: 
                            </div>
                            <div className="list-device-pagination-left-current-page">
                                {page}
                            </div>
                            <div>
                                /
                            </div>
                            <div>
                                {totalPage}
                            </div>
                        </div>
                        <div className="list-device-pagination-right">
                            <Pagination totalPages={totalPage} currentPage={currenPage} onPageChange={handlePageChange} name={"Thiết bị"} total={listDevice.length}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ListDevice;