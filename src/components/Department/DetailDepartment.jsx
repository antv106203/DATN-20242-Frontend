import "./DetailDepartment.css"
import Title from "../Header/Title"
const DetailDepartment = () => {
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
                                    <select type="text">
                                        <option />
                                    </select>
                                </div>
                            </div>
                            <div className="detail-department-name">
                                <div className="detail-department-name-label">
                                    Tên phòng
                                </div>
                                <div className="detail-department-name-input">
                                    <input type="text" />
                                </div>
                            </div>
                            <div className="detail-department-name">
                                <div className="detail-department-name-label">
                                    Mã phòng
                                </div>
                                <div className="detail-department-name-input">
                                    <input type="text" />
                                </div>
                            </div>
                            <div className="detail-department-name">
                                <div className="detail-department-name-label">
                                    Tổng số nhân viên
                                </div>
                                <div className="detail-department-name-input">
                                    <input type="text" />
                                </div>
                            </div>
                            <div className="detail-department-name">
                                <div className="detail-department-name-label">
                                    Ngày tạo
                                </div>
                                <div className="detail-department-name-input">
                                    <input type="text" />
                                </div>
                            </div>
                            <div className="detail-department-name">
                                <div className="detail-department-name-label">
                                    Ngày cập nhật gần nhất
                                </div>
                                <div className="detail-department-name-input">
                                    <input type="text" />
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
                                        <input placeholder="Tìm kiếm theo tên nhân viên"/>
                                    </div>
                                </div>
                                <div className="detail-department-filter-user-code">
                                    <div className="detail-department-filter-user-code-input">
                                        <input placeholder="Tìm kiếm theo mã nhân viên"/>
                                    </div>
                                </div>
                            </div>
                            <div className="detail-department-list-staff-table">
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailDepartment