/* eslint-disable no-unused-vars */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Title from "../Header/Title"
import "./ListAccessLog.css"
import { faArrowLeft, faArrowRight, faArrowsRotate, faBackward, faForward, faSearch } from "@fortawesome/free-solid-svg-icons"
import History from "./History"
import IconPagination from "../Staff/IconPagination"
import { useEffect, useState } from "react"
import { getListAccessLog } from "../../service/AccessLogAPI"
import { fetchListDepartment } from "../../service/DepartmentAPI"
// const acc1 = 
// {
//     "_id": "67de793cfa56d86f7135f3e7",
//     "user_id": {
//         "_id": "67fa98627e9ba7a8ed409d9c",
//         "full_name": "Nguyễn Đình Tùng",
//         "user_code": "NVMKT-05",
//         "avatar": "https://res.cloudinary.com/dze1xo2d8/image/upload/v1744476264/avatars/qosqjn9rkuzgiqgjjx8l.jpg",
//         "department_id": {
//             "_id": "67cf088f2739a672b529112c",
//             "department_name": "Kế toán",
//             "department_code": "MKT02"
//         }
//     },
//     "result": "SUCCESS",
//     "access_time": "2025-03-22T08:47:56.404Z",
//     "log_id": 1,
//     "__v": 0
// }

// const list = [
// {
//     "_id": "67de793cfa56d86f7135f3e7",
//     "user_id": {
//         "_id": "67fa98627e9ba7a8ed409d9c",
//         "full_name": "Nguyễn Đình Tùng",
//         "user_code": "NVMKT-05",
//         "avatar": "https://res.cloudinary.com/dze1xo2d8/image/upload/v1744476264/avatars/qosqjn9rkuzgiqgjjx8l.jpg",
//         "department_id": {
//             "_id": "67cf088f2739a672b529112c",
//             "department_name": "Kế toán",
//             "department_code": "MKT02"
//         }
//     },
//     "result": "SUCCESS",
//     "access_time": "2025-03-22T08:47:56.404Z",
//     "log_id": 1,
//     "__v": 0
// },
// {
//     "_id": "67fac7755a9811e130ecb20a",
//     "user_id": {
//         "_id": "67fa99fe8a28a1ca877d9457",
//         "full_name": "Hà Việt Hoàng",
//         "user_code": "NVMKT-08",
//         "avatar": "",
//         "department_id": {
//             "_id": "67cf088f2739a672b529112c",
//             "department_name": "Kế toán",
//             "department_code": "MKT02"
//         }
//     },
//     "result": "SUCCESS",
//     "access_time": "2025-04-12T20:05:09.041Z",
//     "log_id": 2,
//     "__v": 0
// },
// {
//     "_id": "67fb87ea81acbd50fc2d13ff",
//     "user_id": {
//         "_id": "67fa99fe8a28a1ca877d9457",
//         "full_name": "Hà Việt Hoàng",
//         "user_code": "NVMKT-08",
//         "avatar": "",
//         "department_id": {
//             "_id": "67cf088f2739a672b529112c",
//             "department_name": "Kế toán",
//             "department_code": "MKT02"
//         }
//     },
//     "result": "SUCCESS",
//     "access_time": "2025-04-13T09:46:18.846Z",
//     "log_id": 3,
//     "__v": 0
// },
// {
//     "_id": "67fb87ea81acbd50fc2d1401",
//     "user_id": {
//         "_id": "67fa99fe8a28a1ca877d9457",
//         "full_name": "Hà Việt Hoàng",
//         "user_code": "NVMKT-08",
//         "avatar": "",
//         "department_id": {
//             "_id": "67cf088f2739a672b529112c",
//             "department_name": "Kế toán",
//             "department_code": "MKT02"
//         }
//     },
//     "result": "SUCCESS",
//     "access_time": "2025-04-13T09:46:18.858Z",
//     "log_id": 4,
//     "__v": 0
// },
// {
//     "_id": "67fb87ea81acbd50fc2d1401",
//     "user_id": {
//         "_id": "67fa99fe8a28a1ca877d9457",
//         "full_name": "Hà Việt Hoàng",
//         "user_code": "NVMKT-08",
//         "avatar": "",
//         "department_id": {
//             "_id": "67cf088f2739a672b529112c",
//             "department_name": "Kế toán",
//             "department_code": "MKT02"
//         }
//     },
//     "result": "SUCCESS",
//     "access_time": "2025-04-13T09:46:18.858Z",
//     "log_id": 4,
//     "__v": 0
// },
// {
//     "_id": "67fb87ea81acbd50fc2d1401",
//     "user_id": {
//         "_id": "67fa99fe8a28a1ca877d9457",
//         "full_name": "Hà Việt Hoàng",
//         "user_code": "NVMKT-08",
//         "avatar": "",
//         "department_id": {
//             "_id": "67cf088f2739a672b529112c",
//             "department_name": "Kế toán",
//             "department_code": "MKT02"
//         }
//     },
//     "result": "SUCCESS",
//     "access_time": "2025-04-13T09:46:18.858Z",
//     "log_id": 4,
//     "__v": 0
// },
// {
//     "_id": "67fb87ea81acbd50fc2d1401",
//     "user_id": {
//         "_id": "67fa99fe8a28a1ca877d9457",
//         "full_name": "Hà Việt Hoàng",
//         "user_code": "NVMKT-08",
//         "avatar": "",
//         "department_id": {
//             "_id": "67cf088f2739a672b529112c",
//             "department_name": "Kế toán",
//             "department_code": "MKT02"
//         }
//     },
//     "result": "SUCCESS",
//     "access_time": "2025-04-13T09:46:18.858Z",
//     "log_id": 4,
//     "__v": 0
// }, 
// {
//     "_id": "67fb87ea81acbd50fc2d1401",
//     "user_id": {
//         "_id": "67fa99fe8a28a1ca877d9457",
//         "full_name": "Hà Việt Hoàng",
//         "user_code": "NVMKT-08",
//         "avatar": "",
//         "department_id": {
//             "_id": "67cf088f2739a672b529112c",
//             "department_name": "Kế toán",
//             "department_code": "MKT02"
//         }
//     },
//     "result": "SUCCESS",
//     "access_time": "2025-04-13T09:46:18.858Z",
//     "log_id": 4,
//     "__v": 0
// }
// ]

