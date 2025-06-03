import "./History.css"
import avataDefault from "../../assets/avatardefault.jpg"
import { formatAccessTime } from "../../utils/DateUtils"
/*
{
    "_id": "67de793cfa56d86f7135f3e7",
    "user_id": {
        "_id": "67d1d71ed672b847f8ff4432",
        "full_name": "Valverde1",
        "user_code": "NVMKT-02",
        "department_id": {
            "_id": "67cf07c32739a672b5291121",
            "department_name": "test",
            "department_code": "jfhkdjf"
        },
        "avatar": ""
    },
    "result": "SUCCESS",
    "access_time": "2025-03-22",
    "log_id": 1,
    "__v": 0
}
*/ 
const History = ({accesslog}) => {
    return(
        <div className={`history-container ${accesslog?.result === "success" ? "success-border" : "error-border"}`}>
            <div className="history-avatar">
                {
                    accesslog?.user_id ?
                    (<img src={accesslog?.user_id?.avatar}/>)
                    :
                    (<img src={avataDefault}/>)
                }
            </div>
            <div className="history-information">
                <div style={{color: "#0072c6"}}>
                    {accesslog?.user_id?.user_code}
                </div>
                <div>
                    {accesslog?.user_id?.full_name}
                </div>
                <div>
                    {accesslog?.user_id?.department_id?.department_name}
                </div>
                <div>
                    {formatAccessTime(accesslog?.access_time)}
                </div>
                {
                    accesslog?.result === "success" ?
                    (
                        <div style={{color: "#00a5a5"}}>
                            Thành công
                        </div>
                    ) :
                    (
                        <div style={{color: "#fc645c"}}>
                            Lỗi
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default History