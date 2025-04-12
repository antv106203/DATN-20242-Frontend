/* eslint-disable no-unused-vars */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Title from "../Header/Title"
import "./ListAccessLog.css"
import { faArrowLeft, faArrowRight, faArrowsRotate, faBackward, faForward, faSearch } from "@fortawesome/free-solid-svg-icons"
import History from "./History"
import IconPagination from "../Staff/IconPagination"
const acc1 = 
{
    "_id": "67de793cfa56d86f7135f3e7",
    "user_id": {
        "_id": "67fa98627e9ba7a8ed409d9c",
        "full_name": "Nguyễn Đình Tùng",
        "user_code": "NVMKT-05",
        "avatar": "https://res.cloudinary.com/dze1xo2d8/image/upload/v1744476264/avatars/qosqjn9rkuzgiqgjjx8l.jpg",
        "department_id": {
            "_id": "67cf088f2739a672b529112c",
            "department_name": "Kế toán",
            "department_code": "MKT02"
        }
    },
    "result": "SUCCESS",
    "access_time": "2025-03-22T08:47:56.404Z",
    "log_id": 1,
    "__v": 0
}

const ListAccessLog = () => {
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
                                <input type="date" lang="vi-VN" />
                            </div>
                        </div>
                        <div className="list-accesslog-filter-to">
                            <div className="list-accesslog-filter-to-label">
                                Đến ngày
                            </div>
                            <div className="list-accesslog-filter-to-input">
                                <input type="date" lang="vi" />
                            </div>
                        </div>
                        <div className="list-accesslog-filter-status">
                            <div className="list-accesslog-filter-status-label">
                                Trạng thái
                            </div>
                            <div className="list-accesslog-filter-status-select">
                                <select>
                                    <option value="">Tất cả</option>
                                    <option value="success">Thành công</option>
                                    <option value="error">Lỗi</option>
                                </select>
                            </div>
                        </div>
                        <div className="list-accesslog-filter-button-search-container">
                            <div className="list-accesslog-filter-button-search">
                                <FontAwesomeIcon icon={faSearch}/>
                            </div>
                            <div className="list-accesslog-filter-button-refresh">
                                <FontAwesomeIcon icon={faArrowsRotate}/>
                            </div>
                        </div>
                    </div>
                    <div className="list-accesslog">
                        <History accesslog={acc1}/>
                        <History accesslog={acc1}/>
                        <History accesslog={acc1}/>
                        <History accesslog={acc1}/>
                        <History accesslog={acc1}/>
                        <History accesslog={acc1}/>
                        <History accesslog={acc1}/>
                        <History accesslog={acc1}/>
                    </div>
                    <div className="list-accesslog-pagination">
                        <div className="pagination-left">
                            <div>
                                Trang: 
                            </div>
                            <div className="pagination-left-current-page">
                                1
                            </div>
                            <div>
                                /
                            </div>
                            <div>
                                1
                            </div>
                        </div>
                        <div className="pagination-right">
                            <IconPagination icon={faBackward} skip={"right"}/>
                            <IconPagination icon={faArrowLeft} skip={"right"}/>
                            <div className="pagination-right-current-page">
                                1
                            </div>
                            <IconPagination icon={faArrowRight} skip={"left"}/>
                            <IconPagination icon={faForward} skip={"left"}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
} 
export default ListAccessLog