const ListAccessLog = () => {

    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(8);
    const [ListAccessLog, setListAccessLog] = useState([]);
    const [totalPage, setTotalPage] = useState(null);
    const [fromDate, setFromDate] = useState(null);
    const [toDate, setToDate] = useState(null);
    const [department_id, setDepartment_id] = useState(null);
    const [result, setResult] = useState(null);
    const [order, setOrder] = useState("asc");
    const [listDepartment, setListDepartment] = useState([])
    const [render, setRender] = useState(false)
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

    const handleSearch = () => {
        fetchListAccessLog();
    }

    const handleRefresh = () => {
        setFromDate("");       // reset input date
        setToDate("");         // reset input date
        setDepartment_id("");  // reset select
        setResult("");         // reset select
        setRender(!render)
    }

    const fetchListAccessLog = async () => {
        const res = await getListAccessLog(page, limit, order, department_id, result, fromDate, toDate);
        setListAccessLog(res.data);
        setPage(res.pagination.page);
        setTotalPage(res.pagination.totalPages);
    }

    const getListDepartment = async () => {
        const res = await fetchListDepartment(null, "asc", null);
        setListDepartment(res.data);
    }

    useEffect(() => {
        fetchListAccessLog()
    }, [render])

    useEffect(() => {
        getListDepartment()
    }, [])

    return(
        <div className="list-accesslog-container">
            <Title name={"Lịch sử truy nhập"}/>
            <div className="list-accesslog-content-container">
                <div className="list-accesslog-content">
                    <div className="list-accesslog-filter">
                        <div className="list-accesslog-filter-from">
                            <div className="list-accesslog-from-label">
                                Từ ngày
                            </div>
                            <div className="list-accesslog-filter-from-input">
                                <input 
                                    type="date" 
                                    value={fromDate}
                                    onChange={(e) => setFromDate(e.target.value)} 
                                
                                />
                            </div>
                        </div>
                        <div className="list-accesslog-filter-to">
                            <div className="list-accesslog-filter-to-label">
                                Đến ngày
                            </div>
                            <div className="list-accesslog-filter-to-input">
                                <input 
                                    type="date" 
                                    value={toDate}
                                    onChange={(e) => setToDate(e.target.value)} 
                                
                                />
                            </div>
                        </div>
                        <div className="list-accesslog-filter-status">
                            <div className="list-accesslog-filter-status-label">
                                Trạng thái
                            </div>
                            <div className="list-accesslog-filter-status-select">
                                <select value={result} onChange={(e) => setResult(e.target.value)}>
                                    <option value={null}>Tất cả</option>
                                    <option value="SUCCESS">Thành công</option>
                                    <option value="FAILURE">Lỗi</option>
                                </select>
                            </div>
                        </div>
                        <div className="list-accesslog-filter-status">
                            <div className="list-accesslog-filter-status-label">
                                Phòng
                            </div>
                            <div className="list-accesslog-filter-status-select">
                                <select value={department_id} onChange={(e) => setDepartment_id(e.target.value)}>
                                    <option value={null}>Tất cả</option>
                                    {listDepartment.map((dep) => (
                                        <option key={dep._id} value={dep._id}>
                                            {dep.department_name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="list-accesslog-filter-button-search-container">
                            <div className="list-accesslog-filter-button-search" onClick={handleSearch}>
                                <FontAwesomeIcon icon={faSearch}/>
                            </div>
                            <div className="list-accesslog-filter-button-refresh" onClick={handleRefresh}>
                                <FontAwesomeIcon icon={faArrowsRotate}/>
                            </div>
                        </div>
                    </div>
                    <div className="list-accesslog">
                        
                        {
                            ListAccessLog && ListAccessLog.map((log, index) => (
                                <History key={log._id || index} accesslog={log} />
                            ))
                        }
                    </div>
                    <div className="list-accesslog-pagination">
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
    )
} 
export default ListAccessLog