/* eslint-disable no-unused-vars */
import { faArrowDown, faArrowUp, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Title from "../Header/Title";
import Floor from "./Floor";
import "./ListDepartment.css"
import Room from "./Room";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { fetchListDepartment } from "../../service/DepartmentAPI";

const listFloor = ["Tầng 1", "Tầng 2", "Tầng 3", "Tầng 4", "Tầng 5", "Tầng 6"]
const ListDepartment = () =>{
    const [search, setSearch] = useState(null);
    const [order, setOrder] = useState("asc")
    const [listRoom, setListRoom] = useState([]);
    const [floor, setFloor] = useState(null);
    const getListDepartment = async() =>{
        const result = await fetchListDepartment(search,order, floor);
        setListRoom(result.data);
        console.log(result);
    }

    const handleSelectFloor = (floorName) => {
        if (floor === floorName) {
            setFloor(null); // bỏ chọn nếu tầng đang được chọn
        } else {
            setFloor(floorName);
        }
    };

    useEffect(() =>{
        getListDepartment()
    }, [search, order, floor])

    return(
        <div className="listdepartment-container">
            <Title name={"Danh sách phòng ban"}/>
            <div className="listdepartment-container-content">
                <div className="listdepartment-content">
                    <div className="listdepartment-floor">
                        {listFloor.map((floor1, index) => (
                            <Floor 
                                key={index} 
                                name={floor1} 
                                isSelected={floor === floor1}
                                onSelect={() => handleSelectFloor(floor1)}
                            />
                        ))}
                    </div>
                    <div className="listdepartment-room">
                        <div className="listdepartment-room-filter">
                            <div className="listdepartment-room-filter-icon">
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </div>
                            <input 
                                type="text" 
                                placeholder="Tìm kiếm theo mã phòng hoặc tên phòng"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)} 
                            />
                            <div className="listdepartment-room-filter-order">
                                <FontAwesomeIcon 
                                    icon={faArrowUp}
                                    onClick={() => setOrder("asc")}
                                    className={order === "asc" ? "active" : ""} 
                                />
                                <FontAwesomeIcon 
                                    icon={faArrowDown}
                                    onClick={() => setOrder("desc")}
                                    className={order === "desc" ? "active" : ""} 
                                />
                            </div>
                        </div>
                        <div className="listdepartment-room-content">
                            {listRoom.map((room, index) => (
                            <Room key={room._id} name={room.department_code} />
                            ))}
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListDepartment;