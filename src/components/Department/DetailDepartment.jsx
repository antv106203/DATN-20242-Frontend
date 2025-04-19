import "./DetailDepartment.css"
import Title from "../Header/Title"
import IconTool from "../Staff/IconTool";
import { faArrowLeft, faArrowRight, faBackward, faCircleInfo, faForward, faPen, faRetweet, faTrash, faXmark } from "@fortawesome/free-solid-svg-icons";
import { use, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchListStaff } from "../../service/StaffAPI";
import IconPagination from "../Staff/IconPagination";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getDetailDepartment, updateDepartment } from "../../service/DepartmentAPI";
import { formatAccessTime } from "../../utils/DateUtils";
import { toast } from "react-toastify";

const list1staff = [
    {
        avatar: "",
        createdAt : "2025-03-12T18:49:02.853Z",
        created_at : "2025-03-12T18:49:02.849Z",
        department_id : {_id: '67cf07c32739a672b5291121', department_name: 'Giám đôc', total_member: -5, department_code: 'DRT', status: 'ACTIVE'},
        email : "val12345@gmail.com",
        full_name : "Valverde1",
        status : "ACTIVE",
        updatedAt : "2025-04-11T18:24:39.146Z",
        updated_at : "2025-03-12T18:49:02.849Z",
        user_code : "NVMKT-02",
        user_id : 2
    },
    {
        avatar: "",
        createdAt : "2025-03-12T18:49:02.853Z",
        created_at : "2025-03-12T18:49:02.849Z",
        department_id : {_id: '67cf07c32739a672b5291121', department_name: 'Giám đôc', total_member: -5, department_code: 'DRT', status: 'ACTIVE'},
        email : "val12345@gmail.com",
        full_name : "Valverde1",
        status : "ACTIVE",
        updatedAt : "2025-04-11T18:24:39.146Z",
        updated_at : "2025-03-12T18:49:02.849Z",
        user_code : "NVMKT-02",
        user_id : 2
    },
    {
        avatar: "",
        createdAt : "2025-03-12T18:49:02.853Z",
        created_at : "2025-03-12T18:49:02.849Z",
        department_id : {_id: '67cf07c32739a672b5291121', department_name: 'Giám đôc', total_member: -5, department_code: 'DRT', status: 'ACTIVE'},
        email : "val12345@gmail.com",
        full_name : "Valverde1",
        status : "ACTIVE",
        updatedAt : "2025-04-11T18:24:39.146Z",
        updated_at : "2025-03-12T18:49:02.849Z",
        user_code : "NVMKT-02",
        user_id : 2
    },
    {
        avatar: "",
        createdAt : "2025-03-12T18:49:02.853Z",
        created_at : "2025-03-12T18:49:02.849Z",
        department_id : {_id: '67cf07c32739a672b5291121', department_name: 'Giám đôc', total_member: -5, department_code: 'DRT', status: 'ACTIVE'},
        email : "val12345@gmail.com",
        full_name : "Valverde1",
        status : "ACTIVE",
        updatedAt : "2025-04-11T18:24:39.146Z",
        updated_at : "2025-03-12T18:49:02.849Z",
        user_code : "NVMKT-02",
        user_id : 2
    },
    {
        avatar: "",
        createdAt : "2025-03-12T18:49:02.853Z",
        created_at : "2025-03-12T18:49:02.849Z",
        department_id : {_id: '67cf07c32739a672b5291121', department_name: 'Giám đôc', total_member: -5, department_code: 'DRT', status: 'ACTIVE'},
        email : "val12345@gmail.com",
        full_name : "Valverde1",
        status : "ACTIVE",
        updatedAt : "2025-04-11T18:24:39.146Z",
        updated_at : "2025-03-12T18:49:02.849Z",
        user_code : "NVMKT-02",
        user_id : 2
    },
    {
        avatar: "",
        createdAt : "2025-03-12T18:49:02.853Z",
        created_at : "2025-03-12T18:49:02.849Z",
        department_id : {_id: '67cf07c32739a672b5291121', department_name: 'Giám đôc', total_member: -5, department_code: 'DRT', status: 'ACTIVE'},
        email : "val12345@gmail.com",
        full_name : "Valverde1",
        status : "ACTIVE",
        updatedAt : "2025-04-11T18:24:39.146Z",
        updated_at : "2025-03-12T18:49:02.849Z",
        user_code : "NVMKT-02",
        user_id : 2
    },
    {
        avatar: "",
        createdAt : "2025-03-12T18:49:02.853Z",
        created_at : "2025-03-12T18:49:02.849Z",
        department_id : {_id: '67cf07c32739a672b5291121', department_name: 'Giám đôc', total_member: -5, department_code: 'DRT', status: 'ACTIVE'},
        email : "val12345@gmail.com",
        full_name : "Valverde1",
        status : "ACTIVE",
        updatedAt : "2025-04-11T18:24:39.146Z",
        updated_at : "2025-03-12T18:49:02.849Z",
        user_code : "NVMKT-02",
        user_id : 2
    },
    {
        avatar: "",
        createdAt : "2025-03-12T18:49:02.853Z",
        created_at : "2025-03-12T18:49:02.849Z",
        department_id : {_id: '67cf07c32739a672b5291121', department_name: 'Giám đôc', total_member: -5, department_code: 'DRT', status: 'ACTIVE'},
        email : "val12345@gmail.com",
        full_name : "Valverde1",
        status : "ACTIVE",
        updatedAt : "2025-04-11T18:24:39.146Z",
        updated_at : "2025-03-12T18:49:02.849Z",
        user_code : "NVMKT-02",
        user_id : 2
    },
    {
        avatar: "",
        createdAt : "2025-03-12T18:49:02.853Z",
        created_at : "2025-03-12T18:49:02.849Z",
        department_id : {_id: '67cf07c32739a672b5291121', department_name: 'Giám đôc', total_member: -5, department_code: 'DRT', status: 'ACTIVE'},
        email : "val12345@gmail.com",
        full_name : "Valverde1",
        status : "ACTIVE",
        updatedAt : "2025-04-11T18:24:39.146Z",
        updated_at : "2025-03-12T18:49:02.849Z",
        user_code : "NVMKT-02",
        user_id : 2
    },
    {
        avatar: "",
        createdAt : "2025-03-12T18:49:02.853Z",
        created_at : "2025-03-12T18:49:02.849Z",
        department_id : {_id: '67cf07c32739a672b5291121', department_name: 'Giám đôc', total_member: -5, department_code: 'DRT', status: 'ACTIVE'},
        email : "val12345@gmail.com",
        full_name : "Valverde1",
        status : "ACTIVE",
        updatedAt : "2025-04-11T18:24:39.146Z",
        updated_at : "2025-03-12T18:49:02.849Z",
        user_code : "NVMKT-02",
        user_id : 2
    },
    {
        avatar: "",
        createdAt : "2025-03-12T18:49:02.853Z",
        created_at : "2025-03-12T18:49:02.849Z",
        department_id : {_id: '67cf07c32739a672b5291121', department_name: 'Giám đôc', total_member: -5, department_code: 'DRT', status: 'ACTIVE'},
        email : "val12345@gmail.com",
        full_name : "Valverde1",
        status : "ACTIVE",
        updatedAt : "2025-04-11T18:24:39.146Z",
        updated_at : "2025-03-12T18:49:02.849Z",
        user_code : "NVMKT-02",
        user_id : 2
    },
    {
        avatar: "",
        createdAt : "2025-03-12T18:49:02.853Z",
        created_at : "2025-03-12T18:49:02.849Z",
        department_id : {_id: '67cf07c32739a672b5291121', department_name: 'Giám đôc', total_member: -5, department_code: 'DRT', status: 'ACTIVE'},
        email : "val12345@gmail.com",
        full_name : "Valverde1",
        status : "ACTIVE",
        updatedAt : "2025-04-11T18:24:39.146Z",
        updated_at : "2025-03-12T18:49:02.849Z",
        user_code : "NVMKT-02",
        user_id : 2
    },
    {
        avatar: "",
        createdAt : "2025-03-12T18:49:02.853Z",
        created_at : "2025-03-12T18:49:02.849Z",
        department_id : {_id: '67cf07c32739a672b5291121', department_name: 'Giám đôc', total_member: -5, department_code: 'DRT', status: 'ACTIVE'},
        email : "val12345@gmail.com",
        full_name : "Valverde1",
        status : "ACTIVE",
        updatedAt : "2025-04-11T18:24:39.146Z",
        updated_at : "2025-03-12T18:49:02.849Z",
        user_code : "NVMKT-02",
        user_id : 2
    },
    {
        avatar: "",
        createdAt : "2025-03-12T18:49:02.853Z",
        created_at : "2025-03-12T18:49:02.849Z",
        department_id : {_id: '67cf07c32739a672b5291121', department_name: 'Giám đôc', total_member: -5, department_code: 'DRT', status: 'ACTIVE'},
        email : "val12345@gmail.com",
        full_name : "Valverde1",
        status : "ACTIVE",
        updatedAt : "2025-04-11T18:24:39.146Z",
        updated_at : "2025-03-12T18:49:02.849Z",
        user_code : "NVMKT-02",
        user_id : 2
    }
]

const DetailDepartment = () => {

    const navigate = useNavigate();
    const {_id} = useParams();
    const [status, setStatus] = useState("ACTIVE")

    const [listStaff, setListStaff] = useState([]);
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(5);
    const [totalPage, setTotalPage] = useState(null);
    const [order, setOrder] = useState("asc");
    const [full_name, setFullName] = useState(null);
    const [user_code, setUserCode] = useState(null);    
    const handlePrevPage = () => {
        if (page > 1) setPage(page - 1);
    };
    
    const handleNextPage = () => {
        if (page < totalPage) setPage(page + 1);
    };
    
    const handleGoToFirstPage = () => {
        setPage(1);
    };
    
    const handleGoToLastPage = () => {
        setPage(totalPage);
    };

    // detail

    const [floor, setFloor] = useState("");
    const [department_name, setDepartmentName] = useState(null);
    const [department_code, setDepartmentCode] = useState(null);
    const [total_member, setTotalMember] = useState(null);
    const [created_at, setCreatedAt] = useState(null);
    const [updated_at, setUpdatedAt] = useState(null);


    const handleUpdateDepartment = async () => {
        const department = {   
            department_name: department_name,
            department_code:department_code,
            floor: floor,
        };
        const result = await updateDepartment(_id, department);
        console.log(result);
        if(result.status_code === 200){ 
            toast.success(result.message)
        }
        else if(result.status_code === 400){
            toast.error(result.message)
        }
    }
    const getListStaff = async() =>{
        const result = await fetchListStaff(_id, page, limit, full_name, user_code, order, status);
        setListStaff(result.data);
        setPage(result.pagination.page);
        setTotalPage(result.pagination.totalPages);
    }

    const fetchDetailDepartment = async() => {
        const result = await getDetailDepartment(_id);
        console.log(result.data.floor)
        setFloor(result?.data?.floor);
        setDepartmentName(result.data.department_name);
        setDepartmentCode(result.data.department_code);
        setTotalMember(result.data.total_member);
        setCreatedAt(result.data.createdAt);
        setUpdatedAt(result.data.updatedAt);
    
    }

    useEffect(() => {
        fetchDetailDepartment();
    }, []);

    useEffect(() => {
        getListStaff();
    }, [page, limit, full_name, user_code]);
    console.log(floor)
    return(
        <div className="detail-department-container">
            <Title name={"Thông tin phòng ban"} />
            <div className="detail-department-content-container">
                <div className="detail-department-content">
                    <div className="detail-department-infomation-general">
                        <div className="detail-department-infomation-general-header">
                            <h3>Thông tin chung</h3>
                        </div>
                        <div className="detail-department-info">
                            <div className="detail-department-name">
                                <div className="detail-department-name-label">
                                    Tầng
                                </div>
                                <div className="detail-department-name-input">
                                    <select type="text" value={floor} onChange={(e) => setFloor(e.target.value)}>
                                        <option value={null} disabled selected hidden>Chọn tầng</option>
                                        <option value={"Tầng 1"}>Tầng 1</option>
                                        <option value={"Tầng 2"}>Tầng 2</option>
                                        <option value={"Tầng 3"}>Tầng 3</option>
                                        <option value={"Tầng 4"}>Tầng 4</option>
                                        <option value={"Tầng 5"}>Tầng 5</option>
                                        <option value={"Tầng 6"}>Tầng 6</option>
                                    </select>
                                </div>
                            </div>
                            <div className="detail-department-name">
                                <div className="detail-department-name-label">
                                    Tên phòng
                                </div>
                                <div className="detail-department-name-input">
                                    <input type="text" value={department_name}  onChange={(e) => setDepartmentName(e.target.value)}/>
                                </div>
                            </div>
                            <div className="detail-department-name">
                                <div className="detail-department-name-label">
                                    Mã phòng
                                </div>
                                <div className="detail-department-name-input">
                                    <input type="text" value={department_code}  onChange={(e) => setDepartmentCode(e.target.value)}/>
                                </div>
                            </div>
                            <div className="detail-department-name">
                                <div className="detail-department-name-label">
                                    Tổng số nhân viên
                                </div>
                                <div className="detail-department-name-input">
                                    <input type="text" value={total_member}  onChange={(e) => setTotalMember(e.target.value)} disabled/>
                                </div>
                            </div>
                            <div className="detail-department-name">
                                <div className="detail-department-name-label">
                                    Ngày tạo
                                </div>
                                <div className="detail-department-name-input">
                                    <input type="text" value={formatAccessTime(created_at)} disabled/>
                                </div>
                            </div>
                            <div className="detail-department-name">
                                <div className="detail-department-name-label">
                                    Ngày cập nhật gần nhất
                                </div>
                                <div className="detail-department-name-input">
                                    <input type="text" value={formatAccessTime(updated_at)} disabled/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="detail-department-list-staff">
                        <div className="detail-department-infomation-general-header">
                            <h3>Danh sách nhân viên</h3>
                        </div>
                        <div className="detail-department-list-staff-content">
                            <div className="detail-department-list-staff-filter">
                                <div className="detail-department-filter-user-name">
                                    <div className="detail-department-filter-user-name-input">
                                        <input placeholder="Tìm kiếm theo tên nhân viên" value={full_name} onChange={(e) => setFullName(e.target.value)}/>
                                    </div>
                                </div>
                                <div className="detail-department-filter-user-code">
                                    <div className="detail-department-filter-user-code-input">
                                        <input placeholder="Tìm kiếm theo mã nhân viên" value={user_code} onChange={(e) => setUserCode(e.target.value)}/>
                                    </div>
                                </div>
                            </div>
                            <div className="detail-department-list-staff-table">
                                <table className="student-table">
                                    <thead>
                                        <tr>
                                            <th>STT</th>
                                            <th>Mã nhân viên</th>
                                            <th>Họ và Tên</th>
                                            <th>Email</th>
                                            <th>Thao tác</th>
                                        </tr>
                                    </thead>
                                    <tbody className="student-table-body">
                                        {listStaff.map((staff, index) => (
                                            <tr key={staff?._id || index}>
                                                <td>{index + 1}</td>
                                                <td>{staff?.user_code}</td>
                                                <td>{staff?.full_name}</td>
                                                <td>{staff?.email}</td>
                                                <td>
                                                    <div className="table-td-tool">
                                                        {
                                                            status === "ACTIVE" ? (
                                                                <>
                                                                    <IconTool color={"#00b894"} icon={faCircleInfo} /> 
                                                                    <IconTool color={"#d63031"} icon={faTrash} /> 
                                                                </>
                                                            ) : (
                                                                <>
                                                                    <IconTool color={"#0984e3"} icon={faRetweet} />
                                                                    <IconTool color={"#d63031"} icon={faTrash} />
                                                                </>
                                                            )
                                                        }
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <div className="pagination">
                                <div className="pagination-left">
                                    <div>
                                        Trang: 
                                    </div>
                                    <div className="pagination-left-current-page">
                                        {page}
                                    </div>
                                    <div>
                                        /
                                    </div>
                                    <div>
                                        {totalPage}
                                    </div>
                                </div>
                                <div className="pagination-right">
                                    <IconPagination icon={faBackward} skip={"right"} onClick={handleGoToFirstPage}/>
                                    <IconPagination icon={faArrowLeft} skip={"right"} onClick={handlePrevPage}/>
                                    <div className="pagination-right-current-page">
                                        {page}
                                    </div>
                                    <IconPagination icon={faArrowRight} skip={"left"} onClick={handleNextPage}/>
                                    <IconPagination icon={faForward} skip={"left"} onClick={handleGoToLastPage}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="detail-department-content-tool">
                    <div className="detail-department-content-tool-cancel" onClick={() => {navigate("/at/department")}}>
                        <FontAwesomeIcon icon={faXmark} />
                        Trở lại 
                    </div>
                    <div className="detail-department-content-tool-update" onClick={handleUpdateDepartment}>
                        <FontAwesomeIcon icon={faPen} />
                        Cập nhật
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailDepartment