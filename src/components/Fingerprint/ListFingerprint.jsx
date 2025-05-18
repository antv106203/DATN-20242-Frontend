import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Title from "../Header/Title";
import "./ListFingerprint.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import PopupRequestCreateFingerprint from "./PopupRequestCreateFingerprint";
import PopupCreateFingerprint from "./PopupCreateFingerprint";

const ListFingerprint = () => {

    const [loading, setLoading] = useState(false)
    const [showPopupRequestCreateFingerprint, setShowPopupRequestCreateFingerprint] = useState(false)
    const [showCreatePopup, setShowCreatePopup] = useState(false);
    const [selectedDepartment, setSelectedDepartment] = useState(null);
    const [selectedDevice, setSelectedDevice] = useState(null);

    const handleRequestComplete = (department, device) => {
        setSelectedDepartment(department);
        setSelectedDevice(device);
        setShowPopupRequestCreateFingerprint(false);
        setShowCreatePopup(true);
    };
    return (
        <>
            {showPopupRequestCreateFingerprint && <PopupRequestCreateFingerprint onClose={() => setShowPopupRequestCreateFingerprint(false)} onComplete={handleRequestComplete}/>}
            {showCreatePopup && 
                < PopupCreateFingerprint 
                    onClose={() => setShowCreatePopup(false)}
                    department={selectedDepartment}
                    device={selectedDevice}
                />
            
            }
            <div className="list-fingerprint-container">
                <Title name={"Danh sách vân tay"}/>
                <div className="list-fingerprint-container-content">
                    <div className="list-fingerprint-toolbar">
                        <div className="list-fingerprint-toolbar-create" onClick={() => setShowPopupRequestCreateFingerprint(true)}>
                            <div className="list-fingerprint-toolbar-create-icon">
                                <FontAwesomeIcon icon={faPlus} />
                            </div>
                            <div className="list-fingerprint-toolbar-create-label" >
                                Thêm vân tay
                            </div>
                        </div>
                        <div className="list-fingerprint-toolbar-filter">
                            <input type="text" placeholder="Tìm theo tên vân tay" />
    
                            <select>
                                <option value="">Chọn phòng</option>
                                <option value="A">Phòng A</option>
                                <option value="B">Phòng B</option>
                            </select>
                            
                            <select>
                                <option value="">Chọn nhân viên</option>
                                <option value="active">Hoạt động</option>
                                <option value="inactive">Không hoạt động</option>
                            </select>
                            
                            <button className="list-fingerprint-toolbar-filter-button">Lọc</button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default ListFingerprint;