import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Title from "../Header/Title";
import "./ListDevice.css";
import { faPlus, faWifi } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import PopupSearchingDevice from "./PopupSearchingDevice";
import { getUnregisteredDevices } from "../../service/DeviceAPI";
import PopupCreateDevice from "./PopupCreateDevice";

const ListDevice = () => {
    const [popupSearchingDevice, setPopupSearchingDevice] = useState(false);
    const [loadingPopupFindDevice, setLoadingPopupFindDevice] = useState(false);
    const [devices, setDevices] = useState([]);
    const [showConnectPopup,setShowConnectPopup] = useState(false);
    const [selectedDevice, setSelectedDevice] = useState(null);
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
                    </div>

                </div>
            </div>
        </>
    )
}
export default ListDevice;